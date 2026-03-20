"use client";

import React, { useState, useEffect } from "react";
import { cn, getWhatsAppLink, WHATSAPP_CONFIG } from "@/lib/utils";
import { MessageCircle, Calendar, PhoneCall } from "lucide-react";

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
      <div className="bg-primary/95 backdrop-blur-md text-secondary rounded-full flex items-center gap-1 p-1 shadow-2xl pointer-events-auto border border-secondary/20">
        <button 
          onClick={handleWhatsApp}
          className="flex items-center gap-3 px-6 py-3 rounded-full hover:bg-white/10 transition-colors group"
        >
          <MessageCircle className="w-4 h-4 text-accent" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-light hidden md:block">
            WhatsApp Concierge
          </span>
        </button>
        
        <div className="w-[1px] h-6 bg-secondary/20" />
        
        <a href="/contact" className="flex items-center gap-3 px-6 py-3 rounded-full hover:bg-white/10 transition-colors group">
          <Calendar className="w-4 h-4 text-accent" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-light hidden md:block">
            Private Consultation
          </span>
        </a>
        
        <div className="w-[1px] h-6 bg-secondary/20" />
        
        <button className="p-3 hover:bg-white/10 rounded-full transition-colors group">
          <PhoneCall className="w-4 h-4 text-accent" />
        </button>
      </div>
    </div>
  );
};
