"use client";

import React from "react";
import { TextReveal } from "@/components/atoms/TextReveal";
import { Footer } from "@/components/organisms/Footer";
import { ConciergeBar } from "@/components/molecules/ConciergeBar";

export default function TermsPage() {
  return (
    <main className="bg-secondary min-h-screen pt-32">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-6 block font-light">
          Legal Protocol
        </span>
        <TextReveal 
          text="TERMS OF ORCHESTRATION" 
          className="text-4xl md:text-7xl font-serif text-primary mb-16"
        />

        <div className="space-y-16 text-primary/70 font-light leading-relaxed">
          <section>
            <h2 className="text-primary font-serif text-2xl mb-6">1. Engagement</h2>
            <p>
              By commissioning Zing Bliss Events (the &quot;Agency&quot;), the Client agrees to a collaborative orchestration process governed by precision, discretion, and creative integrity.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-serif text-2xl mb-6">2. Creative Sovereignty</h2>
            <p>
              The Agency maintains creative sovereignty over the &quot;Prestige Edition&quot; aesthetic protocols. While every event reflects the unique DNA of the Client, the final orchestration is a protected work of aesthetic alchemy.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-serif text-2xl mb-6">3. Investment & Allocation</h2>
            <p>
              Luxury event management requires significant upfront allocation of sensory resources. All retainers are non-refundable, representing the Agency&apos;s commitment to exclusive project availability.
            </p>
          </section>

          <section>
            <h2 className="text-primary font-serif text-2xl mb-6">4. Discretion</h2>
            <p>
              The Agency operates under a strict code of silence for high-net-worth orchestrations. Neither party shall disclose the specific financial blueprints or private guest lists of the event without prior authorization.
            </p>
          </section>
        </div>
      </div>
      
      <ConciergeBar />
      <Footer />
    </main>
  );
}
