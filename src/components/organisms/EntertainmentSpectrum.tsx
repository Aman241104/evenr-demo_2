"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BotanicalFlourish } from "@/components/atoms/AnalogAccents";

gsap.registerPlugin(ScrollTrigger);

const entertainmentOptions = [
  {
    name: "International Artists",
    description: "World-class talent brought to your stage for a truly global experience.",
    image: "https://images.unsplash.com/photo-1514525253344-f814d0743b15?auto=format&fit=crop&q=80",
  },
  {
    name: "Live Musicians & Bands",
    description: "From intimate acoustic sets to high-energy orchestral ensembles.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
  },
  {
    name: "Celebrity Appearances",
    description: "Exclusive access to renowned personalities to elevate your event status.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
  },
  {
    name: "DJs & Producers",
    description: "Curated soundscapes and floor-filling beats from elite turn-tablists.",
    image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?auto=format&fit=crop&q=80",
  },
  {
    name: "Hosts & MCs",
    description: "Professional charisma to guide your guests through the evening narrative.",
    image: "https://images.unsplash.com/photo-1475721027187-402ad2989a3b?auto=format&fit=crop&q=80",
  },
  {
    name: "Activity Artists",
    description: "Interactive experiences and specialized performers for all ages.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
  },
];

export const EntertainmentSpectrum = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".entertainment-card",
      { opacity: 0, scale: 0.95, y: 30 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 bg-primary text-secondary relative overflow-hidden">
      {/* Decorative Accents */}
      <BotanicalFlourish className="w-96 h-auto -top-24 -right-24 text-accent/10 rotate-12" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-12" data-gsap-reveal>
          <div className="max-w-2xl">
            <span className="text-accent text-[10px] md:text-[12px] tracking-[0.4em] uppercase mb-6 block font-light">
              Atmospheric Solutions
            </span>
            <h2 className="text-4xl md:text-7xl font-serif leading-[1] md:leading-[1] font-light text-secondary">
              THE <span className="italic text-accent">VIBRANT</span> <br />
              <span className="md:ml-24">SPECTRUM</span>
            </h2>
          </div>
          <p className="max-w-xs text-secondary/70 text-sm md:text-base font-light italic border-l border-secondary/20 pl-8 mb-4">
            Our entertainment offerings ensure every event is lively, memorable, and enjoyable for every guest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {entertainmentOptions.map((item, index) => (
            <div 
              key={index} 
              data-gsap-reveal
              className="entertainment-card group relative flex flex-col cursor-pointer"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[140px] rounded-b-[10px] mb-6 border border-secondary/10 shadow-lg">
                <Image 
                  src={item.image} 
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent mix-blend-overlay group-hover:opacity-50 transition-opacity duration-1000" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-primary/90 to-transparent">
                  <p className="text-[10px] md:text-xs text-secondary/90 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="h-px w-12 bg-accent/50" />
                </div>
              </div>

              {/* Labeling */}
              <div className="flex items-center justify-between text-center flex-col gap-2">
                <span className="text-[8px] tracking-[0.4em] uppercase text-accent/70 font-bold">0{index + 1}</span>
                <h4 className="text-base md:text-xl font-serif tracking-normal font-light text-secondary">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Section Title - Large & Faint */}
      <div className="absolute bottom-0 left-0 text-[20vw] font-serif text-secondary opacity-[0.02] select-none pointer-events-none whitespace-nowrap -translate-x-1/4 translate-y-1/4">
        ENTERTAINMENT
      </div>
    </section>
  );
};
