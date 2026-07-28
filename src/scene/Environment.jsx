import { Sky } from '@react-three/drei'

export function Environment() {
  return <Sky distance={4500} sunPosition={[100, 20, 100]} inclination={0.6} azimuth={0.1} />
}