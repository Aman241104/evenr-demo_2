"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "outline",
  className,
}) => {
  const variants = {
    primary: "bg-primary text-secondary border-primary",
    secondary: "bg-secondary text-primary border-primary/10",
    accent: "bg-accent text-primary border-accent",
    outline: "bg-transparent text-primary border-primary/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full border text-[8px] tracking-[0.2em] uppercase font-light transition-all hover:bg-primary hover:text-secondary",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
