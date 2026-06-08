"use client";

import React, { useState } from "react";
import { SectionHeader } from "../common/section-header";
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
  HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type ArchitectureCategory = "cloud" | "devops" | "software";

interface ArchitectureTier {
  id: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  desc: string;
  color: string;
}

interface ServiceArchitectureProps {
  category: ArchitectureCategory;
  serviceName: string;
}

export function ServiceArchitecture({ category, serviceName }: ServiceArchitectureProps) {
  // Define tiers based on service category
  const getTiersData = (): ArchitectureTier[] => {
    switch (category) {
      case "cloud":
        return [
          {
            id: "cloud-gateway",
            icon: <Network className="h-5 w-5 text-cyan-400" />,
            title: "Global Transit & DNS",
            sub: "Route 53 & ALB Ingress",
            desc: "Directs web traffic safely. Uses Route53 geolocation records, AWS WAF firewall inspection, and Application Load Balancers to route incoming connections.",
            color: "#22d3ee",
          },
          {
            id: "cloud-security",
            icon: <Shield className="h-5 w-5 text-teal-400" />,
            title: "Identity & Key Access",
            sub: "IAM Controls & KMS Keys",
            desc: "Enforces zero-trust boundaries. IAM roles isolate services, database tables are encrypted with KMS keys, and secrets are dynamically fetched from AWS Secrets Manager.",
            color: "#14b8a6",
          },
          {
            id: "cloud-compute",
            icon: <Cpu className="h-5 w-5 text-indigo-400" />,
            title: "Isolated App Compute",
            sub: "Private VPC EKS Subnets",
            desc: "Executes microservice containers. Apps run inside isolated private subnets with egress-only NAT Gateways, preventing direct inbound connections from the internet.",
            color: "#6366f1",
          },
          {
            id: "cloud-data",
            icon: <Database className="h-5 w-5 text-cyan-500" />,
            title: "Replicated Data Tier",
            sub: "Multi-AZ Aurora Clusters",
            desc: "Houses persistent structured data. Deployed across multiple Availability Zones with subnets walled off, reachable only from the application workload layer.",
            color: "#06b6d4",
          },
        ];
      case "devops":
        return [
          {
            id: "devops-git",
            icon: <GitBranch className="h-5 w-5 text-cyan-400" />,
            title: "Commit Trigger",
            sub: "Webhook Integrations",
            desc: "Merge triggers instant actions. Merging code changes into main repositories alerts CI systems to boot containerized runners.",
            color: "#22d3ee",
          },
          {
            id: "devops-scan",
            icon: <Search className="h-5 w-5 text-teal-400" />,
            title: "SecOps Compliance Scan",
            sub: "Snyk & SonarQube Checking",
            desc: "Scans repository layouts for security problems, bad coding standards, or committed credentials, failing builds automatically if issues are detected.",
            color: "#14b8a6",
          },
          {
            id: "devops-build",
            icon: <Container className="h-5 w-5 text-indigo-400" />,
            title: "Container Packaging",
            sub: "Multi-Stage Docker & ECR",
            desc: "Builds small runtime container layers, striping out development tooling dependencies. Safe images are pushed to AWS Elastic Container Registry.",
            color: "#6366f1",
          },
          {
            id: "devops-deploy",
            icon: <Rocket className="h-5 w-5 text-cyan-500" />,
            title: "ArgoCD GitOps Rollout",
            sub: "Kubernetes Cluster Sync",
            desc: "ArgoCD monitors Git state updates and performs automated rolling pod deployment restarts with health checks for zero-downtime releases.",
            color: "#06b6d4",
          },
        ];
      case "software":
      default:
        return [
          {
            id: "software-client",
            icon: <Globe className="h-5 w-5 text-cyan-400" />,
            title: "Next.js Hybrid Rendering",
            sub: "Server Components & Hydration",
            desc: "Presents beautiful responsive layouts. Pages compile on the server for speed and SEO rankings, then hydrate client-side for smooth transitions.",
            color: "#22d3ee",
          },
          {
            id: "software-gateway",
            icon: <Lock className="h-5 w-5 text-teal-400" />,
            title: "API Gateway Routing",
            sub: "JSON Web Token Verification",
            desc: "Manages network endpoints. Translates client URL inputs, validates incoming authorization tokens, and handles rate limiting to prevent DDoS overload.",
            color: "#14b8a6",
          },
          {
            id: "software-backend",
            icon: <Cpu className="h-5 w-5 text-indigo-400" />,
            title: "Async Backend Services",
            sub: "FastAPI Async Processing",
            desc: "Executes business process models. Highly efficient async worker engines process backend logic layers, validation rules, and third-party integrations.",
            color: "#6366f1",
          },
          {
            id: "software-storage",
            icon: <Database className="h-5 w-5 text-cyan-500" />,
            title: "Data Cache & Storage",
            sub: "PostgreSQL & Redis Cluster",
            desc: "Saves application state securely. Employs Postgres Row-Level Security to enforce tenant isolation, combined with a fast Redis caching layer.",
            color: "#06b6d4",
          },
        ];
    }
  };

  const tiers = getTiersData();
  const [activeTierId, setActiveTierId] = useState(tiers[0].id);
  const activeTier = tiers.find((t) => t.id === activeTierId) || tiers[0];

  const getSectionTitle = () => {
    switch (category) {
      case "cloud":
        return "AWS Cloud Architecture Blueprint";
      case "devops":
        return "CI/CD DevOps Lifecycle Workflow";
      case "software":
      default:
        return "Full Stack Software Architecture";
    }
  };

  const getSectionSubtitle = () => {
    switch (category) {
      case "cloud":
        return `See how we build multi-account security groups, isolated VPC subnets, and database clusters for the ${serviceName} system.`;
      case "devops":
        return `Visualize the fully automated build pipeline, vulnerability scans, container registry uploads, and Kubernetes deploy loops.`;
      case "software":
      default:
        return `Inspect the end-to-end stack layout running from the responsive user interface down to database partitions and cache pools.`;
    }
  };

  // Helper for rendering custom interactive SVGs depending on category
  const renderSVGDiagram = () => {
    switch (category) {
      case "cloud":
        return (
          <svg viewBox="0 0 500 360" className="w-full h-full stroke-muted-foreground/20 fill-none">
            {/* Outer Cloud Boundary */}
            <rect x="15" y="15" width="470" height="330" rx="16" strokeDasharray="4, 4" className="stroke-muted-foreground/30" />
            <text x="35" y="42" className="fill-muted-foreground/60 font-mono text-[9px] uppercase tracking-wider">AWS VPC Cloud Environment</text>

            {/* Global Transit Tier */}
            <g className="cursor-pointer" onClick={() => setActiveTierId("cloud-gateway")}>
              <rect
                x="40"
                y="65"
                width="420"
                height="50"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "cloud-gateway" ? "stroke-cyan-500 fill-cyan-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                }`}
              />
              <text x="55" y="95" className={`font-semibold text-xs transition-colors ${activeTierId === "cloud-gateway" ? "fill-cyan-400" : "fill-foreground/80"}`}>
                1. Transit Network & Security Edge
              </text>
            </g>

            {/* Security Tiers */}
            <g className="cursor-pointer" onClick={() => setActiveTierId("cloud-security")}>
              <rect
                x="40"
                y="130"
                width="200"
                height="70"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "cloud-security" ? "stroke-teal-500 fill-teal-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                }`}
              />
              <text x="55" y="160" className={`font-semibold text-xs transition-colors ${activeTierId === "cloud-security" ? "fill-teal-400" : "fill-foreground/80"}`}>
                2. Security & Control
              </text>
              <text x="55" y="180" className="fill-muted-foreground text-[10px] font-mono">IAM roles, KMS & Key rotation</text>
            </g>

            {/* App Compute Tiers */}
            <g className="cursor-pointer" onClick={() => setActiveTierId("cloud-compute")}>
              <rect
                x="260"
                y="130"
                width="200"
                height="70"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "cloud-compute" ? "stroke-indigo-500 fill-indigo-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                }`}
              />
              <text x="275" y="160" className={`font-semibold text-xs transition-colors ${activeTierId === "cloud-compute" ? "fill-indigo-400" : "fill-foreground/80"}`}>
                3. Isolated App Compute
              </text>
              <text x="275" y="180" className="fill-muted-foreground text-[10px] font-mono">EKS Pods & Autoscaling</text>
            </g>

            {/* Database Tiers */}
            <g className="cursor-pointer" onClick={() => setActiveTierId("cloud-data")}>
              <rect
                x="40"
                y="220"
                width="420"
                height="100"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "cloud-data" ? "stroke-cyan-500 fill-cyan-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                }`}
              />
              <text x="55" y="250" className={`font-semibold text-xs transition-colors ${activeTierId === "cloud-data" ? "fill-cyan-400" : "fill-foreground/80"}`}>
                4. Replicated Database Tier (Private Multi-AZ)
              </text>
              
              <rect x="55" y="270" width="180" height="35" rx="4" strokeDasharray="3, 3" className="stroke-muted-foreground/30 fill-background/40" />
              <text x="65" y="290" className="fill-muted-foreground text-[9px] font-mono">Master Database Node</text>

              <rect x="255" y="270" width="190" height="35" rx="4" strokeDasharray="3, 3" className="stroke-muted-foreground/30 fill-background/40" />
              <text x="265" y="290" className="fill-muted-foreground text-[9px] font-mono">Multi-AZ Read Replica</text>
            </g>

            {/* Connecting lines */}
            <line x1="250" y1="115" x2="250" y2="130" strokeDasharray="3, 3" className="stroke-muted-foreground/40" />
            <line x1="140" y1="200" x2="140" y2="220" strokeDasharray="3, 3" className="stroke-muted-foreground/40" />
            <line x1="360" y1="200" x2="360" y2="220" strokeDasharray="3, 3" className="stroke-muted-foreground/40" />
          </svg>
        );

      case "devops":
        return (
          <svg viewBox="0 0 500 360" className="w-full h-full stroke-muted-foreground/20 fill-none">
            {/* Outer Pipeline Frame */}
            <rect x="15" y="15" width="470" height="330" rx="16" strokeDasharray="4, 4" className="stroke-muted-foreground/30" />
            <text x="35" y="42" className="fill-muted-foreground/60 font-mono text-[9px] uppercase tracking-wider">DevOps Build & Deployment Flow</text>

            {/* Step 1: Git push */}
            <g className="cursor-pointer" onClick={() => setActiveTierId("devops-git")}>
              <rect
                x="40"
                y="65"
                width="190"
                height="85"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "devops-git" ? "stroke-cyan-500 fill-cyan-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                }`}
              />
              <text x="55" y="95" className={`font-semibold text-xs transition-colors ${activeTierId === "devops-git" ? "fill-cyan-400" : "fill-foreground/80"}`}>
                1. Git Push / Merge
              </text>
              <text x="55" y="115" className="fill-muted-foreground text-[10px] font-mono">Code repository webhooks</text>
              <circle cx="190" cy="115" r="8" className="stroke-cyan-500/40 fill-background" />
              <path d="M190 111 v8 M187 115 h6" className="stroke-cyan-500/60" />
            </g>

            {/* Step 2: SecOps Scan */}
            <g className="cursor-pointer" onClick={() => setActiveTierId("devops-scan")}>
              <rect
                x="270"
                y="65"
                width="190"
                height="85"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "devops-scan" ? "stroke-teal-500 fill-teal-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                }`}
              />
              <text x="285" y="95" className={`font-semibold text-xs transition-colors ${activeTierId === "devops-scan" ? "fill-teal-400" : "fill-foreground/80"}`}>
                2. Security Scan
              </text>
              <text x="285" y="115" className="fill-muted-foreground text-[10px] font-mono">Snyk & Trivy vulnerability checks</text>
            </g>

            {/* Step 3: Container Build */}
            <g className="cursor-pointer" onClick={() => setActiveTierId("devops-build")}>
              <rect
                x="40"
                y="200"
                width="190"
                height="85"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "devops-build" ? "stroke-indigo-500 fill-indigo-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                }`}
              />
              <text x="55" y="230" className={`font-semibold text-xs transition-colors ${activeTierId === "devops-build" ? "fill-indigo-400" : "fill-foreground/80"}`}>
                3. Docker Build & Registry
              </text>
              <text x="55" y="250" className="fill-muted-foreground text-[10px] font-mono">Multi-stage push to AWS ECR</text>
            </g>

            {/* Step 4: GitOps Rollout */}
            <g className="cursor-pointer" onClick={() => setActiveTierId("devops-deploy")}>
              <rect
                x="270"
                y="200"
                width="190"
                height="85"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "devops-deploy" ? "stroke-cyan-500 fill-cyan-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                }`}
              />
              <text x="285" y="230" className={`font-semibold text-xs transition-colors ${activeTierId === "devops-deploy" ? "fill-cyan-400" : "fill-foreground/80"}`}>
                4. ArgoCD / K8s Deploy
              </text>
              <text x="285" y="250" className="fill-muted-foreground text-[10px] font-mono">Auto scaling pods deploy</text>
            </g>

            {/* Connection Paths */}
            <path d="M230 107 H270" className="stroke-muted-foreground/30" markerEnd="url(#arrow)" />
            <path d="M365 150 V200" className="stroke-muted-foreground/30" />
            <path d="M135 150 V200" className="stroke-muted-foreground/30" />
            <path d="M230 242 H270" className="stroke-muted-foreground/30" />
          </svg>
        );

      case "software":
      default:
        return (
          <svg viewBox="0 0 500 360" className="w-full h-full stroke-muted-foreground/20 fill-none">
            {/* Outer Box */}
            <rect x="15" y="15" width="470" height="330" rx="16" strokeDasharray="4, 4" className="stroke-muted-foreground/30" />
            <text x="35" y="42" className="fill-muted-foreground/60 font-mono text-[9px] uppercase tracking-wider">Multi-Tier Software Stack</text>

            {/* Tier 1: Client Frontends */}
            <g className="cursor-pointer" onClick={() => setActiveTierId("software-client")}>
              <rect
                x="40"
                y="65"
                width="420"
                height="50"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "software-client" ? "stroke-cyan-500 fill-cyan-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                }`}
              />
              <text x="55" y="95" className={`font-semibold text-xs transition-colors ${activeTierId === "software-client" ? "fill-cyan-400" : "fill-foreground/80"}`}>
                1. User Interface (Next.js & Mobile)
              </text>
            </g>

            {/* Tier 2: API Gateway */}
            <g className="cursor-pointer" onClick={() => setActiveTierId("software-gateway")}>
              <rect
                x="40"
                y="130"
                width="420"
                height="50"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "software-gateway" ? "stroke-teal-500 fill-teal-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                }`}
              />
              <text x="55" y="160" className={`font-semibold text-xs transition-colors ${activeTierId === "software-gateway" ? "fill-teal-400" : "fill-foreground/80"}`}>
                2. API Gateway & JWT Auth
              </text>
            </g>

            {/* Tier 3: Async Services */}
            <g className="cursor-pointer" onClick={() => setActiveTierId("software-backend")}>
              <rect
                x="40"
                y="195"
                width="420"
                height="50"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "software-backend" ? "stroke-indigo-500 fill-indigo-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                }`}
              />
              <text x="55" y="225" className={`font-semibold text-xs transition-colors ${activeTierId === "software-backend" ? "fill-indigo-400" : "fill-foreground/80"}`}>
                3. Business Async Microservices
              </text>
            </g>

            {/* Tier 4: Cache & Postgres DB */}
            <g className="cursor-pointer" onClick={() => setActiveTierId("software-storage")}>
              <rect
                x="40"
                y="260"
                width="420"
                height="65"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "software-storage" ? "stroke-cyan-500 fill-cyan-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                }`}
              />
              <text x="55" y="290" className={`font-semibold text-xs transition-colors ${activeTierId === "software-storage" ? "fill-cyan-400" : "fill-foreground/80"}`}>
                4. Data Tier (Postgres & Redis Cache)
              </text>
            </g>

            {/* Connections */}
            <line x1="250" y1="115" x2="250" y2="130" strokeDasharray="3, 3" className="stroke-muted-foreground/30" />
            <line x1="250" y1="180" x2="250" y2="195" strokeDasharray="3, 3" className="stroke-muted-foreground/30" />
            <line x1="250" y1="245" x2="250" y2="260" strokeDasharray="3, 3" className="stroke-muted-foreground/30" />
          </svg>
        );
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-border/40 relative">
      {/* Background Glow */}
      <div className="absolute top-[25%] right-[12%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />

      <SectionHeader
        tag="Security & Architecture"
        title={<>{getSectionTitle()} for <span className="text-cyan-400">{serviceName}</span></>}
        subtitle={getSectionSubtitle()}
        align="center"
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Tiers Selector */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-2">
            Architecture Blueprint Nodes
          </p>
          <div className="space-y-3">
            {tiers.map((tier) => {
              const isActive = tier.id === activeTierId;
              return (
                <div
                  key={tier.id}
                  onClick={() => setActiveTierId(tier.id)}
                  onMouseEnter={() => setActiveTierId(tier.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col gap-3 cursor-pointer select-none ${
                    isActive
                      ? "bg-accent/40 border-cyan-500/40 shadow-md scale-[1.01]"
                      : "bg-background/25 border-border/40 hover:bg-accent/20 hover:border-border/60"
                  }`}
                >
                  <div className="flex items-start gap-4 w-full">
                    <div className="w-9 h-9 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center shrink-0">
                      {tier.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm sm:text-base font-bold transition-colors ${isActive ? "text-cyan-400" : "text-foreground"}`}>
                        {tier.title}
                      </h4>
                      <span className="text-[10px] font-mono text-muted-foreground block mt-0.5">
                        {tier.sub}
                      </span>
                    </div>
                  </div>
                  
                  {/* Inline Mobile Accordion (visible only below lg when active) */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden lg:hidden"
                      >
                        <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border/20">
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

        {/* Right Column: Dynamic SVG & Info Panel */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-card rounded-2xl p-6 border border-border/40 relative aspect-[4/3] flex items-center justify-center overflow-hidden shadow-2xl bg-background/20 backdrop-blur-md">
            {renderSVGDiagram()}
          </div>

          {/* Detailed Info Panel (desktop only) */}
          <div className="min-h-[130px] hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTierId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-xl border border-cyan-500/20 bg-background/45 backdrop-blur-sm space-y-2 relative"
              >
                <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[9px] font-mono font-semibold text-cyan-400">
                  <HelpCircle className="h-3.5 w-3.5" /> node-blueprint
                </div>
                <h4 className="text-base font-bold text-foreground inline-flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: activeTier.color }} />
                  {activeTier.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {activeTier.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
