import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useStore } from '../store/useStore'

function Building({ position, color = '#d4a373', size = [2, 2, 2], label, children }) {
  const ref = useRef()
  const setInteraction = useStore((state) => state.setInteraction)
  const playerPos = useStore((state) => state.playerPosition)

  useFrame(() => {
    if (!ref.current) return
    const dist = playerPos ? Math.sqrt(
      Math.pow(ref.current.position.x - playerPos[0], 2) +
      Math.pow(ref.current.position.z - playerPos[2], 2)
    ) : Infinity
    if (dist < 3) {
      setInteraction(label)
    } else if (dist > 4 && useStore.getState().interactionTarget === label) {
      setInteraction(null)
    }
  })

  return (
    <group ref={ref} position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.1} />
      </mesh>
      {children}
    </group>
  )
}

function Tree({ position, scale = 1 }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 1, 6]} />
        <meshStandardMaterial color="#8B5A2B" />
      </mesh>
      <mesh position={[0, 1.8, 0]} castShadow>
        <sphereGeometry args={[0.6 * scale, 6]} />
        <meshStandardMaterial color="#2D6A4F" />
      </mesh>
    </group>
  )
}

export function Village() {
  return (
    <group>
      {/* Welcome Gate */}
      <group position={[0, 0, -30]}>
        <mesh position={[-0.8, 1.5, 0]}>
          <boxGeometry args={[0.3, 3, 0.3]} />
          <meshStandardMaterial color="#8B5A2B" />
        </mesh>
        <mesh position={[0.8, 1.5, 0]}>
          <boxGeometry args={[0.3, 3, 0.3]} />
          <meshStandardMaterial color="#8B5A2B" />
        </mesh>
        <mesh position={[0, 3, 0]}>
          <boxGeometry args={[2.2, 0.3, 0.3]} />
          <meshStandardMaterial color="#8B5A2B" />
        </mesh>
      </group>

      {/* Main House */}
      <Building position={[0, 0, -10]} color="#d4a373" size={[3, 2, 3]} label="About">
        <mesh position={[0, 2, 0]}>
          <coneGeometry args={[2.5, 1.2, 4]} />
          <meshStandardMaterial color="#c0392b" />
        </mesh>
        <mesh position={[0, -0.5, 1.6]}>
          <boxGeometry args={[0.8, 1.2, 0.1]} />
          <meshStandardMaterial color="#f1c40f" />
        </mesh>
      </Building>

      {/* Tea Stall */}
      <Building position={[-6, 0, -5]} color="#e67e22" size={[2.5, 1.5, 2]} label="Skills">
        <mesh position={[0, 1.2, 1.2]}>
          <cylinderGeometry args={[0.3, 0.4, 0.3, 8]} />
          <meshStandardMaterial color="#d35400" />
        </mesh>
      </Building>

      {/* Rice Field */}
      <group position={[10, 0, 0]}>
        {Array.from({ length: 40 }, (_, i) => {
          const x = (i % 8) * 1.2 - 4.5
          const z = Math.floor(i / 8) * 1.2 - 3
          return (
            <mesh key={i} position={[x, 0.1, z]}>
              <cylinderGeometry args={[0.05, 0.08, 0.3, 4]} />
              <meshStandardMaterial color="#7CB342" />
            </mesh>
          )
        })}
        <Building position={[-2, 0, 2]} color="#3498db" size={[1.2, 1.2, 1.2]} label="Hospital" />
        <Building position={[2, 0, 2]} color="#9b59b6" size={[1.2, 1.2, 1.2]} label="School Project" />
        <Building position={[0, 0, -2]} color="#e74c3c" size={[1.2, 1.2, 1.2]} label="Research Lab" />
      </group>

      {/* School */}
      <Building position={[-8, 0, 12]} color="#f39c12" size={[3, 2.5, 3]} label="Education">
        <mesh position={[0, 2.2, 0]}>
          <boxGeometry args={[3.6, 0.3, 0.3]} />
          <meshStandardMaterial color="#e67e22" />
        </mesh>
      </Building>

      {/* Village Market */}
      <Building position={[7, 0, 18]} color="#8e44ad" size={[3, 2, 4]} label="Experience">
        <mesh position={[1.2, 0.4, 0]}>
          <boxGeometry args={[0.8, 0.8, 1.2]} />
          <meshStandardMaterial color="#d35400" />
        </mesh>
        <mesh position={[-1.2, 0.4, 0]}>
          <boxGeometry args={[0.8, 0.8, 1.2]} />
          <meshStandardMaterial color="#d35400" />
        </mesh>
      </Building>

      {/* River */}
      <mesh position={[0, -0.1, 35]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 8]} />
        <meshStandardMaterial color="#2980b9" transparent opacity={0.8} roughness={0.2} metalness={0.4} />
      </mesh>

      {/* Bamboo Bridge */}
      <group position={[0, 0.2, 40]}>
        <mesh position={[-1.5, 0.2, 0]}>
          <boxGeometry args={[0.2, 0.2, 4]} />
          <meshStandardMaterial color="#8B5A2B" />
        </mesh>
        <mesh position={[1.5, 0.2, 0]}>
          <boxGeometry args={[0.2, 0.2, 4]} />
          <meshStandardMaterial color="#8B5A2B" />
        </mesh>
        {[-1.8, -0.6, 0.6, 1.8].map((z, i) => (
          <mesh key={i} position={[0, 0.4, z]}>
            <boxGeometry args={[3.2, 0.1, 0.3]} />
            <meshStandardMaterial color="#c9b99a" />
          </mesh>
        ))}
      </group>

      {/* Boat Dock */}
      <Building position={[0, 0, 48]} color="#16a085" size={[2.5, 1.5, 3]} label="Contact">
        <mesh position={[0, 0.2, 1.8]}>
          <cylinderGeometry args={[0.4, 0.6, 0.4, 8]} />
          <meshStandardMaterial color="#d35400" />
        </mesh>
      </Building>

      {/* Forest */}
      <group position={[-15, 0, 30]}>
        {Array.from({ length: 15 }, (_, i) => {
          const angle = Math.random() * Math.PI * 2
          const radius = 2 + Math.random() * 4
          return (
            <Tree
              key={i}
              position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
              scale={0.8 + Math.random() * 0.4}
            />
          )
        })}
      </group>

      {/* Cave */}
      <Building position={[-18, 0, 42]} color="#2c3e50" size={[2, 1.5, 2]} label="Cave" />

      {/* Hilltop */}
      <group position={[18, 0, -18]}>
        <mesh position={[0, 1.5, 0]}>
          <coneGeometry args={[3, 3, 8]} />
          <meshStandardMaterial color="#5D6D7E" />
        </mesh>
        <mesh position={[0, 3.2, 0]}>
          <boxGeometry args={[0.8, 0.2, 0.8]} />
          <meshStandardMaterial color="#8B5A2B" />
        </mesh>
        <mesh position={[0.8, 3.2, 0]}>
          <boxGeometry args={[0.8, 0.1, 0.4]} />
          <meshStandardMaterial color="#8B5A2B" />
        </mesh>
        <mesh position={[0.8, 2.9, 0.2]}>
          <boxGeometry args={[0.1, 0.3, 0.1]} />
          <meshStandardMaterial color="#8B5A2B" />
        </mesh>
        <mesh position={[0.8, 2.9, -0.2]}>
          <boxGeometry args={[0.1, 0.3, 0.1]} />
          <meshStandardMaterial color="#8B5A2B" />
        </mesh>
      </group>

      {/* Trees around village */}
      <Tree position={[-4, 0, -15]} scale={1.2} />
      <Tree position={[5, 0, -18]} scale={1} />
      <Tree position={[-10, 0, -3]} scale={1.1} />
      <Tree position={[12, 0, -8]} scale={0.9} />
      <Tree position={[-12, 0, 10]} scale={1.3} />
      <Tree position={[14, 0, 12]} scale={1} />
      <Tree position={[-6, 0, 25]} scale={1.1} />
      <Tree position={[8, 0, 28]} scale={0.9} />
    </group>
  )
}