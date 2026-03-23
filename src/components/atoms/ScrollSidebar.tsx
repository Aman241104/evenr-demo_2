"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "hero", label: "Intro" },
  { id: "metrics", label: "Legacy" },
  { id: "gallery", label: "Archive" },
  { id: "services", label: "Spectrum" },
  { id: "experts", label: "Curators" },
  { id: "process", label: "Method" },
  { id: "tiers", label: "Prestige" },
];

export const ScrollSidebar = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const triggers = sections.map((_, i) => {
      return ScrollTrigger.create({
        trigger: "section", // This is a bit generic, usually better to have specific IDs
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) setActiveSection(i);
        },
      });
    });

    return () => triggers.forEach(t => t.kill());
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[80] hidden xl:flex flex-col gap-8">
      {sections.map((section, i) => (
        <div 
          key={i}
          className="flex items-center gap-4 group cursor-pointer"
          onClick={() => {
            // Smooth scroll to section logic here if needed
          }}
        >
          <div className={cn(
            "w-[1px] h-8 bg-primary/10 transition-all duration-700 origin-top",
            activeSection === i ? "scale-y-150 bg-accent h-12" : "group-hover:bg-primary/30"
          )} />
          
          <div className={cn(
            "flex flex-col opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0",
            activeSection === i && "opacity-40 translate-x-0"
          )}>
            <span className="text-[6px] tracking-[0.4em] uppercase text-accent font-bold">0{i + 1}</span>
            <span className="text-[8px] tracking-[0.2em] uppercase text-primary font-light">{section.label}</span>
          </div>
        </div>
      ))}
      
      {/* Scroll indicator text */}
      <div className="absolute -bottom-24 left-0 rotate-90 origin-left whitespace-nowrap">
        <span className="text-[8px] tracking-[0.6em] uppercase text-primary/20 font-light">
          Vertical Narrative — Prestige IV
        </span>
      </div>
    </div>
  );
};
