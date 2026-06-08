"use client";

import React from "react";
import { Cloud, Layers, Settings, ShieldCheck, Code, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "../common/section-header";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";

export function ServicesShowcase() {
  const practices = [
    {
      icon: <Cloud className="h-5 w-5 text-primary" />,
      name: "AWS Cloud Operations & Landing Zones",
      focus: "Cloud Modernization",
      outcome: "Cost Control & Governance",
      desc: "Architecting multi-account AWS Organizations via Control Tower and Control Tower SCPs. We design strict tenant boundaries, execute deep cost audits, and implement automated enterprise cost guardrails.",
      metrics: "Average 38% cost reduction",
      link: "/services/aws-cloud-managed-services"
    },
    {
      icon: <Layers className="h-5 w-5 text-blue-400" />,
      name: "Kubernetes & Container Orchestration",
      focus: "Platform Scale",
      outcome: "High Availability & Resiliency",
      desc: "Containerizing monolithic applications and deploying to AWS EKS or Azure AKS. We configure ingress routers, network policy boundaries, HPA scaling, and zero-downtime cluster upgrade paths.",
      metrics: "99.99% cluster SLA uptime",
      link: "/services/kubernetes"
    },
    {
      icon: <Settings className="h-5 w-5 text-slate-400" />,
      name: "IaC & GitOps Release Automation",
      focus: "DevOps Consulting",
      outcome: "Continuous Delivery Velocity",
      desc: "Replacing console adjustments with declarative Terraform and Ansible automation blueprints. We enforce continuous verify stages and GitOps drift matching using ArgoCD.",
      metrics: "10x faster build cycles",
      link: "/services/infrastructure-automation"
    },
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      name: "Enterprise Application Modernization",
      focus: "Software Engineering",
      outcome: "Developer Velocity & Scale",
      desc: "Developing high-performance Next.js frontends and secure API backends in Node.js or Python. We establish database replication, SAML SSO authentication, and CI/CD pipelines.",
      metrics: "60fps frontend performance",
      link: "/services/full-stack-web-development"
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-blue-400" />,
      name: "DevSecOps & Regulatory Audits",
      focus: "Risk Advisory",
      outcome: "PCI-DSS & HIPAA Compliance",
      desc: "Integrating static code checks and vulnerability monitors directly into deployment lanes. We align cloud environments with strict security controls for external compliance reviews.",
      metrics: "Audit-ready cloud environments",
      link: "/services/security-devsecops"
    }
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 border-t border-border/40">
      <SectionHeader
        tag="Services Catalog"
        title="Strategic Technology Capabilities"
        subtitle="We help enterprise organizations modernize infrastructure, accelerate delivery pipelines, and establish secure compliance postures."
        align="center"
        className="mb-16 max-w-4xl"
      />

      {/* Solutions Index: Editorial list/table layout */}
      <StaggerContainer className="space-y-4">
        {practices.map((practice) => (
          <StaggerItem
            key={practice.name}
            className="p-6 md:p-8 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group"
          >
            {/* Practice Name and Icon (5 columns) */}
            <div className="lg:col-span-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                {practice.icon}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold block">
                  {practice.focus}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-foreground font-display group-hover:text-primary transition-colors">
                  {practice.name}
                </h3>
              </div>
            </div>

            {/* Description (4 columns) */}
            <div className="lg:col-span-4 lg:px-4">
              <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                {practice.desc}
              </p>
            </div>

            {/* Strategic Outcome Metrics (2 columns) */}
            <div className="lg:col-span-2 space-y-1 text-left lg:text-right">
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-mono font-semibold block">
                Target Outcome
              </span>
              <span className="text-xs font-mono font-bold text-primary block">
                {practice.metrics}
              </span>
            </div>

            {/* Action Arrow (1 column) */}
            <div className="lg:col-span-1 flex justify-start lg:justify-end">
              <Link
                href={practice.link}
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 group-hover:bg-primary group-hover:border-primary flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label={`Explore our ${practice.name} practice`}
              >
                <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-primary-foreground transition-colors" />
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Corporate Capabilities Footer Note */}
      <div className="mt-12 text-center">
        <p className="text-xs text-muted-foreground font-sans">
          Need a custom engagement model?{" "}
          <Link href="/contact" className="text-primary hover:underline font-semibold">
            Speak with our senior client directors
          </Link>
        </p>
      </div>
    </section>
  );
}
