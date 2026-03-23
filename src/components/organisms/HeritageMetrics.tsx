"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BotanicalFlourish } from "@/components/atoms/AnalogAccents";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: "15+", label: "Years of Excellence" },
  { value: "300+", label: "Bespoke Orchestrations" },
  { value: "100%", label: "Absolute Discretion" },
  { value: "24/7", label: "Global Concierge" },
];

export const HeritageMetrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const validRefs = metricsRef.current.filter(Boolean);
    if (validRefs.length === 0) return;

    gsap.fromTo(
      validRefs,
      { y: 40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-6 md:px-12 bg-secondary border-b border-primary/5 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <BotanicalFlourish className="w-48 h-auto -top-12 right-12 text-accent/10 -rotate-12" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0 relative z-10" data-gsap-reveal>
        
        {/* Lead Text */}
        <div className="w-full md:w-1/2">
          <span className="text-accent text-[10px] md:text-[12px] tracking-[0.4em] uppercase mb-4 block font-light">
            Vision & Mission
          </span>
          <h3 className="text-2xl md:text-4xl font-serif text-primary italic leading-tight font-light">
            Achieving excellence through reliability, creativity, and strong business ethics.
          </h3>
        </div>

        {/* Metrics Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-8 md:gap-16">
          {metrics.slice(0, 2).map((metric, idx) => (
            <div 
              key={idx} 
              ref={(el) => { metricsRef.current[idx] = el; }}
              className="flex flex-col items-center md:items-start border-l border-primary/10 pl-8"
            >
              <span className="text-5xl md:text-7xl font-serif text-primary mb-2 font-light">
                {metric.value}
              </span>
              <span className="text-[10px] md:text-[12px] tracking-[0.2em] uppercase text-primary/50 font-light">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
