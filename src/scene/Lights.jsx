export default function Lights() {
  return (
    <>
      <ambientLight intensity={2} />

      <directionalLight
        position={[20, 30, 20]}
        intensity={3}
      />
    </>
  );
}