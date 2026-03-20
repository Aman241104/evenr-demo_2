"use client";

import React, { useState } from "react";
import { TextReveal } from "@/components/atoms/TextReveal";
import { BentoCard } from "@/components/molecules/BentoCard";
import { ConciergeBar } from "@/components/molecules/ConciergeBar";
import { Footer } from "@/components/organisms/Footer";
import { Lightbox } from "@/components/molecules/Lightbox";
import { cn } from "@/lib/utils";

const categories = ["All", "Weddings", "Corporate", "Private", "Milestones"];

const portfolioItems = [
  {
    title: "Verdant Estate Wedding",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    size: "large" as const,
  },
  {
    title: "Midnight Gala 2024",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    size: "medium" as const,
  },
  {
    title: "Ivory Garden Soiree",
    category: "Private",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    size: "medium" as const,
  },
  {
    title: "Heritage Birthday",
    category: "Milestones",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80",
    size: "small" as const,
  },
  {
    title: "Crystal Pavilion Gala",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
    size: "small" as const,
  },
  {
    title: "Emerald Terrace Wedding",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1511551203524-9a24350a5771?auto=format&fit=crop&q=80",
    size: "medium" as const,
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{src: string, title: string} | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <main className="bg-secondary min-h-screen pt-32 pb-32">
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <span className="text-accent text-[10px] tracking-[0.4em] uppercase mb-4 block">
            The Record
          </span>
          <TextReveal 
            text="THE ARCHIVE OF CELEBRATIONS" 
            className="text-5xl md:text-8xl font-serif text-primary mb-12"
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-8 items-center border-b border-primary/10 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-[10px] tracking-[0.3em] uppercase transition-all relative pb-2",
                  activeCategory === cat 
                    ? "text-primary font-bold" 
                    : "text-primary/40 hover:text-primary"
                )}
              >
                {cat}
                {activeCategory === cat && (
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {filteredItems.map((item) => (
              <div 
                key={`${item.title}-${activeCategory}`} 
                className={cn(
                  "animate-fade-in",
                  item.size === "large" ? "md:col-span-2 row-span-2" : "",
                  item.size === "medium" ? "row-span-2" : ""
                )}
              >
                <BentoCard
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  size={item.size}
                  className="h-full"
                  onClick={() => setSelectedImage({src: item.image, title: item.title})}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox 
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage?.src || ""}
        title={selectedImage?.title || ""}
      />

      <ConciergeBar />
      <Footer />
    </main>
  );
}
