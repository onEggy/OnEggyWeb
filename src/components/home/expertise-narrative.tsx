"use client";

import React from "react";
import { Lock, GitBranch, Bell } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "../animations/motion-wrappers";

export function ExpertiseNarrative() {
  const pillars = [
    {
      icon: <Lock className="h-5 w-5 text-primary" aria-hidden="true" />,
      label: "Declarative Systems",
      title: "Zero ClickOps Baseline",
      desc: "Manual configuration is a reliability risk. We represent 100% of your networking layers, EKS settings, and security policies as declarative, version-controlled Infrastructure as Code."
    },
    {
      icon: <GitBranch className="h-5 w-5 text-accent" aria-hidden="true" />,
      label: "Continuous Delivery",
      title: "Pipeline Driven Operations",
      desc: "Workloads are managed via GitOps flows. Code pushes trigger automated lints, dry-run plans, and zero-downtime releases, eliminating hand-offs and deploy-night anxiety."
    },
    {
      icon: <Bell className="h-5 w-5 text-primary" aria-hidden="true" />,
      label: "Observability",
      title: "Telemetry-First Deployment",
      desc: "We do not deploy blind. Every environment is configured with active alerting thresholds, automated Slack diagnostics, and metrics dashboards from the first minute."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 border-t border-border relative">
      {/* Blueprint background grid coordinate markers (decorative) */}
      <div
        className="absolute top-2 left-10 font-mono text-xs text-muted-foreground/50 select-none pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        GRID.SEC.B // ALPHA_OFFSET: 0x48FA
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Editorial Text block (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <FadeUp>
            <span className="text-xs font-mono font-bold text-primary-strong uppercase tracking-widest block">
              Core Philosophy
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] font-display">
              Platform Engineering is an <span className="text-primary-strong font-bold">Architecture Decision</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-base text-muted-foreground leading-relaxed">
              We reject the generic marketing claims of traditional outsourcing agencies. We are a specialized cloud-native systems squad that partners with CTOs and founders to replace manual server tweaking with declarative GitOps pipelines.
            </p>
          </FadeUp>
        </div>

        {/* Right High-Density Grid (7 cols) */}
        <StaggerContainer className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch border-t lg:border-t-0 border-border pt-8 lg:pt-0">
          {pillars.map((pillar) => (
            <StaggerItem
              key={pillar.title}
              className="surface-card p-6 rounded-xl hover:border-primary/40 flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-primary-strong font-semibold uppercase tracking-wider block">
                    {pillar.label}
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary-strong transition-colors">
                    {pillar.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border">
                {pillar.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
