"use client";

import React from "react";
import { SectionHeader } from "../common/section-header";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";
import { ClipboardList, PenTool, Code, Cpu, Activity, Clock } from "lucide-react";

const steps = [
  {
    num: "01",
    badge: "Assessment",
    title: "Discovery & Cost Auditing",
    desc: "We analyze your AWS billing statements, resource usage limits, and release lanes to map out architectural bottlenecks and compliance exposures.",
    duration: "3-5 Days",
    deliverables: ["AWS Cost Explorer audits", "IAM privilege maps", "EKS pod sizing analyses"],
    icon: <ClipboardList className="h-4 w-4 text-primary" />,
  },
  {
    num: "02",
    badge: "Strategy",
    title: "Landing Zone Blueprints",
    desc: "We design a multi-account cloud layout detailing isolated networking routes, service-control policies, and container registry security gates.",
    duration: "5-7 Days",
    deliverables: ["AWS Control Tower planning", "Transit Gateway routing layouts", "Kubernetes RBAC specifications"],
    icon: <PenTool className="h-4 w-4 text-primary" />,
  },
  {
    num: "03",
    badge: "Automation",
    title: "Declarative Infrastructure (IaC)",
    desc: "Our senior engineers write dry-run verified Terraform module frameworks and Helm charts, creating replicable staging environments.",
    duration: "2-3 Weeks",
    deliverables: ["Dry-run verified Terraform modules", "Helm v3 chart templates", "Isolated VPC configurations"],
    icon: <Code className="h-4 w-4 text-primary" />,
  },
  {
    num: "04",
    badge: "Pipelines",
    title: "GitOps Continuous Delivery",
    desc: "We configure automated deployment pipelines to test, build, scan, and deploy microservices with zero deployment downtime.",
    duration: "1-2 Weeks",
    deliverables: ["GitHub Actions configurations", "ArgoCD synchronization workflows", "Trivy SAST security audits"],
    icon: <Cpu className="h-4 w-4 text-primary" />,
  },
  {
    num: "05",
    badge: "Operations",
    title: "SRE Telemetry & Transition",
    desc: "We migrate production workloads, deploy active log alerting parameters, and hand over architectural blueprints with complete operational logs.",
    duration: "Ongoing Advisory",
    deliverables: ["Prometheus alerts configurations", "Grafana infrastructure boards", "PagerDuty incident triggers"],
    icon: <Activity className="h-4 w-4 text-primary" />,
  },
];

export function ProcessTimeline() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 border-t border-zinc-900/60 relative">
      {/* Blueprint Coordinates */}
      <div className="absolute top-2 left-10 font-mono text-[8px] text-zinc-650 opacity-40 select-none">
        GRID.SEC.E // ADVISORY.STEPPER_V1.1
      </div>
      
      {/* Structural layout lines */}
      <div className="absolute left-10 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />
      <div className="absolute right-10 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Sticky Header */}
        <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28 pl-0 lg:pl-10">
          <SectionHeader
            tag="Engineering Model"
            title="Our Structured Advisory Cycle"
            subtitle="We follow a rigorous, stage-by-stage engineering roadmap to audit workloads, eliminate cloud waste, and accelerate your deploy loops."
            align="left"
            className="mb-0"
          />
        </div>

        {/* Right Stepper Timeline */}
        <div className="lg:col-span-8 pl-0 md:pl-8 relative">
          {/* Thin vertical timeline line */}
          <div className="absolute left-4 top-4 bottom-4 w-[1px] bg-zinc-900" />

          <StaggerContainer className="space-y-12">
            {steps.map((item) => (
              <StaggerItem
                key={item.num}
                className="relative flex gap-6 items-start group pl-10"
              >
                {/* Milestone indicator dot */}
                <div className="absolute left-0 top-1.5 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-8 h-8 rounded border border-zinc-850 bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:border-primary/45 transition-colors">
                    {item.icon}
                  </div>
                </div>

                {/* Milestone content */}
                <div className="space-y-3 font-sans">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[9px] font-bold text-zinc-550 uppercase tracking-widest">
                    <span>Phase {item.num} -- {item.badge}</span>
                    <span className="text-zinc-800 hidden sm:inline">•</span>
                    <div className="flex items-center gap-1 font-semibold text-primary">
                      <Clock className="h-3 w-3 text-primary" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground font-display transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[60ch]">
                      {item.desc}
                    </p>
                  </div>

                  {/* Technical deliverables grid tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.deliverables.map((deliv, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-zinc-900/40 border border-zinc-850 text-zinc-400"
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

      </div>
    </section>
  );
}
