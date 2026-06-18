"use client";

import React from "react";
import { FadeUp } from "../animations/motion-wrappers";
import { Shield } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 flex flex-col items-center justify-center text-center">
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[90px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "12s" }} />

      <div className="max-w-4xl mx-auto px-6 space-y-6 relative z-10">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm text-xs text-muted-foreground shadow-sm">
            <Shield className="h-3.5 w-3.5 text-primary" />
            <span>Core Practices & Strategic Consulting</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight font-display">
            Practice Areas &<br />
            <span className="text-primary">Strategic Capabilities</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-sans">
            We provide comprehensive cloud modernization, platform engineering, and software advisory services engineered to pass strict compliance audits and survive enterprise scale.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

