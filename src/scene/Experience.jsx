import { OrbitControls } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <ambientLight intensity={2} />

      <directionalLight
        position={[10, 20, 10]}
        intensity={2}
      />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Cube */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <gridHelper args={[20, 20]} />

      <axesHelper args={[5]} />

      <OrbitControls />
    </>
  );
}