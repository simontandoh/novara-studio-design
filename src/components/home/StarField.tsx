import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

/** Desktop / mouse — not primary touch; avoids scroll-driven pointer jitter on phones. */
function useFinePointer() {
  const [fine, setFine] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : true,
  );

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const sync = () => setFine(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return fine;
}

interface StarFieldProps {
  count?: number;
  depth?: number;
  speed?: number;
  size?: number;
}

/** Soft radial disc for pointsMaterial.map — avoids square GL_POINT sprites. */
function createStarTexture(): THREE.CanvasTexture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('StarField: 2D canvas context unavailable');
  }
  const cx = size / 2;
  const grad = ctx.createRadialGradient(cx, cx, 0, cx, cx, cx);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.12, 'rgba(255,255,255,0.92)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  grad.addColorStop(0.62, 'rgba(255,255,255,0.2)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const patchPointsShader = (shader: THREE.WebGLProgramParametersWithUniforms) => {
  shader.vertexShader = shader.vertexShader
    .replace(
      '#include <common>',
      `#include <common>
attribute float opacity;
varying float vStarOpacity;`,
    )
    .replace(
      '#include <color_vertex>',
      `#include <color_vertex>
vStarOpacity = opacity;`,
    );

  shader.fragmentShader = shader.fragmentShader
    .replace(
      '#include <common>',
      `#include <common>
varying float vStarOpacity;`,
    )
    .replace(
      '#include <color_fragment>',
      `#include <color_fragment>
diffuseColor.a *= vStarOpacity;`,
    );
};

export default function StarField({
  count = 1800,
  depth = 80,
  speed = 0.02,
  size = 0.06,
}: StarFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport, mouse } = useThree();
  const smoothed = useRef({ x: 0, y: 0 });
  const finePointer = useFinePointer();

  const twinkleRef = useRef<{
    baseOpacity: Float32Array;
    phase: Float32Array;
    twinkleSpeed: Float32Array;
  } | null>(null);

  const starTexture = useMemo(() => createStarTexture(), []);

  useEffect(() => {
    return () => {
      starTexture.dispose();
    };
  }, [starTexture]);

  const onBeforeCompile = useMemo(
    () =>
      function (this: THREE.PointsMaterial, shader: THREE.WebGLProgramParametersWithUniforms) {
        this.customProgramCacheKey = () => 'novara-starfield-twinkle-v1';
        patchPointsShader(shader);
      },
    [],
  );

  const { positions, colors, sizes, opacityArray } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const baseOpacity = new Float32Array(count);
    const phase = new Float32Array(count);
    const twinkleSpeed = new Float32Array(count);
    const opacityArray = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * viewport.width * 4;
      positions[i3 + 1] = (Math.random() - 0.5) * viewport.height * 4;
      positions[i3 + 2] = (Math.random() - 0.5) * depth;

      const warmth = 0.97 + Math.random() * 0.05;
      colors[i3] = Math.min(1.15, warmth * 1.06);
      colors[i3 + 1] = Math.min(1.12, warmth * 1.02);
      colors[i3 + 2] = Math.min(1.1, warmth * 0.99);

      sizes[i] =
        Math.random() < 0.9 ? Math.random() * 0.5 + 0.3 : Math.random() * 1.2 + 0.6;

      baseOpacity[i] = 0.4 + Math.random() * 0.6;
      phase[i] = Math.random() * Math.PI * 2;
      twinkleSpeed[i] = 0.3 + Math.random() * 0.5;
      opacityArray[i] = baseOpacity[i];
    }

    twinkleRef.current = { baseOpacity, phase, twinkleSpeed };

    return { positions, colors, sizes, opacityArray };
  }, [count, depth, viewport.width, viewport.height]);

  useFrame(({ clock }, delta) => {
    if (!pointsRef.current) return;
    const dt = Math.min(delta, 0.1);
    if (finePointer) {
      smoothed.current.x += (mouse.x - smoothed.current.x) * 0.03;
      smoothed.current.y += (mouse.y - smoothed.current.y) * 0.03;
    } else {
      smoothed.current.x = 0;
      smoothed.current.y = 0;
    }
    pointsRef.current.rotation.y = smoothed.current.x * 0.12;
    pointsRef.current.rotation.x = -smoothed.current.y * 0.08;
    pointsRef.current.rotation.z += dt * speed * 0.5;
    pointsRef.current.position.z = Math.sin(performance.now() * 0.00005) * 2;

    const tw = twinkleRef.current;
    const opacityAttr = pointsRef.current.geometry.attributes.opacity as
      | THREE.BufferAttribute
      | undefined;
    if (tw && opacityAttr?.array) {
      const arr = opacityAttr.array as Float32Array;
      const { baseOpacity, phase, twinkleSpeed } = tw;
      const t = clock.getElapsedTime();
      for (let i = 0; i < count; i++) {
        arr[i] =
          baseOpacity[i] * (0.82 + 0.18 * Math.sin(t * twinkleSpeed[i] + phase[i]));
      }
      opacityAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-opacity" args={[opacityArray, 1]} />
      </bufferGeometry>
      <pointsMaterial
        map={starTexture}
        size={size}
        sizeAttenuation
        vertexColors
        transparent
        opacity={1.25}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        onBeforeCompile={onBeforeCompile}
      />
    </points>
  );
}
