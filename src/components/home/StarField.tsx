import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

interface StarFieldProps {
  count?: number;
  depth?: number;
  speed?: number;
  size?: number;
}

export default function StarField({
  count = 1800,
  depth = 80,
  speed = 0.02,
  size = 0.06,
}: StarFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport, mouse } = useThree();
  const smoothed = useRef({ x: 0, y: 0 });

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3]     = (Math.random() - 0.5) * viewport.width * 4;
      positions[i3 + 1] = (Math.random() - 0.5) * viewport.height * 4;
      positions[i3 + 2] = (Math.random() - 0.5) * depth;

      const warmth = 0.92 + Math.random() * 0.08;
      colors[i3]     = warmth;
      colors[i3 + 1] = warmth * 0.98;
      colors[i3 + 2] = warmth * 0.95;

      sizes[i] = Math.random() < 0.9
        ? Math.random() * 0.5 + 0.3
        : Math.random() * 1.2 + 0.6;
    }

    return { positions, colors, sizes };
  }, [count, depth, viewport.width, viewport.height]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const dt = Math.min(delta, 0.1);
    smoothed.current.x += (mouse.x - smoothed.current.x) * 0.03;
    smoothed.current.y += (mouse.y - smoothed.current.y) * 0.03;
    pointsRef.current.rotation.y  =  smoothed.current.x * 0.12;
    pointsRef.current.rotation.x  = -smoothed.current.y * 0.08;
    pointsRef.current.rotation.z += dt * speed * 0.5;
    pointsRef.current.position.z  = Math.sin(performance.now() * 0.00005) * 2;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
        <bufferAttribute attach="attributes-size"     args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
