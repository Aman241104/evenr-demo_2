"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnnotationProps {
  label: string;
  value: string;
  className?: string;
  dotPosition?: "left" | "right" | "top" | "bottom";
}

export const TechnicalAnnotation: React.FC<AnnotationProps> = ({
  label,
  value,
  className,
  dotPosition = "left",
}) => {
  return (
    <div className={cn("absolute z-30 pointer-events-none flex flex-col gap-1", className)}>
      <div className="flex items-center gap-3">
        {dotPosition === "left" && (
          <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
        )}
        <div className="h-[1px] w-12 bg-primary/20" />
        <span className="text-[7px] tracking-[0.4em] uppercase text-primary/40 font-mono">
          {label}
        </span>
        {dotPosition === "right" && (
          <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
        )}
      </div>
      <div className="pl-15">
        <span className="text-[9px] tracking-[0.2em] uppercase text-primary font-mono bg-secondary/80 backdrop-blur-sm px-2 py-0.5 border border-primary/5">
          {value}
        </span>
      </div>
    </div>
  );
};

export const BlueprintGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]" 
       style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
  />
);
