import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

// Isolated so lazy() can code-split the Three.js bundle cleanly
export default function CanvasScene() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 1], fov: 75, near: 0.1, far: 200 }}
    >
      <color attach="background" args={['#060608']} />
      <Scene />
    </Canvas>
  );
}
