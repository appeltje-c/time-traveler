import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import TimeMachine from './models/TimeMachine'

function App() {

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>

      <Suspense fallback={null}>
        <Stage preset="soft" intensity={1} environment="city">
         
        </Stage>
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  )
}

export default App
