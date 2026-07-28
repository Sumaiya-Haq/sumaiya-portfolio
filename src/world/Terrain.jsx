export function Terrain() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[200, 200, 60, 60]} />
      <meshStandardMaterial color="#6b8e6b" roughness={0.8} metalness={0} />
    </mesh>
  )
}