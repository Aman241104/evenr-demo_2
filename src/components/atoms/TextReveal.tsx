"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  stagger?: number;
  duration?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className,
  stagger = 0.05,
  duration = 0.8,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const chars = containerRef.current?.querySelectorAll(".char");
    if (!chars) return;

    gsap.from(chars, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 100,
      opacity: 0,
      duration: duration,
      stagger: (i) => stagger + Math.random() * 0.05, // Added jitter for human feel
      ease: "power4.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <div className="flex flex-wrap overflow-hidden">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="char inline-block transition-all duration-700 hover:text-accent hover:scale-110 hover:-translate-y-1"
            style={{ 
              whiteSpace: char === " " ? "pre" : "normal",
              transitionDelay: `${Math.random() * 100}ms`
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};
