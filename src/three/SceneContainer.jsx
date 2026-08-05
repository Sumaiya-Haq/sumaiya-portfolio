import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';

export const SceneContainer = ({ children, cameraPosition = [18, 18, 22] }) => {
  return (
    <div className="canvas-container w-full h-full bg-[#589dc9]">
      <Canvas
        shadows
        camera={{ position: cameraPosition, fov: 38, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Soft Sky Blue Background Color inside R3F Canvas */}
        <color attach="background" args={['#589dc9']} />

        {/* Crisp Daylight Lighting setup matching reference image */}
        <ambientLight intensity={1.1} />
        <directionalLight
          position={[25, 40, 20]}
          intensity={1.8}
          color="#ffffff"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.00005}
        />
        <directionalLight
          position={[-15, 20, -15]}
          intensity={0.5}
          color="#bae6fd"
        />

        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneContainer;
