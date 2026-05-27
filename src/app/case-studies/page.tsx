"use client";

import React from "react";
import { Layers, Cloud, Smartphone } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";

const cases = [
  {
    title: "AWS Cloud Operations for Smile Foundation",
    sector: "Education / Non-Profit",
    icon: <Cloud className="h-5 w-5 text-cyan-400" />,
    challenge: "Smile Foundation struggled with a sprawl of legacy AWS accounts, unmonitored server sizes, and frequent page timeouts during high-traffic donation campaigns, resulting in lost sponsorships.",
    solution: "We restructured their infrastructure under a secure AWS Landing Zone. We rightsized over-provisioned EC2 instances, moved static media to S3 with CloudFront caching, and added unified CloudWatch alarms.",
    techs: ["AWS Organizations", "Control Tower", "CloudFront CDN", "S3", "CloudWatch"],
    metrics: [
      { num: "-34%", label: "AWS Cost reduction" },
      { num: "+50%", label: "Web Response speeds" },
      { num: "0", label: "Incident outages" },
    ],
  },
  {
    title: "Kubernetes Migration for CloudStok Technologies",
    sector: "SaaS / Platforms",
    icon: <Layers className="h-5 w-5 text-teal-400" />,
    challenge: "CloudStok's monolithic SaaS app ran on un-orchestrated virtual instances. Deployments were manual and error-prone, requiring system restarts, and traffic peaks caused severe database lockups.",
    solution: "We containerized the workloads using Docker and migrated the platform to AWS EKS. We wrote modular Terraform scripts for IaC, and configured ArgoCD pipelines to enable zero-downtime canary updates.",
    techs: ["AWS EKS", "Terraform IaC", "ArgoCD Pipelines", "Docker", "Prometheus"],
    metrics: [
      { num: "10x", label: "Build Release speedups" },
      { num: "10k+", label: "Concurrent pods handled" },
      { num: "99.99%", label: "EKS Cluster Uptime SLA" },
    ],
  },
  {
    title: "Mobile Architecture for Beyond Imagination",
    sector: "Fintech / Blockchain",
    icon: <Smartphone className="h-5 w-5 text-indigo-400" />,
    challenge: "Building a fintech blockchain mobile application requiring extremely low-latency database synchronization, secure encryption postures, and rigid compliance auditing.",
    solution: "We engineered a cross-platform React Native app with offline-first local SQL syncing, designed secure microservice APIs on FastAPI, and integrated AWS Secrets Manager for key rotation.",
    techs: ["React Native", "FastAPI APIs", "PostgreSQL Clusters", "AWS Secrets Manager", "GitHub Actions"],
    metrics: [
      { num: "<2.5s", label: "Transaction sync latency" },
      { num: "100%", label: "PCI-DSS compliance score" },
      { num: "4.8★", label: "App Store ratings" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-20">
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[95px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none -z-10 animate-pulse" />

      <SectionHeader
        tag="Our Proven Outcomes"
        title={<>Client Success <span className="gradient-text">Case Studies</span></>}
        subtitle="Real outcomes. Discover how we've helped companies improve deployment speed, reduce cloud waste, and build high-performance products."
        align="left"
        className="max-w-3xl"
      />

      <StaggerContainer className="space-y-16">
        {cases.map((item, index) => (
          <StaggerItem
            key={index}
            className="glass-card p-8 rounded-2xl border border-border/40 hover:border-cyan-500/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch group"
          >
            {/* Left Block: Narrative text */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-500 font-semibold tracking-wider block">
                      {item.sector}
                    </span>
                    <h2 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                      {item.title}
                    </h2>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Challenge:</strong> {item.challenge}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Solution:</strong> {item.solution}
                  </p>
                </div>
              </div>

              {/* Technologies used tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/20">
                {item.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-full bg-background border border-border/60 text-xs text-muted-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Block: Visual Metrics Dashboard */}
            <div className="lg:col-span-5 flex flex-col justify-center bg-accent/20 rounded-xl border border-border/40 p-6 relative overflow-hidden">
              <div className="absolute top-3 right-4 text-[10px] font-mono font-semibold text-cyan-500">
                metrics-dashboard
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-6 text-center lg:text-left">
                {item.metrics.map((m, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-foreground block">
                      {m.num}
                    </span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground font-semibold uppercase tracking-wider block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="py-12 border-t border-border/40">
        <CtaBlock
          title="Ready to engineer similar performance metrics?"
          description="Hop on a quick, free cloud audit with our platform architects to outline cost-saving and pipeline deployment paths."
          btnText="Book Free Assessment"
          btnHref="/contact"
        />
      </div>
    </div>
  );
}
