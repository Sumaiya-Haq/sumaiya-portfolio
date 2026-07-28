import { Canvas } from '@react-three/fiber'
import { Player } from '../player/Player'
import { CameraRig } from '../player/CameraRig'
import { Terrain } from '../world/Terrain'
import { Village } from '../world/Village'
import { Lights } from './Lights'
import { Environment } from './Environment'
import { useRef } from 'react'

export function Experience() {
  const playerRef = useRef()

  return (
    <Canvas
      shadows
      camera={{ position: [0, 6, 15], fov: 60 }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <Lights />
      <Environment />
      <Terrain />
      <group ref={playerRef}>
        <Player />
      </group>
      <Village />
      <CameraRig target={playerRef} distance={6} height={3} />
    </Canvas>
  )
}