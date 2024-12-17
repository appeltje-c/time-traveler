import './App.css'
import { Canvas } from '@react-three/fiber'
import OfficeImperialTobacco from './models/OfficeImperialTobacco'

function App() {

  return (
    <Canvas shadows className='r3f'>

      <OfficeImperialTobacco />


    </Canvas>
  )
}

export default App
