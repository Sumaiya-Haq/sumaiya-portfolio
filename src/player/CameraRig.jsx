import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'

export function CameraRig({ target, distance = 5, height = 3 }) {
  const pivotRef = useRef()
  const theta = useRef(0)
  const phi = useRef(Math.PI / 6) // 30° elevation

  useEffect(() => {
    const onMouseMove = (e) => {
      const sensitivity = 0.005
      theta.current -= e.movementX * sensitivity
      phi.current -= e.movementY * sensitivity
      phi.current = Math.max(0.1, Math.min(Math.PI / 2 - 0.1, phi.current))
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

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

  return (
    <group ref={pivotRef}>
      <perspectiveCamera fov={60} near={0.1} far={100} />
    </group>
  )
}