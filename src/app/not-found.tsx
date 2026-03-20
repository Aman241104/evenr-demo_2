"use client";

import React from "react";
import { TextReveal } from "@/components/atoms/TextReveal";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { OrnateLogo } from "@/components/atoms/OrnateLogo";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-2xl w-full">
        <OrnateLogo className="mb-12 opacity-20 scale-75" />
        
        <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4 block">
          Error 404
        </span>
        
        <TextReveal 
          text="LOST IN THE ARCHIVE" 
          className="text-4xl md:text-7xl font-serif text-primary mb-8"
        />
        
        <p className="text-primary/50 font-light leading-relaxed mb-12 max-w-md mx-auto">
          The orchestration you are looking for has been moved or does not exist in our current collection.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/">
            <MagneticButton className="bg-primary text-secondary px-10 py-4 text-[10px]">
              RETURN TO HOME
            </MagneticButton>
          </Link>
          <Link href="/gallery">
            <MagneticButton 
              className="bg-transparent border border-primary text-primary px-10 py-4 text-[10px]"
              strength={20}
            >
              BROWSE THE ARCHIVE
            </MagneticButton>
          </Link>
        </div>
      </div>

      {/* Decorative Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif text-primary/[0.02] select-none pointer-events-none -rotate-12">
        VOID
      </div>
    </main>
  );
}
