import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useControls } from '../hooks/useControls'
import { useStore } from '../store/useStore'
import { Vector3 } from 'three'

export function Player() {
  const ref = useRef()
  const controls = useControls()
  const setPlayerPosition = useStore((state) => state.setPlayerPosition)

  const speed = controls.run ? 6 : 3
  const moveVec = new Vector3()

  useFrame((_, delta) => {
    if (!ref.current) return

    const forward = new Vector3(0, 0, -1).applyQuaternion(ref.current.quaternion)
    const right = new Vector3(1, 0, 0).applyQuaternion(ref.current.quaternion)

    moveVec.set(0, 0, 0)
    if (controls.forward) moveVec.add(forward)
    if (controls.backward) moveVec.sub(forward)
    if (controls.right) moveVec.add(right)
    if (controls.left) moveVec.sub(right)

    if (moveVec.length() > 0) {
      moveVec.normalize().multiplyScalar(speed * delta)
      ref.current.position.add(moveVec)
      // rotate character to face movement direction
      const angle = Math.atan2(moveVec.x, moveVec.z)
      ref.current.rotation.y = angle
    }

    // simple jump (no physics yet)
    if (controls.jump && ref.current.position.y <= 0.1) {
      ref.current.position.y = 0.5
    }
    // gravity
    if (ref.current.position.y > 0) {
      ref.current.position.y -= 0.5 * delta
    }
    if (ref.current.position.y < 0) ref.current.position.y = 0

    setPlayerPosition(ref.current.position.toArray())
  })

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <mesh position={[0, 0.5, 0]}>
        <capsuleGeometry args={[0.4, 0.8, 4, 8]} />
        <meshStandardMaterial color="#e8b88a" />
      </mesh>
      <mesh position={[0, 1.4, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#f5d0b8" />
      </mesh>
      {/* placeholder model: you can replace with your own */}
    </group>
  )
}