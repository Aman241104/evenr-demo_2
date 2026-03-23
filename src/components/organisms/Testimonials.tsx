"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { TapeEffect } from "@/components/atoms/AnalogAccents";

const testimonials = [
  {
    quote: "Zing Bliss turned our vision into a cinematic reality. Every detail of our Verdant Estate union was orchestrated with breathtaking precision.",
    author: "Isabella & Julian Sterling",
    event: "Verdant Estate Wedding",
    pos: "lg:top-0 lg:left-0",
    rotate: "rotate-[-2deg]",
  },
  {
    quote: "A level of precision I've rarely seen even in global banking. The Midnight Gala was a triumph.",
    author: "Sir Richard Hamilton",
    event: "Global Finance Summit",
    pos: "lg:top-24 lg:right-0",
    rotate: "rotate-[3deg]",
  },
  {
    quote: "They understand the nuance of prestige. Discretion was total, and the result was an intimate evening.",
    author: "The DuPont Family",
    event: "Private Heritage Soirée",
    pos: "lg:bottom-0 lg:left-1/4",
    rotate: "rotate-[-1deg]",
  },
];

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-32 md:py-64 px-6 md:px-12 bg-secondary relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif text-primary opacity-[0.01] select-none pointer-events-none italic font-light">
        Memories
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-48" data-gsap-reveal>
          <span className="text-accent text-[10px] md:text-[12px] tracking-[0.5em] uppercase mb-8 block font-light">
            Kind Words
          </span>
          <h2 className="text-4xl md:text-8xl font-serif text-primary mb-12 leading-[1.1] font-light max-w-4xl mx-auto">
            WHAT OUR <span className="italic">CLIENTS</span> <br />
            HAVE TO <span className="font-sans uppercase tracking-[0.2em] text-[0.5em] align-middle ml-4">Say</span>
          </h2>
          <div className="w-16 h-px bg-primary/20 mx-auto" />
        </div>

        {/* Scattered Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 lg:gap-32 items-start">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              data-gsap-reveal
              className={cn(
                "testimonial-card relative bg-white/40 backdrop-blur-sm p-12 md:p-16 border border-primary/5 transition-all duration-1000 group rounded-t-[1000px] rounded-b-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.03)]",
                index === 1 ? "lg:mt-32" : "",
                index === 2 ? "lg:-mt-12" : ""
              )}
            >
              {/* Refined Quote Icon */}
              <div className="mb-12 flex justify-center">
                <div className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center">
                  <span className="text-accent text-lg font-serif italic">"</span>
                </div>
              </div>
              
              <p className="text-lg md:text-xl font-serif italic text-primary/80 leading-relaxed mb-12 text-center font-light">
                {item.quote}
              </p>
              
              <div className="flex flex-col items-center pt-10 border-t border-primary/5">
                <span className="text-accent text-[11px] tracking-[0.2em] uppercase mb-2 font-bold font-sans">
                  {item.author}
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase opacity-40 font-light font-sans">
                  {item.event}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
