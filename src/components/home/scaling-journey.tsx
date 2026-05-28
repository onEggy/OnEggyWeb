"use client";

import React, { useState } from "react";
import { Check, Rocket, Zap, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const stages = [
  {
    id: "seed-mvp",
    phase: "01. Launch Velocity",
    title: "Seed to MVP Stage",
    desc: "Speed and simplicity are critical. We set up initial secure environments that avoid lock-ins, allowing startup developers to write and deploy code in seconds.",
    focus: "Fast iteration, low cloud spend, reproducible staging sandboxes",
    icon: <Rocket className="h-5 w-5 text-cyan-400" />,
    features: [
      "VPC networking with basic subnet isolation",
      "Greenfield AWS landing zones in 5 business days",
      "Clean serverless deployments (Lambda / Docker)",
      "Next.js frontend and FastAPI backend templates",
    ],
  },
  {
    id: "series-scale",
    phase: "02. Stability & Security",
    title: "Series A to Scaling Stage",
    desc: "As client numbers grow, manual deployments fail. We transition workloads into auto-scaling clusters, automate pipeline gates, and add central logging.",
    focus: "No single point of failure, container scaling, deployment speedups",
    icon: <Zap className="h-5 w-5 text-teal-400" />,
    features: [
      "AWS EKS Kubernetes migration via Helm",
      "Automated CI/CD release pipelines (GitHub Actions)",
      "Centralized monitoring dashboards (Prometheus/Grafana)",
      "Secure key rotation via AWS Secrets Manager",
    ],
  },
  {
    id: "enterprise",
    phase: "03. Enterprise Compliance",
    title: "Enterprise Readiness",
    desc: "To close large-market enterprise deals, your infrastructure must be audit-ready. We enforce strict compliance policies and Transit Gateway security.",
    focus: "SOC2 / HIPAA compliance audits, disaster recovery targets (RTO/RPO)",
    icon: <ShieldCheck className="h-5 w-5 text-indigo-400" />,
    features: [
      "HIPAA, PCI-DSS, or ISO 27001 landing zones",
      "Transit Gateway hybrid-cloud network isolation",
      "Multi-Region active disaster recovery replication",
      "24/7/365 telemetry monitoring SLA response",
    ],
  },
];

export function ScalingJourney() {
  const [activeStageId, setActiveStageId] = useState(stages[0].id);

  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative">
      {/* Decorative Orb */}
      <div className="absolute bottom-[10%] left-[-15%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[110px] pointer-events-none -z-10 animate-pulse" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Interactive Stages Tab Selector (5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest block">
              Startup Acceleration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Partnership for Your <br />
              <span className="gradient-text">Entire Scaling Journey</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your platform needs change at each stage of growth. We structure your cloud setups to survive scale spikes and pass enterprise security audits with ease.
          </p>

          {/* Vertical selectors */}
          <div className="space-y-3 pt-2">
            {stages.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 cursor-pointer select-none ${
                    isActive
                      ? "bg-accent/40 border-cyan-500/40 shadow-md"
                      : "bg-background/25 border-border/40 hover:bg-accent/20 hover:border-border/60"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center shrink-0">
                    {stage.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-500 font-semibold tracking-wider block">
                      {stage.phase}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-foreground mt-0.5">
                      {stage.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Stage Detail Dashboard (7 columns) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStageId}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="glass-card rounded-2xl border border-border/40 p-6 md:p-8 shadow-2xl space-y-6 bg-background/25 relative overflow-hidden"
            >
              {/* Highlight background orb */}
              <div className="absolute top-[-50px] right-[-50px] w-[180px] h-[180px] rounded-full bg-cyan-500/5 blur-[50px] pointer-events-none" />

              <div className="space-y-3">
                <span className="text-[10px] font-mono font-semibold text-cyan-500 uppercase tracking-widest block">
                  Core Objective
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {activeStage.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {activeStage.desc}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/40 bg-background/50">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block font-semibold mb-1">
                  Primary Focus Area
                </span>
                <p className="text-xs text-foreground font-bold font-mono">
                  {activeStage.focus}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-mono font-semibold text-cyan-500 uppercase tracking-widest block border-b border-border/40 pb-1.5">
                  Actionable Infrastructure Outputs
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {activeStage.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground leading-normal">
                      <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
