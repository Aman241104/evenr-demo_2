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
  const quizRef = useRef<HTMLDivElement>(null);

  const handleSelect = (dna: string) => {
    const newSelections = [...selections, dna];
    setSelections(newSelections);

    if (currentStep < quizQuestions.length - 1) {
      gsap.to(".quiz-card", {
        opacity: 0,
        x: -50,
        duration: 0.4,
        onComplete: () => {
          setCurrentStep(currentStep + 1);
          gsap.fromTo(".quiz-card", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.4 });
        }
      });
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelections([]);
    setIsFinished(false);
  };

  return (
    <main ref={quizRef} className="bg-secondary min-h-screen flex items-center justify-center pt-24 px-6">
      <div className="max-w-4xl w-full">
        {!isFinished ? (
          <div className="quiz-card">
            <div className="text-center mb-12">
              <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">
                Aesthetic Alchemy — Question 0{currentStep + 1}
              </span>
              <TextReveal 
                text={quizQuestions[currentStep].question} 
                className="text-4xl md:text-6xl font-serif text-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quizQuestions[currentStep].options.map((option, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleSelect(option.dna)}
                  className="relative aspect-video rounded-sm overflow-hidden cursor-pointer group"
                >
                  <img 
                    src={option.image} 
                    alt={option.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-secondary text-2xl font-serif tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                      {option.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center gap-2">
              {quizQuestions.map((_, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "h-1 transition-all duration-500 rounded-full",
                    idx === currentStep ? "w-12 bg-primary" : "w-4 bg-primary/10"
                  )}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">
              Your Event DNA Result
            </span>
            <TextReveal 
              text={`THE ${selections.join(" ").toUpperCase()}`} 
              className="text-5xl md:text-8xl font-serif text-primary mb-8"
            />
            <p className="text-primary/60 max-w-lg mx-auto mb-12 font-light leading-relaxed">
              Based on your aesthetic choices, your event archetype is rooted in a blend of {selections[0].toLowerCase()} grandeur and {selections[2].toLowerCase()} sophistication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <MagneticButton className="bg-primary text-secondary px-12 py-4 text-xs tracking-widest uppercase flex items-center gap-3">
                Download Vision PDF <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <button 
                onClick={resetQuiz}
                className="flex items-center gap-2 text-primary/40 hover:text-primary transition-colors text-[10px] tracking-[0.3em] uppercase"
              >
                <RotateCcw className="w-3 h-3" /> Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
