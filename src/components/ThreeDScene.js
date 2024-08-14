// src/components/ThreeDScene.js

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import galaxyBackground from '../assets/images/Galaxy-Background-HD.jpg'; // Import the new image

const Galaxy = () => {
  const pointsRef = useRef();

  // Load the texture using the imported image
  const texture = useLoader(TextureLoader, galaxyBackground);

  const particles = useMemo(() => {
    const stars = new Float32Array(5000 * 3); // 5,000 stars
    for (let i = 0; i < stars.length; i++) {
      stars[i] = (Math.random() - 0.5) * 20; // Spread out further in 3D space
    }
    return stars;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002;
    }
  });

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry attach="geometry" args={[10, 10]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
      <points ref={pointsRef}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            array={particles}
            count={particles.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial attach="material" color="white" size={0.01} /> {/* Adjusted size */}
      </points>
    </>
  );
};

const Fallback = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshBasicMaterial color="gray" />
  </mesh>
);

const ThreeDScene = () => {
  return (
    <Canvas style={{ background: 'black', height: '100vh' }}>
      <Suspense fallback={<Fallback />}>
        <Galaxy />
      </Suspense>
      <ambientLight intensity={0.5} />
    </Canvas>
  );
};

export default ThreeDScene;
