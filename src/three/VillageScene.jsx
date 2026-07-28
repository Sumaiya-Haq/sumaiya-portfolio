import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Moon from './Moon';
import Stars from './Stars';
import Clouds from './Clouds';
import Mountains from './Mountains';
import River from './River';
import Bridge from './Bridge';
import House from './House';
import Foliage from './Foliage';
import Fireflies from './Fireflies';
import Character from './Character';

export const VillageScene = () => {
  const { camera, mouse } = useThree();
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Smooth camera mouse parallax interaction
    const targetX = mouse.x * 2.5;
    const targetY = mouse.y * 1.5 + 8;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, delta * 2);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, delta * 2);
    camera.lookAt(0, 3, 0);
  });

  return (
    <group ref={groupRef}>
      {/* Fog for Atmospheric Depth */}
      <fog attach="fog" args={['#050816', 20, 95]} />

      {/* Sky & Space Backdrop Elements */}
      <Stars count={750} />
      <Moon position={[20, 18, -30]} />
      <Clouds />
      <Mountains />

      {/* Village Ground Base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[90, 90, 64, 64]} />
        <meshStandardMaterial color="#0B132B" roughness={0.95} metalness={0.05} />
      </mesh>

      {/* Village Architectural & Natural Elements */}
      <House position={[-14, 0, -4]} />
      <River />
      <Bridge position={[0, 0, 3]} />
      <Foliage />
      <Character position={[6, 0.65, 3]} />
      <Fireflies count={80} />
    </group>
  );
};

export default VillageScene;
