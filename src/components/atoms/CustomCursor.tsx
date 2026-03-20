"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "none",
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest("button, a, .hover-trigger");
      const galleryItem = target.closest(".gallery-trigger");
      
      if (galleryItem) {
        gsap.to(follower, {
          scale: 4,
          backgroundColor: "rgba(245, 245, 240, 1)", // Ivory
          mixBlendMode: "normal",
          border: "none",
          duration: 0.4,
        });
        gsap.to(label, { opacity: 1, duration: 0.3 });
      } else if (hoverable) {
        gsap.to(follower, {
          scale: 2.5,
          backgroundColor: "white",
          mixBlendMode: "difference",
          border: "none",
          duration: 0.3,
        });
        gsap.to(label, { opacity: 0, duration: 0.2 });
      } else {
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "transparent",
          mixBlendMode: "difference",
          border: "1px solid white",
          duration: 0.3,
        });
        gsap.to(label, { opacity: 0, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Precision Point */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      {/* Outer Halo / Interaction Lens */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference"
      >
        <span 
          ref={labelRef}
          className="text-[4px] tracking-[0.2em] uppercase text-primary font-bold opacity-0"
        >
          View
        </span>
      </div>
    </>
  );
};
