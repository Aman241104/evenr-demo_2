"use client";

import React from "react";
import Image from "next/image";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  side: string;
}

const services: Service[] = [
  {
    title: "WEDDINGS",
    subtitle: "Heritage & Union",
    description: "Our team handles the entire event production process with precision and creativity, creating magical moments for your special day.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
    side: "left",
  },
  {
    title: "CORPORATE",
    subtitle: "Brand Orchestration",
    description: "Achieving excellence in corporate event management through reliability, creativity, and strong business ethics.",
    image: "https://images.unsplash.com/photo-1505373630103-f21ee09d9a98?auto=format&fit=crop&q=80",
    side: "right",
  },
  {
    title: "CELEBRATIONS",
    subtitle: "Intimate & Cultural",
    description: "From birthdays to festivals and house parties, every element is curated to leave a lasting impression on your guests.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    side: "left",
  },
];

export const ServiceHighlights = () => {
  return (
    <section className="bg-secondary/30 relative py-20 md:py-48 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-48 text-center md:text-left">
          <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4 md:mb-6 block font-light">
            02 — The Spectrum
          </span>
          <h2 className="text-3xl md:text-9xl font-serif text-primary leading-tight md:leading-none">
            OUR <span className="italic">CURATED</span> <br />
            <span className="md:ml-48">OFFERINGS</span>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-96">
          {services.map((service, index) => (
            <ServiceSection key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceSection = ({ service, index }: { service: Service, index: number }) => {
  const containerRef = useGsapReveal({ distance: 100 });

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative flex flex-col gap-8 lg:gap-24",
        service.side === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      {/* Visual Component - Asymmetrical Frame */}
      <div className="w-full lg:w-7/12 relative group">
        <div className="aspect-[16/10] overflow-hidden rounded-sm relative z-10">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>
        
        {/* Floating Decorative Label */}
        <div className={cn(
          "absolute -bottom-6 md:-bottom-8 z-20 bg-secondary px-6 md:px-8 py-3 md:py-4 shadow-xl border border-primary/5",
          service.side === "left" ? "-right-4 md:-right-8" : "-left-4 md:-left-8"
        )}>
          <span className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-accent font-bold">Category {index + 1}</span>
        </div>
      </div>

      {/* Content Component */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center items-start pt-8 lg:pt-0">
        <span className="text-primary/20 font-serif text-5xl md:text-6xl mb-2 md:mb-4 leading-none">0{index + 1}</span>
        <h3 className="text-3xl md:text-6xl font-serif text-primary mb-2 tracking-tight uppercase">
          {service.title}
        </h3>
        <span className="text-accent text-[9px] md:text-[10px] tracking-[0.3em] uppercase mb-6 md:mb-8 font-light italic">
          {service.subtitle}
        </span>
        <p className="text-primary/60 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-12 max-w-sm">
          {service.description}
        </p>
        
        <MagneticButton className="bg-transparent border border-primary text-primary px-8 md:px-10 py-3 md:py-4 text-[7px] md:text-[8px] tracking-[0.4em] uppercase hover:bg-primary hover:text-secondary cursor-pointer">
          Request Specification
        </MagneticButton>
      </div>

      {/* Background Section Title - Large & Faint - Desktop Only */}
      <div className={cn(
        "absolute top-1/2 -translate-y-1/2 text-[15vw] font-serif text-primary opacity-[0.02] select-none pointer-events-none whitespace-nowrap hidden lg:block",
        service.side === "left" ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
      )}>
        {service.title}
      </div>
    </div>
  );
};
