"use client";

import React, { useRef } from "react";
import { TextReveal } from "@/components/atoms/TextReveal";
import { OrnateLogo } from "@/components/atoms/OrnateLogo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ConciergeBar } from "@/components/molecules/ConciergeBar";
import { Footer } from "@/components/organisms/Footer";

gsap.registerPlugin(ScrollTrigger);

const philosophies = [
  {
    title: "Airy Minimalism",
    description: "We believe in the power of negative space, allowing every curated detail to breathe and speak with authority.",
  },
  {
    title: "Paper Textures",
    description: "Our aesthetic is rooted in the tactile and the timeless—drawing inspiration from heritage editorial design.",
  },
  {
    title: "Verdant Accents",
    description: "Growth, vitality, and prestige. Our signature green is a commitment to the living energy of every celebration.",
  },
];

const metrics = [
  { label: "Bespoke Events", value: "250+" },
  { label: "Global Destinations", value: "18" },
  { label: "Private Clients", value: "120" },
  { label: "Legacy Years", value: "15" },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect for the legacy image
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "20%",
      ease: "none",
    });

    // Metric counters animation
    const metricItems = metricsRef.current?.querySelectorAll(".metric-item");
    if (metricItems) {
      gsap.from(metricItems, {
        scrollTrigger: {
          trigger: metricsRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-secondary min-h-screen pt-32 overflow-hidden">
      {/* Hero Narrative */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-start">
          <div className="w-full md:w-1/2">
            <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">
              The Legacy
            </span>
            <TextReveal 
              text="ORCHESTRATING MOMENTS SINCE 2011" 
              className="text-5xl md:text-8xl font-serif text-primary leading-tight mb-12"
            />
            <div className="space-y-8 text-primary/70 font-light leading-relaxed text-lg max-w-md">
              <p>
                Zing Bliss Events was born from a singular vision: to redefine luxury event management through the lens of high-end editorial aesthetics and surgical precision.
              </p>
              <p>
                Founded by Kamna Udernani, the agency has grown from a boutique planning firm into a global authority on bespoke celebrations, serving a discerning clientele who value discretion, elegance, and the avant-garde.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="parallax-container relative aspect-[3/4] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80" 
                alt="The Legacy"
                className="parallax-bg absolute inset-0 w-full h-[120%] object-cover -top-[10%]"
              />
              <div className="absolute inset-0 border-[2vw] border-secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="bg-primary text-secondary py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <OrnateLogo light className="mb-12 scale-150" />
            <TextReveal 
              text="OUR CORE PHILOSOPHY" 
              className="text-4xl md:text-6xl font-serif"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {philosophies.map((item, index) => (
              <div key={index} className="flex flex-col gap-6 text-center md:text-left">
                <span className="text-accent font-serif text-2xl">0{index + 1}</span>
                <h3 className="text-2xl font-serif tracking-wide">{item.title}</h3>
                <p className="text-secondary/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section ref={metricsRef} className="py-32 px-6 md:px-12 border-b border-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-item text-center">
                <div className="text-5xl md:text-7xl font-serif text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-[10px] tracking-[0.4em] uppercase text-accent font-sans">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Collective (Membership Tier) */}
      <section className="py-32 px-6 md:px-12 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2">
              <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">
                The Collective
              </span>
              <TextReveal 
                text="AN EXCLUSIVE LEGACY" 
                className="text-4xl md:text-6xl font-serif text-primary mb-8"
              />
              <p className="text-primary/60 text-lg font-light leading-relaxed mb-12 max-w-lg">
                For our most distinguished clients, we offer 'The Collective'—a hidden tier of service designed for the orchestration of multi-generational legacies and global private celebrations.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Priority booking for global peak seasons",
                  "Exclusive access to non-public partner venues",
                  "Seasonal luxury trend reports & spatial forecast",
                  "24/7 Digital Concierge via The Vault"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    <span className="text-sm tracking-widest uppercase text-primary/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] bg-primary rounded-sm p-12 flex flex-col justify-between relative z-10 overflow-hidden shadow-2xl">
                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none text-[200px] font-serif leading-none select-none">
                  COLLECTIVE
                </div>
                
                <div className="relative z-20">
                  <OrnateLogo light className="items-start text-left scale-75 -ml-4" />
                </div>

                <div className="relative z-20">
                  <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-2 block">Membership Card</span>
                  <h3 className="text-3xl font-serif text-secondary mb-1">LEGACY CLIENT</h3>
                  <span className="text-[8px] tracking-[0.3em] uppercase text-secondary/40">Zing Bliss Events — Collective Tier</span>
                </div>

                <div className="relative z-20 flex justify-between items-end border-t border-secondary/10 pt-8">
                  <div className="text-[8px] tracking-widest text-secondary/30 uppercase">
                    Non-Transferable<br />Est. 2011
                  </div>
                  <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border border-accent/40" />
                  </div>
                </div>
              </div>
              
              {/* Abstract decorative element behind the card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <ConciergeBar />

      <Footer />
    </main>
  );
}
