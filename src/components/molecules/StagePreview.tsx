"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { TextReveal } from "@/components/atoms/TextReveal";
import * as THREE from "three";

const StageBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group>
      {/* Central "Prestige" Element - Stylized Stage Base */}
      <mesh ref={meshRef} position={[0, -1.5, 0]}>
        <boxGeometry args={[10, 0.5, 6]} />
        <meshStandardMaterial color="#004B23" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Ornate Columns Placeholder */}
      {[...Array(4)].map((_, i) => (
        <mesh key={i} position={[i < 2 ? -4.5 : 4.5, 1, i % 2 === 0 ? -2.5 : 2.5]}>
          <cylinderGeometry args={[0.2, 0.2, 5]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
        </mesh>
      ))}

      {/* Floating Abstract "Aura" */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 2, 0]}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <MeshDistortMaterial 
            color="#D4AF37" 
            speed={3} 
            distort={0.4} 
            metalness={1} 
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Back Wall with Brand Tone */}
      <mesh position={[0, 1.5, -4]}>
        <planeGeometry args={[15, 8]} />
        <meshStandardMaterial color="#F5F5F0" opacity={0.1} transparent />
      </mesh>
    </group>
  );
};

export const StagePreview = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-primary overflow-hidden relative min-h-[80vh]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="w-full lg:w-1/3">
          <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">
            The Stage
          </span>
          <TextReveal 
            text="IMMERSIVE VENUE PREVIEWS" 
            className="text-4xl md:text-6xl font-serif text-secondary mb-8"
          />
          <p className="text-secondary/50 font-light leading-relaxed mb-12">
            Rotate and explore our signature stage architectures in high-fidelity 3D. We provide the technical precision to match the artistic vision.
          </p>
          <div className="flex gap-4">
            <div className="px-4 py-2 border border-accent/20 text-accent text-[8px] tracking-widest uppercase rounded-full">
              WebGL Powered
            </div>
            <div className="px-4 py-2 border border-accent/20 text-accent text-[8px] tracking-widest uppercase rounded-full">
              Full Interaction
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 aspect-video bg-secondary/5 rounded-sm border border-secondary/10 relative group cursor-grab active:cursor-grabbing">
          <Canvas shadows>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[12, 8, 12]} fov={35} />
              <OrbitControls 
                enableZoom={false} 
                minPolarAngle={Math.PI / 4} 
                maxPolarAngle={Math.PI / 2} 
                autoRotate
                autoRotateSpeed={0.5}
              />
              
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
              
              <StageBox />
              
              <Environment preset="city" />
            </Suspense>
          </Canvas>
          
          {/* Legend */}
          <div className="absolute bottom-6 right-6 pointer-events-none opacity-40">
            <span className="text-[8px] tracking-widest uppercase text-secondary">
              Drag to Rotate Architecture
            </span>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-secondary/5 text-[30vw] font-serif select-none pointer-events-none">
        STAGE
      </div>
    </section>
  );
};
