export default function Bench() {
  return (
    <group position={[9, 0.45, -6.5]} rotation={[0, -0.35, 0]}>
      {/* Seat */}
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[2.5, 0.18, 0.7]} />
        <meshStandardMaterial color="#8B5A2B" />
      </mesh>

      {/* Back Rest */}
      <mesh position={[0, 0.95, -0.28]}>
        <boxGeometry args={[2.5, 0.18, 0.18]} />
        <meshStandardMaterial color="#8B5A2B" />
      </mesh>

      {/* Left Back Leg */}
      <mesh position={[-1.05, 0.4, -0.28]}>
        <boxGeometry args={[0.12, 1.0, 0.12]} />
        <meshStandardMaterial color="#5C4033" />
      </mesh>

      {/* Right Back Leg */}
      <mesh position={[1.05, 0.4, -0.28]}>
        <boxGeometry args={[0.12, 1.0, 0.12]} />
        <meshStandardMaterial color="#5C4033" />
      </mesh>

      {/* Front Left Leg */}
      <mesh position={[-1.05, 0.05, 0.25]}>
        <boxGeometry args={[0.12, 0.7, 0.12]} />
        <meshStandardMaterial color="#5C4033" />
      </mesh>

      {/* Front Right Leg */}
      <mesh position={[1.05, 0.05, 0.25]}>
        <boxGeometry args={[0.12, 0.7, 0.12]} />
        <meshStandardMaterial color="#5C4033" />
      </mesh>
    </group>
  );
}