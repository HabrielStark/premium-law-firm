import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function GavelModel({ ...props }) {
  const group = useRef<THREE.Group>();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005;
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Gavel head */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.8, 0.4, 0.4]} />
        <meshStandardMaterial
          color="#8B4513"
          metalness={0.3}
          roughness={0.7}
          envMapIntensity={1}
        />
      </mesh>
      
      {/* Gavel handle */}
      <mesh position={[0, -0.2, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1.5, 32]} />
        <meshStandardMaterial
          color="#8B4513"
          metalness={0.3}
          roughness={0.7}
          envMapIntensity={1}
        />
      </mesh>
    </group>
  );
}