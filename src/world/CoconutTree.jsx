export default function CoconutTree({ position }) {
  return (
    <group position={position}>

      {/* Trunk */}

      <mesh position={[0,2.5,0]} castShadow>
        <cylinderGeometry args={[0.25,0.4,5]} />
        <meshStandardMaterial color="#7A5230" />
      </mesh>

      {/* Leaves */}

      <mesh position={[0,5.2,0]}>
        <sphereGeometry args={[1.8,8,8]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>

    </group>
  );
}