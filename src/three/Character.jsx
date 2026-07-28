import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const Character = ({ position = [5.5, 0.65, 3] }) => {
  const headRef = useRef();

  useFrame((state) => {
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.15;
    }
  });

  return (
    <group position={position} rotation={[0, -Math.PI / 4, 0]}>
      {/* Sitting Body Torso */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[0.5, 0.7, 0.4]} />
        <meshStandardMaterial color="#7C3AED" roughness={0.5} />
      </mesh>

      {/* Legs (Seated) */}
      <mesh position={[0, 0.25, 0.3]} castShadow>
        <boxGeometry args={[0.45, 0.18, 0.5]} />
        <meshStandardMaterial color="#1E293B" roughness={0.7} />
      </mesh>

      {/* Character Head */}
      <mesh ref={headRef} position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[0.26, 16, 16]} />
        <meshStandardMaterial color="#F87171" roughness={0.6} />
      </mesh>

      {/* Holographic AI Laptop / Tablet */}
      <mesh position={[0, 0.75, 0.35]} rotation={[-0.4, 0, 0]}>
        <boxGeometry args={[0.4, 0.04, 0.3]} />
        <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={1.8} />
      </mesh>
      <pointLight position={[0, 0.8, 0.4]} color="#22D3EE" intensity={1.2} distance={3} />
    </group>
  );
};

export default Character;
