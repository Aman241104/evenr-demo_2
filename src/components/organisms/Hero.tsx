"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageMainRef = useRef<HTMLDivElement>(null);
  const imageSecondaryRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Elegant reveal animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.5 } });

    tl.fromTo(".hero-reveal", 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15 }
    );

    tl.fromTo(imageMainRef.current,
      { clipPath: "inset(0 0 100% 0)", scale: 1.1 },
      { clipPath: "inset(0 0 0% 0)", scale: 1, duration: 2, ease: "expo.inOut" },
      "-=1.2"
    );

    tl.fromTo(imageSecondaryRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1.5 },
      "-=1"
    );

    // Parallax on scroll
    gsap.to(imageMainRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 100,
    });

    gsap.to(".bg-letter", {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -150,
      opacity: 0.01,
    });
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-secondary px-6 md:px-12 pt-40 pb-24 md:pt-48 md:pb-32"
    >
      {/* Subtle Background Watermark */}
      <div className="bg-letter absolute top-0 right-0 text-[60vw] font-serif leading-none text-primary opacity-[0.02] select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
        Z
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Editorial Headline */}
        <div ref={headlineRef} className="mb-16 md:mb-24 max-w-5xl">
          <span className="hero-reveal text-accent text-[10px] md:text-[12px] tracking-[0.5em] uppercase mb-8 block font-light">
            Bespoke Event Orchestration
          </span>
          
          <h1 className="hero-reveal text-4xl sm:text-6xl md:text-8xl lg:text-[6.5vw] leading-[1.1] text-primary font-serif font-light tracking-tight">
            TURNING YOUR <span className="italic">WEDDING DREAMS</span> <br />
            INTO <span className="font-sans uppercase tracking-[0.2em] text-[0.6em] align-middle ml-4">Ultimate</span> REALITY
          </h1>
        </div>

        {/* Centerpiece Image Layout - Layered Arches */}
        <div className="relative w-full max-w-4xl aspect-[16/9] mb-20 md:mb-32">
          {/* Main Large Arch */}
          <div 
            ref={imageMainRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-8/12 h-full rounded-t-[1000px] overflow-hidden border border-primary/5 shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
              alt="Luxury Wedding Setup"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Secondary Smaller Offset Arch */}
          <div 
            ref={imageSecondaryRef}
            className="absolute left-[10%] bottom-[-15%] w-4/12 aspect-[4/5] rounded-t-[1000px] rounded-b-[20px] overflow-hidden border border-primary/10 shadow-xl hidden md:block z-20"
          >
            <Image 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" 
              alt="Detail"
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>

          {/* Floating Metric - Refined */}
          <div className="hero-reveal absolute right-[10%] bottom-0 bg-white/80 backdrop-blur-md p-8 rounded-full aspect-square flex flex-col items-center justify-center border border-primary/5 shadow-lg hidden lg:flex z-20">
            <span className="text-3xl font-serif italic text-primary">250+</span>
            <span className="text-[8px] tracking-[0.2em] uppercase text-primary/60">Legacy Events</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="hero-reveal flex flex-col sm:flex-row gap-12 items-center justify-center">
          <Link href="/contact">
            <MagneticButton className="bg-primary text-secondary px-16 py-6 text-[10px] tracking-[0.4em] uppercase cursor-pointer">
              Initiate Dialogue
            </MagneticButton>
          </Link>
          <Link href="/gallery" className="group flex items-center gap-6 cursor-pointer">
            <div className="w-12 h-[1px] bg-primary/20 group-hover:w-20 transition-all duration-700" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary/40 group-hover:text-primary transition-colors">
              The Archive
            </span>
          </Link>
        </div>
      </div>

      {/* Vertical Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 h-16 w-px bg-gradient-to-b from-primary/20 to-transparent overflow-hidden opacity-40">
        <div className="w-full h-full bg-primary -translate-y-full animate-[scan_3s_ease-in-out_infinite]" />
      </div>
    </section>
  );
};
