import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { soundFx } from '../utils/audioEffects';

export const VillageBuilding = ({
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
      // Gentle floating/breathing hover animation
      const targetY = position[1] + (hovered ? Math.sin(state.clock.elapsedTime * 4) * 0.15 : 0);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, delta * 5);
    }
    if (lightRef.current) {
      lightRef.current.intensity = hovered
        ? 3.5 + Math.sin(state.clock.elapsedTime * 8) * 1.2
        : 1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
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

  // Render 3D Low-Poly geometries based on building type
  const renderGeometry = () => {
    const mainMat = (color, emissiveInt = 0) => (
      <meshStandardMaterial
        color={color}
        roughness={0.4}
        metalness={0.2}
        emissive={hovered ? accentColor : '#000000'}
        emissiveIntensity={hovered ? 0.6 + emissiveInt : 0}
      />
    );

    switch (type) {
      case 'main-house':
        // Elegant Low-Poly Cottage for About Me
        return (
          <group>
            {/* Base Wall */}
            <mesh position={[0, 2, 0]} castShadow receiveShadow>
              <boxGeometry args={[5, 4, 4.5]} />
              {mainMat('#1E293B')}
            </mesh>
            {/* Roof */}
            <mesh position={[0, 4.8, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
              <coneGeometry args={[4.2, 2.5, 4]} />
              {mainMat(accentColor)}
            </mesh>
            {/* Glowing Door */}
            <mesh position={[0, 1.1, 2.26]}>
              <boxGeometry args={[1.2, 2.2, 0.1]} />
              <meshStandardMaterial color="#0F172A" emissive={accentColor} emissiveIntensity={hovered ? 1.2 : 0.4} />
            </mesh>
            {/* Glowing Windows */}
            <mesh position={[-1.4, 2.5, 2.26]}>
              <planeGeometry args={[0.9, 0.9]} />
              <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={hovered ? 2 : 1} />
            </mesh>
            <mesh position={[1.4, 2.5, 2.26]}>
              <planeGeometry args={[0.9, 0.9]} />
              <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={hovered ? 2 : 1} />
            </mesh>
            {/* Chimney */}
            <mesh position={[1.5, 4.5, -0.8]}>
              <boxGeometry args={[0.6, 2, 0.6]} />
              {mainMat('#334155')}
            </mesh>
          </group>
        );

      case 'tea-stall':
        // Rural Bengali Tech Tea Stall
        return (
          <group>
            {/* Wooden Floor Deck */}
            <mesh position={[0, 0.2, 0]} receiveShadow>
              <boxGeometry args={[5.5, 0.4, 4.5]} />
              {mainMat('#78350F')}
            </mesh>
            {/* Main Shop Body */}
            <mesh position={[0, 1.6, -0.6]} castShadow>
              <boxGeometry args={[4.5, 2.4, 2.5]} />
              {mainMat('#92400E')}
            </mesh>
            {/* Front Tea Counter */}
            <mesh position={[0, 1.2, 1.4]} castShadow>
              <boxGeometry args={[4.2, 1.2, 0.8]} />
              {mainMat('#B45309')}
            </mesh>
            {/* Tea Kettle & Glasses on Counter */}
            <mesh position={[-1.2, 2, 1.4]}>
              <cylinderGeometry args={[0.3, 0.35, 0.5, 12]} />
              <meshStandardMaterial color="#E2E8F0" metalness={0.9} roughness={0.1} />
            </mesh>
            {/* Wooden Pillars */}
            {[-2.2, 2.2].map((x, i) => (
              <mesh key={i} position={[x, 2, 1.8]}>
                <cylinderGeometry args={[0.1, 0.1, 3.2]} />
                {mainMat('#451A03')}
              </mesh>
            ))}
            {/* Slanted Tin Roof */}
            <mesh position={[0, 3.2, 0.5]} rotation={[0.2, 0, 0]} castShadow>
              <boxGeometry args={[5.8, 0.2, 4.2]} />
              {mainMat(accentColor, 0.3)}
            </mesh>
          </group>
        );

      case 'academy':
        // Knowledge Library / Academy with Dome
        return (
          <group>
            {/* Main Hall */}
            <mesh position={[0, 2.2, 0]} castShadow receiveShadow>
              <boxGeometry args={[5.2, 4.2, 5.2]} />
              {mainMat('#1E1B4B')}
            </mesh>
            {/* Front Entrance Pillars */}
            {[-1.8, -0.6, 0.6, 1.8].map((x, i) => (
              <mesh key={i} position={[x, 2, 2.7]}>
                <cylinderGeometry args={[0.2, 0.25, 4, 16]} />
                <meshStandardMaterial color="#E0E7FF" metalness={0.3} />
              </mesh>
            ))}
            {/* Triangular Pediment Roof */}
            <mesh position={[0, 4.4, 2.7]} rotation={[0, 0, 0]} castShadow>
              <coneGeometry args={[3.2, 1.5, 4]} />
              {mainMat(accentColor)}
            </mesh>
            {/* Dome */}
            <mesh position={[0, 4.8, 0]} castShadow>
              <sphereGeometry args={[2.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
              {mainMat(accentColor, 0.4)}
            </mesh>
          </group>
        );

      case 'workshop':
        // High-Tech Craft Tower / Workshop
        return (
          <group>
            {/* Hexagonal Tower Body */}
            <mesh position={[0, 3.5, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[2.2, 2.8, 7, 6]} />
              {mainMat('#0F172A')}
            </mesh>
            {/* Glowing Tech Ring */}
            <mesh position={[0, 4.5, 0]}>
              <torusGeometry args={[2.4, 0.15, 16, 32]} />
              <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={hovered ? 3 : 1.5} />
            </mesh>
            {/* Spire */}
            <mesh position={[0, 8, 0]} castShadow>
              <coneGeometry args={[1, 3, 6]} />
              {mainMat(accentColor, 0.5)}
            </mesh>
            {/* Antenna Top Gem */}
            <mesh position={[0, 9.8, 0]}>
              <octahedronGeometry args={[0.5]} />
              <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={3} />
            </mesh>
          </group>
        );

      case 'guild':
        // Gaming Guild Hall / Fortress
        return (
          <group>
            {/* Main Castle Keep */}
            <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
              <boxGeometry args={[6, 5, 5]} />
              {mainMat('#312E81')}
            </mesh>
            {/* Side Towers */}
            {[-3, 3].map((x, i) => (
              <group key={i} position={[x, 3, 2.5]}>
                <mesh castShadow>
                  <cylinderGeometry args={[1.1, 1.3, 6, 12]} />
                  {mainMat('#1E1B4B')}
                </mesh>
                <mesh position={[0, 3.6, 0]} castShadow>
                  <coneGeometry args={[1.3, 1.8, 12]} />
                  {mainMat(accentColor)}
                </mesh>
              </group>
            ))}
            {/* Guild Crest Shield Logo */}
            <mesh position={[0, 3.8, 2.52]}>
              <boxGeometry args={[1.2, 1.5, 0.15]} />
              <meshStandardMaterial color="#F43F5E" emissive="#F43F5E" emissiveIntensity={hovered ? 2 : 1} />
            </mesh>
          </group>
        );

      case 'post-box':
      default:
        // Village Gate & Mailbox Post
        return (
          <group>
            {/* Gate Pillars */}
            {[-2.2, 2.2].map((x, i) => (
              <mesh key={i} position={[x, 2.2, 0]} castShadow>
                <boxGeometry args={[0.8, 4.4, 0.8]} />
                {mainMat('#334155')}
              </mesh>
            ))}
            {/* Arch Beam */}
            <mesh position={[0, 4.2, 0]} castShadow>
              <boxGeometry args={[5.2, 0.6, 1]} />
              {mainMat(accentColor)}
            </mesh>
            {/* Glowing Village Sign Board */}
            <mesh position={[0, 3.4, 0.5]}>
              <boxGeometry args={[3.2, 0.9, 0.1]} />
              <meshStandardMaterial color="#0284C7" emissive="#0284C7" emissiveIntensity={hovered ? 2 : 1} />
            </mesh>
            {/* Mailbox Box */}
            <mesh position={[1.5, 1.4, 0.8]} castShadow>
              <boxGeometry args={[0.7, 0.9, 0.7]} />
              {mainMat('#EF4444')}
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
      {/* 3D Geometry */}
      {renderGeometry()}

      {/* Building Point Light */}
      <pointLight ref={lightRef} position={[0, 4, 2]} color={accentColor} distance={14} />

      {/* Hover Selection Aura Ring on Ground */}
      {hovered && (
        <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3, 3.6, 32]} />
          <meshBasicMaterial color={accentColor} side={THREE.DoubleSide} transparent opacity={0.8} />
        </mesh>
      )}

      {/* Interactive Floating 3D Badge Tooltip */}
      <Html
        position={[0, type === 'workshop' ? 10.5 : type === 'guild' ? 7.2 : 6.2, 0]}
        center
        distanceFactor={22}
        style={{ transition: 'all 0.2s ease', pointerEvents: 'none' }}
      >
        <div
          className={`px-3 py-1.5 rounded-xl border backdrop-blur-md shadow-2xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
            hovered
              ? 'bg-slate-900/90 border-cyan-400 text-white scale-110 shadow-cyan-500/50 ring-2 ring-cyan-400'
              : 'bg-black/60 border-white/20 text-slate-300 scale-95'
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

export default VillageBuilding;
