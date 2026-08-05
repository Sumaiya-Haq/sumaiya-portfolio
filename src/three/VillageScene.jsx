import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Moon from './Moon';
import Stars from './Stars';
import Clouds from './Clouds';
import Mountains from './Mountains';
import River from './River';
import Bridge from './Bridge';
import Foliage from './Foliage';
import Fireflies from './Fireflies';
import Character from './Character';
import VillageBuilding from './VillageBuilding';

export const VillageScene = ({ onSelectBuilding, targetCameraPos, isNightMode = true }) => {
  const { camera, mouse } = useThree();
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Smooth camera position lerping towards target building or mouse parallax
    if (targetCameraPos) {
      const targetVec = new THREE.Vector3(
        targetCameraPos[0],
        targetCameraPos[1] + 4,
        targetCameraPos[2] + 12
      );
      camera.position.lerp(targetVec, delta * 3);
      camera.lookAt(targetCameraPos[0], targetCameraPos[1] + 2, targetCameraPos[2]);
    } else {
      // Default interactive camera mouse parallax
      const targetX = mouse.x * 3;
      const targetY = mouse.y * 2 + 8;
      const defaultCam = new THREE.Vector3(targetX, targetY, 22);

      camera.position.lerp(defaultCam, delta * 2);
      camera.lookAt(0, 3, 0);
    }
  });

  const villageBuildings = [
    {
      id: 'main-house',
      type: 'main-house',
      position: [-12, 0, -4],
      rotation: [0, 0.4, 0],
      title: 'About Me',
      subtitle: 'আমার পরিচয় ও বায়ো',
      bengaliTag: 'প্রধান বাড়ি',
      icon: '🏠',
      accentColor: '#38BDF8'
    },
    {
      id: 'tea-stall',
      type: 'tea-stall',
      position: [12, 0, -2],
      rotation: [0, -0.4, 0],
      title: 'Tech Skills',
      subtitle: 'দক্ষতা ও টুলস',
      bengaliTag: 'চায়ের দোকান',
      icon: '☕',
      accentColor: '#F59E0B'
    },
    {
      id: 'academy',
      type: 'academy',
      position: [-11, 0, 10],
      rotation: [0, 0.6, 0],
      title: 'Education',
      subtitle: 'শিক্ষা ও গবেষণা',
      bengaliTag: 'পাঠশালা',
      icon: '🎓',
      accentColor: '#818CF8'
    },
    {
      id: 'workshop',
      type: 'workshop',
      position: [13, 0, 12],
      rotation: [0, -0.5, 0],
      title: 'Projects',
      subtitle: 'প্রজেক্ট ডেমো',
      bengaliTag: 'ওয়ার্কশপ',
      icon: '🚀',
      accentColor: '#10B981'
    },
    {
      id: 'guild',
      type: 'guild',
      position: [0, 0, -16],
      rotation: [0, 0, 0],
      title: 'Experience',
      subtitle: 'অভিজ্ঞতা',
      bengaliTag: 'গিল্ড হল',
      icon: '⚔️',
      accentColor: '#F43F5E'
    },
    {
      id: 'post-box',
      type: 'post-box',
      position: [0, 0, 14],
      rotation: [0, 0, 0],
      title: 'Contact',
      subtitle: 'যোগাযোগের তোরণ',
      bengaliTag: 'পোস্ট বক্স',
      icon: '📮',
      accentColor: '#A855F7'
    }
  ];

  return (
    <group ref={groupRef}>
      {/* Fog for Depth Atmosphere */}
      <fog attach="fog" args={[isNightMode ? '#050816' : '#87CEEB', 20, 95]} />

      {/* Ambient & Directional Lighting */}
      <ambientLight intensity={isNightMode ? 0.35 : 0.95} />
      <directionalLight
        position={[25, 30, 20]}
        intensity={isNightMode ? 0.8 : 1.8}
        color={isNightMode ? '#93C5FD' : '#FFFBEB'}
        castShadow
      />

      {/* Sky & Space Backdrop Elements */}
      {isNightMode && <Stars count={850} />}
      {isNightMode ? (
        <Moon position={[20, 18, -30]} />
      ) : (
        <mesh position={[20, 18, -30]}>
          <sphereGeometry args={[4, 32, 32]} />
          <meshBasicMaterial color="#FDE047" />
        </mesh>
      )}
      <Clouds />
      <Mountains />

      {/* Village Ground Base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]} receiveShadow>
        <planeGeometry args={[110, 110, 64, 64]} />
        <meshStandardMaterial color={isNightMode ? '#0B132B' : '#334155'} roughness={0.95} metalness={0.05} />
      </mesh>

      {/* Cobblestone Path Cross */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[8, 45]} />
        <meshStandardMaterial color={isNightMode ? '#1E293B' : '#475569'} roughness={0.8} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[0, 0.01, 0]}>
        <planeGeometry args={[8, 45]} />
        <meshStandardMaterial color={isNightMode ? '#1E293B' : '#475569'} roughness={0.8} />
      </mesh>

      {/* Render All 6 Interactive Village Buildings */}
      {villageBuildings.map((building) => (
        <VillageBuilding
          key={building.id}
          {...building}
          onSelectBuilding={onSelectBuilding}
        />
      ))}

      {/* Village Environment & River */}
      <River />
      <Bridge position={[0, 0, 3]} />
      <Foliage />
      <Character position={[2, 0.65, 4]} />
      {isNightMode && <Fireflies count={100} />}
    </group>
  );
};

export default VillageScene;
