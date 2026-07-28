import React from 'react';

export const Bridge = ({ position = [0, 0, 4] }) => {
  return (
    <group position={position}>
      {/* Bridge Main Deck Arch */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[16, 0.5, 5]} />
        <meshStandardMaterial color="#334155" roughness={0.7} />
      </mesh>

      {/* Side Handrails */}
      <mesh position={[0, 1.2, 2.3]} castShadow>
        <boxGeometry args={[16, 0.4, 0.3]} />
        <meshStandardMaterial color="#475569" roughness={0.6} />
      </mesh>
      <mesh position={[0, 1.2, -2.3]} castShadow>
        <boxGeometry args={[16, 0.4, 0.3]} />
        <meshStandardMaterial color="#475569" roughness={0.6} />
      </mesh>

      {/* Bridge Posts */}
      {[-7, -3.5, 0, 3.5, 7].map((x, i) => (
        <group key={i}>
          <mesh position={[x, 0.8, 2.3]} castShadow>
            <cylinderGeometry args={[0.15, 0.15, 0.8, 8]} />
            <meshStandardMaterial color="#1E293B" />
          </mesh>
          <mesh position={[x, 0.8, -2.3]} castShadow>
            <cylinderGeometry args={[0.15, 0.15, 0.8, 8]} />
            <meshStandardMaterial color="#1E293B" />
          </mesh>
        </group>
      ))}

      {/* Glowing Lanterns at Bridge Entrances */}
      <mesh position={[-7.5, 1.6, 2.3]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={2} />
      </mesh>
      <pointLight position={[-7.5, 1.6, 2.3]} intensity={1.5} color="#F59E0B" distance={8} />

      <mesh position={[7.5, 1.6, 2.3]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={2} />
      </mesh>
      <pointLight position={[7.5, 1.6, 2.3]} intensity={1.5} color="#22D3EE" distance={8} />
    </group>
  );
};

export default Bridge;
