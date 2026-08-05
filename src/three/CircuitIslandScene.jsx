import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import CircuitTrackBuilding from './CircuitTrackBuilding';

export const CircuitIslandScene = ({ onSelectBuilding, targetCameraPos, isNightMode = true }) => {
  const { camera, mouse } = useThree();
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (targetCameraPos) {
      const targetVec = new THREE.Vector3(
        targetCameraPos[0] + 8,
        targetCameraPos[1] + 12,
        targetCameraPos[2] + 16
      );
      camera.position.lerp(targetVec, delta * 3);
      camera.lookAt(targetCameraPos[0], targetCameraPos[1] + 1.5, targetCameraPos[2]);
    } else {
      // Default cinematic isometric angle view
      const targetX = 22 + mouse.x * 4;
      const targetY = 24 + mouse.y * 3;
      const defaultCam = new THREE.Vector3(targetX, targetY, 28);

      camera.position.lerp(defaultCam, delta * 2);
      camera.lookAt(0, 0, 0);
    }
  });

  // Trackside buildings configuration along the circuit loop
  const circuitBuildings = [
    {
      id: 'main-house',
      type: 'stadium',
      position: [0, 0.4, 0],
      rotation: [0, 0, 0],
      title: 'About Me',
      subtitle: 'প্রধান কন্ট্রোল সেন্ট্রাল',
      bengaliTag: 'মেইন স্টেডিয়াম',
      icon: '🏟️',
      accentColor: '#38BDF8'
    },
    {
      id: 'tea-stall',
      type: 'pit-stop',
      position: [-14, 0.4, -6],
      rotation: [0, 0.4, 0],
      title: 'Tech Skills',
      subtitle: 'পিট স্টপ শেড',
      bengaliTag: 'দক্ষতা ও টুলস',
      icon: '☕',
      accentColor: '#F59E0B'
    },
    {
      id: 'academy',
      type: 'tower',
      position: [-12, 0.4, 10],
      rotation: [0, 0.6, 0],
      title: 'Education',
      subtitle: 'নলেজ স্পায়ার টাওয়ার',
      bengaliTag: 'শিক্ষা ও গবেষণা',
      icon: '🎓',
      accentColor: '#818CF8'
    },
    {
      id: 'workshop',
      type: 'arena',
      position: [14, 0.4, -6],
      rotation: [0, -0.4, 0],
      title: 'Projects',
      subtitle: 'শো-রুম এক্সিবিশন',
      bengaliTag: 'প্রজেক্ট ডেমো',
      icon: '🚀',
      accentColor: '#10B981'
    },
    {
      id: 'guild',
      type: 'paddock',
      position: [12, 0.4, 10],
      rotation: [0, -0.6, 0],
      title: 'Experience',
      subtitle: 'রেসিং প্যাডক গিল্ড',
      bengaliTag: 'অভিজ্ঞতা',
      icon: '⚔️',
      accentColor: '#F43F5E'
    },
    {
      id: 'post-box',
      type: 'gate',
      position: [0, 0.4, 16],
      rotation: [0, 0, 0],
      title: 'Contact',
      subtitle: 'সার্কিট এন্ট্রান্স গেট',
      bengaliTag: 'পোস্ট বক্স',
      icon: '📮',
      accentColor: '#A855F7'
    }
  ];

  return (
    <group ref={groupRef}>
      {/* Atmosphere Fog */}
      <fog attach="fog" args={[isNightMode ? '#070D1D' : '#E2E8F0', 25, 110]} />

      {/* Lighting System */}
      <ambientLight intensity={isNightMode ? 0.4 : 1.1} />
      <directionalLight
        position={[25, 35, 20]}
        intensity={isNightMode ? 1 : 2.2}
        color={isNightMode ? '#93C5FD' : '#FFFBEB'}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* 3D Elevated Isometric Island Slab (Matching Reference Image) */}
      <group position={[0, -0.8, 0]}>
        {/* Top Terrain Platform */}
        <mesh position={[0, 0, 0]} receiveShadow castShadow>
          <boxGeometry args={[44, 1.4, 38]} />
          <meshStandardMaterial color={isNightMode ? '#0F172A' : '#CBD5E1'} roughness={0.7} />
        </mesh>
        {/* Outer Sand/Border Ring Base */}
        <mesh position={[0, -0.7, 0]} receiveShadow>
          <boxGeometry args={[48, 1.2, 42]} />
          <meshStandardMaterial color={isNightMode ? '#1E293B' : '#E2E8F0'} roughness={0.9} />
        </mesh>
      </group>

      {/* Looping Circuit Asphalt Track Path (Curving Around Island) */}
      <group position={[0, 0.02, 0]}>
        {/* Outer Loop Track Ring */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <ringGeometry args={[11, 15.5, 64]} />
          <meshStandardMaterial color={isNightMode ? '#18181B' : '#334155'} roughness={0.4} />
        </mesh>
        {/* Glowing Circuit Track Border Line */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
          <ringGeometry args={[15.4, 15.6, 64]} />
          <meshBasicMaterial color="#38BDF8" transparent opacity={0.8} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
          <ringGeometry args={[10.9, 11.1, 64]} />
          <meshBasicMaterial color="#38BDF8" transparent opacity={0.8} />
        </mesh>
      </group>

      {/* Spectator Stands & Parking Lots (Matching Reference Layout) */}
      {[-16, 16].map((x, i) => (
        <group key={i} position={[x, 0.2, 0]}>
          <mesh position={[0, 0.3, 0]} castShadow>
            <boxGeometry args={[3, 0.6, 12]} />
            <meshStandardMaterial color={isNightMode ? '#334155' : '#94A3B8'} />
          </mesh>
        </group>
      ))}

      {/* Low-Poly Trees along Track Borders */}
      {[-18, -8, 8, 18].map((x, i) =>
        [-14, 14].map((z, j) => (
          <group key={`${i}-${j}`} position={[x, 0.2, z]}>
            <mesh position={[0, 1.2, 0]} castShadow>
              <coneGeometry args={[1.2, 2.4, 6]} />
              <meshStandardMaterial color={isNightMode ? '#065F46' : '#10B981'} />
            </mesh>
            <mesh position={[0, 0.4, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 0.8]} />
              <meshStandardMaterial color="#78350F" />
            </mesh>
          </group>
        ))
      )}

      {/* Render 6 Interactive Circuit Buildings */}
      {circuitBuildings.map((building) => (
        <CircuitTrackBuilding
          key={building.id}
          {...building}
          onSelectBuilding={onSelectBuilding}
        />
      ))}
    </group>
  );
};

export default CircuitIslandScene;
