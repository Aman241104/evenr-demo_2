"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const curators = [
  {
    name: "Jennifer Dwight",
    role: "Lead Orchestrator",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    name: "Jonathan Smith",
    role: "Structural Architect",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  },
  {
    name: "Emily Johnson",
    role: "Aesthetic Director",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  }
];

export const CuratedExperts = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 bg-secondary relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-xl">
            <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-6 block font-light">
              04 — The Personnel
            </span>
            <h2 className="text-4xl md:text-8xl font-serif text-primary leading-none">
              OUR <span className="italic">CURATED</span> <br /> EXPERTS
            </h2>
          </div>
          <p className="max-w-xs text-primary/60 text-base font-light italic mt-12 md:mt-32 border-l border-primary/10 pl-8">
            Zing Bliss Events is dedicated to turning life's special moments into unforgettable experiences with creativity, precision, and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
          {curators.map((expert, idx) => (
            <div key={idx} className="flex flex-col group items-center md:items-start">
              {/* Profile Arch */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-[140px] mb-10 border border-primary/10 shadow-2xl transition-all duration-1000 group-hover:shadow-accent/10">
                <Image 
                  src={expert.img} 
                  alt={expert.name}
                  fill
                  
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-overlay group-hover:opacity-0 transition-all duration-1000" />
              </div>

              {/* Identity */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-serif text-primary mb-2 italic">
                  {expert.name}
                </h3>
                <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold">
                  {expert.role}
                </span>
                
                <div className="mt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-px w-12 bg-primary/10" />
                  <span className="text-[8px] tracking-[0.2em] uppercase text-primary/40 font-mono italic">
                    Certified Record Curator
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
