"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { TextReveal } from "@/components/atoms/TextReveal";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { OrnateLogo } from "@/components/atoms/OrnateLogo";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight, MessageSquare, FileText, Layout } from "lucide-react";

export default function VaultPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const dashboardRef = useRef<HTMLDivElement>(null);
  const flashlightRef = useRef<HTMLDivElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode === "2026") {
      setIsLoggedIn(true);
      setError(false);
    } else {
      setError(true);
      gsap.to(".vault-login-ui", {
        keyframes: {
          x: [-10, 10, -10, 10, 0],
        },
        duration: 0.4,
        ease: "power2.inOut",
      });
      setTimeout(() => setError(false), 2000);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAccessCode("");
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
      gsap.fromTo(".vault-item", 
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
        }
      );
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
          <div className="vault-login-ui relative z-20 max-w-md w-full text-center mix-blend-difference">
            <OrnateLogo light className="mb-12 scale-125 opacity-50" />
            <span className={cn(
              "text-[10px] tracking-[0.4em] uppercase mb-8 block transition-colors duration-500",
              error ? "text-red-500" : "text-accent"
            )}>
              {error ? "Access Denied — Invalid Protocol" : "Authorized Personnel Only"}
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
                  className={cn(
                    "w-full bg-transparent border-b py-4 text-center focus:outline-none transition-all font-light tracking-[0.5em] text-sm uppercase placeholder:opacity-30",
                    error ? "border-red-500/50" : "border-secondary/20 focus:border-accent"
                  )}
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
              Protocol Hint: 2026
            </p>
          </div>
        </div>
      ) : (
        /* Dashboard State */
        <div ref={dashboardRef} className="max-w-7xl w-full pt-32 pb-32">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-accent text-[10px] tracking-[0.4em] uppercase block font-bold">
                  Active Project Registry
                </span>
                <button 
                  onClick={handleLogout}
                  className="text-[8px] tracking-[0.2em] uppercase text-secondary/30 hover:text-accent transition-colors border-l border-secondary/10 pl-4"
                >
                  Secure Logout
                </button>
              </div>
              <TextReveal 
                text="VERDANT ESTATE 2025" 
                className="text-4xl md:text-6xl font-serif text-secondary"
              />
            </div>
            <div className="flex gap-4">
              <div className="vault-item bg-secondary/10 px-8 py-4 rounded-sm border border-secondary/5 text-center backdrop-blur-sm">
                <span className="text-[24px] font-serif block text-accent leading-none mb-1">214</span>
                <span className="text-[7px] tracking-[0.3em] uppercase opacity-50">Operational Days</span>
              </div>
              <div className="vault-item bg-secondary/10 px-8 py-4 rounded-sm border border-secondary/5 text-center backdrop-blur-sm">
                <span className="text-[24px] font-serif block text-accent leading-none mb-1">100%</span>
                <span className="text-[7px] tracking-[0.3em] uppercase opacity-50">Orchestration Fidelity</span>
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
                <Image 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80" 
                  alt="Mood Board"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 hover:scale-105 transition-transform duration-[2s]"
                  width={1200}
                  height={675}
                />
                <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-primary to-transparent">
                  <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-2 block">Interactive</span>
                  <h3 className="text-3xl font-serif">Aesthetic Alchemy Board</h3>
                </div>
              </div>
            </div>

            <div className="vault-item flex flex-col gap-8">
              <div className="bg-secondary p-10 text-primary rounded-sm shadow-xl">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/5">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl leading-tight">Lead Concierge</h4>
                    <span className="text-[9px] tracking-[0.4em] uppercase text-primary/40 font-bold">Authorized Access</span>
                  </div>
                </div>
                <div className="space-y-6 mb-10">
                  <div className="bg-primary/5 p-5 rounded-sm text-xs font-light leading-relaxed border-l-2 border-accent/30 italic">
                    &quot;Hello, we have successfully archived the 2025 Verdant Estate records. Every sensory detail and spatial map is now secured in your digital legacy. Would you like to initiate the visioning dialogue for your next celebration?&quot;
                  </div>
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Initiate visioning dialogue..."
                    className="w-full bg-primary/5 border-b border-primary/10 py-4 pr-10 focus:outline-none focus:border-primary text-xs font-light uppercase tracking-widest placeholder:opacity-30 transition-all"
                  />
                  <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 opacity-30 group-focus-within:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
