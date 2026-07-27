export default function VillageRoad() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0.02, 0]}
      receiveShadow
    >
      <planeGeometry args={[8, 120]} />
      <meshStandardMaterial color="#8B6B45" />
    </mesh>
  );
}