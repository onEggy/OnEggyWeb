"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials as rawTestimonials } from "../../../public/data/testimonial.json";

export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const list = rawTestimonials.filter((t) => t.name && t.testimonial);

  // Show first 6 testimonials initially, expand to show all on click
  const visibleTestimonials = showAll ? list : list.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow mb-5">Client proof</span>
          <h2 className="display text-3xl sm:text-4xl mt-4">
            Trusted by engineers and <em>founders.</em>
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[36ch]">
            Real outcomes from the high-growth startups and global enterprises that partner with OnEggy to run production-grade platforms.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-border">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleTestimonials.map((item, index) => (
                <motion.figure
                  key={`${item.name}-${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: (index % 6) * 0.05 }}
                  className="border-b border-border py-8 sm:py-10"
                >
                  <blockquote className="display text-xl sm:text-2xl text-foreground leading-[1.4] max-w-[46ch]">
                    &ldquo;{item.testimonial}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-sm font-semibold text-foreground">{item.name}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground/80">
                      {item.designation}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>

          {list.length > 6 && (
            <div className="mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                aria-expanded={showAll}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-primary text-primary-strong bg-card hover:bg-primary/10 text-sm font-semibold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary"
              >
                {showAll ? (
                  <>
                    Show fewer reviews <ArrowUp className="h-4 w-4" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Show all reviews ({list.length}) <ArrowDown className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
