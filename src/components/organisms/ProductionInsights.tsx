"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TechnicalAnnotation } from "@/components/atoms/TechnicalDetails";

gsap.registerPlugin(ScrollTrigger);

const productionDetails = [
  {
    title: "Stage & Decor",
    value: "Bespoke Structural Design",
    desc: "From concept sketches to physical realization of immersive environments."
  },
  {
    title: "Technical Directing",
    value: "Audio/Visual Engineering",
    desc: "Surgical precision in lighting, soundscapes, and concert-grade production."
  },
  {
    title: "Logistics",
    value: "Global Catering & Coordination",
    desc: "Seamless management of catering, photo booth experiences, and vendor flow."
  }
];

export const ProductionInsights = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".production-item",
      { opacity: 0, x: -30 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 bg-secondary relative overflow-hidden border-t border-primary/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center" data-gsap-reveal>
        
        {/* Visual Documentation */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-square md:aspect-[16/10] overflow-hidden rounded-t-[140px] rounded-b-[10px] border border-primary/10 shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" 
              alt="Production Setup"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-all duration-1000 scale-105"
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-overlay" />
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="lg:col-span-6">
          <span className="text-accent text-[10px] md:text-[12px] tracking-[0.4em] uppercase mb-6 block font-light">
            Operational Blueprint
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-primary mb-12 leading-[1] font-light">
            PRODUCTION <br /> <span className="italic text-accent">& EXECUTION</span>
          </h2>

          <div className="space-y-12">
            {productionDetails.map((detail, idx) => (
              <div key={idx} className="production-item group border-l border-primary/10 pl-8 hover:border-accent transition-colors duration-500">
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary/30 mb-2 block group-hover:text-accent transition-colors font-light">
                  Phase 0{idx + 1}
                </span>
                <h4 className="text-xl md:text-2xl font-serif text-primary mb-2 font-light italic">
                  {detail.title}
                </h4>
                <p className="text-primary/70 text-base font-light leading-relaxed max-w-sm italic">
                  {detail.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
