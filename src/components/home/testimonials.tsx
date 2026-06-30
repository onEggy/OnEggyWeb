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

const avatarBgClasses = [
  "bg-primary/10 border border-primary/20 text-primary-strong",
  "bg-muted border border-border text-foreground",
  "bg-accent/10 border border-accent/20 text-accent-strong",
];

const getAvatarStyle = (name: string) => {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return avatarBgClasses[sum % avatarBgClasses.length];
};

export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const list = rawTestimonials.filter((t) => t.name && t.testimonial);
  
  // Show first 9 testimonials initially, expand to show all 18 on click
  const visibleTestimonials = showAll ? list : list.slice(0, 9);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 border-t border-border relative">
      {/* Blueprint Coordinates */}
      <div className="absolute top-2 left-6 sm:left-10 font-mono text-xs text-muted-foreground/50 select-none pointer-events-none" aria-hidden="true">
        GRID.SEC.H // CLIENT.FEEDBACK_V1.1
      </div>

      <SectionHeader
        tag="Client Success"
        title={<>Trusted by <span className="text-primary font-bold">Engineers & Founders</span></>}
        subtitle="Real outcomes. See how high-growth startups and global enterprises partner with OnEggy to scale production-grade platforms."
        align="center"
        className="mb-16"
      />

      {/* Masonry Layout Container */}
      <div className="relative">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((item, index) => {
              const avatarStyle = getAvatarStyle(item.name);
              return (
                <motion.div
                  key={`${item.name}-${index}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: (index % 3) * 0.08 }}
                  className="break-inside-avoid surface-card p-6 rounded-xl border border-border hover:border-primary/40 transition-all duration-300 flex flex-col justify-between relative"
                >
                  {/* Watermark Quote Icon */}
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10 pointer-events-none" aria-hidden="true" />

                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex items-center gap-0.5" role="img" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-sm text-foreground leading-relaxed italic select-text">
                      &ldquo;{item.testimonial}&rdquo;
                    </p>
                  </div>

                  {/* Author Block */}
                  <div className="flex items-center gap-3 border-t border-border pt-4 mt-5">
                    <div className={`w-10 h-10 rounded-full ${avatarStyle} flex items-center justify-center font-bold font-mono text-sm shrink-0 select-none`}>
                      {getInitials(item.name)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-foreground truncate">{item.name}</h4>
                      <p className="text-xs text-muted-foreground truncate font-medium">
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
            aria-expanded={showAll}
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-primary text-primary-strong bg-card hover:bg-primary/10 text-sm font-semibold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
          >
            {showAll ? (
              <>
                Show Fewer Reviews <ArrowUp className="h-4 w-4" aria-hidden="true" />
              </>
            ) : (
              <>
                Show All Reviews ({list.length}) <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
