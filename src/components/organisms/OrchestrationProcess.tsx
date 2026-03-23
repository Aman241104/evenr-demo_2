"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BotanicalFlourish } from "@/components/atoms/AnalogAccents";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    num: "01",
    title: "CONSULTATION",
    desc: "An initial dialogue to understand your vision, preferences, and the unique DNA of your intended celebration.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
  },
  {
    num: "02",
    title: "COORDINATION",
    desc: "Meticulous planning, sourcing of prestige vendors, and the creation of comprehensive structural blueprints.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  },
  {
    num: "03",
    title: "EXECUTION",
    desc: "Flawless, surgical on-site orchestration ensuring every detail aligns perfectly with the approved vision.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
  }
];

export const OrchestrationProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".process-step",
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power2.out"
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 bg-secondary relative overflow-hidden">
      {/* Decorative Flourishes */}
      <BotanicalFlourish className="w-64 h-auto -top-12 -left-12 rotate-45 text-accent opacity-10" />
      <BotanicalFlourish className="w-64 h-auto -bottom-12 -right-12 -rotate-135 text-primary opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-32">
          <span className="text-accent text-[10px] md:text-[12px] tracking-[0.4em] uppercase mb-4 md:mb-6 block font-light">
            Methodology
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-primary leading-[1] font-light">
            OUR <span className="italic">WORK</span> PROCESS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {processSteps.map((step, idx) => (
            <div key={idx} className="process-step flex flex-col group cursor-pointer" data-gsap-reveal>
              {/* Arch Thumbnail */}
              <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-t-[140px] rounded-b-[10px] mb-8 border border-primary/10 shadow-lg group-hover:shadow-xl transition-all duration-1000">
                <Image 
                  src={step.img} 
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
              </div>

              {/* Number and Line */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xl font-serif italic text-accent font-light">{step.num}</span>
                <div className="h-[1px] flex-1 bg-primary/10 transition-colors" />
              </div>

              {/* Content */}
              <h4 className="text-lg md:text-xl font-serif tracking-normal text-primary mb-4 font-light">
                {step.title}
              </h4>
              <p className="text-sm font-light leading-relaxed text-primary/70">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
