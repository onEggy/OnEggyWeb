"use client";

import React from "react";
import Image from "next/image";
import { projectLogos } from "../../../public/data/projectlogos.json";

export function ClientMarquee() {
  // Double the array to create a seamless infinite loop
  const doubledLogos = [...projectLogos, ...projectLogos];

  return (
    <section className="w-full py-12 sm:py-14 border-t border-b border-border bg-surface-subtle overflow-hidden relative">
      {/* Edge fading mask overlays for premium look */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-surface-subtle to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-surface-subtle to-transparent z-10 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-mono">
          Engineered Platforms for Leading Startups & Scaleups
        </p>
      </div>

      <div className="w-full overflow-hidden flex">
        <div className="animate-marquee flex gap-6 md:gap-8 py-2">
          {doubledLogos.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="flex items-center justify-center shrink-0 w-40 md:w-48 h-16 px-6 rounded-md border border-border bg-card shadow-sm transition-colors duration-300 hover:border-primary/40 group"
            >
              <div className="relative w-full h-7 flex items-center justify-center">
                <Image
                  src={logo.url}
                  alt={logo.alt || logo.name}
                  fill
                  sizes="(max-width: 768px) 112px, 144px"
                  className="object-contain transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
