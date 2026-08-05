import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { soundFx } from '../utils/audioEffects';

export const CircuitTrackBuilding = ({
  id,
  type,
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  title,
  subtitle,
  bengaliTag,
  icon,
  accentColor = '#38BDF8',
  onSelectBuilding
}) => {
  const groupRef = useRef();
  const lightRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const targetY = position[1] + (hovered ? Math.sin(state.clock.elapsedTime * 4) * 0.15 : 0);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, delta * 5);
    }
    if (lightRef.current) {
      lightRef.current.intensity = hovered
        ? 3.8 + Math.sin(state.clock.elapsedTime * 8) * 1.2
        : 1.6 + Math.sin(state.clock.elapsedTime * 2) * 0.4;
    }
  });

  const handlePointerOver = (e) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
    soundFx.playHoverSound();
  };

  const handlePointerOut = (e) => {
    e.stopPropagation();
    setHovered(false);
    document.body.style.cursor = 'auto';
  };

  const handleClick = (e) => {
    e.stopPropagation();
    soundFx.playSelectSound();
    if (onSelectBuilding) {
      onSelectBuilding(id, position);
    }
  };

  const mainMat = (color, emissiveInt = 0) => (
    <meshStandardMaterial
      color={color}
      roughness={0.3}
      metalness={0.3}
      emissive={hovered ? accentColor : '#000000'}
      emissiveIntensity={hovered ? 0.7 + emissiveInt : 0}
    />
  );

  const renderModel = () => {
    switch (type) {
      case 'stadium':
        // Central Control Stadium (Main House - About Me)
        return (
          <group>
            {/* Grandstand Main Base */}
            <mesh position={[0, 1.8, 0]} castShadow receiveShadow>
              <boxGeometry args={[9, 3.2, 5]} />
              {mainMat('#1E293B')}
            </mesh>
            {/* Curved Roof Canopy */}
            <mesh position={[0, 3.8, 0]} rotation={[0.1, 0, 0]} castShadow>
              <boxGeometry args={[10, 0.4, 6]} />
              {mainMat(accentColor, 0.4)}
            </mesh>
            {/* Seating Tiers */}
            {[-1.2, 0, 1.2].map((z, i) => (
              <mesh key={i} position={[0, 1 + i * 0.4, z - 0.5]}>
                <boxGeometry args={[8.2, 0.3, 0.8]} />
                {mainMat('#334155')}
              </mesh>
            ))}
            {/* Control Tower Dome */}
            <mesh position={[0, 4.6, 0]} castShadow>
              <cylinderGeometry args={[1.5, 1.8, 1.2, 16]} />
              <meshStandardMaterial color="#0284C7" emissive={accentColor} emissiveIntensity={hovered ? 2 : 0.8} />
            </mesh>
          </group>
        );

      case 'pit-stop':
        // Pit Stop Garage & Tool Shed (Tech Skills)
        return (
          <group>
            {/* Garage Base */}
            <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
              <boxGeometry args={[6.5, 2.4, 4.2]} />
              {mainMat('#92400E')}
            </mesh>
            {/* Garage Open Shutters */}
            {[-1.8, 1.8].map((x, i) => (
              <mesh key={i} position={[x, 1, 2.11]}>
                <boxGeometry args={[2.2, 1.8, 0.1]} />
                <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={hovered ? 2 : 0.8} />
              </mesh>
            ))}
            {/* Flat Slanted Roof */}
            <mesh position={[0, 2.5, 0]} rotation={[0.08, 0, 0]} castShadow>
              <boxGeometry args={[7, 0.3, 4.8]} />
              {mainMat(accentColor, 0.3)}
            </mesh>
            {/* Fuel/Tool Tanks */}
            <mesh position={[-2.6, 1, -1.5]} castShadow>
              <cylinderGeometry args={[0.4, 0.4, 1.8, 12]} />
              <meshStandardMaterial color="#EF4444" />
            </mesh>
          </group>
        );

      case 'tower':
        // Knowledge Spire Tower (Education & Research)
        return (
          <group>
            {/* Tower Hex Base */}
            <mesh position={[0, 3.2, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[2, 2.6, 6.4, 8]} />
              {mainMat('#1E1B4B')}
            </mesh>
            {/* Spire Roof Cone */}
            <mesh position={[0, 7.2, 0]} castShadow>
              <coneGeometry args={[1.8, 2.4, 8]} />
              {mainMat(accentColor, 0.5)}
            </mesh>
            {/* Glowing Beacon Ring */}
            <mesh position={[0, 5, 0]}>
              <torusGeometry args={[2.2, 0.12, 16, 32]} />
              <meshStandardMaterial color="#818CF8" emissive="#818CF8" emissiveIntensity={hovered ? 3 : 1.5} />
            </mesh>
          </group>
        );

      case 'arena':
        // Exhibition Showroom Arena (Projects)
        return (
          <group>
            {/* Circular Arena Deck */}
            <mesh position={[0, 0.4, 0]} receiveShadow>
              <cylinderGeometry args={[3.8, 4.2, 0.8, 24]} />
              {mainMat('#0F172A')}
            </mesh>
            {/* Glass Pavilion Roof */}
            <mesh position={[0, 3, 0]} castShadow>
              <cylinderGeometry args={[3.2, 3.5, 2.2, 24]} />
              <meshStandardMaterial color="#10B981" transparent opacity={0.7} emissive="#10B981" emissiveIntensity={hovered ? 1.5 : 0.4} />
            </mesh>
            {/* Display Podium */}
            <mesh position={[0, 1.1, 0]}>
              <boxGeometry args={[2, 0.6, 2]} />
              <meshStandardMaterial color="#34D399" emissive="#34D399" emissiveIntensity={2} />
            </mesh>
          </group>
        );

      case 'paddock':
        // Racing Paddock & Guild Hangar (Experience)
        return (
          <group>
            {/* Hangar Curved Roof Structure */}
            <mesh position={[0, 2.2, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[3.2, 3.2, 5.5, 16, 1, false, 0, Math.PI]} rotation={[0, 0, Math.PI / 2]} />
              {mainMat('#312E81')}
            </mesh>
            {/* Side Pillars */}
            {[-2.4, 2.4].map((x, i) => (
              <mesh key={i} position={[x, 1.2, 0]} castShadow>
                <boxGeometry args={[0.5, 2.4, 4.8]} />
                {mainMat('#1E1B4B')}
              </mesh>
            ))}
            {/* Guild Crest */}
            <mesh position={[0, 2.8, 2.4]}>
              <boxGeometry args={[1.4, 1.4, 0.1]} />
              <meshStandardMaterial color="#F43F5E" emissive="#F43F5E" emissiveIntensity={hovered ? 2.5 : 1} />
            </mesh>
          </group>
        );

      case 'gate':
      default:
        // Circuit Start/Finish Gate Arch (Contact)
        return (
          <group>
            {/* Gate Pillars */}
            {[-2.8, 2.8].map((x, i) => (
              <mesh key={i} position={[x, 2.5, 0]} castShadow>
                <boxGeometry args={[0.9, 5, 0.9]} />
                {mainMat('#334155')}
              </mesh>
            ))}
            {/* Overhead Finish Line Arch */}
            <mesh position={[0, 4.8, 0]} castShadow>
              <boxGeometry args={[6.5, 0.8, 1.2]} />
              {mainMat(accentColor, 0.5)}
            </mesh>
            {/* Digital Scoreboard Banner */}
            <mesh position={[0, 3.8, 0.4]}>
              <boxGeometry args={[4.5, 1, 0.1]} />
              <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={hovered ? 2.5 : 1.2} />
            </mesh>
          </group>
        );
    }
  };

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      {renderModel()}

      {/* Point Light */}
      <pointLight ref={lightRef} position={[0, 4.5, 1]} color={accentColor} distance={14} />

      {/* Hover Light Aura Ring */}
      {hovered && (
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3.2, 4, 32]} />
          <meshBasicMaterial color={accentColor} side={THREE.DoubleSide} transparent opacity={0.85} />
        </mesh>
      )}

      {/* Drei 3D HTML Tooltip Badge */}
      <Html
        position={[0, type === 'stadium' ? 6.2 : type === 'tower' ? 8.8 : 5.8, 0]}
        center
        distanceFactor={24}
        style={{ transition: 'all 0.2s ease', pointerEvents: 'none' }}
      >
        <div
          className={`px-3 py-1.5 rounded-xl border backdrop-blur-md shadow-2xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
            hovered
              ? 'bg-slate-900/90 border-cyan-400 text-white scale-110 shadow-cyan-500/50 ring-2 ring-cyan-400'
              : 'bg-black/70 border-white/20 text-slate-300 scale-95'
          }`}
        >
          <span className="text-xl">{icon}</span>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold font-heading">{title}</span>
              {bengaliTag && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-sans">
                  {bengaliTag}
                </span>
              )}
            </div>
            <p className="text-[10px] text-slate-300">{subtitle}</p>
          </div>
          {hovered && (
            <span className="ml-1 text-[10px] bg-cyan-500 text-black px-1.5 py-0.5 rounded font-bold animate-pulse">
              ক্লিক করুন 🎯
            </span>
          )}
        </div>
      </Html>
    </group>
  );
};

export default CircuitTrackBuilding;
