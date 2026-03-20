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

  useGSAP(() => {
    gsap.fromTo(".testimonial-card", 
      {
        y: 100,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out",
        clearProps: "all",
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 md:py-64 px-6 md:px-12 bg-secondary relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] md:text-[25vw] font-serif text-primary opacity-[0.02] select-none pointer-events-none italic">
        Elegance
      </div>

      <div className="max-w-7xl mx-auto relative min-h-auto lg:min-h-[1000px]">
        <div className="text-center mb-16 md:mb-32">
          <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4 md:mb-6 block font-light">
            03 — Kind Words
          </span>
          <h2 className="text-4xl md:text-8xl font-serif text-primary mb-8 leading-none">
            THE <span className="italic">PRESTIGE</span> <br /> EXPERIENCE
          </h2>
        </div>

        {/* Scattered Editorial Layout */}
        <div className="relative h-full flex flex-col lg:block gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className={cn(
                "testimonial-card absolute w-full lg:w-[450px] bg-white p-12 shadow-2xl border border-primary/5 z-10 transition-transform duration-700 hover:z-20 group",
                item.pos,
                item.rotate,
                "relative lg:absolute mb-12 lg:mb-0"
              )}
            >
              {/* Tape Accent */}
              <TapeEffect className="-top-2 left-1/2 -translate-x-1/2 opacity-60" />
              
              <Quote className="w-8 h-8 text-accent/20 mb-8 group-hover:text-accent/40 transition-colors" />
              
              <p className="text-xl md:text-2xl font-serif italic text-primary leading-snug mb-12">
                &quot;{item.quote}&quot;
              </p>
              
              <div className="flex flex-col border-t border-primary/5 pt-8">
                <span className="text-accent text-sm font-serif mb-1">
                  {item.author}
                </span>
                <span className="text-[8px] tracking-[0.3em] uppercase opacity-40">
                  {item.event}
                </span>
              </div>

              {/* Technical Stamp */}
              <div className="absolute bottom-4 right-4 text-[6px] font-mono opacity-10 tracking-widest uppercase">
                Verified Orchestration — 2026
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
