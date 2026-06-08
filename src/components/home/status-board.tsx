"use client";

import React from "react";
import { Cloud, Layers, ShieldCheck, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "../common/section-header";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";

export function StatusBoard() {
  const capabilities = [
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "Cloud Infrastructure Advisory",
      focus: "Strategy & Governance",
      desc: "Establishing multi-account cloud structures via AWS Control Tower and Landing Zones. We design secure IAM guardrails, organizational unit separations, and centralized budget tracking models.",
      points: [
        "AWS Control Tower multi-account layouts",
        "Rigid IAM boundary & SCP design",
        "Cloud Cost allocation and deep audits"
      ],
      link: "/services/aws-cloud-managed-services"
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-400" />,
      title: "Kubernetes & Container Operations",
      focus: "Orchestration & Scale",
      desc: "Architecting enterprise-grade AWS EKS clusters. We manage microservice container migrations, implement Horizontal Pod Autoscaling (HPA), and configure secure Ingress routing pathways.",
      points: [
        "Secure EKS cluster design and updates",
        "Network policy cluster isolation",
        "Zero-downtime service deployments"
      ],
      link: "/services/kubernetes"
    },
    {
      icon: <Settings className="h-6 w-6 text-slate-400" />,
      title: "IaC & Continuous Automation",
      focus: "Automated Deployments",
      desc: "Codifying environments using standardized, dry-run tested Terraform modules. We configure automated CI/CD release pipelines and enable drift-free GitOps sync flows.",
      points: [
        "Modular Terraform infrastructure blueprints",
        "ArgoCD / GitOps drift enforcement",
        "Centralized CI/CD compliance gates"
      ],
      link: "/services/infrastructure-automation"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "DevSecOps & Risk Advisory",
      focus: "Compliance & Security",
      desc: "Integrating proactive security vulnerability scans directly into release workflows. We prepare cloud architectures to pass strict HIPAA, PCI-DSS, and ISO 27001 audit standards.",
      points: [
        "Automated static analysis vulnerability scanning",
        "Encrypted database replica configurations",
        "Audit-ready security postures"
      ],
      link: "/services/security-devsecops"
    }
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 border-t border-border/40">
      {/* Subtle corporate structural lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-zinc-900/40 -z-10 pointer-events-none" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-zinc-900/40 -z-10 pointer-events-none" />

      <SectionHeader
        tag="Capabilities"
        title="Enterprise-Grade Consulting Practices"
        subtitle="We combine rigorous engineering practices with cloud modernization advisory to optimize developer pipelines, scale systems, and defend workloads."
        align="center"
        className="mb-16 max-w-4xl"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {capabilities.map((cap) => (
          <StaggerItem
            key={cap.title}
            className="p-6 md:p-8 rounded-2xl border border-zinc-800 bg-zinc-950/20 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  {cap.icon}
                </div>
                <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded">
                  {cap.focus}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground font-display group-hover:text-primary transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                  {cap.desc}
                </p>
              </div>

              {/* Focus points bullet list */}
              <ul className="space-y-2 pt-2 border-t border-zinc-900/60">
                {cap.points.map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-end">
              <Link
                href={cap.link}
                className="text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:text-foreground transition-colors group/btn"
              >
                Review Capability <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
