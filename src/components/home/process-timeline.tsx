"use client";

import React from "react";
import { SectionHeader } from "../common/section-header";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";
import { ClipboardList, PenTool, Code, Cpu, Activity, Clock } from "lucide-react";

const steps = [
  {
    num: "01",
    badge: "Assessment",
    title: "Discovery & Waste Audit",
    desc: "We analyze your AWS bills, EKS cluster specs, and build pipelines to identify resource leaks, slow releases, and compliance gaps.",
    duration: "Duration: 3-5 Days",
    deliverables: ["Cloud spend reports", "Security leak audit map", "SLA optimization target"],
    icon: <ClipboardList className="h-4 w-4 text-cyan-400" />,
  },
  {
    num: "02",
    badge: "Strategy",
    title: "Architecture Blueprint",
    desc: "We design a secure, highly scalable cloud configuration plan detailing landing zones, cluster scopes, databases, and network policies.",
    duration: "Duration: 5-7 Days",
    deliverables: ["AWS Control Tower layout", "VPC routing blueprints", "IAM matrix proposal"],
    icon: <PenTool className="h-4 w-4 text-teal-400" />,
  },
  {
    num: "03",
    badge: "Automation",
    title: "Declarative Infrastructure (IaC)",
    desc: "Our senior engineers write clean, modular Terraform files and Helm charts to provision staging and sandbox environments.",
    duration: "Duration: 2-3 Weeks",
    deliverables: ["Git-versioned TF modules", "Kubernetes config states", "Secrets storage configs"],
    icon: <Code className="h-4 w-4 text-indigo-400" />,
  },
  {
    num: "04",
    badge: "CI/CD Setup",
    title: "Continuous Delivery Pipelines",
    desc: "We configure robust pipelines to build, lint, and deploy updates into isolated cluster namespaces with zero downtime.",
    duration: "Duration: 1-2 Weeks",
    deliverables: ["GitHub Actions workflow code", "ArgoCD sync maps", "Container build scanners"],
    icon: <Cpu className="h-4 w-4 text-cyan-400" />,
  },
  {
    num: "05",
    badge: "Scaling & Support",
    title: "Production Launch & Telemetry",
    desc: "We transition live operations, configure Grafana/Prometheus alert monitoring systems, and supply persistent weekly audits.",
    duration: "Duration: Ongoing Support",
    deliverables: ["Live systems cutover plan", "Grafana dashboards", "24/7 pager alert profiles"],
    icon: <Activity className="h-4 w-4 text-teal-400" />,
  },
];

export function ProcessTimeline() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 border-t border-border/40 relative">
      {/* Glow backdrop */}
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

      <SectionHeader
        tag="Engineering Cycle"
        title={<>Our Structured <span className="gradient-text">Automation Process</span></>}
        subtitle="We follow a systematic engineering lifecycle to guarantee compliance, eliminate cloud waste, and accelerate your release loops."
        align="left"
        className="mb-20 max-w-3xl"
      />

      <div className="relative pl-6 sm:pl-10 md:pl-16">
        {/* Glowing vertical tracking path line */}
        <div className="absolute left-6 sm:left-10 md:left-16 top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500 via-teal-400 to-indigo-500/10 -translate-x-1/2 -z-10" />

        <StaggerContainer className="space-y-16">
          {steps.map((item) => (
            <StaggerItem
              key={item.num}
              className="relative flex gap-6 sm:gap-10 md:gap-12 items-start"
            >
              
              {/* Timeline dot step circle */}
              <div className="absolute left-0 top-1 -translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>

              {/* Content box - indented */}
              <div className="flex-1 pl-10 sm:pl-6 space-y-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-widest">
                    Phase {item.num} -- {item.badge}
                  </span>
                  <span className="text-border hidden sm:inline">•</span>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground font-mono">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground/60" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <div className="space-y-2 max-w-3xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground hover:text-cyan-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Micro-deliverables list */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.deliverables.map((deliv, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-zinc-900 border border-zinc-850 text-zinc-400"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>

            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

    </section>
  );
}
