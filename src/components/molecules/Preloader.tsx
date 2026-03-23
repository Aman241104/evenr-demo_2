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

  return (
    <>
      {isLoading && (
        <div
          ref={preloaderRef}
          className="fixed inset-0 z-[10000] bg-primary flex flex-col items-center justify-center overflow-hidden px-6"
          style={{ clipPath: "inset(0 0 0 0)" }}
        >
          <div ref={logoRef} className="w-full max-w-[280px] md:max-w-none flex flex-col items-center justify-center gap-12">
            <span className="font-serif text-3xl md:text-5xl text-secondary tracking-widest uppercase">
              ZING BLISS
            </span>
            
            {/* Elegant Progress Line */}
            <div className="w-48 md:w-64 h-[1px] bg-secondary/10 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-accent w-full -translate-x-full animate-[scan_3s_ease-in-out_infinite]" />
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <span className="text-secondary/60 text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-light animate-pulse">
                Curating the perfect setting...
              </span>
            </div>
          </div>
        </div>
      )}

      <div ref={contentRef}>
        {children}
      </div>
    </>
  );
};
