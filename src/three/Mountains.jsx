import React from 'react';
import * as THREE from 'three';

export const Mountains = () => {
  return (
    <group position={[0, -2, -35]}>
      {/* Background Mountain Ridge 1 */}
      <mesh position={[-25, 6, -10]} rotation={[0, 0.4, 0]}>
        <coneGeometry args={[22, 28, 5]} />
        <meshStandardMaterial color="#0B132B" roughness={0.9} flatShading />
      </mesh>

      {/* Center Mountain Peak */}
      <mesh position={[0, 10, -15]}>
        <coneGeometry args={[30, 35, 6]} />
        <meshStandardMaterial color="#090E23" roughness={0.85} flatShading />
      </mesh>

      {/* Right Mountain Peak */}
      <mesh position={[28, 8, -8]} rotation={[0, -0.3, 0]}>
        <coneGeometry args={[25, 30, 5]} />
        <meshStandardMaterial color="#0F172A" roughness={0.9} flatShading />
      </mesh>
    </group>
  );
};

export default Mountains;
