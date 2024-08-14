// src/components/FrontPageScene.js
import React, { Suspense, useRef } from 'react'; 
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';

const HandModel = () => {
  console.log("HandModel component is being rendered.");

  // Unconditionally load the GLTF model and texture
  const { scene } = useGLTF('/robothands.glb'); // Load the 3D model
  console.log("GLTF model loaded successfully.");

  const texture = useTexture('/textures/hand_texture.jpg'); // Load the texture
  console.log("Texture loaded successfully.");

  const handRef = useRef();

  // Apply the texture to the hand model
  console.log("Applying texture to the model...");
  scene.traverse((child) => {
    if (child.isMesh) {
      console.log("Texture applied to mesh:", child.name);
      child.material.map = texture;
    }
  });

  console.log("Returning the hand model component.");
  return <primitive ref={handRef} object={scene} scale={[2, 2, 2]} position={[0, 0, 0]} />;
};

const Checkerboard = () => {
  console.log("Rendering Checkerboard component.");

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry attach="geometry" args={[10, 10]} />
      <meshStandardMaterial attach="material" color="gray" />
    </mesh>
  );
};

const FrontPageScene = () => {
  console.log("Rendering FrontPageScene component.");

  return (
    <>
      <Canvas style={{ height: '100vh', background: 'black' }} shadows>
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <spotLight position={[0, 5, 5]} angle={0.6} penumbra={0.5} intensity={750} castShadow />
        <spotLight position={[0, -3, 3]} angle={0.7} penumbra={1} intensity={1} castShadow />

        <Suspense fallback={null}>
          <Checkerboard />
          <HandModel />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </>
  );
};

export default FrontPageScene;
