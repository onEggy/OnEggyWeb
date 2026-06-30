"use client";

import React from "react";
import { Check, Rocket, Zap, ShieldCheck } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";
import { SectionHeader } from "../common/section-header";

const stages = [
  {
    num: "01",
    phase: "Launch Velocity",
    title: "Seed to MVP Stage",
    desc: "Speed and simplicity are critical. We set up initial secure environments that avoid lock-ins, allowing startup developers to write and deploy code in seconds.",
    focus: "Fast iteration, low cloud spend, reproducible staging sandboxes",
    icon: <Rocket className="h-4.5 w-4.5 text-amber-400" />,
    features: [
      "VPC networking with subnet isolation",
      "Greenfield AWS landing zones in 5 days",
      "Clean serverless configs (Lambda / Docker)",
      "Next.js and FastAPI starter templates",
    ],
  },
  {
    num: "02",
    phase: "Stability & Scale",
    title: "Series A to Growth",
    desc: "As client numbers grow, manual deployments fail. We transition workloads into auto-scaling EKS clusters, automate pipeline gates, and add central logging.",
    focus: "No single point of failure, container scaling, release automation",
    icon: <Zap className="h-4.5 w-4.5 text-amber-500" />,
    features: [
      "AWS EKS Kubernetes migration via Helm",
      "Automated CI/CD release pipelines",
      "Centralized Grafana observability panels",
      "Secure key rotation via Secrets Manager",
    ],
  },
  {
    num: "03",
    phase: "Compliance Ready",
    title: "Enterprise Readiness",
    desc: "To close large-market enterprise deals, your infrastructure must be audit-ready. We enforce strict compliance policies and Transit Gateway security.",
    focus: "SOC2 / HIPAA compliance audits, disaster recovery configurations",
    icon: <ShieldCheck className="h-4.5 w-4.5 text-amber-600" />,
    features: [
      "HIPAA, PCI-DSS, or ISO 27001 zones",
      "Transit Gateway network isolation",
      "Multi-Region active disaster replication",
      "24/7/365 telemetry monitoring alerts",
    ],
  },
];

export function ScalingJourney() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border/40 relative">
      {/* Blueprint Coordinates */}
      <div className="absolute top-2 left-10 font-mono text-[8px] text-zinc-650 opacity-40 select-none">
        GRID.SEC.G // LIFE_CYCLE.TIMELINE_V2.0
      </div>

      <SectionHeader
        tag="Lifecycle Strategy"
        title={<>Partnership for Your <span className="text-primary">Entire Scaling Journey</span></>}
        subtitle="Your infrastructure requirements change at each stage of company growth. We design your platforms to survive scale spikes and pass enterprise security audits."
        align="left"
        className="mb-16 max-w-3xl"
      />

      {/* Rebuilt: 3-column horizontal progression board */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {stages.map((stage, index) => (
          <StaggerItem
            key={stage.num}
            className="bg-background/25 border border-border/40 hover:border-primary/30 p-6 rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden transition-all duration-300 group"
          >
            {/* Horizontal step indicator line overlay (desktop only) */}
            {index < 2 && (
              <div className="hidden md:block absolute top-10 left-[calc(100%-1rem)] w-8 border-t-2 border-dashed border-border/40 z-10" />
            )}

            <div className="space-y-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-border/20 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    {stage.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-primary font-semibold tracking-wider block">
                      STAGE {stage.num}
                    </span>
                    <h4 className="text-xs font-bold text-foreground font-mono uppercase tracking-wider leading-none">
                      {stage.phase}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Stage Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              {/* Primary Focus Box */}
              <div className="p-3 bg-zinc-900/40 border border-zinc-800/80 rounded-xl">
                <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest block font-bold mb-0.5">
                  Primary Focus Area
                </span>
                <p className="text-xs text-foreground font-bold font-mono leading-snug">
                  {stage.focus}
                </p>
              </div>

              {/* Outputs Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-border/25">
                <span className="text-[9px] font-mono font-semibold text-primary uppercase tracking-widest block">
                  Actionable Infrastructure Outputs
                </span>
                <ul className="space-y-2">
                  {stage.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-muted-foreground leading-snug">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
