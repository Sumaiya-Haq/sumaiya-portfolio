export default function MainHouse() {
  return (
    <group position={[0, 2, -20]}>

      {/* Wall */}

      <mesh castShadow>
        <boxGeometry args={[8, 4, 8]} />
        <meshStandardMaterial color="#D9C7A5" />
      </mesh>

      {/* Roof */}

      <mesh
        position={[0, 3.3, 0]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
      >
        <coneGeometry args={[6.5, 2.5, 4]} />
        <meshStandardMaterial color="#B22222" />
      </mesh>

      {/* Door */}

      <mesh position={[0, -0.7, 4.02]}>
        <boxGeometry args={[1.5, 2.4, .15]} />
        <meshStandardMaterial color="#5C4033" />
      </mesh>

      {/* Left Window */}

      <mesh position={[-2.3, .4, 4.02]}>
        <boxGeometry args={[1.2,1,.15]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>

      {/* Right Window */}

      <mesh position={[2.3,.4,4.02]}>
        <boxGeometry args={[1.2,1,.15]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>

    </group>
  );
}