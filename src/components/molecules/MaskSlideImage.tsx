"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface MaskSlideImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait" | "landscape";
  direction?: "left" | "right" | "up" | "down";
}

export const MaskSlideImage: React.FC<MaskSlideImageProps> = ({
  src,
  alt,
  className,
  aspectRatio = "landscape",
  direction = "right",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[16/9]",
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Mask animation
    tl.fromTo(
      maskRef.current,
      {
        clipPath: "inset(0 100% 0 0)",
      },
      {
        clipPath: "inset(0 0 0 0)",
        duration: 1.5,
        ease: "power4.inOut",
      }
    );

    // Image slight scale down for impact
    tl.fromTo(
      imageRef.current,
      {
        scale: 1.2,
      },
      {
        scale: 1,
        duration: 2,
        ease: "power2.out",
      },
      "-=1.2"
    );
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className={cn("relative overflow-hidden group", aspectClasses[aspectRatio], className)}
    >
      <div 
        ref={maskRef}
        className="absolute inset-0 z-10 bg-secondary/20"
      />
      <div ref={imageRef} className="w-full h-full relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  );
};
