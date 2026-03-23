"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Do you handle international destination orchestrations?",
    answer: "Yes. Our global concierge network allows us to orchestrate seamless, high-fidelity events across any continent, managing all logistics, customs, and vendor relations."
  },
  {
    question: "How far in advance should we initiate the dialogue?",
    answer: "For Heritage and Pinnacle tier events, we recommend initiating dialogue 12 to 18 months in advance to ensure exclusive access to premier venues and bespoke talent."
  },
  {
    question: "Is discretion guaranteed for high-profile clients?",
    answer: "Absolute discretion is the foundation of our agency. We operate under strict Non-Disclosure Agreements and employ secure, encrypted communication protocols for all our clients."
  },
  {
    question: "Can we integrate our own preferred vendors?",
    answer: "While we have a highly curated roster of prestige partners, we are adept at seamlessly integrating your preferred vendors into our orchestration framework, provided they meet our standards of excellence."
  }
];

export const FAQSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useGSAP(() => {
    gsap.fromTo(".faq-item",
      { opacity: 0, x: -30 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        opacity: 1,
        x: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-48 px-6 md:px-12 bg-secondary border-t border-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-24" data-gsap-reveal>
          <span className="text-accent text-[10px] md:text-[12px] tracking-[0.4em] uppercase mb-4 block font-light">
            Inquiries
          </span>
          <h2 className="text-3xl md:text-6xl font-serif text-primary font-light">
            FREQUENTLY ASKED <span className="italic">QUESTIONS</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-primary/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="faq-item border-b border-primary/10 py-8 cursor-pointer group"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                data-gsap-reveal
              >
                <div className="flex justify-between items-center gap-8">
                  <h4 className={cn(
                    "text-lg md:text-xl font-serif transition-all duration-500",
                    isOpen ? "text-accent italic translate-x-2" : "text-primary group-hover:text-accent font-light"
                  )}>
                    {faq.question}
                  </h4>
                  <div className="text-primary/40 group-hover:text-accent transition-colors flex-shrink-0">
                    {isOpen ? <Minus className="w-5 h-5 md:w-6 md:h-6" /> : <Plus className="w-5 h-5 md:w-6 md:h-6" />}
                  </div>
                </div>
                
                <div 
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base font-light text-primary/60 leading-relaxed pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
