"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArchFrame } from "@/components/atoms/AnalogAccents";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: "Families", category: "Private Events", icon: "💍" },
  { name: "Corporations", category: "Corporate", icon: "🏢" },
  { name: "Planners & Caterers", category: "Collaborations", icon: "📋" },
  { name: "Flea Markets", category: "Owners", icon: "🎪" },
  { name: "Luxury Venues", category: "Hospitality", icon: "🏛️" },
];

export const PartnerNetwork = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".partner-arch",
      { opacity: 0, scale: 0.9, y: 30 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
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
    <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 bg-secondary relative overflow-hidden border-t border-primary/5">
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24" data-gsap-reveal>
        <span className="text-accent text-[10px] md:text-[12px] tracking-[0.4em] uppercase mb-4 block font-light">
          Network & Synergies
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-primary font-light uppercase">
          OUR <span className="italic">IDEAL</span> CONNECTS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
        {partners.map((partner, idx) => (
          <div key={idx} className="partner-arch flex flex-col items-center group cursor-pointer" data-gsap-reveal>
            <div className="relative w-24 h-32 md:w-32 md:h-48 mb-6 transition-transform duration-500 group-hover:-translate-y-2">
              <ArchFrame className="w-full h-full text-primary opacity-10 group-hover:opacity-30 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center text-4xl grayscale-[50%] group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">
                {/* We'll use the icon as a placeholder for a logo */}
                <span className="text-2xl md:text-4xl">{partner.icon}</span>
              </div>
            </div>
            <h4 className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-primary font-light mb-1">
              {partner.name}
            </h4>
            <span className="text-[8px] tracking-[0.1em] uppercase text-accent font-light italic font-serif">
              {partner.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
