"use client";

import React, { useState } from "react";
import { Star, Quote, ArrowDown, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showAll, setShowAll] = useState(false);
  const list = rawTestimonials.filter((t) => t.name && t.testimonial);
  
  // Show first 9 testimonials initially, expand to show all 18 on click
  const visibleTestimonials = showAll ? list : list.slice(0, 9);

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

      {/* Masonry Layout Container */}
      <div className="relative">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((item, index) => {
              const gradientClass = gradientAvatars[index % gradientAvatars.length];
              return (
                <motion.div
                  key={`${item.name}-${index}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: (index % 3) * 0.08 }}
                  className="break-inside-avoid glass-card p-6 rounded-xl border border-border/40 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between relative bg-background/25"
                >
                  {/* Watermark Quote Icon */}
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground/5 pointer-events-none" />

                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-cyan-500 text-cyan-500" />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed italic select-text">
                      &ldquo;{item.testimonial}&rdquo;
                    </p>
                  </div>

                  {/* Author Block */}
                  <div className="flex items-center gap-3 border-t border-border/20 pt-4 mt-5">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${gradientClass} flex items-center justify-center text-white font-bold font-mono text-xs shadow-md shrink-0 select-none`}>
                      {getInitials(item.name)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-foreground truncate">{item.name}</h4>
                      <p className="text-[10px] sm:text-xs text-muted-foreground truncate font-medium">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Fade overlay when collapsed */}
        {!showAll && list.length > 9 && (
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Show more/less toggle button */}
      {list.length > 9 && (
        <div className="flex justify-center mt-12 relative z-20">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border/80 bg-background/60 hover:bg-accent/40 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md text-foreground"
          >
            {showAll ? (
              <>
                Show Fewer Reviews <ArrowUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show All Reviews ({list.length}) <ArrowDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
