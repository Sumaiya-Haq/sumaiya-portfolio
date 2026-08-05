import React from 'react';

export const PineTree = ({ position = [0, 0, 0], scale = 1 }) => {
  return (
    <group position={position} scale={scale}>
      {/* Tree Trunk */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.25, 0.8, 6]} />
        <meshStandardMaterial color="#65300d" roughness={0.9} />
      </mesh>
      {/* Lower Cone */}
      <mesh position={[0, 1.0, 0]} castShadow>
        <coneGeometry args={[0.9, 1.2, 7]} />
        <meshStandardMaterial color="#15803d" roughness={0.6} flatShading />
      </mesh>
      {/* Middle Cone */}
      <mesh position={[0, 1.6, 0]} castShadow>
        <coneGeometry args={[0.7, 1.0, 7]} />
        <meshStandardMaterial color="#16a34a" roughness={0.6} flatShading />
      </mesh>
      {/* Top Cone */}
      <mesh position={[0, 2.1, 0]} castShadow>
        <coneGeometry args={[0.45, 0.8, 7]} />
        <meshStandardMaterial color="#22c55e" roughness={0.6} flatShading />
      </mesh>
    </group>
  );
};

export const BubbleTree = ({ position = [0, 0, 0], scale = 1 }) => {
  return (
    <group position={position} scale={scale}>
      {/* Tree Trunk */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.2, 1.0, 6]} />
        <meshStandardMaterial color="#65300d" roughness={0.9} />
      </mesh>
      {/* Spherical Crown */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <dodecahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial color="#22c55e" roughness={0.5} flatShading />
      </mesh>
      <mesh position={[0.2, 1.7, 0.1]} scale={0.7} castShadow>
        <dodecahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial color="#4ade80" roughness={0.5} flatShading />
      </mesh>
    </group>
  );
};

export default { PineTree, BubbleTree };
