"use client";

import React, { useRef, useState } from "react";
import { TextReveal } from "@/components/atoms/TextReveal";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { ConciergeBar } from "@/components/molecules/ConciergeBar";
import { Footer } from "@/components/organisms/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MapPin, Mail, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate form out
    gsap.to(formRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        setIsSubmitted(true);
        // Animate success in
        gsap.fromTo(successRef.current, 
          { opacity: 0, scale: 0.9, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(".contact-info-item", 
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        clearProps: "all",
      }
    );

    if (!isSubmitted) {
      gsap.fromTo(formRef.current, 
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
          clearProps: "all",
        }
      );
    }
  }, [isSubmitted]);

  return (
    <main className="bg-secondary min-h-screen pt-32 pb-32">
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Left Side: Info */}
            <div className="w-full lg:w-1/3">
              <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">
                The Dialogue
              </span>
              <TextReveal 
                text="START YOUR NARRATIVE" 
                className="text-4xl md:text-7xl font-serif text-primary mb-12"
              />
              
              <div className="space-y-8 md:space-y-12">
                <div className="contact-info-item flex gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base md:text-lg text-primary mb-1 md:mb-2">Global HQ</h4>
                    <p className="text-primary/60 font-light text-xs md:text-sm leading-relaxed">
                      Dubai Design District, UAE
                    </p>
                  </div>
                </div>

                <div className="contact-info-item flex gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base md:text-lg text-primary mb-1 md:mb-2">General Inquiries</h4>
                    <p className="text-primary/60 font-light text-xs md:text-sm leading-relaxed">
                      info@zingblissevents.com
                    </p>
                  </div>
                </div>

                <div className="contact-info-item flex gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base md:text-lg text-primary mb-1 md:mb-2">Consultation Hours</h4>
                    <p className="text-primary/60 font-light text-xs md:text-sm leading-relaxed">
                      Monday — Friday<br />
                      10:00 AM — 06:00 PM GST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Form */}
            <div className="w-full lg:w-2/3">
              {!isSubmitted ? (
                <form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="bg-white/50 backdrop-blur-sm p-6 md:p-16 rounded-sm border border-primary/5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
                    <div className="group">
                      <label className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-primary/40 block mb-3 md:mb-4 transition-colors group-focus-within:text-accent">
                        Full Name
                      </label>
                      <input 
                        required
                        type="text" 
                        placeholder="Alexander Sterling"
                        className="w-full bg-transparent border-b border-primary/10 py-2 focus:outline-none focus:border-primary transition-colors font-light text-primary text-sm md:text-base"
                      />
                    </div>
                    <div className="group">
                      <label className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-primary/40 block mb-3 md:mb-4 transition-colors group-focus-within:text-accent">
                        Email Address
                      </label>
                      <input 
                        required
                        type="email" 
                        placeholder="alex@prestige.com"
                        className="w-full bg-transparent border-b border-primary/10 py-2 focus:outline-none focus:border-primary transition-colors font-light text-primary text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
                    <div className="group relative">
                      <label className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-primary/40 block mb-3 md:mb-4 transition-colors group-focus-within:text-accent">
                        Event Type
                      </label>
                      <select className="w-full bg-transparent border-b border-primary/10 py-2 focus:outline-none focus:border-primary transition-colors font-light text-primary appearance-none text-sm md:text-base cursor-pointer">
                        <option>Luxury Wedding</option>
                        <option>Corporate Gala</option>
                        <option>Private Soirée</option>
                        <option>Milestone Celebration</option>
                      </select>
                      <div className="absolute right-0 bottom-3 pointer-events-none opacity-30">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="group">
                      <label className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-primary/40 block mb-3 md:mb-4 transition-colors group-focus-within:text-accent">
                        Estimated Date
                      </label>
                      <input 
                        type="text" 
                        placeholder="Spring 2026"
                        className="w-full bg-transparent border-b border-primary/10 py-2 focus:outline-none focus:border-primary transition-colors font-light text-primary text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div className="group mb-12 md:mb-16">
                    <label className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-primary/40 block mb-3 md:mb-4 transition-colors group-focus-within:text-accent">
                      The Vision
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about the energy and aesthetic of your event..."
                      className="w-full bg-transparent border-b border-primary/10 py-2 focus:outline-none focus:border-primary transition-colors font-light text-primary resize-none text-sm md:text-base"
                    />
                  </div>

                  <div className="flex justify-end">
                    <MagneticButton type="submit" className="w-full md:w-auto px-12 md:px-16 py-4 md:py-5 bg-primary text-secondary text-[10px] md:text-xs tracking-[0.3em] uppercase">
                      Request Consultation
                    </MagneticButton>
                  </div>
                </form>
              ) : (
                <div 
                  ref={successRef}
                  className="bg-primary p-16 md:p-24 rounded-sm text-center flex flex-col items-center justify-center min-h-[500px]"
                >
                  <CheckCircle className="w-16 h-16 text-accent mb-8" />
                  <TextReveal 
                    text="NARRATIVE INITIATED" 
                    className="text-3xl md:text-5xl font-serif text-secondary mb-8"
                  />
                  <p className="text-secondary/50 font-light leading-relaxed max-w-md mx-auto mb-12">
                    Your vision has been successfully transmitted. A lead concierge will contact you within 24 hours to begin the orchestration.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent text-[10px] tracking-[0.5em] uppercase hover:text-secondary transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ConciergeBar />
      <Footer />
    </main>
  );
}
