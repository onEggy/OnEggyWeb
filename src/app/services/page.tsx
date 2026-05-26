"use client";

import React from "react";
import { Cpu, Cloud, Settings, Layers, Code, Shield } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";

const services = [
  {
    icon: <Cloud className="h-6 w-6 text-cyan-400" />,
    title: "AWS Cloud Management",
    desc: "Achieve resilient multi-account compliance, cost-saving audits, and automated scaling strategies designed specifically for AWS resources.",
  },
  {
    icon: <Settings className="h-6 w-6 text-teal-400" />,
    title: "DevOps & Infrastructure Automation",
    desc: "Eradicate manual configs. Implement robust, scalable Infrastructure as Code (IaC) solutions via Terraform, Ansible, and automated pipelines.",
  },
  {
    icon: <Layers className="h-6 w-6 text-indigo-400" />,
    title: "Kubernetes Orchestration",
    desc: "Migrate and orchestrate containerized applications on EKS or AKS. Ensure high-performance load balancing and autoscaling configurations.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-cyan-400" />,
    title: "Platform Engineering",
    desc: "Empower developer self-sufficiency. We build internal developer portals that abstract cloud operations and streamline deployment speeds.",
  },
  {
    icon: <Code className="h-6 w-6 text-teal-400" />,
    title: "Full-Stack Development",
    desc: "Performant applications designed with robust architectures. We engineer premium responsive frontends and highly scalable backends.",
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-400" />,
    title: "Security & VAPT Compliance",
    desc: "Protect code and clusters. We conduct rigorous penetration testing, vulnerability scanning, and secure posture configurations.",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-[20%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-3xl mb-16 space-y-6">
        <FadeUp>
          <span className="text-xs uppercase tracking-widest text-cyan-500 font-semibold">Our Capabilities</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Cloud-Native <span className="gradient-text">Engineering Services</span>
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We help startup founders and enterprise CTOs build, automate, and scale secure modern software products on AWS and Kubernetes.
          </p>
        </FadeUp>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <StaggerItem
            key={index}
            className="glass-card hover:border-cyan-500/40 p-8 rounded-xl flex flex-col justify-between h-[250px] transition-all"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold text-foreground">{service.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {service.desc}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
