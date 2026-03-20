"use client";

import React from "react";
import { MaskSlideImage } from "@/components/molecules/MaskSlideImage";
import { TextReveal } from "@/components/atoms/TextReveal";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "WEDDINGS",
    subtitle: "Heritage & Union",
    description: "Bespoke destination weddings and heritage-inspired celebrations that tell your unique love story across borders.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
    side: "left",
  },
  {
    title: "CORPORATE",
    subtitle: "Brand Orchestration",
    description: "High-fidelity brand activations, galas, and global business summits executed with surgical precision and artistic flair.",
    image: "https://images.unsplash.com/photo-1505373630103-f21ee09d9a98?auto=format&fit=crop&q=80",
    side: "right",
  },
  {
    title: "PRIVATE",
    subtitle: "Intimate Soirées",
    description: "Exquisite birthday celebrations and private milestones designed for the world's most discerning hosts.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    side: "left",
  },
];

export const ServiceHighlights = () => {
  return (
    <section className="bg-secondary/30 relative py-48 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-48 text-center md:text-left">
          <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-6 block font-light">
            02 — The Spectrum
          </span>
          <h2 className="text-5xl md:text-9xl font-serif text-primary leading-none">
            OUR <span className="italic">CURATED</span> <br />
            <span className="md:ml-48">OFFERINGS</span>
          </h2>
        </div>

        <div className="space-y-64 md:space-y-96">
          {services.map((service, index) => (
            <ServiceSection key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceSection = ({ service, index }: { service: any, index: number }) => {
  const containerRef = useGsapReveal({ distance: 100 });

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative flex flex-col gap-12 lg:gap-24",
        service.side === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      {/* Visual Component - Asymmetrical Frame */}
      <div className="w-full lg:w-7/12 relative group">
        <div className="aspect-[16/10] overflow-hidden rounded-sm relative z-10">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>
        
        {/* Floating Decorative Label */}
        <div className={cn(
          "absolute -bottom-8 z-20 bg-secondary px-8 py-4 shadow-xl border border-primary/5",
          service.side === "left" ? "-right-8" : "-left-8"
        )}>
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-bold">Category {index + 1}</span>
        </div>
      </div>

      {/* Content Component */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center items-start pt-12 lg:pt-0">
        <span className="text-primary/20 font-serif text-6xl mb-4 leading-none">0{index + 1}</span>
        <h3 className="text-4xl md:text-6xl font-serif text-primary mb-2 tracking-tight uppercase">
          {service.title}
        </h3>
        <span className="text-accent text-[10px] tracking-[0.3em] uppercase mb-8 font-light italic">
          {service.subtitle}
        </span>
        <p className="text-primary/60 text-lg font-light leading-relaxed mb-12 max-w-sm">
          {service.description}
        </p>
        
        <MagneticButton className="bg-transparent border border-primary text-primary px-10 py-4 text-[8px] tracking-[0.4em] uppercase hover:bg-primary hover:text-secondary">
          Request Specification
        </MagneticButton>
      </div>

      {/* Background Section Title - Large & Faint */}
      <div className={cn(
        "absolute top-1/2 -translate-y-1/2 text-[15vw] font-serif text-primary opacity-[0.02] select-none pointer-events-none whitespace-nowrap",
        service.side === "left" ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
      )}>
        {service.title}
      </div>
    </div>
  );
};
