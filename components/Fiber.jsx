import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Sky, Environment, PerspectiveCamera, OrthographicCamera, OrbitControls, Stats } from '@react-three/drei'
import Box from './Box';


const Fiber = () => {
  return (
    <Canvas camera={{ position: [0, 2, 20], fov: 40 }}>
      <fog attach="fog" args={['white', 0, 500]} />
      <Sky sunPosition={[100, 10, 100]} distance={1000} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
    </Canvas>
  )
};

export default Fiber;