"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { ArchFrame } from "@/components/atoms/AnalogAccents";

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: "The Signature",
    subtitle: "Essential Orchestration",
    desc: "A foundation of elegance for intimate gatherings.",
    features: [
      "Curated Venue Selection",
      "Core Vendor Coordination",
      "Day-of Timeline Execution",
      "Essential Design Blueprint",
    ],
    highlight: false,
  },
  {
    name: "The Heritage",
    subtitle: "Comprehensive Design",
    desc: "Full-scale realization of your unique narrative.",
    features: [
      "Exclusive Venue Access",
      "Complete Artistic Direction",
      "Multi-Day Event Management",
      "Custom Gastronomic Curation",
      "Dedicated Concierge Team",
    ],
    highlight: true,
  },
  {
    name: "The Pinnacle",
    subtitle: "Absolute Prestige",
    desc: "An unbounded approach to global orchestration.",
    features: [
      "Global Destination Sourcing",
      "Total Privacy & Discretion",
      "Celebrity Talent Acquisition",
      "Private Aviation Logistics",
      "Immersive Set Fabrication",
    ],
    highlight: false,
  },
];

export const OrchestrationTiers = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".tier-card",
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power2.out",
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 bg-secondary/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-32" data-gsap-reveal>
          <span className="text-accent text-[10px] md:text-[12px] tracking-[0.4em] uppercase mb-4 md:mb-6 block font-light">
            Our Packages
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-primary leading-[1] font-light">
            INVESTMENT <span className="italic">TIERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              data-gsap-reveal
              className={cn(
                "tier-card relative flex flex-col items-center text-center px-8 py-16 md:px-12 md:py-24 transition-all duration-700 overflow-hidden",
                tier.highlight 
                  ? "bg-primary text-secondary rounded-t-[140px] rounded-b-[10px] scale-105 shadow-2xl z-10" 
                  : "glass-prestige rounded-t-[100px] rounded-b-[10px] border-primary/5 text-primary"
              )}
            >
              {/* Subtle Arch Background Texture */}
              <ArchFrame className={cn("w-full h-full inset-0 m-auto", tier.highlight ? "text-secondary opacity-5" : "text-primary opacity-5")} />

              {/* Decorative Arch Icon */}
              <div className={cn(
                "relative z-10 w-12 h-16 rounded-t-full border mb-8 flex items-center justify-center",
                tier.highlight ? "border-secondary/20" : "border-primary/20"
              )}>
                <div className={cn("w-2 h-2 rounded-full", tier.highlight ? "bg-accent" : "bg-primary/40")} />
              </div>

              <h3 className="relative z-10 text-3xl md:text-4xl font-serif italic mb-2 tracking-tight font-light">
                {tier.name}
              </h3>
              <span className={cn(
                "relative z-10 text-[10px] tracking-[0.3em] uppercase font-light mb-6",
                tier.highlight ? "text-accent" : "text-primary/40"
              )}>
                {tier.subtitle}
              </span>

              <p className={cn(
                "relative z-10 text-sm font-light italic mb-12",
                tier.highlight ? "text-secondary/70" : "text-primary/60"
              )}>
                {tier.desc}
              </p>

              <div className="relative z-10 w-full h-px mb-12" style={{ backgroundColor: tier.highlight ? 'rgba(255,255,255,0.1)' : 'rgba(74,60,49,0.1)' }} />

              <ul className="relative z-10 flex flex-col gap-6 mb-16 w-full text-sm font-light">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center justify-center gap-3">
                    <span className={cn("text-[10px] tracking-[0.1em] uppercase", tier.highlight ? "text-secondary/90" : "text-primary/80")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-auto">
                <MagneticButton 
                  className={cn(
                    "px-10 py-4 text-[9px] tracking-[0.3em] uppercase transition-all shadow-sm",
                    tier.highlight 
                      ? "bg-secondary text-primary hover:bg-accent hover:text-primary" 
                      : "bg-transparent border border-primary/20 text-primary hover:bg-primary hover:text-secondary"
                  )}
                >
                  Inquire Now
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
