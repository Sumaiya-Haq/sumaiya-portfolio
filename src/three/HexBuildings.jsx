import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 1. Coit Tower / City Landmark Tower (Left)
export const CoitTower = ({ position = [-9, 0.8, -1], onClick, isHovered }) => {
  const groupRef = useRef();

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={onClick}
      cursor="pointer"
    >
      {/* Base Tiered Foundation */}
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2.5, 2.7, 0.4, 32]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2.0, 2.2, 0.4, 32]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.4} />
      </mesh>

      {/* Main Cylindrical Shaft */}
      <mesh position={[0, 4.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.35, 1.5, 7.5, 32]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.3} />
      </mesh>

      {/* Vertical Fluted Pillar Detail (Fluting around shaft) */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <mesh
            key={i}
            position={[Math.sin(rad) * 1.38, 4.5, Math.cos(rad) * 1.38]}
            castShadow
          >
            <boxGeometry args={[0.15, 7.2, 0.15]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.4} />
          </mesh>
        );
      })}

      {/* Observation Deck Platform */}
      <mesh position={[0, 8.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.5, 32]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
      </mesh>

      {/* Observation Deck Vertical Column Arches */}
      <group position={[0, 9.5, 0]}>
        {/* Inner Dark Core */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.0, 1.0, 1.5, 32]} />
          <meshStandardMaterial color="#334155" roughness={0.8} />
        </mesh>
        {/* Outer Arched Pillars */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <mesh
              key={i}
              position={[Math.sin(rad) * 1.45, 0, Math.cos(rad) * 1.45]}
              castShadow
            >
              <cylinderGeometry args={[0.12, 0.12, 1.5, 12]} />
              <meshStandardMaterial color="#f8fafc" roughness={0.3} />
            </mesh>
          );
        })}
      </group>

      {/* Top Roof Crown */}
      <mesh position={[0, 10.4, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.55, 1.55, 0.3, 32]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
      </mesh>
      <mesh position={[0, 10.7, 0]} castShadow>
        <cylinderGeometry args={[1.2, 1.35, 0.3, 32]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.3} />
      </mesh>
    </group>
  );
};

