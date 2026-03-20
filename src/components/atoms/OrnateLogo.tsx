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
    gsap.fromTo(containerRef.current, 
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        clearProps: "all",
      }
    );
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className={cn("flex flex-col items-center justify-center text-center", className)}
    >
      {/* Ornate SVG Flourish Top - Refined Heritage Style */}
      <svg className={cn("w-32 h-12 mb-4", light ? "text-secondary" : "text-primary")} viewBox="0 0 120 40" fill="none">
        <path d="M10 25C30 5 90 5 110 25" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M15 28C35 12 85 12 105 28" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M50 15C55 10 65 10 70 15" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="60" cy="10" r="1.5" fill="currentColor" />
        <path d="M40 20L60 10L80 20" stroke="currentColor" strokeWidth="0.3" fill="none" />
      </svg>
      
      <div className="flex flex-col items-center">
        <h2 className={cn(
          "font-serif text-4xl md:text-5xl tracking-[0.25em] uppercase leading-none",
          light ? "text-secondary" : "text-primary"
        )}>
          Zing Bliss
        </h2>
        <div className="flex items-center justify-center gap-6 mt-4 w-full">
          <div className={cn("h-[1px] flex-1", light ? "bg-accent/30" : "bg-accent/40")} />
          <span className={cn(
            "text-[9px] md:text-[10px] tracking-[0.6em] uppercase font-sans font-bold italic",
            light ? "text-accent" : "text-accent"
          )}>
            Events
          </span>
          <div className={cn("h-[1px] flex-1", light ? "bg-accent/30" : "bg-accent/40")} />
        </div>
      </div>

      {/* Ornate SVG Flourish Bottom - Symmetrical Refinement */}
      <svg className={cn("w-32 h-12 mt-4 rotate-180", light ? "text-secondary" : "text-primary")} viewBox="0 0 120 40" fill="none">
        <path d="M10 25C30 5 90 5 110 25" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M15 28C35 12 85 12 105 28" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
        <circle cx="60" cy="10" r="1" fill="currentColor" />
      </svg>
    </div>
  );
};
