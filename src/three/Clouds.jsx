import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const CloudCluster = ({ position, scale = 1, speed = 0.05 }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.position.x += delta * speed;
      if (groupRef.current.position.x > 50) {
        groupRef.current.position.x = -50;
      }
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <mesh position={[0, 0, 0]} castShadow>
        <dodecahedronGeometry args={[2, 1]} />
        <meshStandardMaterial color="#334155" transparent opacity={0.65} roughness={0.9} />
      </mesh>
      <mesh position={[1.5, 0.5, 0.5]} castShadow>
        <dodecahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#1E293B" transparent opacity={0.7} roughness={0.9} />
      </mesh>
      <mesh position={[-1.4, -0.3, 0.2]} castShadow>
        <dodecahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial color="#475569" transparent opacity={0.6} roughness={0.9} />
      </mesh>
    </group>
  );
};

export const Clouds = () => {
  return (
    <group>
      <CloudCluster position={[-30, 18, -15]} scale={1.4} speed={0.4} />
      <CloudCluster position={[-10, 22, -22]} scale={1.8} speed={0.25} />
      <CloudCluster position={[15, 16, -18]} scale={1.2} speed={0.3} />
      <CloudCluster position={[35, 20, -25]} scale={1.6} speed={0.2} />
    </group>
  );
};

export default Clouds;
