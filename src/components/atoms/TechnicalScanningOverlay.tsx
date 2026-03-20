"use client";

import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface TechnicalScanningOverlayProps {
  active: boolean;
  title: string;
}

export const TechnicalScanningOverlay: React.FC<TechnicalScanningOverlayProps> = ({ active, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scanBarRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState({
    acoustic: 0,
    luminance: 0,
    density: 0,
    fidelity: 0,
  });

  // Randomize metrics on mount
  useEffect(() => {
    setMetrics({
      acoustic: Math.floor(Math.random() * 40) + 60,
      luminance: Math.floor(Math.random() * 30) + 70,
      density: Math.floor(Math.random() * 50) + 50,
      fidelity: 98,
    });
  }, []);

  useGSAP(() => {
    if (active) {
      // Scanning line animation
      gsap.fromTo(scanBarRef.current, 
        { left: "0%" }, 
        { left: "100%", duration: 3, repeat: -1, ease: "none", opacity: 0.5 }
      );
    } else {
      gsap.killTweensOf(scanBarRef.current);
    }
  }, [active]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "absolute inset-0 z-40 pointer-events-none transition-opacity duration-1000",
        active ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Scanning Bar */}
      <div 
        ref={scanBarRef}
        className="absolute top-0 bottom-0 w-[1px] bg-secondary/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,245,240,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,245,240,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Data Readout - AI Analysis Simulation */}
      <div className="absolute top-8 right-8 flex flex-col gap-6 text-secondary text-[7px] font-mono tracking-[0.3em] uppercase items-end">
        <div className="flex flex-col items-end gap-1">
          <span className="text-secondary/40">Orchestration Record</span>
          <span className="text-accent">{title.split(' ').join('_').toUpperCase()}</span>
        </div>

        <div className="space-y-4 w-32">
          <MetricBar label="Acoustic Balance" value={metrics.acoustic} />
          <MetricBar label="Luminance Flow" value={metrics.luminance} />
          <MetricBar label="Social Density" value={metrics.density} />
          <MetricBar label="Orchestration Fidelity" value={metrics.fidelity} accent />
        </div>

        <div className="mt-4 pt-4 border-t border-secondary/10 flex flex-col items-end gap-1">
          <span>{new Date().toISOString().split('T')[0]}</span>
          <span className="text-accent">AUTHORIZED ACCESS ONLY</span>
        </div>
      </div>

      {/* Crosshair corners */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-secondary/20" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-secondary/20" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-secondary/20" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-secondary/20" />
    </div>
  );
};

const MetricBar = ({ label, value, accent = false }: { label: string, value: number, accent?: boolean }) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex justify-between items-center w-full">
      <span className="text-secondary/60">{label}</span>
      <span className={cn(accent ? "text-accent" : "text-secondary")}>{value}%</span>
    </div>
    <div className="h-[1px] w-full bg-secondary/10 relative overflow-hidden">
      <div 
        className={cn("absolute inset-y-0 left-0 transition-all duration-1000 delay-300", accent ? "bg-accent" : "bg-secondary/40")}
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);
