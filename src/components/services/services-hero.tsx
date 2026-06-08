"use client";

import React from "react";
import { FadeUp } from "../animations/motion-wrappers";
import { Cpu } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20 flex flex-col items-center justify-center text-center">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[90px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "7s" }} />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "11s" }} />

      <div className="max-w-4xl mx-auto px-6 space-y-6 relative z-10">
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm text-xs text-muted-foreground shadow-sm">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span>Scale. Automate. Optimize.</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Enterprise Cloud-Native &<br />
            <span className="text-cyan-400">Software Engineering</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From AWS Landing Zones and Kubernetes clusters to full-stack Next.js platforms and React Native apps, we build the foundations that power scaling startups and businesses.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
