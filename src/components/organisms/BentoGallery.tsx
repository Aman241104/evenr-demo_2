"use client";

import React, { useRef } from "react";
import { BentoCard } from "@/components/molecules/BentoCard";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { TapeEffect, HandDrawnCircle } from "@/components/atoms/AnalogAccents";
import { cn } from "@/lib/utils";

const galleryItems = [
  {
    title: "Verdant Estate Wedding",
    category: "Luxury Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    size: "large" as const,
    offset: "lg:-mt-24",
  },
  {
    title: "Midnight Gala 2024",
    category: "Corporate Events",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    size: "medium" as const,
    offset: "lg:mt-12",
  },
  {
    title: "Ivory Garden Soiree",
    category: "Private Parties",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    size: "medium" as const,
    offset: "lg:-mt-12",
  },
  {
    title: "Heritage Birthday",
    category: "Milestones",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80",
    size: "small" as const,
    offset: "lg:mt-24",
  },
];

export const BentoGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="py-24 md:py-48 px-6 md:px-12 bg-secondary relative overflow-hidden">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 text-[12vw] font-serif text-primary opacity-[0.02] select-none pointer-events-none rotate-90 origin-top-right translate-x-1/4">
        ARCHIVE
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24 md:mb-48" data-gsap-reveal>
          <span className="text-accent text-[10px] md:text-[12px] tracking-[0.5em] uppercase mb-8 block font-light">
            The Visual Record
          </span>
          <h2 className="text-4xl md:text-8xl font-serif text-primary mb-12 leading-[1.1] font-light max-w-4xl">
            A CURATED <span className="italic">COLLECTION</span> OF <br />
            <span className="font-sans uppercase tracking-[0.2em] text-[0.5em] align-middle">Sensory</span> EXPERIENCES
          </h2>
          <div className="w-16 h-px bg-primary/20 mb-12" />
          <p className="max-w-xl text-primary/60 text-sm md:text-base font-light leading-relaxed italic">
            Each event is a bespoke orchestration, meticulously engineered to reflect the unique DNA of our clients through light, sound, and space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-24 lg:gap-32 items-start">
          {galleryItems.map((item, index) => {
            return (
              <div 
                key={index}
                className={cn(
                  "relative group",
                  index === 0 ? "lg:col-span-7 lg:-mt-24" : "",
                  index === 1 ? "lg:col-span-5 lg:mt-32" : "",
                  index === 2 ? "lg:col-span-5 lg:-mt-12" : "",
                  index === 3 ? "lg:col-span-7 lg:mt-12" : ""
                )}
              >
                {/* Editorial Image Container - Arched Geometry */}
                <div className={cn(
                  "relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-1000 ease-out border border-primary/5",
                  index % 2 === 0 ? "rounded-t-[1000px]" : "rounded-t-[1000px] rounded-b-[20px]"
                )}>
                  <BentoCard
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    size={item.size}
                    className="h-[500px] md:h-[600px] lg:h-[800px] border-none shadow-none"
                  />
                  
                  {/* Subtle Grain Overlay on Image */}
                  <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>
                
                {/* Minimalist Editorial Caption */}
                <div className="mt-10 flex flex-col items-start px-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-accent">0{index + 1}</span>
                    <div className="h-px w-8 bg-primary/10" />
                    <span className="text-[10px] tracking-[0.4em] uppercase font-light text-primary/40">{item.category}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif tracking-normal text-primary font-light italic">
                    {item.title}
                  </h4>
                  <div className="w-0 h-px bg-accent mt-4 transition-all duration-700 group-hover:w-full opacity-30" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
