"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { useMotionValue } from "framer-motion";
import { HeroVisual } from "./hero-visual";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "../animations/motion-wrappers";

// Animated counter helper component for premium counts
function StatCounter({ value, suffix = "", duration = 1.5 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 25);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{count}{suffix}</span>;
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [bgGlowPos, setBgGlowPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setBgGlowPos({ x, y });

    // Normalized parallax values (-0.5 to 0.5)
    mouseX.set((e.clientX / window.innerWidth) - 0.5);
    mouseY.set((e.clientY / window.innerHeight) - 0.5);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[calc(100vh-6rem)] w-full flex items-center justify-center overflow-hidden border-b border-border/30 py-12 md:py-24"
    >
      {/* Grid backdrop */}
      <div className="grid-bg absolute inset-0 opacity-[0.25] pointer-events-none" />

      {/* Mouse Follow Glow Backdrop */}
      <div
        className="absolute pointer-events-none -z-10 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] transition-all duration-300 ease-out"
        style={{
          left: `${bgGlowPos.x}px`,
          top: `${bgGlowPos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Large Glowing Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[110px] pointer-events-none animate-pulse" style={{ animationDuration: "6s" }} />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: "10s" }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 w-full">
        
        {/* Left Column: Premium Marketing Copy & Stats */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
          
          <div className="space-y-4">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm text-xs text-muted-foreground shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Your Dedicated Cloud & Platform Engineering Partner</span>
              </div>
            </FadeIn>

            <FadeUp delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] text-foreground font-sans">
                We build and automate <br className="hidden sm:inline" />
                <span className="text-cyan-400">production-grade</span> cloud platforms.
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                OnEggy partners with CTOs and engineering teams to deploy automated Kubernetes workloads, restructure AWS Landing Zones, and build secure developer portals. Zero ClickOps. 100% Declarative GitOps.
              </p>
            </FadeUp>
          </div>

          {/* Interactive CTAs */}
          <div className="space-y-5">
            <FadeUp delay={0.3} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-cyan-505 bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:outline-none cursor-pointer"
              >
                Book Free Consultation <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-border/80 bg-background/50 hover:bg-zinc-900 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:outline-none cursor-pointer"
              >
                Get Cloud Cost Audit
              </Link>
            </FadeUp>

            {/* Handcrafted Stack Bar */}
            <FadeIn delay={0.35} className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 border-t border-border/20 max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-semibold">Supported Ecosystem:</span>
              <div className="flex items-center gap-5">
                <div className="relative w-5 h-5 shrink-0" title="AWS">
                  <Image src="/service/aws.svg" alt="AWS" fill sizes="20px" className="object-contain opacity-50 hover:opacity-100 transition-opacity" />
                </div>
                <div className="relative w-5 h-5 shrink-0" title="Kubernetes">
                  <Image src="/kubernetes.png" alt="Kubernetes" fill sizes="20px" className="object-contain opacity-50 hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity shrink-0" title="Terraform">
                  <svg className="h-4.5 w-4.5 fill-current text-purple-400" viewBox="0 0 24 24">
                    <path d="M0 0h7.5v7.5h-7.5zm8.25 0h7.5v7.5h-7.5zm8.25 8.25h7.5v7.5h-7.5zm-16.5 0h7.5v7.5h-7.5z" />
                  </svg>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-purple-400">TERRAFORM</span>
                </div>
                <div className="relative w-12 h-4 dark:invert shrink-0" title="Next.js">
                  <Image src="/next.svg" alt="Next.js" fill sizes="48px" className="object-contain opacity-50 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Trust Indicators banner */}
          <FadeIn delay={0.4} className="border-t border-border/40 pt-6 space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-mono flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-cyan-400" /> Compliance-Ready & Production-Grade
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-medium">
              <span>HIPAA Alignments</span>
              <span className="text-border">•</span>
              <span>PCI-DSS Architectures</span>
              <span className="text-border">•</span>
              <span>ISO 27001 Ready blueprints</span>
            </div>
          </FadeIn>

          {/* Stats Row */}
          <StaggerContainer className="grid grid-cols-3 gap-6 border-t border-border/40 pt-6">
            <StaggerItem className="space-y-1">
              <StatCounter value={34} suffix="%" />
              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold">Cost Saved</p>
            </StaggerItem>
            <StaggerItem className="space-y-1">
              <StatCounter value={10} suffix="x" />
              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold">Speedup cycles</p>
            </StaggerItem>
            <StaggerItem className="space-y-1">
              <StatCounter value={99} suffix=".9%" />
              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold">SLA Uptime</p>
            </StaggerItem>
          </StaggerContainer>

        </div>

        {/* Right Column: Custom Animated Nodes Diagram */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <FadeIn delay={0.2} duration={0.8} className="w-full">
            <HeroVisual mouseX={mouseX} mouseY={mouseY} />
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
