"use client";

import React from "react";
import { TextReveal } from "@/components/atoms/TextReveal";
import { Footer } from "@/components/organisms/Footer";
import { ConciergeBar } from "@/components/molecules/ConciergeBar";

export default function PrivacyPage() {
  return (
    <main className="bg-secondary min-h-screen pt-32">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-6 block font-light">
          Legacy Protocol
        </span>
        <TextReveal 
          text="DISCRETION POLICY" 
          className="text-4xl md:text-7xl font-serif text-primary mb-16"
        />

        <div className="space-y-16 text-primary/70 font-light leading-relaxed">
          <section>
            <h2 className="text-primary font-serif text-2xl mb-6">1. Data Encryption</h2>
            <p>
              Your event DNA and personal records are stored within &apos;The Vault&apos;, protected by 256-bit AES encryption. We treat your digital legacy with the same reverence as your physical celebration.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-serif text-2xl mb-6">2. Information Collection</h2>
            <p>
              We only collect information necessary for the surgical execution of your project. This includes sensory preferences, guest demographics for logistics, and spatial requirements.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-serif text-2xl mb-6">3. Zero Disclosure</h2>
            <p>
              Zing Bliss Events maintains a zero-disclosure policy. We do not sell, trade, or share your data with third-party marketers. Your secrets remain archived in your private legacy.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-serif text-2xl mb-6">4. Digital Erasure</h2>
            <p>
              Upon project completion and legacy archiving, Clients may request the complete digital erasure of all planning blueprints from our active servers.
            </p>
          </section>
        </div>
      </div>
      
      <ConciergeBar />
      <Footer />
    </main>
  );
}
