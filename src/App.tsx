import { Center, OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import OfficeImperialTobacco from './models/OfficeImperialTobacco'

function App() {

  return (
    <Canvas shadows>

      <OrbitControls makeDefault />


      <Center>

        <OfficeImperialTobacco />

      </Center>

    </Canvas>
  )
}

export default App
