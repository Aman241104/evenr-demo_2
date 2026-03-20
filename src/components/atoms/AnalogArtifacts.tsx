"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const AnalogArtifacts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden opacity-20">
      {/* Ink Smudge Top Left */}
      <div className="artifact absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" data-speed="0.05" />
      
      {/* Torn Edge Signature Bottom Right */}
      <div className="artifact absolute bottom-12 right-12 w-64 h-px bg-primary/20 rotate-[-15deg]" data-speed="0.1" />
      <div className="artifact absolute bottom-14 right-12 w-48 h-px bg-primary/10 rotate-[-15deg]" data-speed="0.12" />

      {/* Floating Dust Particles (Large & Slow) */}
      <div className="artifact absolute rounded-full bg-primary/5 blur-sm" style={{ width: '150px', height: '150px', left: '20%', top: '30%' }} data-speed="0.08" />
      <div className="artifact absolute rounded-full bg-primary/5 blur-sm" style={{ width: '250px', height: '250px', left: '70%', top: '60%' }} data-speed="0.12" />
      <div className="artifact absolute rounded-full bg-primary/5 blur-sm" style={{ width: '180px', height: '180px', left: '40%', top: '80%' }} data-speed="0.06" />
    </div>
  );
};

// Hook to handle artifact parallax
export const useArtifactMotion = () => {
  useGSAP(() => {
    const artifacts = document.querySelectorAll(".artifact");
    artifacts.forEach((art) => {
      const speed = parseFloat(art.getAttribute("data-speed") || "0.1");
      gsap.to(art, {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        y: () => window.innerHeight * speed,
        ease: "none",
      });
    });
  }, []);
};
