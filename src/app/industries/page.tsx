"use client";

import React from "react";
import { Landmark, HeartPulse, ShoppingCart, CloudLightning, ShieldCheck } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";

const sectors = [
  {
    icon: <Landmark className="h-6 w-6 text-cyan-400" />,
    title: "Fintech & Payments",
    desc: "Deploying PCI-DSS compliant secure infrastructure, auto-scaling transaction systems, and real-time database cluster failovers.",
  },
  {
    icon: <HeartPulse className="h-6 w-6 text-teal-400" />,
    title: "Healthcare & Biotech",
    desc: "HIPAA-compliant hosting configurations, encrypted medical records storage, and secure serverless microservices.",
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-indigo-400" />,
    title: "E-Commerce",
    desc: "Speed-optimized Next.js frontends, headless commerce sync platforms, and cache layering to handle high seasonal traffic peaks.",
  },
  {
    icon: <CloudLightning className="h-6 w-6 text-cyan-400" />,
    title: "SaaS Platforms",
    desc: "Multi-tenant tenant isolation architectures, CI/CD pipeline automations, and centralized Prometheus/Grafana billing alerts.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-teal-400" />,
    title: "Defense & Enterprises",
    desc: "Custom high-availability Kubernetes workloads (on-prem or hybrid cloud settings) with rigid VAPT security audits.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-16">
      {/* Decorative Orb */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[70px] pointer-events-none" />

      <SectionHeader
        tag="Who We Serve"
        title={<>Tailored Industry <span className="gradient-text">Cloud Architectures</span></>}
        subtitle="Every sector requires specialized security, data, and compliance layouts. We design systems engineered to match your industry's exact standards."
        align="left"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sectors.map((item, index) => (
          <StaggerItem
            key={index}
            className="glass-card hover:border-cyan-500/40 p-8 rounded-xl space-y-4 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center">
              {item.icon}
            </div>
            <h2 className="text-xl font-bold text-foreground">{item.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <CtaBlock
        title="Need a compliance-heavy cloud setup?"
        description="We implement HIPAA, PCI-DSS, and custom enterprise security standardizations on top of AWS, Azure, GCP, and Kubernetes configurations."
        btnText="Talk to a Architect"
        btnHref="/contact"
      />
    </div>
  );
}
