export default function Fence() {
  return (
    <group>
      {/* Left Fence */}
      <mesh position={[-6, 0.6, -14]}>
        <boxGeometry args={[0.2, 1.2, 12]} />
        <meshStandardMaterial color="#8B5A2B" />
      </mesh>

      {/* Right Fence */}
      <mesh position={[6, 0.6, -14]}>
        <boxGeometry args={[0.2, 1.2, 12]} />
        <meshStandardMaterial color="#8B5A2B" />
      </mesh>

      {/* Front Fence */}
      <mesh position={[0, 0.6, -20]}>
        <boxGeometry args={[12, 1.2, 0.2]} />
        <meshStandardMaterial color="#8B5A2B" />
      </mesh>
    </group>
  );
}