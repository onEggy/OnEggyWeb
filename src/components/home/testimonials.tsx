"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { SectionHeader } from "../common/section-header";
import { testimonials as rawTestimonials } from "../../../public/data/testimonial.json";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

const gradientAvatars = [
  "from-cyan-500 to-blue-500",
  "from-teal-400 to-emerald-500",
  "from-indigo-500 to-purple-500",
  "from-cyan-400 to-teal-500",
  "from-blue-500 to-indigo-600",
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  // We filter out any empty reviews or invalid elements
  const list = rawTestimonials.filter((t) => t.name && t.testimonial);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % list.length);
  }, [list.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + list.length) % list.length);
  }, [list.length]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
      autoPlayTimer.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoPlayTimer.current = setInterval(() => {
      handleNext();
    }, 6000); // 6 seconds per review
  }, [handleNext, stopAutoPlay]);

  useEffect(() => {
    if (!isHovered) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isHovered, currentIndex, startAutoPlay, stopAutoPlay]);

  const handleDotClick = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Drag handler for mobile swipe
  const handleDragEnd = (event: unknown, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      handlePrev();
    } else if (info.offset.x < -swipeThreshold) {
      handleNext();
    }
  };

  const activeTestimonial = list[currentIndex];
  if (!activeTestimonial) return null;

  // Render a clean gradient fallback avatar using name characters to choose a stable gradient index
  const getGradientIndex = (name: string) => {
    let sum = 0;
    for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
    return sum % gradientAvatars.length;
  };

  const gradientClass = gradientAvatars[getGradientIndex(activeTestimonial.name)];

  // Framer Motion animation configs for sliding transitions
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
    }),
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative">
      {/* Background radial glow */}
      <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />

      <SectionHeader
        tag="Client Success"
        title={<>Trusted by <span className="gradient-text">Engineers & Founders</span></>}
        subtitle="Real outcomes. See how high-growth startups and global enterprises partner with OnEggy to scale production-grade platforms."
        align="center"
        className="mb-16"
      />

      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative max-w-4xl mx-auto"
      >
        {/* Main Testimonial Slide Container */}
        <div className="glass-card p-8 md:p-12 rounded-2xl border border-border/40 shadow-2xl relative overflow-hidden bg-background/25 min-h-[340px] md:min-h-[280px] flex flex-col justify-between select-none">
          {/* Background Quote Icon Decoration */}
          <div className="absolute top-6 right-8 text-muted-foreground/5 pointer-events-none">
            <Quote className="h-28 w-28" />
          </div>

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="space-y-6 md:space-y-8 flex flex-col justify-between h-full cursor-grab active:cursor-grabbing"
            >
              <div className="space-y-4">
                {/* 5-Star Ratings row */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-cyan-500 text-cyan-500" />
                  ))}
                  <span className="text-[10px] font-mono text-cyan-500 font-bold uppercase tracking-wider ml-2">
                    Verified review
                  </span>
                </div>

                {/* Testimonial Quote text */}
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed italic relative z-10">
                  &ldquo;{activeTestimonial.testimonial}&rdquo;
                </p>
              </div>

              {/* Author & Client Metadata Info Row */}
              <div className="flex items-center gap-4 border-t border-border/30 pt-6 mt-4">
                {/* Avatar Fallback with Premium Gradient Orbs */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${gradientClass} flex items-center justify-center text-white font-bold font-mono text-base shadow-lg shrink-0 select-none`}>
                  {getInitials(activeTestimonial.name)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">{activeTestimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {activeTestimonial.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-between mt-6">
          {/* Navigation indicators dots */}
          <div className="flex items-center gap-2">
            {list.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex ? "w-6 bg-cyan-500" : "w-1.5 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Prev/Next arrows hooks */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-lg border border-border/40 bg-background/40 hover:bg-accent/40 text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer transition-colors shadow-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-lg border border-border/40 bg-background/40 hover:bg-accent/40 text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer transition-colors shadow-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
