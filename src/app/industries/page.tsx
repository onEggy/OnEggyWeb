"use client";

import { Landmark, HeartPulse, ShoppingCart, CloudLightning, GraduationCap, Rocket, Building2 } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";

const sectors = [
  {
    icon: <HeartPulse className="h-6 w-6 text-cyan-400" />,
    title: "Healthcare & Biotech",
    spec: "HIPAA Compliant Blueprint",
    desc: "We deploy secure, isolated environments featuring encrypted database replica tiers, IAM audit tracking, and automated key rotation policies (SSM/KMS) to secure sensitive health files.",
  },
  {
    icon: <Landmark className="h-6 w-6 text-teal-400" />,
    title: "Fintech & Payments",
    spec: "PCI-DSS Audit Posture",
    desc: "Rigid security group partitions, secure gateway subnet isolation, automated database failovers, and centralized alert board configs designed to prevent transactional failures.",
  },
  {
    icon: <CloudLightning className="h-6 w-6 text-indigo-400" />,
    title: "SaaS Platforms",
    spec: "Multi-Tenant Isolation",
    desc: "Provisioning tenant namespace sandboxes inside Kubernetes clusters, multi-tenant database partitioning, custom billing alerts, and distributed Prometheus logging boards.",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-cyan-400" />,
    title: "Education & Non-Profits",
    spec: "High Concurrency Sizing",
    desc: "Optimizing CDN edge delivery caches, static resource setups, and Horizontal Pod Autoscaling (HPA) to ensure platform stability during large seasonal traffic spikes.",
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-teal-400" />,
    title: "Headless E-Commerce",
    spec: "Performance Optimization",
    desc: "Building blazing-fast Next.js storefronts layered over APIs. Configured with CDN routing, Redis cache tables, and server-side render strategies for top SEO rankings.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-indigo-400" />,
    title: "High-Growth Startups",
    spec: "Control Tower Sandboxes",
    desc: "Configuring multi-account AWS Organization layouts, setting up fast-deployment Terraform blueprints, and automated CI/CD releases to allow startup teams to build fast.",
  },
  {
    icon: <Building2 className="h-6 w-6 text-cyan-400" />,
    title: "Enterprise Platforms",
    spec: "Hybrid-Cloud Architecture",
    desc: "Architecting secure Transit Gateway connections between local physical servers and AWS accounts, backed by strict security policies and VAPT compliance checks.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-16">
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[95px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none -z-10" />

      <SectionHeader
        tag="Who We Serve"
        title={<>Tailored Industry <span className="gradient-text">Cloud Architectures</span></>}
        subtitle="Every sector requires specialized security, data, and compliance layouts. We design systems engineered to match your industry's exact standards."
        align="left"
        className="max-w-3xl"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectors.map((item, index) => (
          <StaggerItem
            key={index}
            className="glass-card hover:border-cyan-500/40 p-8 rounded-xl flex flex-col justify-between h-[300px] transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Hover corner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono text-cyan-500 font-semibold tracking-wider">
                  {item.spec}
                </span>
              </div>
              <h2 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="py-12 border-t border-border/40">
        <CtaBlock
          title="Looking for a compliance-ready setup?"
          description="Schedule a free consultation call with our team to configure your HIPAA, PCI-DSS, or ISO 27001 compliant cloud architectures today."
          btnText="Schedule Compliance Audit"
          btnHref="/contact"
        />
      </div>
    </div>
  );
}
