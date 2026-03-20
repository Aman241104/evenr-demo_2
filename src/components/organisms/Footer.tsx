"use client";

import React from "react";
import { OrnateLogo } from "@/components/atoms/OrnateLogo";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

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
  const marqueeRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".marquee-content", {
      xPercent: -50,
      repeat: -1,
      duration: 40,
      ease: "none",
    });
  }, []);

  return (
    <footer className="bg-primary text-secondary pt-48 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Avant-Garde Brand Marquee - Atmospheric Motion */}
      <div className="absolute top-0 left-0 w-full overflow-hidden border-b border-secondary/5 py-8">
        <div ref={marqueeRef} className="marquee-content flex whitespace-nowrap gap-24">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[10vh] font-serif text-secondary/5 uppercase tracking-[0.2em] italic">
              Zing Bliss Events — Prestige Edition — Orchestrating the Sublime — 
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-12">
        {/* Left Column: Brand Identity */}
        <div className="lg:col-span-5">
          <OrnateLogo light className="items-start text-left mb-12 scale-110 -ml-4" />
          <p className="text-secondary/40 font-light leading-relaxed text-lg max-w-sm mb-12 italic">
            {'"Dedicated to turning life\'s special moments into unforgettable experiences with creativity, precision, and professionalism."'}
          </p>
          
          <div className="flex gap-4">
            {[
              { name: "Instagram", href: "https://instagram.com/zingblissevents" },
              { name: "LinkedIn", href: "https://linkedin.com/company/zingbliss" },
              { name: "Facebook", href: "https://facebook.com/zingblissevents" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[8px] tracking-[0.4em] uppercase border border-secondary/10 px-6 py-3 rounded-full hover:bg-secondary hover:text-primary transition-all duration-500 cursor-pointer"
              >
                {social.name}
              </a>
            ))}
          </div>        </div>

        {/* Center/Right: Navigation - Asymmetrical */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
          {footerLinks.map((section, idx) => (
            <div key={section.title} className={idx === 1 ? "md:mt-24" : ""}>
              <h4 className="text-accent text-[8px] tracking-[0.5em] uppercase mb-12 font-bold">
                {section.title}
              </h4>
              <ul className="space-y-6">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs font-light text-secondary/40 hover:text-secondary transition-all inline-flex items-center gap-2 group hover:translate-x-2 cursor-pointer"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">/</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="flex flex-col items-start md:items-end md:text-right">
            <h4 className="text-accent text-[8px] tracking-[0.5em] uppercase mb-12 font-bold">
              Initiate
            </h4>
            <p className="text-sm font-light text-secondary/40 mb-12 max-w-[200px]">
              Our concierge is active across all global timezones.
            </p>
            <Link href="/contact">
              <MagneticButton className="bg-secondary text-primary px-10 py-4 text-[8px] tracking-[0.5em] cursor-pointer">
                START THE DIALOGUE
              </MagneticButton>
            </Link>
          </div>
        </div>

        {/* Technical Signature */}
        <div className="lg:col-span-12 pt-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex flex-col gap-2">
            <div className="h-px w-24 bg-accent/20" />
            <span className="text-[7px] tracking-[0.6em] uppercase text-secondary/20">
              Technical Protocol: 2026.IV.Prestige
            </span>
          </div>
          
          <div className="flex flex-col items-end gap-2 text-right">
            <p className="text-[8px] tracking-[0.4em] uppercase text-secondary/30">
              © 2026 ZING BLISS EVENTS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-[8px] tracking-[0.4em] uppercase text-secondary/20 hover:text-accent cursor-pointer transition-colors">Discretion Policy</Link>
              <Link href="/terms" className="text-[8px] tracking-[0.4em] uppercase text-secondary/20 hover:text-accent cursor-pointer transition-colors">Terms of Orchestration</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blueprint Corner */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-secondary/5 pointer-events-none" />
    </footer>
  );
};
