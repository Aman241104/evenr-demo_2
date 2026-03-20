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

export const TapeEffect = ({ className }: { className?: string }) => (
  <div className={cn("absolute w-12 h-4 bg-secondary/40 backdrop-blur-sm rotate-12 shadow-sm border-x border-primary/5 z-30", className)} />
);
