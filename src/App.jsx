import { Canvas } from "@react-three/fiber";
import Experience from "./scene/Experience";

export default function App() {
  return (
    <Canvas
      camera={{
        position: [8, 8, 8],
        fov: 60,
      }}
    >
      <color attach="background" args={["skyblue"]} />
      <Experience />
    </Canvas>
  );
}