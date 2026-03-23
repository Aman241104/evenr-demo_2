"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X, Menu } from "lucide-react";
import Link from "next/link";

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
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const logoRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const navContainerRef = useRef<HTMLElement>(null);

  // Ghost Logic & Dynamic Grain Refinement
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const velocity = Math.abs(currentScrollY - lastScrollY);
          
          setIsScrolled(currentScrollY > 50);

          // Dynamic Grain Physics based on velocity
          const grainIntensity = Math.min(0.15, 0.04 + (velocity / 1000));
          document.body.style.setProperty("--grain-opacity", grainIntensity.toString());

          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // GSAP Mobile Menu Animation
  useEffect(() => {
    if (!menuRef.current) return;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        autoAlpha: 1,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power2.out",
      });
      
      const validLinks = linksRef.current.filter(Boolean);
      if (validLinks.length > 0) {
        gsap.fromTo(
          validLinks,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", delay: 0.2 }
        );
      }
    } else {
      document.body.style.overflow = "auto";
      gsap.to(menuRef.current, {
        autoAlpha: 0,
        pointerEvents: "none",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isMenuOpen]);

  // Handle Resize and initial hidden state
  useEffect(() => {
    if (menuRef.current) {
      gsap.set(menuRef.current, { autoAlpha: 0, pointerEvents: "none" });
    }
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Logo Magnetic Interaction
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

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
          "fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 py-4 md:px-12",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isScrolled ? "bg-secondary/80 backdrop-blur-xl py-4 border-b border-primary/5 shadow-sm" : "bg-transparent py-8 md:py-12"
        )}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          {/* Left Links - Desktop */}
          <div className="hidden md:flex items-center gap-10 flex-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[9px] tracking-[0.4em] uppercase text-primary/60 hover:text-primary transition-all font-light cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link 
            ref={logoRef}
            href="/" 
            className={cn(
              "font-serif text-xl md:text-2xl tracking-[0.3em] hover:opacity-70 transition-opacity inline-block uppercase z-10",
              "text-primary"
            )}
          >
            ZING BLISS
          </Link>

          {/* Right Links - Desktop */}
          <div className="hidden md:flex items-center gap-10 flex-1 justify-end">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[9px] tracking-[0.4em] uppercase text-primary/60 hover:text-primary transition-all font-light cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <span className="text-[9px] tracking-[0.4em] uppercase text-accent hover:text-primary transition-all font-bold cursor-pointer ml-4">
                INITIATE
              </span>
            </Link>
          </div>

          <button 
            onClick={toggleMenu}
            className="md:hidden text-primary p-2 absolute right-6 top-1/2 -translate-y-1/2"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Delicate Top/Bottom Border Accents - Editorial Style */}
        {!isScrolled && (
          <>
            <div className="absolute top-0 left-12 right-12 h-px bg-primary/5" />
            <div className="absolute bottom-0 left-12 right-12 h-px bg-primary/5" />
          </>
        )}
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className="fixed inset-0 top-0 left-0 w-full h-[100dvh] z-[120] bg-secondary flex flex-col items-center justify-center md:hidden"
      >
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-primary p-2"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center mb-8">
            <span className="text-accent text-[12px] tracking-[0.5em] uppercase mb-2 font-serif italic">Zing Bliss</span>
            <span className="text-primary/40 text-[8px] tracking-[0.3em] uppercase">Wedding Planners</span>
          </div>

          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              ref={(el) => { linksRef.current[i] = el; }}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-serif text-primary hover:text-accent transition-all hover:italic font-light"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact"
            ref={(el) => { linksRef.current[navLinks.length] = el; }}
            onClick={() => setIsMenuOpen(false)}
            className="mt-8"
          >
            <MagneticButton className="px-12 py-4 text-[10px] tracking-[0.3em] uppercase border border-primary/20 hover:bg-primary hover:text-secondary transition-colors">
              Contact Us
            </MagneticButton>
          </Link>
        </div>
        
        {/* Decorative Watermark */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[12vw] font-serif opacity-[0.03] select-none pointer-events-none italic whitespace-nowrap">
          ORCHESTRATION
        </div>
      </div>
    </>
  );
};
