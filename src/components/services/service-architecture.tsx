"use client";

import React, { useState } from "react";
import {
  Shield,
  Network,
  GitBranch,
  Search,
  Container,
  Rocket,
  Globe,
  Lock,
  Cpu,
  Database,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type ArchitectureCategory = "cloud" | "devops" | "software";

interface ArchitectureTier {
  id: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  desc: string;
}

interface ServiceArchitectureProps {
  category: ArchitectureCategory;
  serviceName: string;
}

export function ServiceArchitecture({ category, serviceName }: ServiceArchitectureProps) {
  const getTiersData = (): ArchitectureTier[] => {
    switch (category) {
      case "cloud":
        return [
          { id: "cloud-gateway", icon: <Network className="h-5 w-5" />, title: "Global transit & DNS", sub: "Route 53 · WAF · ALB ingress", desc: "Directs web traffic safely using Route 53 geolocation records, AWS WAF firewall inspection, and Application Load Balancers to route incoming connections." },
          { id: "cloud-security", icon: <Shield className="h-5 w-5" />, title: "Identity & key access", sub: "IAM controls · KMS keys", desc: "Enforces zero-trust boundaries. IAM roles isolate services, data is encrypted with KMS keys, and secrets are fetched dynamically from AWS Secrets Manager." },
          { id: "cloud-compute", icon: <Cpu className="h-5 w-5" />, title: "Isolated app compute", sub: "Private VPC EKS subnets", desc: "Runs microservice containers inside isolated private subnets with egress-only NAT Gateways, preventing direct inbound connections from the internet." },
          { id: "cloud-data", icon: <Database className="h-5 w-5" />, title: "Replicated data tier", sub: "Multi-AZ Aurora clusters", desc: "Houses persistent structured data across multiple Availability Zones, walled off and reachable only from the application workload layer." },
        ];
      case "devops":
        return [
          { id: "devops-git", icon: <GitBranch className="h-5 w-5" />, title: "Commit trigger", sub: "Webhook integrations", desc: "Merging code into main repositories triggers instant CI actions, booting containerized runners to start the pipeline." },
          { id: "devops-scan", icon: <Search className="h-5 w-5" />, title: "SecOps compliance scan", sub: "Snyk · SonarQube · Trivy", desc: "Scans for security problems, bad coding standards, and committed credentials — failing the build automatically if issues are detected." },
          { id: "devops-build", icon: <Container className="h-5 w-5" />, title: "Container packaging", sub: "Multi-stage Docker · ECR", desc: "Builds small runtime container layers, stripping out development tooling. Safe images are pushed to AWS Elastic Container Registry." },
          { id: "devops-deploy", icon: <Rocket className="h-5 w-5" />, title: "ArgoCD GitOps rollout", sub: "Kubernetes cluster sync", desc: "ArgoCD monitors Git state and performs automated rolling pod deployments with health checks for zero-downtime releases." },
        ];
      case "software":
      default:
        return [
          { id: "software-client", icon: <Globe className="h-5 w-5" />, title: "Next.js hybrid rendering", sub: "Server components · hydration", desc: "Pages compile on the server for speed and SEO, then hydrate client-side for smooth transitions and responsive layouts." },
          { id: "software-gateway", icon: <Lock className="h-5 w-5" />, title: "API gateway routing", sub: "JWT verification · rate limits", desc: "Translates client requests, validates authorization tokens, and rate-limits traffic to prevent abuse and DDoS overload." },
          { id: "software-backend", icon: <Cpu className="h-5 w-5" />, title: "Async backend services", sub: "FastAPI async processing", desc: "Efficient async workers process business logic, validation rules, and third-party integrations without blocking requests." },
          { id: "software-storage", icon: <Database className="h-5 w-5" />, title: "Data cache & storage", sub: "PostgreSQL · Redis cluster", desc: "Postgres row-level security enforces tenant isolation, paired with a fast Redis caching layer for low-latency reads." },
        ];
    }
  };

  const tiers = getTiersData();
  const [activeId, setActiveId] = useState(tiers[0].id);

  const sectionTitle = {
    cloud: "Secure AWS architecture",
    devops: "Automated delivery lifecycle",
    software: "Full-stack architecture",
  }[category];

  const sectionSubtitle = {
    cloud: `How we layer multi-account security, isolated VPC subnets, and replicated data clusters for the ${serviceName} platform.`,
    devops: `The automated path from a single commit through security scans and container builds to a zero-downtime Kubernetes deploy.`,
    software: `The end-to-end stack, from the responsive interface down to async services and the data tier.`,
  }[category];

  return (
    <section className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Intro + legend */}
          <div className="lg:col-span-5">
            <span className="eyebrow mb-5">Security &amp; architecture</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">
              {sectionTitle}, <em>layer by layer.</em>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[42ch]">
              {sectionSubtitle}
            </p>
            <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-[40ch]">
              Select any layer to see exactly how we secure and operate it.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" /> Managed layers
              </span>
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" /> Data &amp; state
              </span>
            </div>
          </div>

          {/* Interactive layered stack */}
          <div className="lg:col-span-7">
            <div className="surface-card rounded-2xl overflow-hidden divide-y divide-border">
              {tiers.map((tier, index) => {
                const isActive = tier.id === activeId;
                const isData = index === tiers.length - 1;
                const accentText = isData ? "text-accent-strong" : "text-primary-strong";
                const accentTile = isActive
                  ? isData
                    ? "bg-accent/15 border-accent/40 text-accent-strong"
                    : "bg-primary/10 border-primary/40 text-primary-strong"
                  : "bg-muted border-border text-muted-foreground";
                return (
                  <div key={tier.id} className={isActive ? "bg-surface-subtle/60" : ""}>
                    <button
                      type="button"
                      aria-expanded={isActive}
                      aria-controls={`layer-${tier.id}`}
                      onClick={() => setActiveId(tier.id)}
                      className="w-full text-left px-5 sm:px-6 py-5 flex items-center gap-4 cursor-pointer transition-colors hover:bg-surface-subtle focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none group"
                    >
                      <span className={`font-mono text-xs tabular-nums shrink-0 w-6 ${isActive ? accentText : "text-muted-foreground"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${accentTile}`}>
                        {tier.icon}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className={`block font-display text-lg leading-tight transition-colors ${isActive ? accentText : "text-foreground group-hover:text-primary-strong"}`}>
                          {tier.title}
                        </span>
                        <span className="block mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                          {tier.sub}
                        </span>
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          id={`layer-${tier.id}`}
                          role="region"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 sm:px-6 pb-6 pl-[3.75rem] sm:pl-[4.5rem] text-sm text-muted-foreground leading-relaxed max-w-[60ch]">
                            {tier.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
