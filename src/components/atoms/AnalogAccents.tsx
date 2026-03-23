"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface HandDrawnCircleProps {
  className?: string;
  trigger?: React.RefObject<HTMLElement | null>;
  color?: string;
  delay?: number;
}

export const HandDrawnCircle: React.FC<HandDrawnCircleProps> = ({ 
  className, 
  trigger, 
  color = "currentColor",
  delay = 0 
}) => {
  const pathRef = React.useRef<SVGPathElement>(null);

  useGSAP(() => {
    if (!trigger?.current) return;

    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top 80%",
      },
      delay
    });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, [trigger]);

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={cn("absolute pointer-events-none overflow-visible", className)}
      fill="none"
    >
      <path
        ref={pathRef}
        d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 52,11"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        style={{ filter: "url(#rough-edge)" }}
      />
    </svg>
  );
};

export const BotanicalFlourish = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={cn("absolute pointer-events-none select-none", className)}
  >
    <path 
      d="M50 90C50 90 45 70 30 60C15 50 10 30 30 20C50 10 70 30 70 50C70 70 55 90 50 90Z" 
      stroke="currentColor" 
      strokeWidth="0.5" 
      strokeDasharray="2 2"
    />
    <path 
      d="M50 10C50 10 55 30 70 40C85 50 90 70 70 80C50 90 30 70 30 50C30 30 45 10 50 10Z" 
      stroke="currentColor" 
      strokeWidth="0.5"
    />
    <path 
      d="M10 50C10 50 30 45 40 30C50 15 70 10 80 30C90 50 70 70 50 70C30 70 10 55 10 50Z" 
      stroke="currentColor" 
      strokeWidth="0.5" 
      strokeDasharray="4 4"
    />
  </svg>
);

export const TapeEffect = ({ className }: { className?: string }) => (
  <div className={cn("absolute w-12 h-4 bg-secondary/40 backdrop-blur-sm rotate-12 shadow-sm border-x border-primary/5 z-30", className)} />
);

export const ArchFrame = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 150" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={cn("pointer-events-none select-none", className)}
  >
    <path 
      d="M5 145V50C5 25.1472 25.1472 5 50 5C74.8528 5 95 25.1472 95 50V145" 
      stroke="currentColor" 
      strokeWidth="1"
    />
  </svg>
);
