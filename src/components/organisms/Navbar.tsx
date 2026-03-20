"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import gsap from "gsap";
import { X, Menu } from "lucide-react";

const navLinks = [
  { name: "The Archive", href: "/gallery" },
  { name: "The Spectrum", href: "/services" },
  { name: "The Legacy", href: "/about" },
  { name: "Alchemy Quiz", href: "/quiz" },
  { name: "The Vault", href: "/vault" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const logoRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const navContainerRef = useRef<HTMLElement>(null);

  // Ghost Logic: Scroll Direction Reveal
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // GSAP Mobile Menu Animation
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        clipPath: "inset(0 0 0 0)",
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.4 }
      );
    } else {
      document.body.style.overflow = "auto";
      gsap.to(menuRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.8,
        ease: "power4.inOut",
      });
    }
  }, [isMenuOpen]);

  // Logo Magnetic Interaction
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = logo.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * 0.15;
      const y = (clientY - (top + height / 2)) * 0.15;
      gsap.to(logo, { x, y, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(logo, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };

    logo.addEventListener("mousemove", handleMouseMove);
    logo.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      logo.removeEventListener("mousemove", handleMouseMove);
      logo.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <nav
        ref={navContainerRef}
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 py-4 md:px-12 md:py-8",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isScrolled || isMenuOpen ? "bg-secondary/80 backdrop-blur-xl py-4 md:py-4 border-b border-primary/5 shadow-2xl" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a 
            ref={logoRef}
            href="/" 
            className="font-serif text-xl md:text-2xl tracking-tighter hover:opacity-70 transition-opacity inline-block text-primary mix-blend-difference"
          >
            ZB<span className="text-accent">.</span>EVENTS
          </a>

          {/* Desktop Ghost Navigation */}
          <div className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] tracking-[0.4em] uppercase text-primary/60 hover:text-primary transition-all hover:tracking-[0.5em] font-light"
              >
                {link.name}
              </a>
            ))}
            <a href="/contact">
              <MagneticButton className="px-8 py-3 text-[10px] tracking-[0.4em] uppercase shadow-lg">
                The Dialogue
              </MagneticButton>
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary p-2 z-[110]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className="fixed inset-0 z-[90] bg-secondary flex flex-col items-center justify-center md:hidden"
        style={{ clipPath: "inset(0 0 100% 0)" }}
      >
        <div className="flex flex-col items-center gap-12">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              ref={(el) => { linksRef.current[i] = el; }}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl md:text-6xl font-serif text-primary hover:text-accent transition-all hover:italic"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/contact"
            ref={(el) => { linksRef.current[navLinks.length] = el; }}
            onClick={() => setIsMenuOpen(false)}
            className="mt-12"
          >
            <MagneticButton className="px-16 py-5 text-xs tracking-[0.4em] uppercase">
              The Dialogue
            </MagneticButton>
          </a>
        </div>
        
        {/* Decorative Watermark */}
        <div className="absolute bottom-10 left-10 text-[10vw] font-serif opacity-[0.03] select-none pointer-events-none italic">
          ORCHESTRATION
        </div>
      </div>
    </>
  );
};
