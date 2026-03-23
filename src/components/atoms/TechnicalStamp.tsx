"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TechnicalStampProps {
  label: string;
  value: string;
  className?: string;
  variant?: "primary" | "accent";
}

export const TechnicalStamp: React.FC<TechnicalStampProps> = ({ 
  label, 
  value, 
  className,
  variant = "primary" 
}) => {
  return (
    <div className={cn(
      "flex flex-col border-l border-t px-4 py-2 select-none pointer-events-none",
      variant === "primary" ? "border-primary/10" : "border-accent/30",
      className
    )}>
      <span className={cn(
        "text-[7px] tracking-[0.4em] uppercase font-bold mb-1",
        variant === "primary" ? "text-primary/40" : "text-accent"
      )}>
        {label}
      </span>
      <span className={cn(
        "text-[9px] tracking-[0.2em] font-mono uppercase",
        variant === "primary" ? "text-primary/60" : "text-secondary"
      )}>
        {value}
      </span>
      
      {/* Decorative corner accent */}
      <div className={cn(
        "absolute -top-px -left-px w-2 h-2 border-t border-l",
        variant === "primary" ? "border-primary/20" : "border-accent"
      )} />
    </div>
  );
};

export const EditorialTag = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn(
    "px-4 py-1.5 border border-primary/10 rounded-full text-[8px] tracking-[0.4em] uppercase font-light text-primary/60 flex items-center gap-3",
    className
  )}>
    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
    {children}
  </div>
);
