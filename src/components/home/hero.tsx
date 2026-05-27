"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { useMotionValue } from "framer-motion";
import { HeroVisual } from "./hero-visual";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem, Float } from "../animations/motion-wrappers";

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

      {/* Floating Tech Badges - Left/Right sides */}
      {/* AWS */}
      <Float speed={4} className="absolute left-[8%] top-[25%] z-20 hidden lg:block">
        <div className="glass-card px-3 py-1.5 rounded-full border border-orange-500/20 text-orange-400 flex items-center gap-1.5 shadow-md shadow-orange-500/5">
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-3.666 17.067c2.518-.088 4.793-1.282 5.434-2.146.406-.549.444-1.042.102-1.341-.337-.294-.9-.236-1.428.149-.579.421-2.036 1.15-3.805 1.096-1.579-.049-2.28-.739-2.215-1.465.074-.823.953-1.401 2.92-1.401h3.332v-1.127c0-1.895-1.055-2.909-3.21-2.909-1.921 0-3.328.799-3.92 1.405-.286.292-.258.749.073.993.308.228.743.19 1.082-.102.392-.338 1.455-.89 2.684-.89 1.196 0 1.621.503 1.621 1.343v.681l-3.528.067c-3.136.061-4.295 1.488-4.295 3.013 0 1.954 1.545 3.298 4.633 3.234z" />
          </svg>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">AWS</span>
        </div>
      </Float>

      {/* Kubernetes */}
      <Float speed={4.5} className="absolute left-[4%] top-[60%] z-20 hidden lg:block">
        <div className="glass-card px-3 py-1.5 rounded-full border border-blue-500/20 text-blue-400 flex items-center gap-1.5 shadow-md shadow-blue-500/5">
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.01 0l7.35 4.31v8.62l-7.35 4.31-7.36-4.31v-8.62zm0 1.63L6.1 5.09v6.92l5.91 3.46 5.91-3.46V5.09z" />
          </svg>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">Kubernetes</span>
        </div>
      </Float>

      {/* Terraform */}
      <Float speed={5} className="absolute right-[5%] bottom-[20%] z-20 hidden lg:block">
        <div className="glass-card px-3 py-1.5 rounded-full border border-purple-500/20 text-purple-400 flex items-center gap-1.5 shadow-md shadow-purple-500/5">
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M0 0h7.5v7.5h-7.5zm8.25 0h7.5v7.5h-7.5zm8.25 8.25h7.5v7.5h-7.5zm-16.5 0h7.5v7.5h-7.5z" />
          </svg>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">Terraform</span>
        </div>
      </Float>

      {/* Next.js */}
      <Float speed={3.5} className="absolute right-[10%] top-[20%] z-20 hidden lg:block">
        <div className="glass-card px-3 py-1.5 rounded-full border border-border/80 text-foreground flex items-center gap-1.5 shadow-md">
          <span className="w-2 h-2 rounded-full bg-foreground" />
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">Next.js</span>
        </div>
      </Float>

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
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
                Scale Your Platform.<br />
                <span className="gradient-text">Automate DevOps.</span><br />
                Startup to Enterprise.
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                We engineer production-grade cloud environments, automate Kubernetes pipelines, and optimize infrastructure spend. Partner with senior architects to accelerate release cycles with 100% transparency.
              </p>
            </FadeUp>
          </div>

          {/* Interactive CTAs */}
          <FadeUp delay={0.3} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center h-12 px-6 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-all shadow-lg overflow-hidden group isolate"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="relative z-10 group-hover:text-black transition-colors flex items-center gap-2">
                Schedule Architecture Discussion <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-6 rounded-lg border border-border/80 bg-background/40 hover:bg-accent/40 text-sm font-medium transition-all"
            >
              Get Free Cloud Audit
            </Link>
          </FadeUp>

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
