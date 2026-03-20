"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

import { TechnicalAnnotation } from "@/components/atoms/TechnicalDetails";
import { GenerativeGrid } from "@/components/atoms/GenerativeGrid";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Kinetic Typography - Reactive Font Weight (Variable Font Simulation)
    gsap.to(headlineRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      fontWeight: 900,
      letterSpacing: "0.15em",
      opacity: 0.4,
      y: 100,
    });

    // Parallax for the abstract letter in background
    gsap.to(".bg-letter", {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -200,
      opacity: 0.01,
    });

    // Image entrance with clip-path
    gsap.fromTo(imageContainerRef.current, 
      { clipPath: "inset(100% 0% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 2,
        ease: "expo.inOut",
        delay: 0.5,
      }
    );
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-secondary px-6 md:px-12 py-24 md:py-32"
    >
      <GenerativeGrid />
      
      {/* Cinematic Lens Flare Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 opacity-30 mix-blend-screen bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.15)_0%,transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,75,35,0.1)_0%,transparent_50%)]" />

      {/* Technical Annotations for Hero */}
      <TechnicalAnnotation 
        label="Ref. Coordinates" 
        value="25.2048° N, 55.2708° E" 
        className="top-32 left-12 hidden xl:flex" 
      />
      <TechnicalAnnotation 
        label="Visual Protocol" 
        value="Ivory & Verdant v4.0" 
        className="bottom-32 right-12 hidden xl:flex" 
        dotPosition="right"
      />

      {/* Background Editorial Letter */}
      <div className="bg-letter absolute top-0 right-0 text-[80vw] md:text-[60vw] font-serif leading-none text-primary opacity-[0.03] md:opacity-[0.05] select-none pointer-events-none translate-x-1/3 md:translate-x-1/4 -translate-y-1/4">
        Z
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Text Content - Offset Editorial Layout */}
        <div className="lg:col-span-8">
          <span className="text-accent text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.6em] uppercase mb-6 md:mb-10 block font-light animate-fade-in">
            Est. 2011 — ZB.EVENTS / PRESTIGE EDITION
          </span>
          
          <div className="relative">
            <h1 
              ref={headlineRef}
              className="text-prestige text-5xl sm:text-7xl md:text-9xl lg:text-[11vw] leading-[0.9] md:leading-[0.8] text-primary mb-8 md:mb-14 mix-blend-multiply transition-all duration-100 ease-out"
            >
              <div className="overflow-hidden">
                ORCHESTRATING
              </div>
              <div className="md:ml-32 overflow-hidden italic text-accent/90">
                THE SUBLIME
              </div>
            </h1>
          </div>

          <p className="text-primary/70 text-base md:text-2xl font-light leading-relaxed max-w-xl mb-12 md:mb-20 animate-fade-in delay-700">
            Dedicated to turning life’s special moments into <span className="italic font-serif text-primary border-b border-accent/30">unforgettable experiences</span> through creativity, precision, and surgical professionalism.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 md:gap-10 items-start opacity-0 animate-fade-in fill-mode-forwards delay-1000">
            <Link href="/contact">
              <MagneticButton className="bg-primary text-secondary px-12 md:px-16 py-5 md:py-6 text-[10px] md:text-[11px] tracking-[0.4em] uppercase shadow-2xl cursor-pointer">
                Initiate Dialogue
              </MagneticButton>
            </Link>
            <Link href="/gallery" className="group flex items-center gap-6 cursor-pointer py-4">
              <div className="w-12 md:w-16 h-[1px] bg-primary/20 group-hover:w-24 transition-all duration-500" />
              <span className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-primary/40 group-hover:text-primary transition-colors">
                View Collection
              </span>
            </Link>
          </div>
        </div>

        {/* Hero Visual - Floating Asymmetrical Element */}
        <div className="lg:col-span-4 relative block">
          <div 
            ref={imageContainerRef}
            className="aspect-[2/3] w-full bg-primary/5 relative overflow-hidden rounded-sm shadow-[30px_30px_60px_rgba(0,0,0,0.1)]"
          >
            <Image 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
              alt="Editorial"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="absolute inset-0 w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s] ease-out"
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
          </div>

          {/* Floating Spec Badge - More refined */}
          <div className="absolute -bottom-12 -left-12 bg-secondary p-10 shadow-2xl border border-primary/5 hidden xl:block animate-fade-in delay-1500 backdrop-blur-md bg-opacity-90">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-[8px] tracking-[0.4em] uppercase font-bold">Featured Record</span>
              </div>
              <span className="font-serif text-xl text-primary italic">Verdant Estate, 2025</span>
              <div className="flex justify-between text-[6px] tracking-widest text-primary/40 uppercase font-mono mt-2">
                <span>COORD: 25.20° N</span>
                <span>VOL: IV.PRESTIGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Minimalist */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-primary animate-bounce" />
      </div>
    </section>
  );
};
