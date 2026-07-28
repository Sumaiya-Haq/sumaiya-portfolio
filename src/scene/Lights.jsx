export function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[50, 30, 20]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <hemisphereLight color="#87ceeb" groundColor="#4a7c59" intensity={0.6} />
    </>
  )
}