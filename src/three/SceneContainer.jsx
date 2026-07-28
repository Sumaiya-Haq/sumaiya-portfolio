import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

export const SceneContainer = ({ children, cameraPosition = [0, 8, 24] }) => {
  return (
    <div className="canvas-container">
      <Canvas
        shadows
        camera={{ position: cameraPosition, fov: 45, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[15, 25, 15]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
        />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color="#22D3EE" />
        <pointLight position={[10, 5, 10]} intensity={0.6} color="#7C3AED" />

        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneContainer;
