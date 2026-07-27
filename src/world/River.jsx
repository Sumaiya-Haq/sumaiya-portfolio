export default function River() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 65]}
      receiveShadow
    >
      <planeGeometry args={[500, 40]} />
      <meshStandardMaterial color="#4DA6FF" />
    </mesh>
  );
}