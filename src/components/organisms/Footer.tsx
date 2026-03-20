"use client";

import React from "react";
import { OrnateLogo } from "@/components/atoms/OrnateLogo";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { Instagram, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    title: "Orchestrations",
    links: [
      { name: "The Archive", href: "/gallery" },
      { name: "The Spectrum", href: "/services" },
      { name: "Alchemy Quiz", href: "/quiz" },
    ],
  },
  {
    title: "Agency",
    links: [
      { name: "The Legacy", href: "/about" },
      { name: "The Vault", href: "/vault" },
      { name: "The Dialogue", href: "/contact" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-secondary pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute -bottom-10 -left-10 text-[20vw] font-serif opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
        ZING BLISS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          <div className="max-w-sm">
            <OrnateLogo light className="items-start text-left mb-8" />
            <p className="text-secondary/50 font-light leading-relaxed mb-8">
              Orchestrating high-fidelity celebrations for the world's most discerning individuals. From heritage weddings to global brand galas.
            </p>
            <div className="flex gap-6">
              <a href="#" className="p-3 border border-secondary/10 rounded-full hover:border-accent hover:text-accent transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 border border-secondary/10 rounded-full hover:border-accent hover:text-accent transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 border border-secondary/10 rounded-full hover:border-accent hover:text-accent transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-accent text-[10px] tracking-[0.4em] uppercase mb-8">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-sm font-light text-secondary/60 hover:text-secondary hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-accent text-[10px] tracking-[0.4em] uppercase mb-8">
                Inquiries
              </h4>
              <p className="text-sm font-light text-secondary/60 mb-8">
                Ready to begin your narrative?
              </p>
              <a href="/contact">
                <MagneticButton className="bg-secondary text-primary px-8 py-3 text-[10px]">
                  START THE DIALOGUE
                </MagneticButton>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-secondary/30">
            © 2026 ZING BLISS EVENTS. PRESTIGE EDITION.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] tracking-[0.3em] uppercase text-secondary/30 hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="text-[10px] tracking-[0.3em] uppercase text-secondary/30 hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
