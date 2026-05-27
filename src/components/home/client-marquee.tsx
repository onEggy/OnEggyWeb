"use client";

import React from "react";
import Image from "next/image";
import { projectLogos } from "../../../public/data/projectlogos.json";

export function ClientMarquee() {
  // Double the array to create a seamless infinite loop
  const doubledLogos = [...projectLogos, ...projectLogos];

  return (
    <section className="w-full py-10 border-t border-b border-border/30 bg-background/25 backdrop-blur-sm overflow-hidden relative">
      {/* Edge fading mask overlays for premium look */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-mono">
          Engineered Platforms for Leading Startups & Scaleups
        </p>
      </div>

      <div className="w-full overflow-hidden flex">
        <div className="animate-marquee flex gap-8 md:gap-12 py-2">
          {doubledLogos.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="flex items-center justify-center shrink-0 w-32 md:w-40 h-14 px-4 py-2 rounded-lg bg-background/30 border border-border/20 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:bg-background/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.05)] group"
            >
              <div className="relative w-full h-8 flex items-center justify-center">
                <Image
                  src={logo.url}
                  alt={logo.alt || logo.name}
                  fill
                  className="object-contain filter grayscale opacity-45 dark:opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
