"use client";

import React, { useRef } from "react";
import { TextReveal } from "@/components/atoms/TextReveal";
import { MaskSlideImage } from "@/components/molecules/MaskSlideImage";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { Footer } from "@/components/organisms/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MapPin, Calendar, Palette, Users } from "lucide-react";
import { useParams } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const eventData = {
  "verdant-estate": {
    title: "Verdant Estate Wedding",
    category: "Luxury Weddings",
    location: "Tuscany, Italy",
    date: "June 2025",
    guests: "150 VIP",
    palette: ["#004B23", "#F5F5F0", "#D4AF37"],
    description: "A three-day heritage celebration set against the rolling hills of Tuscany. Every detail was curated to evoke a sense of 'Old World' prestige mixed with modern minimalism.",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511551203524-9a24350a5771?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    ]
  }
};

export default function EventRecordPage() {
  const { id } = useParams();
  const data = eventData[id as keyof typeof eventData] || eventData["verdant-estate"];
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax Hero
    gsap.to(".event-hero-img", {
      scrollTrigger: {
        trigger: ".event-hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: "30%",
      ease: "none",
    });

    // Reveal Sidebar Specs
    gsap.from(".spec-item", {
      scrollTrigger: {
        trigger: ".event-content",
        start: "top 80%",
      },
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-secondary min-h-screen">
      {/* Hero Section */}
      <section className="event-hero relative h-[90vh] overflow-hidden">
        <img 
          src={data.heroImage} 
          alt={data.title}
          className="event-hero-img absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
        />
        <div className="absolute inset-0 bg-primary/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <span className="text-secondary/70 text-[10px] tracking-[0.5em] uppercase mb-4 animate-fade-in">
            Project Record
          </span>
          <TextReveal 
            text={data.title.toUpperCase()} 
            className="text-5xl md:text-8xl font-serif text-secondary mb-8"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="event-content max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-24">
          {/* Sidebar Specs */}
          <div className="w-full lg:w-1/3 space-y-12">
            <div className="spec-item">
              <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">The Context</span>
              <p className="text-primary text-xl font-serif leading-relaxed italic">
                "{data.description}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="spec-item">
                <MapPin className="w-4 h-4 text-accent mb-2" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary/40 block">Location</span>
                <span className="text-sm text-primary font-serif">{data.location}</span>
              </div>
              <div className="spec-item">
                <Calendar className="w-4 h-4 text-accent mb-2" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary/40 block">Date</span>
                <span className="text-sm text-primary font-serif">{data.date}</span>
              </div>
              <div className="spec-item">
                <Users className="w-4 h-4 text-accent mb-2" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary/40 block">Attendance</span>
                <span className="text-sm text-primary font-serif">{data.guests}</span>
              </div>
              <div className="spec-item">
                <Palette className="w-4 h-4 text-accent mb-2" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary/40 block">Palette</span>
                <div className="flex gap-2 mt-1">
                  {data.palette.map((color, i) => (
                    <div key={i} className="w-4 h-4 rounded-full border border-primary/10" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Grid */}
          <div className="w-full lg:w-2/3 space-y-24">
            {data.gallery.map((img, i) => (
              <MaskSlideImage 
                key={i}
                src={img}
                alt={`Highlight ${i + 1}`}
                aspectRatio={i === 1 ? "portrait" : "landscape"}
                className={i === 1 ? "max-w-md mx-auto" : "w-full"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Next Project Navigator */}
      <section className="py-32 border-t border-primary/5 bg-primary text-secondary overflow-hidden group cursor-pointer text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-secondary/30 text-[10px] tracking-[0.5em] uppercase mb-8 block group-hover:text-accent transition-colors">
            Next Orchestration
          </span>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-7xl font-serif mb-4 transform group-hover:scale-105 transition-transform duration-700">
              Midnight Gala 2024
            </h2>
            <div className="absolute -bottom-4 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-700" />
          </div>
          <div className="mt-12 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
            <MagneticButton className="bg-secondary text-primary px-12 py-4">
              Explore Project <ArrowRight className="ml-2 w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
