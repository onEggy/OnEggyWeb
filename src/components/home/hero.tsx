"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { HeroVisual } from "./hero-visual";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "../animations/motion-wrappers";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden border-b border-border py-20 md:py-28 blueprint-grid">
      {/* Blueprint corner crosshairs (decorative) */}
      <div className="absolute left-4 top-4 text-primary/40 font-mono text-[10px] pointer-events-none select-none" aria-hidden="true">+</div>
      <div className="absolute right-4 top-4 text-primary/40 font-mono text-[10px] pointer-events-none select-none" aria-hidden="true">+</div>
      <div className="absolute left-4 bottom-4 text-primary/40 font-mono text-[10px] pointer-events-none select-none" aria-hidden="true">+</div>
      <div className="absolute right-4 bottom-4 text-primary/40 font-mono text-[10px] pointer-events-none select-none" aria-hidden="true">+</div>

      {/* Studio grid side rails — desktop only */}
      <div className="absolute left-20 top-0 bottom-0 w-px bg-border/60 pointer-events-none hidden lg:block" aria-hidden="true" />
      <div className="absolute right-20 top-0 bottom-0 w-px bg-border/60 pointer-events-none hidden lg:block" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10 w-full">
        {/* Left: editorial copy */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-9 text-left lg:pr-6">
          <div className="space-y-5">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                <span>Cloud Infrastructure Modernization</span>
              </div>
            </FadeIn>

            <FadeUp delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter leading-[1.05] text-foreground font-display">
                We design and build <br className="hidden sm:block" />
                <span className="gradient-text-gold">production cloud environments.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[58ch]">
                OnEggy Technologies is an elite cloud architecture squad. We partner with technology leaders to structure multi-account landing zones, automate Kubernetes container releases, and enforce zero-downtime compliance guardrails. Zero console ClickOps. 100% version-controlled GitOps.
              </p>
            </FadeUp>
          </div>

          {/* CTAs */}
          <div className="space-y-6">
            <FadeUp delay={0.3} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 transition-colors tracking-wide cursor-pointer"
              >
                Schedule Consultation <ArrowRight className="h-4 w-4 ml-2" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-primary text-primary-strong bg-card hover:bg-primary/10 text-sm font-bold tracking-wide transition-colors cursor-pointer"
              >
                Request Cloud Audit
              </Link>
            </FadeUp>

            {/* Technology foundations — monochrome strip */}
            <FadeIn delay={0.35} className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-border max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-bold">Technology Foundations:</span>
              <div className="flex items-center gap-6">
                <div className="relative w-5 h-5 shrink-0" title="AWS">
                  <Image src="/service/aws.svg" alt="AWS" fill sizes="20px" className="object-contain opacity-60 hover:opacity-100 transition-opacity" />
                </div>
                <div className="relative w-5 h-5 shrink-0" title="Kubernetes">
                  <Image src="/kubernetes.png" alt="Kubernetes" fill sizes="20px" className="object-contain opacity-60 hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity shrink-0" title="Terraform">
                  <svg className="h-4 w-4 fill-current text-muted-foreground" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M0 0h7.5v7.5h-7.5zm8.25 0h7.5v7.5h-7.5zm8.25 8.25h7.5v7.5h-7.5zm-16.5 0h7.5v7.5h-7.5z" />
                  </svg>
                  <span className="text-[10px] font-mono font-extrabold tracking-wider text-muted-foreground">TERRAFORM</span>
                </div>
                <div className="relative w-12 h-4 shrink-0" title="Next.js">
                  <Image src="/next.svg" alt="Next.js" fill sizes="48px" className="object-contain opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Engineering benchmarks */}
          <StaggerContainer className="grid grid-cols-3 gap-8 pt-8 border-t border-border max-w-xl">
            <StaggerItem className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-foreground">38%</span>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold font-mono">Avg Cost Reduction</p>
            </StaggerItem>
            <StaggerItem className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-foreground">10x</span>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold font-mono">Deploy Speedup</p>
            </StaggerItem>
            <StaggerItem className="space-y-1">
              <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-foreground">99.99%</span>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold font-mono">Uptime Target SLA</p>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Right: architecture visual */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <FadeIn delay={0.2} duration={0.8} className="w-full">
            <HeroVisual />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
