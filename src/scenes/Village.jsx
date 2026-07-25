import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#5fa65f" />
    </mesh>
  );
}

function House() {
  return (
    <group>

      {/* House */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#d8b16d" />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 2.4, 0]} castShadow>
        <coneGeometry args={[1.8, 1.2, 4]} />
        <meshStandardMaterial color="#8b0000" />
      </mesh>

    </group>
  );
}

export default function Village() {
  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: [6, 6, 8], fov: 50 }}>

        <ambientLight intensity={1} />

        <directionalLight
          position={[5, 10, 5]}
          intensity={2}
          castShadow
        />

        <Ground />

        <House />

        <OrbitControls />

      </Canvas>
    </div>
  );
}