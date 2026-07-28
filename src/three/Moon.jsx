import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Moon = ({ position = [18, 16, -25] }) => {
  const moonRef = useRef();
  const glowRef = useRef();

  useFrame((state, delta) => {
    if (moonRef.current) {
      moonRef.current.rotation.y += delta * 0.05;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.04);
    }
  });

  return (
    <group position={position}>
      {/* Core Moon Sphere */}
      <mesh ref={moonRef} castShadow>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial
          color="#F8FAFC"
          emissive="#38BDF8"
          emissiveIntensity={0.35}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Atmospheric Moon Outer Glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[4.8, 32, 32]} />
        <meshBasicMaterial
          color="#22D3EE"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

export default Moon;
