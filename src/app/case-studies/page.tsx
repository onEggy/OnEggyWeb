"use client";

import React from "react";
import { ArrowUpRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";

const cases = [
  {
    title: "AWS Cloud Operations for Smile Foundation",
    metrics: "Reduced cloud overhead by 34%, improved response times by 50%.",
    sector: "Non-Profit / Education",
    icon: <TrendingUp className="h-5 w-5 text-cyan-400" />,
  },
  {
    title: "Kubernetes Migration for CloudStok Technologies",
    metrics: "Moved core workloads to EKS with custom CI/CD pipelines, scaling to 10k concurrent users.",
    sector: "SaaS / Platform",
    icon: <Zap className="h-5 w-5 text-teal-400" />,
  },
  {
    title: "Mobile Architecture for Beyond Imagination",
    metrics: "Engineered robust React Native application with high-security blockchain sync protocols.",
    sector: "Fintech / Blockchain",
    icon: <ShieldCheck className="h-5 w-5 text-indigo-400" />,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-3xl mb-16 space-y-6">
        <FadeUp>
          <span className="text-xs uppercase tracking-widest text-cyan-500 font-semibold">Our Proven Outcomes</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Client Success <span className="gradient-text">Case Studies</span>
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real outcomes. Discover how we&apos;ve helped companies improve deployment speed, reduce cloud waste, and build high-performance products.
          </p>
        </FadeUp>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((item, index) => (
          <StaggerItem
            key={index}
            className="glass-card hover:border-cyan-500/40 p-8 rounded-xl flex flex-col justify-between h-[280px] transition-all group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-xs text-cyan-500 font-mono tracking-wider">{item.sector}</span>
                <div className="w-8 h-8 rounded-full bg-background/50 border border-border/40 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h2 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {item.metrics}
              </p>
            </div>
            <div className="flex justify-end pt-4">
              <span className="text-xs font-semibold text-foreground group-hover:text-cyan-500 inline-flex items-center gap-1">
                View Case Study <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
