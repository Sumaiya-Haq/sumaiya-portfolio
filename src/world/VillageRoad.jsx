export default function VillageRoad() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0.02, 0]}
    >
      <planeGeometry args={[8, 80]} />
      <meshStandardMaterial color="brown" />
    </mesh>
  );
}