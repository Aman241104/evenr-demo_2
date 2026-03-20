"use client";

import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
}

const glyphs = "ABCDEFGHIJKLM NOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?";

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const startGlitch = useCallback(() => {
    if (isGlitching) return;
    setIsGlitching(true);

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        prev
          .split("")
          .map((char, index) => {
            if (index < iterations) return text[index];
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
        setIsGlitching(false);
      }

      iterations += 1 / 3;
    }, 30);
  }, [text, isGlitching]);

  return (
    <span 
      onMouseEnter={startGlitch}
      onClick={startGlitch}
      className={cn("cursor-default font-serif inline-block touch-manipulation", className)}
    >
      {displayText}
    </span>
  );
};
