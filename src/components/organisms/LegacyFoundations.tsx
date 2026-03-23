"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Sparkles, Scale } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const foundations = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Reliability",
    desc: "A decade of unwavering commitment to timelines, privacy, and the flawless execution of every sensory detail."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Creativity",
    desc: "Pushing the boundaries of spatial design and atmospheric orchestration to create truly unique, one-of-a-kind legacies."
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Business Ethics",
    desc: "Transparent partnerships and strong moral foundations ensure trust is at the core of every client relationship."
  }
];

export const LegacyFoundations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".foundation-item",
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out"
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-32">
          <span className="text-accent text-[10px] tracking-[0.6em] uppercase mb-4 block font-light">
            Our DNA
          </span>
          <h2 className="text-4xl md:text-8xl font-serif text-primary leading-none">
            THE <span className="italic">FOUNDATIONS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {foundations.map((item, idx) => (
            <div key={idx} className="foundation-item flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full border border-primary/5 flex items-center justify-center mb-8 group-hover:border-accent/30 transition-all duration-700 bg-secondary shadow-xl relative overflow-hidden">
                <div className="text-accent relative z-10">{item.icon}</div>
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6 group-hover:text-accent transition-colors duration-500 italic">
                {item.title}
              </h3>
              
              <p className="text-primary/60 text-base font-light leading-relaxed max-w-xs italic">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
