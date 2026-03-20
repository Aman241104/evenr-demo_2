"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TechnicalScanningOverlay } from "@/components/atoms/TechnicalScanningOverlay";

gsap.registerPlugin(ScrollTrigger);

interface BentoCardProps {
  title: string;
  category: string;
  image: string;
  className?: string;
  size?: "small" | "medium" | "large";
}

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  category,
  image,
  className,
  size = "medium",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: "col-span-1 row-span-1 h-[300px]",
    medium: "col-span-1 row-span-2 h-[620px]",
    large: "col-span-2 row-span-2 h-[620px]",
  };

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    // Bloom Effect: Grayscale to Color
    gsap.set(imageRef.current, { filter: "grayscale(100%) contrast(1.1)" });

    const activate = () => {
      setIsHovered(true);
      gsap.to(imageRef.current, {
        filter: "grayscale(0%) contrast(1)",
        scale: 1.05,
        duration: 1.2,
        ease: "power2.out",
      });
      gsap.to(overlayRef.current, {
        opacity: 0.3,
        duration: 0.8,
      });
      gsap.to(textRef.current, {
        y: -10,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const deactivate = () => {
      setIsHovered(false);
      gsap.to(imageRef.current, {
        filter: "grayscale(100%) contrast(1.1)",
        scale: 1,
        duration: 1.2,
        ease: "power2.inOut",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
      });
      gsap.to(textRef.current, {
        y: 0,
        opacity: 0.8,
        duration: 0.6,
      });
    };

    // ScrollTrigger fix for touch devices - auto reveal as you scroll
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    let st: any = null;

    if (isTouch) {
      st = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 70%",
          end: "bottom 30%",
          onEnter: activate,
          onLeave: deactivate,
          onEnterBack: activate,
          onLeaveBack: deactivate,
          toggleActions: "play reverse play reverse"
        }
      });
    }

    const handleToggle = () => {
      if (isTouch) {
        if (isHovered) deactivate();
        else activate();
      }
    };

    card.addEventListener("mouseenter", activate);
    card.addEventListener("mouseleave", deactivate);
    card.addEventListener("click", handleToggle);

    return () => {
      if (st && st.scrollTrigger) st.scrollTrigger.kill();
      card.removeEventListener("mouseenter", activate);
      card.removeEventListener("mouseleave", deactivate);
      card.removeEventListener("click", handleToggle);
    };
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative group overflow-hidden bg-primary/5 rounded-sm cursor-pointer gallery-trigger touch-manipulation",
        sizeClasses[size],
        className
      )}
    >
      <div ref={imageRef} className="w-full h-full relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-1000"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Dynamic Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-1000 z-10"
      />

      <TechnicalScanningOverlay active={isHovered} title={title} />

      {/* Content */}
      <div className="absolute inset-0 p-12 flex flex-col justify-end z-20 pointer-events-none">
        <div ref={textRef} className="opacity-80 transition-all">
          <span className="text-accent text-[8px] tracking-[0.4em] uppercase mb-3 block font-bold">
            {category}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-secondary leading-none tracking-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Technical Metadata Overlay — Human Curator Signal */}
      <div 
        className={cn(
          "absolute top-8 left-8 z-20 opacity-0 transition-opacity duration-1000 flex flex-col gap-2 font-mono text-[6px] tracking-widest text-secondary pointer-events-none",
          isHovered ? "opacity-40" : "group-hover:opacity-40"
        )}
      >
        <div className="flex gap-4">
          <span>CAP: 1/500s</span>
          <span>F/2.8</span>
          <span>ISO 100</span>
        </div>
        <div className="flex gap-4">
          <span>LEN: 35MM</span>
          <span>PRESTIGE_V4</span>
        </div>
      </div>

      {/* High-End Border Trace */}
      <div 
        className={cn(
          "absolute inset-0 border border-secondary/0 transition-all duration-1000 z-30 pointer-events-none",
          isHovered ? "border-secondary/10" : "group-hover:border-secondary/10"
        )} 
      />
    </div>
  );
};
