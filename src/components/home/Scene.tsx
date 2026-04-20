import StarField from './StarField';

export default function Scene() {
  return (
    <>
      <StarField count={600}  depth={30}  speed={0.035} size={0.08} />
      <StarField count={1200} depth={120} speed={0.01}  size={0.04} />
      <mesh position={[0, 0, -50]}>
        <planeGeometry args={[200, 200]} />
        <meshBasicMaterial color="#0a0a12" transparent opacity={0.35} depthWrite={false} />
      </mesh>
    </>
  );
}
