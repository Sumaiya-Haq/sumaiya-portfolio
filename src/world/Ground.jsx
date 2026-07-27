export default function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[500, 500, 100, 100]} />
      <meshStandardMaterial color="#5D9C59" />
    </mesh>
  );
}