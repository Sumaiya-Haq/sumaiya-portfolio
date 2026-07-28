import { Canvas } from '@react-three/fiber'
import { Village } from './world/Village'

function App() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, 10, 20] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 10]} castShadow />
      <Village />
    </Canvas>
  )
}
export default App