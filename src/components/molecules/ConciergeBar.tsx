"use client";

import React, { useState, useEffect } from "react";
import { cn, getWhatsAppLink, WHATSAPP_CONFIG } from "@/lib/utils";
import { MessageCircle, Calendar, PhoneCall } from "lucide-react";
import Link from "next/link";

export const ConciergeBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const link = getWhatsAppLink(WHATSAPP_CONFIG.number, WHATSAPP_CONFIG.defaultMessage);
    window.open(link, "_blank");
  };

  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 pointer-events-none",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      <div className="bg-primary/95 backdrop-blur-md text-secondary rounded-full flex items-center gap-0.5 md:gap-1 p-1 shadow-2xl pointer-events-auto border border-secondary/20">
        <button 
          onClick={handleWhatsApp}
          className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-white/10 transition-colors group"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-light hidden md:block">
            WhatsApp
          </span>
        </button>

        <div className="w-[1px] h-4 md:h-6 bg-secondary/20" />

        <Link 
          href="/contact" 
          className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-white/10 transition-colors group"
          aria-label="Book a consultation"
        >
          <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-light hidden md:block">
            Consultation
          </span>
        </Link>

        <div className="w-[1px] h-4 md:h-6 bg-secondary/20" />

        <a 
          href={`tel:${WHATSAPP_CONFIG.number}`}
          className="p-2 md:p-3 hover:bg-white/10 rounded-full transition-colors group"
          aria-label="Call our concierge"
        >
          <PhoneCall className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
        </a>
      </div>
    </div>
  );
};
