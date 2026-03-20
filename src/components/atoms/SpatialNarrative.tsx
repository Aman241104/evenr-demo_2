"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

export const SpatialNarrative = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLButtonElement>(null);
  const waveRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (isPlaying) {
      waveRefs.current.forEach((wave, i) => {
        gsap.to(wave, {
          scaleY: 2 + Math.random() * 3,
          duration: 0.4 + Math.random() * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        });
      });
    } else {
      waveRefs.current.forEach((wave) => {
        gsap.to(wave, {
          scaleY: 1,
          duration: 0.5,
          overwrite: true,
          ease: "power2.out",
        });
      });
    }
  }, [isPlaying]);

  return (
    <button
      ref={containerRef}
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed bottom-10 right-10 z-[60] flex items-center gap-4 group"
      aria-label="Toggle Spatial Narrative"
    >
      <div className="flex flex-col items-end">
        <span className="text-[8px] tracking-[0.4em] uppercase text-primary/40 group-hover:text-primary transition-colors">
          Spatial Narrative
        </span>
        <span className="text-[8px] tracking-[0.2em] uppercase text-accent font-bold">
          {isPlaying ? "Live" : "Muted"}
        </span>
      </div>

      {/* Gold Oscillating Wave */}
      <div className="flex items-center gap-1 h-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => { waveRefs.current[i] = el; }}
            className={cn(
              "w-[2px] h-2 bg-accent rounded-full transition-opacity",
              !isPlaying && "opacity-30"
            )}
          />
        ))}
      </div>
    </button>
  );
};
