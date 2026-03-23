"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Map, Layers, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const deliverables = [
  {
    icon: <Map className="w-5 h-5" />,
    title: "Spatial Blueprints",
    desc: "Detailed 2D & 3D architectural mapping of your chosen venue's sensory flow.",
    category: "Architecture"
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Aesthetic Dossier",
    desc: "A comprehensive digital and physical mood board covering textures, palettes, and light.",
    category: "Design"
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "The Narrative Script",
    desc: "A minute-by-minute orchestration protocol for all vendors and performers.",
    category: "Execution"
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Vault Archival",
    desc: "Lifetime secure access to your event's visual and technical sensory records.",
    category: "Legacy"
  }
];

export const ServiceDeliverables = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".deliverable-card",
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 bg-primary text-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-6 block font-light">
              Tangible Excellence
            </span>
            <h2 className="text-4xl md:text-7xl font-serif leading-[0.9] md:leading-[0.85]">
              BESPOKE <br />
              <span className="md:ml-32 italic">DELIVERABLES</span>
            </h2>
          </div>
          <p className="max-w-xs text-secondary/40 text-sm font-light italic border-l border-secondary/10 pl-8">
            Every orchestration results in a collection of meticulously crafted assets, ensuring your legacy is preserved.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {deliverables.map((item, idx) => (
            <div 
              key={idx} 
              className="deliverable-card group p-10 border border-secondary/5 bg-secondary/[0.02] hover:bg-secondary/[0.05] transition-all duration-700"
            >
              <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <div className="text-accent">
                  {item.icon}
                </div>
              </div>
              
              <span className="text-[8px] tracking-[0.4em] uppercase text-accent font-bold mb-4 block">
                {item.category}
              </span>
              
              <h4 className="text-xl md:text-2xl font-serif text-secondary mb-4 group-hover:text-accent transition-colors">
                {item.title}
              </h4>
              
              <p className="text-secondary/40 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
              
              <div className="mt-8 h-px w-0 bg-accent/30 group-hover:w-full transition-all duration-1000" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif text-secondary opacity-[0.01] select-none pointer-events-none whitespace-nowrap italic">
        Tangible
      </div>
    </section>
  );
};
