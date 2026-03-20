"use client";

import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    gsap.to({}, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[1000] pointer-events-none origin-left overflow-hidden">
      <div 
        className="h-full bg-accent transition-transform duration-100 ease-out"
        style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
      />
      {/* Subtle glow effect */}
      <div 
        className="absolute top-0 right-0 h-full w-24 bg-gradient-to-r from-transparent to-accent/50 blur-sm"
        style={{ left: `${progress * 100}%`, transform: 'translateX(-100%)' }}
      />
    </div>
  );
};
