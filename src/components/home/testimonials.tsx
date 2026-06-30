"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowUp, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials as rawTestimonials } from "../../../public/data/testimonial.json";

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const list = rawTestimonials.filter((t) => t.name && t.testimonial);
  const visible = showAll ? list : list.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 border-t border-border">
      <div className="max-w-2xl">
        <span className="eyebrow mb-5">Client proof</span>
        <h2 className="display text-3xl sm:text-4xl lg:text-5xl mt-4">
          Loved by engineers and <em>founders.</em>
        </h2>
        <p className="mt-5 text-base text-muted-foreground leading-relaxed">
          Real words from the high-growth startups and global enterprises that trust OnEggy to run
          their production platforms.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((item, index) => (
            <motion.figure
              key={`${item.name}-${index}`}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: (index % 6) * 0.04 }}
              className="surface-card rounded-2xl p-6 flex flex-col gap-5"
            >
              <Quote className="h-6 w-6 text-primary/35 shrink-0" aria-hidden="true" />
              <blockquote className="text-[15px] leading-relaxed text-foreground/90 flex-1">
                {item.testimonial}
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-border">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary-strong text-xs font-bold shrink-0"
                  aria-hidden="true"
                >
                  {initials(item.name)}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground truncate">{item.name}</span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground truncate">
                    {item.designation}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </div>

      {list.length > 6 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-primary text-primary-strong bg-card hover:bg-primary/10 text-sm font-semibold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
          >
            {showAll ? (
              <>Show fewer <ArrowUp className="h-4 w-4" aria-hidden="true" /></>
            ) : (
              <>Read all {list.length} reviews <ArrowDown className="h-4 w-4" aria-hidden="true" /></>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