// 2. Civic Hall / Music Museum (Back Center)
export const CivicHall = ({ position = [0, 0.8, -7], onClick }) => {
  return (
    <group position={position} onClick={onClick} cursor="pointer">
      {/* Base Foundation */}
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[7, 0.6, 5]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
      </mesh>

      {/* Main Ground Floor Building */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[6.2, 1.8, 4.2]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
      </mesh>

      {/* Upper Level Wing */}
      <mesh position={[0, 3.0, -0.2]} castShadow receiveShadow>
        <boxGeometry args={[4.8, 1.2, 3.2]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.3} />
      </mesh>

      {/* Central Glass Ridge / Skylight Roof */}
      <mesh position={[0, 3.8, -0.2]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <boxGeometry args={[1.6, 1.6, 2.8]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.1} metalness={0.8} />
      </mesh>

      {/* Side Wing Columns */}
      {[-2.5, 2.5].map((x, i) => (
        <mesh key={i} position={[x, 3.2, -0.2]} castShadow>
          <boxGeometry args={[1.2, 1.6, 3.4]} />
          <meshStandardMaterial color="#cbd5e1" roughness={0.4} />
        </mesh>
      ))}

      {/* Distinct Red Entrance Banner / Pillar Accent (Exact to Picture) */}
      <mesh position={[0, 2.2, 2.15]} castShadow>
        <boxGeometry args={[0.5, 2.6, 0.3]} />
        <meshStandardMaterial color="#ef4444" roughness={0.3} />
      </mesh>
      <mesh position={[0, 3.6, 2.15]} castShadow>
        <boxGeometry args={[0.7, 0.3, 0.35]} />
        <meshStandardMaterial color="#dc2626" roughness={0.3} />
      </mesh>

      {/* Front Entrance Recess */}
      <mesh position={[0, 1.0, 2.11]}>
        <boxGeometry args={[2.0, 1.2, 0.1]} />
        <meshStandardMaterial color="#334155" roughness={0.8} />
      </mesh>
    </group>
  );
};

// 3. Astronomical Observatory (Front Middle)
export const Observatory = ({ position = [2, 0.8, 3], onClick }) => {
  return (
    <group position={position} onClick={onClick} cursor="pointer">
      {/* Base Cylindrical Wall */}
      <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2.2, 2.3, 2.4, 32]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
      </mesh>

      {/* Mid Wall Moulding Trim Ring */}
      <mesh position={[0, 1.8, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2.35, 2.35, 0.25, 32]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.5} />
      </mesh>

      {/* Hemispherical Observatory Dome */}
      <mesh position={[0, 2.4, 0]} castShadow receiveShadow>
        <sphereGeometry args={[2.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.3} />
      </mesh>

      {/* Telescope Slit Opening Inset */}
      <mesh position={[0, 2.6, 0.8]} rotation={[Math.PI / 6, 0, 0]} castShadow>
        <boxGeometry args={[0.8, 2.4, 2.5]} />
        <meshStandardMaterial color="#1e293b" roughness={0.8} />
      </mesh>
      {/* Inner Telescope Tube Tip */}
      <mesh position={[0, 2.8, 1.4]} rotation={[Math.PI / 4, 0, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.35, 1.2, 16]} />
        <meshStandardMaterial color="#475569" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Surrounding Purple Fence Railing (Exact to Picture) */}
      <group position={[0, 0.3, 0]}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const nextRad = ((angle + 45) * Math.PI) / 180;
          const r = 3.0;

          const x1 = Math.sin(rad) * r;
          const z1 = Math.cos(rad) * r;
          const x2 = Math.sin(nextRad) * r;
          const z2 = Math.cos(nextRad) * r;

          const midX = (x1 + x2) / 2;
          const midZ = (z1 + z2) / 2;
          const len = Math.sqrt((x2 - x1) ** 2 + (z2 - z1) ** 2);
          const rotY = Math.atan2(x2 - x1, z2 - z1);

          return (
            <group key={i}>
              {/* Vertical Purple Post */}
              <mesh position={[x1, 0.5, z1]} castShadow>
                <cylinderGeometry args={[0.08, 0.08, 1.0, 8]} />
                <meshStandardMaterial color="#a855f7" roughness={0.3} />
              </mesh>
              {/* Horizontal Purple Top Rail */}
              <mesh position={[midX, 0.9, midZ]} rotation={[0, rotY, Math.PI / 2]} castShadow>
                <cylinderGeometry args={[0.05, 0.05, len, 8]} />
                <meshStandardMaterial color="#9333ea" roughness={0.3} />
              </mesh>
              {/* Horizontal Purple Bottom Rail */}
              <mesh position={[midX, 0.3, midZ]} rotation={[0, rotY, Math.PI / 2]} castShadow>
                <cylinderGeometry args={[0.05, 0.05, len, 8]} />
                <meshStandardMaterial color="#9333ea" roughness={0.3} />
              </mesh>
            </group>
          );
        })}
      </group>
    </group>
  );
};

// 4. Donut Shop / Bakery with Giant 3D Donut Sculpture (Right)
export const DonutShop = ({ position = [9, 0.8, 0.5], onClick }) => {
  return (
    <group position={position} onClick={onClick} cursor="pointer">
      {/* Base Building Walls */}
      <mesh position={[0, 1.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 2.2, 3.6]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.4} />
      </mesh>

      {/* Front Glass Windows */}
      <mesh position={[0, 1.0, 1.81]}>
        <boxGeometry args={[3.2, 1.4, 0.05]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.1} metalness={0.7} transparent opacity={0.8} />
      </mesh>

      {/* Bright Warm Orange Flat Roof Slab (Exact to Picture) */}
      <mesh position={[0, 2.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.8, 0.35, 4.2]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.4} />
      </mesh>

      {/* GIANT 3D TORUS DONUT SCULPTURE ON ROOF */}
      <group position={[0, 3.8, 0]} rotation={[Math.PI / 6, Math.PI / 8, 0]}>
        {/* Pastry Dough Donut Base */}
        <mesh castShadow receiveShadow>
          <torusGeometry args={[1.3, 0.55, 24, 48]} />
          <meshStandardMaterial color="#d97706" roughness={0.5} />
        </mesh>
        {/* Pink/Sugar Glaze Top Coating */}
        <mesh position={[0, 0.08, 0]} castShadow>
          <torusGeometry args={[1.3, 0.57, 16, 48, Math.PI * 2]} />
          <meshStandardMaterial color="#f472b6" roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
};

export default { CoitTower, CivicHall, Observatory, DonutShop };
