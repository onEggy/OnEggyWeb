"use client";

import React from "react";
import { Cloud, Settings, Layers, Cpu, Compass, Activity, Terminal, Smartphone, Code, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const listServices = [
  {
    icon: <Cloud className="h-4.5 w-4.5 text-primary" />,
    title: "AWS Managed Services",
    tag: "AWS Cloud Operations",
    slug: "aws-cloud-managed-services",
    description: "Multi-account Landing Zones design using AWS Control Tower, centralized billing, and custom SCP controls.",
    outcome: "38% Cost reduction avg"
  },
  {
    icon: <Settings className="h-4.5 w-4.5 text-primary" />,
    title: "DevOps Consulting",
    tag: "Operations Efficiency",
    slug: "devops-consulting",
    description: "Restructuring development flows, CI/CD pipeline roadmap audits, and standardized configuration templates.",
    outcome: "Zero release downtime"
  },
  {
    icon: <Layers className="h-4.5 w-4.5 text-primary" />,
    title: "Kubernetes Engineering",
    tag: "Container Systems",
    slug: "kubernetes",
    description: "AWS EKS cluster configurations, secure Ingress networking routing, Karpenter autoscaling, and service mesh.",
    outcome: "99.99% Pod cluster SLA"
  },
  {
    icon: <Cpu className="h-4.5 w-4.5 text-primary" />,
    title: "CI/CD Automation",
    tag: "Accelerated Releases",
    slug: "cicd-pipeline-automation",
    description: "Zero-downtime canary container deployments using Helm templates, GitHub Actions lanes, and ArgoCD sync.",
    outcome: "10x Faster cycles"
  },
  {
    icon: <Compass className="h-4.5 w-4.5 text-primary" />,
    title: "Cloud Migration",
    tag: "Safe Workload Shifts",
    slug: "cloud-migration",
    description: "Zero-downtime database replication, monolithic application containerizations, and AWS migration strategies.",
    outcome: "Zero data leakage"
  },
  {
    icon: <Activity className="h-4.5 w-4.5 text-primary" />,
    title: "Monitoring & Logging",
    tag: "Full Observability",
    slug: "monitoring-observability",
    description: "Centralized Prometheus metric aggregates, Loki/Grafana boards, and alert routing configurations.",
    outcome: "Sub-second alerts"
  },
  {
    icon: <Terminal className="h-4.5 w-4.5 text-primary" />,
    title: "Infrastructure as Code",
    tag: "Standardized Setups",
    slug: "infrastructure-automation",
    description: "Modular, dry-run verified Terraform states, Ansible playbooks, and GitOps version-controlled configurations.",
    outcome: "Drift-free resources"
  },
  {
    icon: <Smartphone className="h-4.5 w-4.5 text-primary" />,
    title: "Mobile App Development",
    tag: "Product Engineering",
    slug: "mobile-app-development",
    description: "Offline-first React Native mobile applications with local SQL sync, secure vaults, and native binaries.",
    outcome: "4.8★ App ratings"
  },
  {
    icon: <Code className="h-4.5 w-4.5 text-primary" />,
    title: "Full Stack Engineering",
    tag: "Scalable Platforms",
    slug: "full-stack-web-development",
    description: "High-performance Serverless Next.js edge layouts, database migrations, and REST API frameworks.",
    outcome: "Sub-second cold-starts"
  }
];

export function ServicesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 relative">
      {/* Structural layout lines */}
      <div className="absolute left-10 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />
      <div className="absolute right-10 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />

      <div className="border border-zinc-900 rounded bg-zinc-950/20 overflow-hidden relative z-10 mx-0 md:mx-14">
        <div className="px-6 py-4 border-b border-zinc-900 bg-zinc-900/10 flex items-center justify-between">
          <div>
            <span className="text-[9px] font-mono text-primary font-bold uppercase tracking-widest block">
              Core Capabilities
            </span>
            <h3 className="text-sm font-bold text-foreground font-display mt-0.5">
              Practice Disciplines & target outcomes
            </h3>
          </div>
          <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider">
            9 active practices
          </span>
        </div>

        <div className="divide-y divide-zinc-900 font-sans">
          {listServices.map((service) => (
            <div 
              key={service.slug} 
              className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-zinc-900/10 transition-colors"
            >
              
              {/* Title & Icon (4 columns) */}
              <div className="md:col-span-4 flex items-center gap-4">
                <div className="w-8 h-8 rounded border border-zinc-850 bg-zinc-900/20 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                  {service.icon}
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">
                    {service.tag}
                  </span>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                </div>
              </div>

              {/* Description (5 columns) */}
              <div className="md:col-span-5">
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[48ch]">
                  {service.description}
                </p>
              </div>

              {/* Outcome Badge (2 columns) */}
              <div className="md:col-span-2">
                <span className="inline-block text-[10px] font-mono text-zinc-400 font-semibold bg-zinc-900/40 border border-zinc-850 px-2.5 py-1 rounded">
                  {service.outcome}
                </span>
              </div>

              {/* Action link (1 column) */}
              <div className="md:col-span-1 flex justify-start md:justify-end">
                <Link
                  href={`/services/${service.slug}`}
                  className="w-7 h-7 rounded-full bg-zinc-900/30 border border-zinc-850 flex items-center justify-center text-zinc-450 text-zinc-400 hover:text-foreground hover:bg-primary hover:border-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 cursor-pointer"
                  aria-label={`Inquire about ${service.title}`}
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
