"use client";

import React from "react";
import { TextReveal } from "@/components/atoms/TextReveal";
import { MaskSlideImage } from "@/components/molecules/MaskSlideImage";
import { ConciergeBar } from "@/components/molecules/ConciergeBar";
import { StagePreview } from "@/components/molecules/StagePreview";
import { Footer } from "@/components/organisms/Footer";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    title: "The Dialogue",
    subtitle: "Inquiry & Visioning",
    description: "Our process begins with an intimate conversation to understand your aesthetic DNA and core objectives.",
    image: "https://images.unsplash.com/photo-1511551203524-9a24350a5771?auto=format&fit=crop&q=80",
  },
  {
    title: "The Blueprint",
    subtitle: "Design & Curation",
    description: "We translate your vision into a high-fidelity event blueprint, from spatial architecture to sensory details.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
  },
  {
    title: "The Orchestration",
    subtitle: "Execution & Management",
    description: "Our expert team manages every moving part with surgical precision, ensuring a flawless and stress-free event.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
  },
  {
    title: "The Encore",
    subtitle: "Reflection & Legacy",
    description: "We document the magic and ensure the impact of your event lasts long after the final curtain call.",
    image: "https://images.unsplash.com/photo-1514525253361-901b0f557342?auto=format&fit=crop&q=80",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-secondary min-h-screen pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">
            Our Approach
          </span>
          <TextReveal 
            text="THE SPECTRUM OF EXCELLENCE" 
            className="text-5xl md:text-8xl font-serif text-primary mb-8"
          />
          <p className="text-primary/60 max-w-xl text-lg font-light leading-relaxed">
            From the first dialogue to the final encore, we provide a full-spectrum event management service tailored for high-net-worth individuals and global brands.
          </p>
        </div>
      </section>

      {/* Vertical Process Journey */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-primary/10 hidden md:block -translate-x-1/2" />
          
          <div className="flex flex-col gap-32 md:gap-64">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative flex flex-col md:flex-row gap-12 items-center",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"
                )}
              >
                {/* Visual */}
                <div className="w-full md:w-1/2 relative z-10">
                  <MaskSlideImage 
                    src={step.image} 
                    alt={step.title} 
                    aspectRatio="portrait"
                    className="md:max-w-md mx-auto"
                  />
                </div>
                
                {/* Step Marker (Mobile-only or Center) */}
                <div className="absolute left-0 md:left-1/2 top-0 -translate-y-12 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 z-20">
                  <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center font-serif text-sm border-4 border-secondary">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className={cn(
                  "w-full md:w-1/2 flex flex-col gap-6",
                  index % 2 === 0 ? "md:items-start" : "md:items-end"
                )}>
                  <span className="text-accent text-[10px] tracking-[0.3em] uppercase">
                    Step 0{index + 1}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-primary">
                    {step.title}
                  </h2>
                  <h3 className="text-sm tracking-widest text-primary/40 uppercase font-sans">
                    {step.subtitle}
                  </h3>
                  <p className={cn(
                    "text-primary/70 font-light leading-relaxed max-w-sm",
                    index % 2 === 0 ? "" : "text-right ml-auto"
                  )}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConciergeBar />

      <StagePreview />

      <Footer />
    </main>
  );
}
