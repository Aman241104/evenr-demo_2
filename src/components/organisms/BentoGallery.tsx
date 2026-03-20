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
      <div className="absolute top-0 right-0 text-[15vw] font-serif text-primary opacity-[0.03] select-none pointer-events-none rotate-90 origin-top-right">
        COLLECTION
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 md:mb-32 gap-12 relative">
          <div className="max-w-3xl relative">
            <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-6 block font-light">
              01 — The Record
            </span>
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-8xl font-serif text-primary mb-6 md:mb-8 leading-[0.9] md:leading-[0.85]">
                PAST <br />
                <span className="md:ml-32 italic">ORCHESTRATIONS</span>
              </h2>
              {/* Hand Drawn Accent on Header */}
              <HandDrawnCircle 
                trigger={sectionRef} 
                className="w-32 h-32 md:w-48 md:h-48 -top-8 md:-top-12 -right-8 md:-right-12 text-accent/30" 
                delay={1}
              />
            </div>
          </div>
          <div className="max-w-xs mt-4 md:mt-32">
            <p className="text-primary/60 text-sm font-light leading-relaxed border-l border-primary/10 pl-8">
              A curated selection of sensory experiences, each meticulously engineered to reflect the unique DNA of our clients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24">
          {galleryItems.map((item, index) => {
            return (
              <div 
                key={index}
                className={cn(
                  "relative transition-all duration-700",
                  index === 0 ? "lg:col-span-8 lg:-mt-12" : "",
                  index === 1 ? "lg:col-span-4 lg:mt-32" : "",
                  index === 2 ? "lg:col-span-4 lg:-mt-24" : "",
                  index === 3 ? "lg:col-span-8 lg:mt-12" : "",
                  item.offset
                )}
              >
                {/* Tape Effect - Signals human 'pasting' */}
                {index % 2 === 0 && <TapeEffect className="-top-4 left-1/4 -translate-x-1/2 rotate-[-15deg]" />}
                {index % 2 !== 0 && <TapeEffect className="-top-4 right-1/4 translate-x-1/2 rotate-[15deg]" />}
                
                <BentoCard
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  size={item.size}
                  className="h-[500px] md:h-[600px] lg:h-[750px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-primary/5"
                />
                
                <div className="mt-8 flex justify-between items-end px-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-accent">0{index + 1} — Record</span>
                    <span className="text-[8px] tracking-[0.3em] uppercase italic text-primary/40">Archive Entry #{index + 101}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-primary/10" />
                    <span className="text-[9px] tracking-[0.4em] uppercase font-light text-primary/60">{item.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
