import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

export function CameraRig({ target, distance = 6, height = 3 }) {
  const pivotRef = useRef()
  const theta = useRef(0)
  const phi = useRef(Math.PI / 6)

  // Mouse rotation
  useFrame(() => {
    if (!pivotRef.current || !target) return
    const pos = new Vector3()
    target.getWorldPosition(pos)

    const x = distance * Math.sin(theta.current) * Math.cos(phi.current)
    const y = distance * Math.sin(phi.current)
    const z = distance * Math.cos(theta.current) * Math.cos(phi.current)

    pivotRef.current.position.copy(pos).add(new Vector3(x, y, z))
    pivotRef.current.lookAt(pos)
  })

  // Mouse move listener
  useFrame(() => {
    // We'll use a separate effect for mouse move
  })

  // Attach mouse events
  const mouseMove = (e) => {
    const sensitivity = 0.005
    theta.current -= e.movementX * sensitivity
    phi.current -= e.movementY * sensitivity
    phi.current = Math.max(0.1, Math.min(Math.PI / 2 - 0.1, phi.current))
  }

  // Only attach if we have a target
  const ref = useRef()
  useFrame(() => {
    if (!ref.current) {
      window.addEventListener('mousemove', mouseMove)
      ref.current = true
    }
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <group ref={pivotRef}>
      <perspectiveCamera fov={60} near={0.1} far={100} />
    </group>
  )
}