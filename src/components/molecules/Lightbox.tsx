"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X } from "lucide-react";
import Image from "next/image";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  image,
  title,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      
      tl.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power2.out",
      });
      
      tl.fromTo(contentRef.current, 
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      );
    } else {
      document.body.style.overflow = "auto";
      const tl = gsap.timeline();
      tl.to(contentRef.current, {
        scale: 0.9,
        opacity: 0,
        y: 30,
        duration: 0.4,
        ease: "power2.in",
      });
      tl.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4,
        ease: "power2.in",
      }, "-=0.2");
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-primary/95 backdrop-blur-md opacity-0 pointer-events-none transition-none"
    >
      {/* Close Trigger */}
      <button 
        onClick={onClose}
        className="absolute top-10 right-10 z-20 text-secondary/50 hover:text-secondary hover:scale-110 transition-all p-4 cursor-pointer"
      >
        <X className="w-8 h-8" />
      </button>

      {image && (
        <div 
          ref={contentRef}
          className="relative max-w-6xl w-full aspect-video md:aspect-[16/9] rounded-sm overflow-hidden border border-secondary/10 shadow-2xl"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          
          {/* Caption */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-primary/80 to-transparent">
            <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-2 block">
              The Archive
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-secondary tracking-tight">
              {title}
            </h2>
          </div>
        </div>
      )}

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left opacity-10 pointer-events-none">
        <span className="text-[10vw] font-serif text-secondary uppercase tracking-[0.5em] whitespace-nowrap">
          Prestige Edition
        </span>
      </div>
    </div>
  );
};
