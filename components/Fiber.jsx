import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {  OrbitControls, Stats } from '@react-three/drei'
import Box from './Box';


const Fiber = () => {
  return (
    <Canvas camera={{ position: [0, 2, 20], fov: 40 }}>
      <ambientLight />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />
      <Box position={[Math.floor(Math.random()*5), Math.floor(Math.random()*5),  Math.floor(Math.random()*5)]} />


      <OrbitControls />
    </Canvas>
  )
};

export default Fiber;