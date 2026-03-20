"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface OrnateLogoProps {
  className?: string;
  light?: boolean;
}

export const OrnateLogo: React.FC<OrnateLogoProps> = ({ className, light = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5,
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className={cn("flex flex-col items-center justify-center text-center", className)}
    >
      {/* Ornate SVG Flourish Top */}
      <svg className={cn("w-24 h-8 mb-2", light ? "text-secondary" : "text-primary")} viewBox="0 0 100 20" fill="none">
        <path d="M10 10C30 0 70 0 90 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M10 12C30 2 70 2 90 12" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="50" cy="5" r="1.5" fill="currentColor" />
      </svg>
      
      <div className="flex flex-col">
        <span className={cn(
          "font-serif text-3xl md:text-4xl tracking-[0.3em] uppercase",
          light ? "text-secondary" : "text-primary"
        )}>
          Zing Bliss
        </span>
        <div className="flex items-center justify-center gap-4 mt-1">
          <div className={cn("h-[1px] w-8", light ? "bg-secondary/30" : "bg-primary/30")} />
          <span className={cn(
            "text-[10px] tracking-[0.5em] uppercase font-sans font-light",
            light ? "text-secondary/70" : "text-primary/70"
          )}>
            Events
          </span>
          <div className={cn("h-[1px] w-8", light ? "bg-secondary/30" : "bg-primary/30")} />
        </div>
      </div>

      {/* Ornate SVG Flourish Bottom */}
      <svg className={cn("w-24 h-8 mt-2 rotate-180", light ? "text-secondary" : "text-primary")} viewBox="0 0 100 20" fill="none">
        <path d="M10 10C30 0 70 0 90 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M10 12C30 2 70 2 90 12" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="50" cy="5" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};
