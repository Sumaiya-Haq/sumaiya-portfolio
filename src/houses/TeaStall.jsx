export default function TeaStall() {
  return (
    <group position={[12, 1.15, -8]}>

      {/* Floor */}
      <mesh position={[0, -1.15, 0]} receiveShadow>
        <boxGeometry args={[5, 0.15, 4]} />
        <meshStandardMaterial color="#8B6B45" />
      </mesh>

      {/* Shop Body */}
      <mesh castShadow>
        <boxGeometry args={[4, 2.2, 3]} />
        <meshStandardMaterial color="#A8794A" />
      </mesh>

      {/* Front Counter */}
      <mesh position={[0, -0.35, 1.52]}>
        <boxGeometry args={[3.2, 0.8, 0.18]} />
        <meshStandardMaterial color="#5C4033" />
      </mesh>

      {/* Left Pole */}
      <mesh position={[-1.75, 1.2, 1.25]}>
        <boxGeometry args={[0.12, 2.3, 0.12]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Right Pole */}
      <mesh position={[1.75, 1.2, 1.25]}>
        <boxGeometry args={[0.12, 2.3, 0.12]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Back Left Pole */}
      <mesh position={[-1.75, 1.2, -1.25]}>
        <boxGeometry args={[0.12, 2.3, 0.12]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Back Right Pole */}
      <mesh position={[1.75, 1.2, -1.25]}>
        <boxGeometry args={[0.12, 2.3, 0.12]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Roof */}
      <mesh
        position={[0, 2.45, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <coneGeometry args={[3.2, 0.9, 4]} />
        <meshStandardMaterial color="#4F4F4F" />
      </mesh>

    </group>
  );
}