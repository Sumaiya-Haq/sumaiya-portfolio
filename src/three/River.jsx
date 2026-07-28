import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const River = () => {
  const riverRef = useRef();

  useFrame((state, delta) => {
    if (riverRef.current && riverRef.current.material) {
      riverRef.current.material.roughness = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group position={[0, -0.4, 2]}>
      {/* Flowing Water River Bed */}
      <mesh ref={riverRef} rotation={[-Math.PI / 2, 0, 0.1]} receiveShadow>
        <planeGeometry args={[14, 45, 32, 32]} />
        <meshStandardMaterial
          color="#0284C7"
          emissive="#0369A1"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
};

export default River;
