"use client";

import React, { useState } from "react";
import { Cloud, Layers, Settings, ShieldCheck, Code, Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ServicesShowcase() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const practices = [
    {
      icon: <Cloud className="h-4 w-4 text-primary" aria-hidden="true" />,
      name: "AWS Cloud Operations & Landing Zones",
      focus: "Cloud Modernization",
      outcome: "38% Avg Cost Reduction",
      desc: "We design secure multi-account AWS Organizations via Control Tower. We audit existing resources, construct IAM Service Control Policies (SCPs), enforce cost allocation tags, and automate cloud spend control gates.",
      specs: [
        "AWS Control Tower multi-account setup",
        "SCP design & IAM permission boundaries",
        "Centralized Cost Explorer audit gates",
        "AWS Transit Gateway network hubs"
      ],
      link: "/services/aws-cloud-managed-services"
    },
    {
      icon: <Layers className="h-4 w-4 text-primary" aria-hidden="true" />,
      name: "Kubernetes & Container Orchestration",
      focus: "Platform Scale",
      outcome: "99.99% Cluster SLA Uptime",
      desc: "Containerizing monolithic applications and deploying to AWS EKS or Azure AKS clusters. We implement horizontal autoscaling rules, network isolation policies, and zero-downtime cluster upgrades.",
      specs: [
        "EKS & AKS secure cluster design",
        "Kubernetes network policy boundary rules",
        "Karpenter & HPA compute scaling",
        "ArgoCD canary release workflows"
      ],
      link: "/services/kubernetes"
    },
    {
      icon: <Settings className="h-4 w-4 text-primary" aria-hidden="true" />,
      name: "IaC & GitOps Release Automation",
      focus: "Infrastructure as Code",
      outcome: "10x Faster Deployment Speed",
      desc: "We completely eliminate console ClickOps modifications. We provision networks, buckets, and computing layers using dry-run tested, version-controlled Terraform states, enforcing continuous synchronization.",
      specs: [
        "Dry-run checked Terraform configurations",
        "GitHub Actions verification pipelines",
        "Helm v3 chart configuration management",
        "GitOps drift matching via ArgoCD"
      ],
      link: "/services/infrastructure-automation"
    },
    {
      icon: <Code className="h-4 w-4 text-primary" aria-hidden="true" />,
      name: "Enterprise Application Modernization",
      focus: "Software Engineering",
      outcome: "Sub-Second API Cold-Starts",
      desc: "Building high-performance Next.js frontends and secure API backends in Node.js or Python. We design read-replica database sync structures, integrate SAML SSO, and construct automated release lanes.",
      specs: [
        "Serverless Next.js edge layouts",
        "PostgreSQL read-replica structures",
        "SAML SSO & OAuth integrations",
        "Secure microservice API endpoints"
      ],
      link: "/services/full-stack-web-development"
    },
    {
      icon: <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />,
      name: "DevSecOps & Compliance Audits",
      focus: "Risk Advisory",
      outcome: "Audit-Ready Compliant Posture",
      desc: "Integrating static code checks (SAST), vulnerability monitors, and configuration drift detectors directly into deployment pipelines to pass strict HIPAA, PCI-DSS, and ISO 27001 compliance reviews.",
      specs: [
        "Automated Trivy container scanning",
        "KMS database volume encryption",
        "AWS Secret Manager key rotations",
        "Audit trail logging & alerting maps"
      ],
      link: "/services/security-devsecops"
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 border-t border-border">
      {/* Blueprint Coordinates */}
      <div className="absolute top-2 left-10 font-mono text-xs text-muted-foreground opacity-60 select-none" aria-hidden="true">
        GRID.SEC.D // CATALOG.ACCORDION_V1.4
      </div>

      {/* Structural layout grid lines */}
      <div className="absolute left-10 md:left-20 top-0 bottom-0 w-[1px] bg-border pointer-events-none" aria-hidden="true" />
      <div className="absolute right-10 md:right-20 top-0 bottom-0 w-[1px] bg-border pointer-events-none" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">

        {/* Left Column: Sticky Context Description (4 cols) */}
        <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
          <span className="text-xs font-mono text-primary-strong font-bold uppercase tracking-[0.2em] block">
            Practice Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground leading-[1.08] font-display">
            Strategic Cloud & Software Engineering
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed font-sans max-w-[45ch]">
            We provide specialized advisory and execution capabilities to configure secure AWS landing zones, automate release pipelines, and design compliant database systems.
          </p>
          <div className="pt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-xs font-mono font-bold text-primary-strong hover:text-foreground tracking-widest uppercase transition-colors"
            >
              View Full Catalog <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Right Column: Custom Asymmetric Table Stack (8 cols) */}
        <div className="lg:col-span-8 divide-y divide-border">
          {practices.map((practice, index) => {
            const isExpanded = expandedIndex === index;
            const panelId = `practice-panel-${index}`;
            return (
              <div
                key={index}
                className="py-6 first:pt-0 last:pb-0 transition-all duration-300 group"
              >
                {/* Header row */}
                <button
                  type="button"
                  onClick={() => toggleExpand(index)}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between gap-4 sm:gap-6 text-left cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded border border-border bg-muted flex items-center justify-center shrink-0 mt-0.5 group-hover:border-primary/40 transition-colors">
                      {practice.icon}
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
                        {practice.focus}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-foreground font-display transition-colors group-hover:text-primary-strong">
                        {practice.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                    <span className="text-xs font-mono text-muted-foreground font-semibold bg-muted border border-border px-2.5 py-1 rounded">
                      {practice.outcome}
                    </span>
                    <span
                      className="w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors shrink-0"
                      aria-hidden="true"
                    >
                      {isExpanded ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </div>
                </button>

                {/* Expanded details */}
                <div
                  id={panelId}
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:pl-12 text-left font-sans">

                      {/* Left: Description (7 cols) */}
                      <div className="md:col-span-7 space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {practice.desc}
                        </p>
                        <div>
                          <Link
                            href={practice.link}
                            className="inline-flex items-center gap-1.5 text-sm text-primary-strong font-semibold hover:text-foreground transition-colors group/btn"
                          >
                            Inquire Practice Scope <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>

                      {/* Right: Specs (5 cols) */}
                      <div className="md:col-span-5 surface-card rounded p-4 space-y-3">
                        <span className="text-xs font-mono text-muted-foreground font-bold uppercase tracking-wider block">
                          Technical Deliverables
                        </span>
                        <ul className="space-y-2 text-xs text-muted-foreground font-mono">
                          {practice.specs.map((spec, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary shrink-0" aria-hidden="true" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
