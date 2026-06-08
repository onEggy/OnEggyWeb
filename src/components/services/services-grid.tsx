"use client";

import React from "react";
import { Cloud, Settings, Layers, Cpu, Compass, Activity, Terminal, Smartphone, Code, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";
import Link from "next/link";

const listServices = [
  {
    icon: <Cloud className="h-5 w-5 text-primary" />,
    title: "AWS Managed Services",
    tag: "AWS Cloud Operations",
    slug: "aws-cloud-managed-services",
    points: ["Landing Zone config (Control Tower)", "Cost waste audits", "IAM lockouts & security groups", "Serverless architectures (Lambda)"],
  },
  {
    icon: <Settings className="h-5 w-5 text-blue-400" />,
    title: "DevOps Consulting",
    tag: "Operations Efficiency",
    slug: "devops-consulting",
    points: ["Operations roadmap assessments", "CI/CD tool selections", "Local dev workspace designs", "Automated backup controls"],
  },
  {
    icon: <Layers className="h-5 w-5 text-slate-400" />,
    title: "Kubernetes Engineering",
    tag: "Container Systems",
    slug: "kubernetes",
    points: ["EKS & AKS cluster deployments", "Custom Ingress (Nginx/Traefik)", "Horizontal Pod Autoscalers (HPA)", "Service Mesh implementations"],
  },
  {
    icon: <Cpu className="h-5 w-5 text-primary" />,
    title: "CI/CD Automation",
    tag: "Accelerated Releases",
    slug: "cicd-pipeline-automation",
    points: ["GitHub Actions / ArgoCD / Helm", "Automated static checks (SAST)", "Canary & Blue-Green deployments", "Zero-downtime container releases"],
  },
  {
    icon: <Compass className="h-5 w-5 text-blue-400" />,
    title: "Cloud Migration",
    tag: "Safe Workload Shifts",
    slug: "cloud-migration",
    points: ["On-premise migrations to AWS", "Multi-tenant tenant shifts", "Zero-downtime database syncing", "Workload sizing & testing"],
  },
  {
    icon: <Activity className="h-5 w-5 text-slate-400" />,
    title: "Monitoring & Logging",
    tag: "Full Observability",
    slug: "monitoring-observability",
    points: ["Prometheus & Grafana dashboarding", "Log aggregation (ELK / Loki)", "Alerting systems & thresholds", "Distributed APM tracing"],
  },
  {
    icon: <Terminal className="h-5 w-5 text-primary" />,
    title: "Infrastructure as Code",
    tag: "Standardized Setups",
    slug: "infrastructure-automation",
    points: ["Modular Terraform modules", "Ansible playbook automation", "VPC & Subnet isolation configs", "Version controlled cloud state"],
  },
  {
    icon: <Smartphone className="h-5 w-5 text-blue-400" />,
    title: "Mobile App Development",
    tag: "Product Engineering",
    slug: "mobile-app-development",
    points: ["React Native cross-platform apps", "iOS & Android binary builds", "Secure local database storage", "Offline state synchronization"],
  },
  {
    icon: <Code className="h-5 w-5 text-slate-400" />,
    title: "Full Stack Engineering",
    tag: "Scalable Platforms",
    slug: "full-stack-web-development",
    points: ["Responsive Next.js web applications", "High-performance Django backends", "Secure REST & GraphQL APIs", "PostgreSQL database structures"],
  },
];

export function ServicesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 relative">
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[95px] pointer-events-none -z-10 animate-pulse" />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listServices.map((service, index) => (
          <StaggerItem
            key={index}
            className={`p-8 rounded-xl border border-zinc-800 bg-zinc-950/20 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between min-h-[360px] h-full group relative overflow-hidden ${
              index === 8 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-widest font-semibold">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground font-display group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-normal font-sans">
                {service.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary select-none">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-zinc-900/60 flex justify-end">
              <Link
                href={`/services/${service.slug}`}
                className="text-xs font-semibold text-primary hover:text-foreground inline-flex items-center gap-1 group/btn"
              >
                Inquire Service & Plan <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
