"use client";

import React from "react";
import { SectionHeader } from "../common/section-header";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";
import { ClipboardList, PenTool, Code, Cpu, Activity, Clock } from "lucide-react";

const steps = [
  {
    num: "01",
    badge: "Assessment",
    title: "Discovery & Cloud Cost Audit",
    desc: "We analyze your AWS bills, EKS cluster resource configurations, and build pipelines to identify resource leaks, slow releases, and compliance gaps.",
    duration: "Duration: 3-5 Days",
    deliverables: ["AWS Cost Explorer audits", "IAM privilege analyzer maps", "EKS resource sizing reports"],
    icon: <ClipboardList className="h-4 w-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
  },
  {
    num: "02",
    badge: "Strategy",
    title: "Architecture Blueprint",
    desc: "We design a secure, highly scalable cloud configuration plan detailing landing zones, cluster scopes, databases, and network policies.",
    duration: "Duration: 5-7 Days",
    deliverables: ["Multi-Account AWS Landing Zones", "VPC CIDR / Subnet routing tables", "Kubernetes RBAC matrix"],
    icon: <PenTool className="h-4 w-4 text-teal-400 group-hover:text-teal-300 transition-colors" />,
  },
  {
    num: "03",
    badge: "Automation",
    title: "Declarative Infrastructure (IaC)",
    desc: "Our senior engineers write clean, modular Terraform files and Helm charts to provision staging and sandbox environments.",
    duration: "Duration: 2-3 Weeks",
    deliverables: ["Dry-run tested Terraform states", "Helm v3 custom templates", "HashiCorp Vault policy JSONs"],
    icon: <Code className="h-4 w-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />,
  },
  {
    num: "04",
    badge: "CI/CD Setup",
    title: "Continuous Delivery Pipelines",
    desc: "We configure robust pipelines to build, lint, and deploy updates into isolated cluster namespaces with zero downtime.",
    duration: "Duration: 1-2 Weeks",
    deliverables: ["GitHub Actions runner configs", "ArgoCD GitOps application maps", "Trivy image vulnerability scans"],
    icon: <Cpu className="h-4 w-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
  },
  {
    num: "05",
    badge: "Scaling & Support",
    title: "Production Launch & Telemetry",
    desc: "We transition live operations, configure Grafana/Prometheus alert monitoring systems, and supply persistent weekly audits.",
    duration: "Duration: Ongoing Support",
    deliverables: ["Prometheus rules & metrics configs", "Grafana infrastructure dashboards", "PagerDuty webhook alerts"],
    icon: <Activity className="h-4 w-4 text-teal-400 group-hover:text-teal-300 transition-colors" />,
  },
];

export function ProcessTimeline() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 border-t border-border/40 relative">
      {/* Glow backdrop */}
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

      <SectionHeader
        tag="Engineering Cycle"
        title={<>Our Structured <span className="text-cyan-400">Automation Process</span></>}
        subtitle="We follow a systematic engineering lifecycle to guarantee compliance, eliminate cloud waste, and accelerate your release loops."
        align="left"
        className="mb-20 max-w-3xl"
      />

      <div className="relative pl-6 sm:pl-10 md:pl-16">
        {/* Glowing vertical tracking path line */}
        <div className="absolute left-6 sm:left-10 md:left-16 top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500/20 via-teal-400/10 to-zinc-800/10 -translate-x-1/2 -z-10" />

        <StaggerContainer className="space-y-16">
          {steps.map((item) => (
            <StaggerItem
              key={item.num}
              className="relative flex gap-6 sm:gap-10 md:gap-12 items-start group"
            >
              
              {/* Timeline dot step circle */}
              <div className="absolute left-0 top-1 -translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-8 h-8 rounded-full bg-background border border-border group-hover:border-cyan-500/40 flex items-center justify-center shadow-lg transition-colors">
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
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">
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
