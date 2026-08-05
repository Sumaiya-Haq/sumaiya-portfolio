import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { CoitTower, CivicHall, Observatory, DonutShop } from './HexBuildings';
import { PineTree, BubbleTree } from './HexFoliage';

// Single 3D Hexagon Tile Component
const HexTile = ({ position, isWater = false, color = '#62c547' }) => {
  return (
    <group position={position}>
      {/* 3D Extruded Hexagon Prism */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[2.8, 2.8, 1.4, 6]} />
        <meshStandardMaterial
          color={isWater ? '#3ebbf0' : color}
          roughness={isWater ? 0.1 : 0.6}
          metalness={isWater ? 0.8 : 0.0}
        />
      </mesh>
      {/* Top Border / Bevel Ring Accent */}
      {!isWater && (
        <mesh position={[0, 0.71, 0]}>
          <cylinderGeometry args={[2.75, 2.75, 0.05, 6]} />
          <meshStandardMaterial color="#75d35a" roughness={0.4} />
        </mesh>
      )}
    </group>
  );
};

export const HexIslandScene = ({ onSelectBuilding, targetCameraPos }) => {
  const { camera, mouse } = useThree();
  const trainRef = useRef();
  const [hoveredBuilding, setHoveredBuilding] = useState(null);

  // Smooth camera controls & mouse tilt
  useFrame((state, delta) => {
    // Monorail train position animation along the track
    if (trainRef.current) {
      const time = state.clock.getElapsedTime() * 0.8;
      const x = Math.sin(time) * 9;
      trainRef.current.position.x = x;
    }

    if (targetCameraPos) {
      const targetVec = new THREE.Vector3(
        targetCameraPos[0] + 6,
        targetCameraPos[1] + 8,
        targetCameraPos[2] + 12
      );
      camera.position.lerp(targetVec, delta * 3);
      camera.lookAt(targetCameraPos[0], targetCameraPos[1] + 1.2, targetCameraPos[2]);
    } else {
      // Default isometric camera angle matching reference photo
      const targetX = 18 + mouse.x * 2.5;
      const targetY = 18 + mouse.y * 2;
      const defaultCam = new THREE.Vector3(targetX, targetY, 22);

      camera.position.lerp(defaultCam, delta * 2);
      camera.lookAt(0, 1.5, 0);
    }
  });

  // Hexagonal Grid Coordinates (q, r) layout for island shape
  const hexRadius = 2.85;
  const hexTiles = [
    // Center cluster
    { q: 0, r: 0, color: '#62c547' },
    { q: -1, r: 0, color: '#5cb942' },
    { q: 1, r: 0, color: '#62c547' },
    { q: 0, r: -1, color: '#5cb942' },
    { q: 0, r: 1, color: '#62c547' },
    { q: -1, r: 1, color: '#5cb942' },
    { q: 1, r: -1, color: '#62c547' },
    { q: -2, r: 1, color: '#5cb942' },
    { q: 2, r: -1, color: '#62c547' },
    { q: -1, r: 2, color: '#5cb942' },
    { q: 1, r: 1, color: '#62c547' },
    // Outer Water Cutouts
    { q: 0, r: 2, isWater: true },
    { q: -2, r: 2, isWater: true },
    { q: 2, r: 0, isWater: true },
    { q: -2, r: 0, isWater: true },
  ];

  const getHexPos = (q, r) => {
    const x = hexRadius * Math.sqrt(3) * (q + r / 2);
    const z = hexRadius * 1.5 * r;
    return [x, 0, z];
  };

  const handleBuildingClick = (id, pos) => {
    if (onSelectBuilding) {
      onSelectBuilding(id, pos);
    }
  };

  return (
    <group>
      {/* 1. Hexagonal Grid Floating Terrain */}
      <group position={[0, -0.7, 0]}>
        {hexTiles.map((tile, idx) => (
          <HexTile
            key={idx}
            position={getHexPos(tile.q, tile.r)}
            isWater={tile.isWater}
            color={tile.color}
          />
        ))}
      </group>

      {/* 2. Elevated Monorail & Track System */}
      <group position={[0, 3.2, -4.5]}>
        {/* Supporting Pillars */}
        {[-8, -4, 0, 4, 8].map((x, i) => (
          <mesh key={i} position={[x, -1.6, 0]} castShadow>
            <cylinderGeometry args={[0.15, 0.18, 3.2, 12]} />
            <meshStandardMaterial color="#f1f5f9" roughness={0.4} />
          </mesh>
        ))}

        {/* Track Deck */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[22, 0.2, 0.8]} />
          <meshStandardMaterial color="#334155" roughness={0.5} />
        </mesh>
        {/* Track Inner Rails */}
        <mesh position={[0, 0.12, -0.2]}>
          <boxGeometry args={[22, 0.08, 0.08]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.12, 0.2]}>
          <boxGeometry args={[22, 0.08, 0.08]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.8} />
        </mesh>

        {/* Moving Monorail Train */}
        <group ref={trainRef} position={[0, 0.5, 0]}>
          {/* Main Train Car */}
          <mesh castShadow>
            <boxGeometry args={[3.2, 0.85, 0.75]} />
            <meshStandardMaterial color="#ffffff" roughness={0.2} />
          </mesh>
          {/* Glass Windows Band */}
          <mesh position={[0, 0.1, 0.01]}>
            <boxGeometry args={[2.8, 0.35, 0.77]} />
            <meshStandardMaterial color="#1e293b" roughness={0.1} metalness={0.9} />
          </mesh>
          {/* Front Red Stripe */}
          <mesh position={[1.5, 0, 0]}>
            <boxGeometry args={[0.2, 0.7, 0.76]} />
            <meshStandardMaterial color="#ef4444" roughness={0.3} />
          </mesh>
        </group>
      </group>

      {/* 3. Key 3D Buildings */}
      {/* A. Coit Tower (Left) */}
      <CoitTower
        position={[-9, 0.7, -1]}
        onClick={() => handleBuildingClick('academy', [-9, 0.7, -1])}
        isHovered={hoveredBuilding === 'academy'}
      />

      {/* B. Civic Hall / Music Museum (Back Center) */}
      <CivicHall
        position={[0, 0.7, -7]}
        onClick={() => handleBuildingClick('tea-stall', [0, 0.7, -7])}
      />

      {/* C. Astronomical Observatory (Front Middle) */}
      <Observatory
        position={[2, 0.7, 3]}
        onClick={() => handleBuildingClick('main-house', [2, 0.7, 3])}
      />

      {/* D. Donut Shop (Right) */}
      <DonutShop
        position={[9, 0.7, 0.5]}
        onClick={() => handleBuildingClick('workshop', [9, 0.7, 0.5])}
      />

      {/* 4. Foliage & Trees Scattered Exactly like Image */}
      {/* Pine Trees around Coit Tower */}
      <PineTree position={[-6.5, 0.7, -6]} scale={1.1} />
      <PineTree position={[-5, 0.7, -4]} scale={0.9} />
      <PineTree position={[-7.5, 0.7, 2.5]} scale={1.0} />

      {/* Pine & Bubble Trees around Center & Observatory */}
      <PineTree position={[-2.5, 0.7, -1]} scale={1.2} />
      <BubbleTree position={[-1.2, 0.7, 0.5]} scale={1.0} />
      <PineTree position={[-3.2, 0.7, 2]} scale={1.1} />
      <BubbleTree position={[-1.8, 0.7, 3.5]} scale={0.95} />

      {/* Trees around Donut Shop & Right Hex Tiles */}
      <BubbleTree position={[6.5, 0.7, -4]} scale={1.1} />
      <PineTree position={[5.2, 0.7, -2]} scale={1.0} />
      <PineTree position={[6, 0.7, 4]} scale={0.9} />

      {/* 5. Floating Interactive UI Badges (Matching Reference Photo) */}
      {/* Badge 1: Coit Tower Badge (Left) */}
      <Html position={[-9, 12.5, -1]} center distanceFactor={25}>
        <div
          onClick={() => handleBuildingClick('academy', [-9, 0.7, -1])}
          className="cursor-pointer group flex flex-col items-center animate-bounce-slow hover:scale-110 transition-all duration-300"
        >
          <div className="w-12 h-14 bg-white/95 backdrop-blur-md rounded-t-full rounded-b-xl border-2 border-slate-200 shadow-xl flex items-center justify-center p-2 text-2xl group-hover:border-sky-500">
            🏙️
          </div>
        </div>
      </Html>

      {/* Badge 2: Music Note Badge (Back Center) */}
      <Html position={[0, 6.2, -7]} center distanceFactor={25}>
        <div
          onClick={() => handleBuildingClick('tea-stall', [0, 0.7, -7])}
          className="cursor-pointer group flex flex-col items-center animate-bounce-slow hover:scale-110 transition-all duration-300"
        >
          <div className="w-11 h-11 bg-gradient-to-tr from-sky-500 to-blue-600 text-white rounded-2xl shadow-xl border-2 border-white flex items-center justify-center text-xl group-hover:scale-110">
            🎵
          </div>
        </div>
      </Html>

      {/* Badge 3: Twin Pine Trees Badge (Center Trees) */}
      <Html position={[-2.2, 3.2, 0.5]} center distanceFactor={25}>
        <div
          onClick={() => handleBuildingClick('main-house', [2, 0.7, 3])}
          className="cursor-pointer group flex flex-col items-center animate-bounce-slow hover:scale-110 transition-all duration-300"
        >
          <div className="w-11 h-11 bg-gradient-to-tr from-emerald-500 to-green-600 text-white rounded-2xl shadow-xl border-2 border-white flex items-center justify-center text-lg group-hover:scale-110">
            🌲
          </div>
        </div>
      </Html>

      {/* Badge 4: Purple Location Map Pin Badge (Observatory) */}
      <Html position={[2, 6.8, 3]} center distanceFactor={25}>
        <div
          onClick={() => handleBuildingClick('main-house', [2, 0.7, 3])}
          className="cursor-pointer group flex flex-col items-center animate-bounce-slow hover:scale-110 transition-all duration-300"
        >
          <div className="w-10 h-12 bg-purple-600 text-white rounded-t-full rounded-b-full shadow-xl border-2 border-white flex items-center justify-center text-xl group-hover:scale-110">
            📍
          </div>
        </div>
      </Html>

      {/* Badge 5: Red Donut Badge (Right Donut Shop) */}
      <Html position={[9, 6.5, 0.5]} center distanceFactor={25}>
        <div
          onClick={() => handleBuildingClick('workshop', [9, 0.7, 0.5])}
          className="cursor-pointer group flex flex-col items-center animate-bounce-slow hover:scale-110 transition-all duration-300"
        >
          <div className="w-11 h-11 bg-gradient-to-tr from-red-500 to-rose-600 text-white rounded-2xl shadow-xl border-2 border-white flex items-center justify-center text-xl group-hover:scale-110">
            🍩
          </div>
        </div>
      </Html>
    </group>
  );
};

export default HexIslandScene;
