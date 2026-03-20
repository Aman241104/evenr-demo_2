"use client";

import React, { useState, useRef, useEffect } from "react";
import { TextReveal } from "@/components/atoms/TextReveal";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { OrnateLogo } from "@/components/atoms/OrnateLogo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Lock, ChevronRight, MessageSquare, FileText, Layout, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VaultPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const dashboardRef = useRef<HTMLDivElement>(null);
  const flashlightRef = useRef<HTMLDivElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.length >= 4) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    if (!isLoggedIn) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isLoggedIn]);

  useGSAP(() => {
    if (isLoggedIn) {
      gsap.from(".vault-item", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  }, [isLoggedIn]);

  return (
    <main className="bg-primary min-h-screen text-secondary flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {!isLoggedIn ? (
        /* Flashlight Login State */
        <div className="relative w-full h-screen flex flex-col items-center justify-center">
          {/* Background Revealed Content */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-20 pointer-events-none"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80")' }}
          />

          {/* Flashlight Overlay */}
          <div 
            ref={flashlightRef}
            className="absolute inset-0 z-10 pointer-events-none transition-all duration-150 ease-out"
            style={{ 
              background: `radial-gradient(circle 250px at ${mousePos.x}% ${mousePos.y}%, transparent 0%, rgba(0, 0, 0, 0.95) 100%)` 
            }}
          />

          {/* Login Form UI */}
          <div className="relative z-20 max-w-md w-full text-center mix-blend-difference">
            <OrnateLogo light className="mb-12 scale-125 opacity-50" />
            <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-8 block">
              Authorized Personnel Only
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-secondary mb-12 tracking-widest">
              THE VAULT
            </h1>
            
            <form onSubmit={handleLogin} className="space-y-12">
              <div className="relative group">
                <input 
                  type="password"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="Secret Access Code"
                  className="w-full bg-transparent border-b border-secondary/20 py-4 text-center focus:outline-none focus:border-accent transition-all font-light tracking-[0.5em] text-sm uppercase placeholder:opacity-30"
                />
              </div>
              <div className="flex justify-center">
                <MagneticButton 
                  type="submit"
                  className="bg-secondary text-primary py-5 px-16 text-[10px] tracking-[0.5em] uppercase hover:bg-accent hover:text-primary transition-all shadow-2xl"
                >
                  Enter Archive
                </MagneticButton>
              </div>
            </form>
            
            <p className="mt-16 text-secondary/30 text-[8px] tracking-[0.4em] uppercase font-light">
              Searching for digital legacies...
            </p>
          </div>
        </div>
      ) : (
        /* Dashboard State (Unchanged for now) */
        <div ref={dashboardRef} className="max-w-7xl w-full pt-32 pb-32">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div>
              <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">
                Active Orchestration
              </span>
              <TextReveal 
                text="STERLING GALA 2026" 
                className="text-4xl md:text-6xl font-serif text-secondary"
              />
            </div>
            <div className="flex gap-4">
              <div className="vault-item bg-secondary/10 px-6 py-3 rounded-sm border border-secondary/5 text-center">
                <span className="text-[20px] font-serif block text-accent">142</span>
                <span className="text-[8px] tracking-[0.2em] uppercase opacity-50">Days Remaining</span>
              </div>
              <div className="vault-item bg-secondary/10 px-6 py-3 rounded-sm border border-secondary/5 text-center">
                <span className="text-[20px] font-serif block text-accent">84%</span>
                <span className="text-[8px] tracking-[0.2em] uppercase opacity-50">Planning Progress</span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Dashboard grid components... */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="vault-item bg-secondary/5 p-8 border border-secondary/5 group hover:border-accent/20 transition-all cursor-pointer">
                <Layout className="w-6 h-6 text-accent mb-6" />
                <h3 className="font-serif text-2xl mb-4">Event Blueprint</h3>
                <p className="text-secondary/50 text-sm font-light leading-relaxed mb-6">
                  Review the spatial architecture and sensory flow of your celebration.
                </p>
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent inline-flex items-center group-hover:gap-2 transition-all">
                  Open 3D Model <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              <div className="vault-item bg-secondary/5 p-8 border border-secondary/5 group hover:border-accent/20 transition-all cursor-pointer">
                <FileText className="w-6 h-6 text-accent mb-6" />
                <h3 className="font-serif text-2xl mb-4">The Collective</h3>
                <p className="text-secondary/50 text-sm font-light leading-relaxed mb-6">
                  Secure access to vendor contracts, floor plans, and mood boards.
                </p>
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent inline-flex items-center group-hover:gap-2 transition-all">
                  View Documents <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              <div className="vault-item lg:col-span-2 relative aspect-video overflow-hidden rounded-sm border border-secondary/10">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
                  alt="Mood Board"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 hover:scale-105 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-primary to-transparent">
                  <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-2 block">Interactive</span>
                  <h3 className="text-3xl font-serif">Aesthetic Alchemy Board</h3>
                </div>
              </div>
            </div>

            <div className="vault-item flex flex-col gap-8">
              <div className="bg-secondary p-8 text-primary rounded-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg leading-tight">Your Digital Concierge</h4>
                    <span className="text-[8px] tracking-widest uppercase text-primary/40">Always Active</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="bg-primary/5 p-3 rounded-sm text-xs font-light leading-relaxed">
                    Hello Sterling Family, the floral samples for the main stage have arrived. Would you like to review them today?
                  </div>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Message your planner..."
                    className="w-full bg-primary/5 border-b border-primary/10 py-3 pr-8 focus:outline-none focus:border-primary text-xs font-light"
                  />
                  <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
