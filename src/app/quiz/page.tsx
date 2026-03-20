"use client";

import React, { useState, useRef } from "react";
import { TextReveal } from "@/components/atoms/TextReveal";
import { MagneticButton } from "@/components/atoms/MagneticButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { Check, ArrowRight, RotateCcw } from "lucide-react";

const quizQuestions = [
  {
    id: 1,
    question: "Choose your spatial energy",
    options: [
      { label: "Grand Ballroom", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80", dna: "Majestic" },
      { label: "Intimate Garden", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80", dna: "Ethereal" },
    ],
  },
  {
    id: 2,
    question: "Select your primary palette",
    options: [
      { label: "Ivory & Gold", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80", dna: "Classic" },
      { label: "Emerald & Onyx", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80", dna: "Dramatic" },
    ],
  },
  {
    id: 3,
    question: "What is your lighting mood?",
    options: [
      { label: "Candlelit Glow", image: "https://images.unsplash.com/photo-1511551203524-9a24350a5771?auto=format&fit=crop&q=80", dna: "Romantic" },
      { label: "Cinematic Tech", image: "https://images.unsplash.com/photo-1505373630103-f21ee09d9a98?auto=format&fit=crop&q=80", dna: "Modern" },
    ],
  },
];

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [circles, setCircles] = useState<{ x: number, y: number, id: number }[]>([]);
  
  const quizRef = useRef<HTMLDivElement>(null);

  const handleSelect = (dna: string, e: React.MouseEvent) => {
    // Add Marker Circle
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newCircle = { x, y, id: Date.now() };
    setCircles([...circles, newCircle]);

    setTimeout(() => {
      const newSelections = [...selections, dna];
      setSelections(newSelections);

      if (currentStep < quizQuestions.length - 1) {
        gsap.to(".quiz-card", {
          opacity: 0,
          x: -50,
          duration: 0.4,
          onComplete: () => {
            setCurrentStep(currentStep + 1);
            setCircles([]);
            gsap.fromTo(".quiz-card", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.4 });
          }
        });
      } else {
        setIsFinished(true);
      }
    }, 600); // Wait for circle animation
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelections([]);
    setCircles([]);
    setIsFinished(false);
  };

  return (
    <main ref={quizRef} className="bg-secondary min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-primary opacity-[0.02] select-none pointer-events-none">
        ALCHEMY
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {!isFinished ? (
          <div className="quiz-card">
            <div className="text-center mb-16">
              <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-4 block font-light">
                Sensory Analysis — 0{currentStep + 1}
              </span>
              <h2 className="text-4xl md:text-7xl font-serif text-primary mb-4 leading-tight">
                {quizQuestions[currentStep].question}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {quizQuestions[currentStep].options.map((option, idx) => (
                <div 
                  key={idx}
                  onClick={(e) => handleSelect(option.dna, e)}
                  className="relative aspect-[4/5] rounded-sm overflow-hidden cursor-none group"
                >
                  <img
                    src={option.image}
                    alt={option.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 lg:grayscale lg:group-hover:grayscale-0"
                  />                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-1000" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center border border-secondary/10">
                    <span className="text-secondary text-2xl font-serif tracking-widest uppercase opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all lg:translate-y-4 lg:group-hover:translate-y-0 duration-700 mix-blend-difference">
                      {option.label}
                    </span>
                  </div>

                  {/* Marker Circle Overlay */}
                  {circles.length > 0 && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-30">
                      {circles.map(c => (
                        <circle 
                          key={c.id}
                          cx={c.x} 
                          cy={c.y} 
                          r="40" 
                          fill="none" 
                          stroke="#D4AF37" 
                          strokeWidth="2" 
                          className="animate-marker-draw"
                        />
                      ))}
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center gap-4">
              {quizQuestions.map((_, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "h-[1px] transition-all duration-700",
                    idx === currentStep ? "w-16 bg-primary" : "w-8 bg-primary/10"
                  )}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            <span className="text-accent text-[10px] tracking-[0.5em] uppercase mb-6 block font-light">
              Your Aesthetic Result
            </span>
            <h2 className="text-5xl md:text-9xl font-serif text-primary mb-12 leading-none uppercase">
              The <span className="italic">{selections.join(" ")}</span> <br /> Archetype
            </h2>
            <p className="text-primary/60 max-w-xl mx-auto mb-16 font-light leading-relaxed text-lg italic">
              Based on your sensory selections, your event DNA is rooted in a blend of {selections[0].toLowerCase()} energy and {selections[2].toLowerCase()} sophistication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <MagneticButton className="bg-primary text-secondary px-16 py-5 text-[10px] tracking-[0.4em] uppercase flex items-center gap-4 shadow-2xl">
                Download Vision Dossier <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <button 
                onClick={resetQuiz}
                className="flex items-center gap-3 text-primary/40 hover:text-primary transition-all text-[10px] tracking-[0.4em] uppercase group"
              >
                <RotateCcw className="w-3 h-3 group-hover:rotate-[-180deg] transition-transform duration-700" /> Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
