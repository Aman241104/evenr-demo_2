"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Reset scroll to top
    window.scrollTo(0, 0);

    // Initial Curtain Reveal (Wiping Up)
    tl.set(curtainRef.current, { scaleY: 1, transformOrigin: "bottom" });
    
    tl.to(curtainRef.current, {
      scaleY: 0,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.2,
    });

    // Fade and Slide Content
    tl.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all",
      },
      "-=0.6"
    );
  }, [children]);

  return (
    <>
      <div 
        ref={curtainRef}
        className="fixed inset-0 z-[1000] bg-primary pointer-events-none"
      />
      <div ref={containerRef}>
        {children}
      </div>
    </>
  );
}
