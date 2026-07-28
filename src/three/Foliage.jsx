import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Tree = ({ position = [0, 0, 0], scale = 1 }) => {
  const leavesRef = useRef();

  useFrame((state) => {
    if (leavesRef.current) {
      leavesRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5 + position[0]) * 0.03;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Trunk */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.45, 3, 8]} />
        <meshStandardMaterial color="#1E293B" roughness={0.9} />
      </mesh>
      {/* Leaves Cluster */}
      <group ref={leavesRef} position={[0, 3.8, 0]}>
        <mesh position={[0, 0, 0]} castShadow>
          <coneGeometry args={[2.2, 3.5, 7]} />
          <meshStandardMaterial color="#059669" roughness={0.7} flatShading />
        </mesh>
        <mesh position={[0, 1.2, 0]} castShadow>
          <coneGeometry args={[1.7, 3, 7]} />
          <meshStandardMaterial color="#10B981" roughness={0.7} flatShading />
        </mesh>
      </group>
    </group>
  );
};

export const Foliage = () => {
  return (
    <group>
      {/* Village Trees */}
      <Tree position={[-18, 0, -10]} scale={1.3} />
      <Tree position={[-8, 0, -12]} scale={1.1} />
      <Tree position={[-16, 0, 2]} scale={1.4} />
      <Tree position={[12, 0, -8]} scale={1.2} />
      <Tree position={[18, 0, -14]} scale={1.5} />
      <Tree position={[15, 0, 4]} scale={1.1} />

      {/* Cyber Village Park Bench */}
      <group position={[6, 0, 3]} rotation={[0, -Math.PI / 4, 0]}>
        {/* Bench Seat */}
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[2.5, 0.15, 0.8]} />
          <meshStandardMaterial color="#475569" roughness={0.5} />
        </mesh>
        {/* Bench Backrest */}
        <mesh position={[0, 1.2, -0.35]} rotation={[0.1, 0, 0]} castShadow>
          <boxGeometry args={[2.5, 0.7, 0.1]} />
          <meshStandardMaterial color="#334155" roughness={0.5} />
        </mesh>
        {/* Legs */}
        <mesh position={[-1, 0.3, 0]} castShadow>
          <boxGeometry args={[0.15, 0.6, 0.7]} />
          <meshStandardMaterial color="#0F172A" />
        </mesh>
        <mesh position={[1, 0.3, 0]} castShadow>
          <boxGeometry args={[0.15, 0.6, 0.7]} />
          <meshStandardMaterial color="#0F172A" />
        </mesh>
      </group>

      {/* Neon Flowers */}
      {[-5, 4, 8, -10, 11].map((x, i) => (
        <mesh key={i} position={[x, 0.2, (i % 2 === 0 ? 5 : 8)]}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#22D3EE' : '#7C3AED'}
            emissive={i % 2 === 0 ? '#22D3EE' : '#7C3AED'}
            emissiveIntensity={1.5}
          />
        </mesh>
      ))}
    </group>
  );
};

export default Foliage;
