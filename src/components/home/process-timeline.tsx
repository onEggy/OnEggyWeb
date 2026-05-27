"use client";

import React from "react";
import { SectionHeader } from "../common/section-header";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";
import { ClipboardList, PenTool, Code, Cpu, Activity } from "lucide-react";

const steps = [
  {
    num: "01",
    badge: "Assessment",
    title: "Discovery & Waste Audit",
    desc: "We analyze your AWS bills, EKS cluster specs, and build pipelines to identify resource leaks, slow releases, and compliance gaps.",
    icon: <ClipboardList className="h-5 w-5 text-cyan-400" />,
  },
  {
    num: "02",
    badge: "Strategy",
    title: "Architecture Blueprint",
    desc: "We design a secure, highly scalable cloud configuration plan detailing landing zones, cluster scopes, databases, and network policies.",
    icon: <PenTool className="h-5 w-5 text-teal-400" />,
  },
  {
    num: "03",
    badge: "Automation",
    title: "Declarative Infrastructure (IaC)",
    desc: "Our senior engineers write clean, modular Terraform files and Helm charts to provision staging and sandbox environments.",
    icon: <Code className="h-5 w-5 text-indigo-400" />,
  },
  {
    num: "04",
    badge: "CI/CD Setup",
    title: "Continuous Delivery Pipelines",
    desc: "We configure robust pipelines to build, lint, and deploy updates into isolated cluster namespaces with zero downtime.",
    icon: <Cpu className="h-5 w-5 text-cyan-400" />,
  },
  {
    num: "05",
    badge: "Scaling & Support",
    title: "Production Launch & Telemetry",
    desc: "We transition live operations, configure Grafana/Prometheus alert monitoring systems, and supply persistent weekly audits.",
    icon: <Activity className="h-5 w-5 text-teal-400" />,
  },
];

export function ProcessTimeline() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative">
      {/* Glow backdrop */}
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

      <SectionHeader
        tag="How We Work"
        title={<>Our Structured <span className="gradient-text">Engineering Process</span></>}
        subtitle="We follow a systematic automation pipeline to guarantee security, minimize cloud waste, and elevate developer launch velocities."
        align="center"
        className="mb-16"
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Connection center line (desktop only) */}
        <div className="absolute left-[34px] md:left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px] bg-border/80 -z-10" />

        <StaggerContainer className="space-y-12">
          {steps.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <StaggerItem
                key={item.num}
                className={`flex flex-col md:flex-row items-stretch gap-8 relative ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Item Content Card */}
                <div className="flex-1 md:w-1/2 flex items-center justify-end">
                  <div className={`glass-card p-6 rounded-xl border border-border/40 hover:border-cyan-500/35 transition-all duration-300 w-full relative group ${
                    isEven ? "md:text-left" : "md:text-right"
                  }`}>
                    {/* Glowing highlight indicator */}
                    <div className="absolute top-4 right-4 text-xs font-mono font-semibold text-cyan-500">
                      {item.badge}
                    </div>
                    <div className={`space-y-3 flex flex-col ${isEven ? "items-start" : "md:items-end items-start"}`}>
                      <span className="text-3xl font-mono font-bold text-muted-foreground/30">{item.num}</span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stepper Node Center Circle */}
                <div className="absolute left-[34px] md:left-1/2 -translate-x-1/2 top-4 flex items-center justify-center z-10">
                  <div className="w-8 h-8 rounded-full bg-background border border-border/80 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>

                {/* Empty block to balance grid structure (desktop only) */}
                <div className="flex-1 md:w-1/2 hidden md:block" />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

    </section>
  );
}
