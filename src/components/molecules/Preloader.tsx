"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { OrnateLogo } from "@/components/atoms/OrnateLogo";

export const Preloader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fallback timeout to ensure the app becomes interactive even if GSAP hangs
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (!isLoading) return;
    
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    // 1. Initial Logo Reveal
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" }
    );

    // 2. Subtle Pulse/Stay
    tl.to(logoRef.current, {
      opacity: 0.5,
      duration: 1,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut",
    });

    // 3. The "Unmask" - Lifting the veil
    tl.to(preloaderRef.current, {
      clipPath: "inset(0 0 100% 0)",
      duration: 1.2,
      ease: "power4.inOut",
    });

    // 4. Content Reveal
    tl.fromTo(
      contentRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );
  }, { scope: preloaderRef });

  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <>
      <div
        ref={preloaderRef}
        className="fixed inset-0 z-[100] bg-primary flex items-center justify-center overflow-hidden px-6"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <div ref={logoRef} className="w-full max-w-[280px] md:max-w-none flex justify-center">
          <OrnateLogo light className="scale-100 md:scale-150 w-full md:w-auto" />
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-6 left-6 md:top-12 md:left-12 w-8 h-8 md:w-12 md:h-12 border-t border-l border-accent/30" />
        <div className="absolute top-6 right-6 md:top-12 md:right-12 w-8 h-8 md:w-12 md:h-12 border-t border-r border-accent/30" />
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 w-8 h-8 md:w-12 md:h-12 border-b border-l border-accent/30" />
        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-8 h-8 md:w-12 md:h-12 border-b border-r border-accent/30" />
      </div>

      <div ref={contentRef} className="invisible">
        {children}
      </div>
    </>
  );
};
