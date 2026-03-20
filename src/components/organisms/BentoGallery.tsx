"use client";

import React from "react";
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
  const sectionRef = useGsapReveal({ duration: 1.5 });

  return (
    <section ref={sectionRef} className="py-48 px-6 md:px-12 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[15vw] font-serif text-primary opacity-[0.03] select-none pointer-events-none rotate-90 origin-top-right">
        COLLECTION
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-32 gap-12 relative">
          <div className="max-w-3xl relative">
            <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-6 block font-light">
              01 — The Record
            </span>
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-8xl font-serif text-primary mb-8 leading-[0.85]">
                PAST <br />
                <span className="md:ml-32 italic">ORCHESTRATIONS</span>
              </h2>
              {/* Hand Drawn Accent on Header */}
              <HandDrawnCircle 
                trigger={sectionRef} 
                className="w-48 h-48 -top-12 -right-12 text-accent/30" 
                delay={1}
              />
            </div>
          </div>
          <div className="max-w-xs mt-12 md:mt-32">
            <p className="text-primary/60 text-sm font-light leading-relaxed border-l border-primary/10 pl-8">
              A curated selection of sensory experiences, each meticulously engineered to reflect the unique DNA of our clients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {galleryItems.map((item, index) => {
            const itemRef = React.useRef(null);
            return (
              <div 
                key={index}
                ref={itemRef}
                className={cn(
                  "relative transition-all duration-700",
                  index === 0 ? "lg:col-span-7" : "",
                  index === 1 ? "lg:col-span-5" : "",
                  index === 2 ? "lg:col-span-5" : "",
                  index === 3 ? "lg:col-span-7" : "",
                  item.offset
                )}
              >
                {/* Tape Effect - Signals human 'pasting' */}
                {index % 2 === 0 && <TapeEffect className="-top-2 left-1/2 -translate-x-1/2" />}
                
                <BentoCard
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  size="large"
                  className="h-[500px] lg:h-[600px] grayscale hover:grayscale-0 transition-all duration-1000 shadow-sm"
                />
                
                <div className="mt-4 flex justify-between items-center px-2 opacity-40">
                  <span className="text-[8px] tracking-widest uppercase italic">Archive Entry #{index + 100}</span>
                  <div className="h-px w-8 bg-primary/20" />
                  <span className="text-[8px] tracking-widest uppercase font-bold">{item.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
