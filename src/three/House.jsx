import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const House = ({ position = [-12, 0, -5] }) => {
  const windowGlowRef = useRef();

  useFrame((state) => {
    if (windowGlowRef.current) {
      windowGlowRef.current.intensity = 1.8 + Math.sin(state.clock.elapsedTime * 3) * 0.4;
    }
  });

  return (
    <group position={position}>
      {/* Main Base Structure */}
      <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[7, 5, 6]} />
        <meshStandardMaterial color="#0F172A" roughness={0.6} />
      </mesh>

      {/* Roof Roof Structure */}
      <mesh position={[0, 6, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[5.5, 3.5, 4]} />
        <meshStandardMaterial color="#7C3AED" roughness={0.4} metalness={0.2} />
      </mesh>

      {/* Door Frame */}
      <mesh position={[0, 1.25, 3.01]} castShadow>
        <boxGeometry args={[1.5, 2.5, 0.1]} />
        <meshStandardMaterial color="#334155" roughness={0.5} />
      </mesh>

      {/* Glowing Cyber Window Left */}
      <mesh position={[-2, 3, 3.01]}>
        <planeGeometry args={[1.4, 1.4]} />
        <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={1.5} />
      </mesh>

      {/* Glowing Cyber Window Right */}
      <mesh position={[2, 3, 3.01]}>
        <planeGeometry args={[1.4, 1.4]} />
        <meshStandardMaterial color="#A78BFA" emissive="#A78BFA" emissiveIntensity={1.5} />
      </mesh>

      <pointLight ref={windowGlowRef} position={[0, 3, 3.5]} color="#22D3EE" intensity={2} distance={10} />

      {/* Chimney */}
      <mesh position={[2, 6.5, -1]} castShadow>
        <boxGeometry args={[0.8, 2.5, 0.8]} />
        <meshStandardMaterial color="#1E293B" />
      </mesh>
    </group>
  );
};

export default House;
