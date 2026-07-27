export default function Lights() {
  return (
    <>
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[30, 40, 20]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  );
}