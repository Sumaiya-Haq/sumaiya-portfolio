import { Sky } from "@react-three/drei";

export default function VillageSky() {
  return (
    <Sky
      distance={450000}
      sunPosition={[100, 20, 100]}
      inclination={0.5}
      azimuth={0.25}
    />
  );
}