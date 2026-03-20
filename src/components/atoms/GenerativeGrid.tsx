"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Points = () => {
  const meshRef = useRef<THREE.Points>(null);
  
  const count = 50 * 50;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 50; j++) {
        const x = (i - 25) * 1.5;
        const z = (j - 25) * 1.5;
        const y = 0;
        const index = (i * 50 + j) * 3;
        pos[index] = x;
        pos[index + 1] = y;
        pos[index + 2] = z;
      }
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const { clock, mouse } = state;
    if (!meshRef.current) return;
    
    const positionsArr = meshRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 50; j++) {
        const index = (i * 50 + j) * 3;
        const x = positionsArr[index];
        const z = positionsArr[index + 2];
        
        // Wavy movement
        const waveX = Math.sin(x * 0.3 + clock.getElapsedTime()) * 0.2;
        const waveZ = Math.cos(z * 0.3 + clock.getElapsedTime()) * 0.2;
        
        // Mouse influence
        const dx = x - mouse.x * 20;
        const dz = z - mouse.y * 20;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const attraction = Math.max(0, 2 - dist * 0.2);
        
        positionsArr[index + 1] = waveX + waveZ + attraction;
      }
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.08} 
        color="#004B23" 
        transparent 
        opacity={0.3} 
        sizeAttenuation={true} 
      />
    </points>
  );
};

export const GenerativeGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
      <Canvas camera={{ position: [0, 15, 25], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Points />
      </Canvas>
    </div>
  );
};
