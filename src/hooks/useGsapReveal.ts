"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealOptions {
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number;
  scrub?: boolean | number;
  triggerStart?: string;
}

export const useGsapReveal = (options: RevealOptions = {}) => {
  const elementRef = useRef<any>(null);

  const {
    direction = "up",
    delay = 0,
    duration = 1.2,
    distance = 50,
    stagger = 0,
    scrub = false,
    triggerStart = "top 85%",
  } = options;

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const getX = () => {
      if (direction === "left") return distance;
      if (direction === "right") return -distance;
      return 0;
    };

    const getY = () => {
      if (direction === "up") return distance;
      if (direction === "down") return -distance;
      return 0;
    };

    const animation = gsap.from(el, {
      x: getX(),
      y: getY(),
      opacity: 0,
      duration,
      delay,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: triggerStart,
        toggleActions: scrub ? undefined : "play none none none",
        scrub,
      },
    });

    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    };
  }, [direction, delay, duration, distance, stagger, scrub, triggerStart]);

  return elementRef;
};
