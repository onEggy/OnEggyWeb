"use client";

import React from "react";
import Image from "next/image";
import { projectLogos } from "../../../public/data/projectlogos.json";

export function ClientMarquee() {
  // Triple the array for a dense, seamless loop on wide screens.
  const loopLogos = [...projectLogos, ...projectLogos, ...projectLogos];

  return (
    <section className="w-full py-14 sm:py-16 border-y border-border bg-surface-subtle overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        <p className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-[0.18em] text-center">
          Trusted to run platforms for leading startups &amp; scaleups
        </p>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
      </div>

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-surface-subtle to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-surface-subtle to-transparent z-10 pointer-events-none" aria-hidden="true" />

      <div className="w-full flex">
        <div className="animate-marquee flex items-center gap-14 md:gap-20">
          {loopLogos.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="relative shrink-0 w-28 md:w-32 h-9 md:h-10 grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={logo.name}
            >
              <Image
                src={logo.url}
                alt={logo.alt || logo.name}
                fill
                sizes="(max-width: 768px) 112px, 128px"
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
