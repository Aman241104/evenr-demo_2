"use client";

import React, { useRef, useState } from "react";
import { TextReveal } from "@/components/atoms/TextReveal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Zing Bliss didn't just plan a wedding; they orchestrated a masterpiece. Every sensory detail—from the scent of the foyer to the acoustics of the ballroom—was perfection.",
    author: "Isabella & Julian Sterling",
    event: "Verdant Estate Wedding",
  },
  {
    quote: "A level of precision I've rarely seen even in global banking. The Midnight Gala was a triumph of logistics and luxury branding.",
    author: "Sir Richard Hamilton",
    event: "Global Finance Summit",
  },
  {
    quote: "They understand the nuance of prestige. Discretion was total, and the result was an intimate evening that our family will treasure for generations.",
    author: "The DuPont Family",
    event: "Private Heritage Soirée",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    gsap.to(quoteRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      onComplete: () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        gsap.fromTo(quoteRef.current, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
      }
    });
  };

  const handlePrev = () => {
    gsap.to(quoteRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      onComplete: () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        gsap.fromTo(quoteRef.current, 
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
      }
    });
  };

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-primary text-secondary overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">
            Kind Words
          </span>
          <TextReveal 
            text="THE PRESTIGE EXPERIENCE" 
            className="text-4xl md:text-6xl font-serif"
          />
        </div>

        <div className="relative min-h-[400px] flex flex-col items-center justify-center text-center">
          {/* Large Decorative Quote Icon */}
          <Quote className="w-16 h-16 text-accent/10 absolute top-0 left-1/2 -translate-x-1/2" />

          <div ref={quoteRef} className="relative z-10 px-4">
            <p className="text-2xl md:text-4xl font-serif italic leading-snug mb-12 max-w-4xl mx-auto">
              "{testimonials[activeIndex].quote}"
            </p>
            <div className="flex flex-col items-center">
              <span className="text-accent text-lg font-serif mb-1">
                {testimonials[activeIndex].author}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">
                {testimonials[activeIndex].event}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-12 mt-20">
            <button 
              onClick={handlePrev}
              className="group flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
              Previous
            </button>
            <div className="w-[1px] h-4 bg-secondary/10" />
            <button 
              onClick={handleNext}
              className="group flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-opacity"
            >
              Next 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
