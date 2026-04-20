import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import Scene from './Scene';

// Isolated so lazy() can code-split the Three.js bundle cleanly
export default function CanvasScene() {
  const [dpr, setDpr] = useState(1.25);

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)');
    const sync = () => {
      if (coarse.matches) {
        setDpr(1);
      } else {
        setDpr(Math.min(window.devicePixelRatio || 1, 1.75));
      }
    };
    sync();
    coarse.addEventListener('change', sync);
    window.addEventListener('resize', sync);
    return () => {
      coarse.removeEventListener('change', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  return (
    <Canvas
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      dpr={dpr}
      resize={{ scroll: false, debounce: { scroll: 0, resize: 150 } }}
      camera={{ position: [0, 0, 1], fov: 75, near: 0.1, far: 200 }}
    >
      <color attach="background" args={['#060608']} />
      <Scene />
    </Canvas>
  );
}
