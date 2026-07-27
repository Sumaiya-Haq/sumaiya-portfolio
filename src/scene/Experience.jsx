import { OrbitControls } from "@react-three/drei";
import Ground from "../world/Ground";
import Lights from "./Lights";

export default function Experience() {
  return (
    <>
      <Lights />
      <Ground />

      <OrbitControls
        target={[0, 0, 0]}
        maxPolarAngle={Math.PI / 2.2}
      />
    </>
  );
}