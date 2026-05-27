"use client";

import React from "react";
import { Cloud, Settings, Layers, Cpu, Compass, Activity, Terminal, Smartphone, Code, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";
import Link from "next/link";

const listServices = [
  {
    icon: <Cloud className="h-5 w-5 text-cyan-400" />,
    title: "AWS Managed Services",
    tag: "AWS Cloud Operations",
    points: ["Landing Zone config (Control Tower)", "Cost waste audits", "IAM lockouts & security groups", "Serverless architectures (Lambda)"],
  },
  {
    icon: <Settings className="h-5 w-5 text-teal-400" />,
    title: "DevOps Consulting",
    tag: "Operations Efficiency",
    points: ["Operations roadmap assessments", "CI/CD tool selections", "Local dev workspace designs", "Automated backup controls"],
  },
  {
    icon: <Layers className="h-5 w-5 text-indigo-400" />,
    title: "Kubernetes Engineering",
    tag: "Container Systems",
    points: ["EKS & AKS cluster deployments", "Custom Ingress (Nginx/Traefik)", "Horizontal Pod Autoscalers (HPA)", "Service Mesh implementations"],
  },
  {
    icon: <Cpu className="h-5 w-5 text-cyan-400" />,
    title: "CI/CD Automation",
    tag: "Accelerated Releases",
    points: ["GitHub Actions / ArgoCD / Helm", "Automated static checks (SAST)", "Canary & Blue-Green deployments", "Zero-downtime container releases"],
  },
  {
    icon: <Compass className="h-5 w-5 text-teal-400" />,
    title: "Cloud Migration",
    tag: "Safe Workload Shifts",
    points: ["On-premise migrations to AWS", "Multi-tenant tenant shifts", "Zero-downtime database syncing", "Workload sizing & testing"],
  },
  {
    icon: <Activity className="h-5 w-5 text-indigo-400" />,
    title: "Monitoring & Logging",
    tag: "Full Observability",
    points: ["Prometheus & Grafana dashboarding", "Log aggregation (ELK / Loki)", "Alerting systems & thresholds", "Distributed APM tracing"],
  },
  {
    icon: <Terminal className="h-5 w-5 text-cyan-400" />,
    title: "Infrastructure as Code",
    tag: "Standardized Setups",
    points: ["Modular Terraform modules", "Ansible playbook automation", "VPC & Subnet isolation configs", "Version controlled cloud state"],
  },
  {
    icon: <Smartphone className="h-5 w-5 text-teal-400" />,
    title: "Mobile App Development",
    tag: "Product Engineering",
    points: ["React Native cross-platform apps", "iOS & Android binary builds", "Secure local database storage", "Offline state synchronization"],
  },
  {
    icon: <Code className="h-5 w-5 text-indigo-400" />,
    title: "Full Stack Engineering",
    tag: "Scalable Platforms",
    points: ["Responsive Next.js web applications", "High-performance Django backends", "Secure REST & GraphQL APIs", "PostgreSQL database structures"],
  },
];

export function ServicesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 relative">
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[95px] pointer-events-none -z-10" />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listServices.map((service, index) => (
          <StaggerItem
            key={index}
            className="glass-card p-8 rounded-xl border border-border/40 hover:border-cyan-500/35 transition-all duration-300 flex flex-col justify-between h-[360px] group relative overflow-hidden"
          >
            {/* Corner hover glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                {service.title}
              </h3>

              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-normal">
                {service.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-500 select-none">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-border/20 flex justify-end">
              <Link
                href="/contact"
                className="text-xs font-semibold text-cyan-500 hover:text-cyan-400 inline-flex items-center gap-1 group/btn"
              >
                Inquire Service <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
