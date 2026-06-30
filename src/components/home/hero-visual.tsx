"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Shield, GitBranch, Activity, Compass, ArrowUpRight } from "lucide-react";

interface HeroVisualProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function HeroVisual({ mouseX, mouseY }: HeroVisualProps) {
  // Subtle parallax offsets for depth
  const xOffset = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const yOffset = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);

  const pillars = [
    {
      num: "01",
      icon: <Compass className="h-5 w-5 text-primary" />,
      title: "Cloud Architecture Advisory",
      desc: "Multi-account Landing Zones, secure AWS Control Tower blueprints, and compliant tenant separation architectures.",
    },
    {
      num: "02",
      icon: <Shield className="h-5 w-5 text-primary/80" />,
      title: "DevSecOps & Compliance",
      desc: "Declarative guardrails enforcing strict PCI-DSS, HIPAA, and ISO 27001 audit standards directly inside IaC.",
    },
    {
      num: "03",
      icon: <GitBranch className="h-5 w-5 text-primary/60" />,
      title: "Infrastructure Automation",
      desc: "100% version-controlled Terraform code blocks and zero-downtime GitOps pipeline release architectures.",
    },
    {
      num: "04",
      icon: <Activity className="h-5 w-5 text-primary" />,
      title: "Continuous Observability",
      desc: "Advanced cluster logging setups, real-time alert routing maps, and proactive cloud waste cost optimization.",
    },
  ];

  return (
    <motion.div
      style={{ x: xOffset, y: yOffset }}
      className="w-full relative bg-card/30 border border-border/80 p-6 md:p-8 rounded-2xl shadow-xl select-none max-w-lg mx-auto backdrop-blur-md"
    >
      {/* Decorative top-right accent */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[9px] font-mono text-muted-foreground uppercase tracking-widest border-b border-border/40 pb-1">
        <span>framework // ecm-v3</span>
        <ArrowUpRight className="h-3 w-3 text-muted-foreground/80" />
      </div>

      <div className="mb-6 space-y-1">
        <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">
          Consulting Model
        </span>
        <h3 className="text-lg font-bold text-foreground font-display tracking-tight">
          Enterprise Cloud Modernization
        </h3>
      </div>

      {/* Structured Consulting Framework 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pillars.map((pillar) => (
          <div
            key={pillar.num}
            className="p-4 rounded-xl border border-border/50 bg-secondary/15 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center">
                {pillar.icon}
              </div>
              <span className="text-xs font-mono text-muted-foreground/60 font-bold">
                {pillar.num}
              </span>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-foreground font-display leading-tight">
                {pillar.title}
              </h4>
              <p className="text-[10px] text-muted-foreground leading-normal font-sans">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom framework details status row */}
      <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-[8px] font-mono text-muted-foreground font-bold uppercase tracking-wider">
        <span>AWS partner network certified</span>
        <span className="text-primary flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
          framework active
        </span>
      </div>
    </motion.div>
  );
}
