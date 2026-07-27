import { Canvas } from "@react-three/fiber";
import Experience from "./scene/Experience";

export default function App() {
  return (
    <Canvas
      shadows
      camera={{
        position: [20, 15, 20],
        fov: 50,
      }}
    >
      <Experience />
    </Canvas>
  );
}