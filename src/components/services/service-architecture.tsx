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
            icon: <Network className="h-5 w-5 text-primary" />,
            title: "Global Transit & DNS",
            sub: "Route 53 & ALB Ingress",
            desc: "Directs web traffic safely. Uses Route53 geolocation records, AWS WAF firewall inspection, and Application Load Balancers to route incoming connections.",
            color: "#1B8E92",
          },
          {
            id: "cloud-security",
            icon: <Shield className="h-5 w-5 text-primary" />,
            title: "Identity & Key Access",
            sub: "IAM Controls & KMS Keys",
            desc: "Enforces zero-trust boundaries. IAM roles isolate services, database tables are encrypted with KMS keys, and secrets are dynamically fetched from AWS Secrets Manager.",
            color: "#1B8E92",
          },
          {
            id: "cloud-compute",
            icon: <Cpu className="h-5 w-5 text-primary" />,
            title: "Isolated App Compute",
            sub: "Private VPC EKS Subnets",
            desc: "Executes microservice containers. Apps run inside isolated private subnets with egress-only NAT Gateways, preventing direct inbound connections from the internet.",
            color: "#1B8E92",
          },
          {
            id: "cloud-data",
            icon: <Database className="h-5 w-5 text-primary" />,
            title: "Replicated Data Tier",
            sub: "Multi-AZ Aurora Clusters",
            desc: "Houses persistent structured data. Deployed across multiple Availability Zones with subnets walled off, reachable only from the application workload layer.",
            color: "#F59E0B",
          },
        ];
      case "devops":
        return [
          {
            id: "devops-git",
            icon: <GitBranch className="h-5 w-5 text-primary" />,
            title: "Commit Trigger",
            sub: "Webhook Integrations",
            desc: "Merge triggers instant actions. Merging code changes into main repositories alerts CI systems to boot containerized runners.",
            color: "#1B8E92",
          },
          {
            id: "devops-scan",
            icon: <Search className="h-5 w-5 text-primary" />,
            title: "SecOps Compliance Scan",
            sub: "Snyk & SonarQube Checking",
            desc: "Scans repository layouts for security problems, bad coding standards, or committed credentials, failing builds automatically if issues are detected.",
            color: "#1B8E92",
          },
          {
            id: "devops-build",
            icon: <Container className="h-5 w-5 text-primary" />,
            title: "Container Packaging",
            sub: "Multi-Stage Docker & ECR",
            desc: "Builds small runtime container layers, striping out development tooling dependencies. Safe images are pushed to AWS Elastic Container Registry.",
            color: "#1B8E92",
          },
          {
            id: "devops-deploy",
            icon: <Rocket className="h-5 w-5 text-primary" />,
            title: "ArgoCD GitOps Rollout",
            sub: "Kubernetes Cluster Sync",
            desc: "ArgoCD monitors Git state updates and performs automated rolling pod deployment restarts with health checks for zero-downtime releases.",
            color: "#F59E0B",
          },
        ];
      case "software":
      default:
        return [
          {
            id: "software-client",
            icon: <Globe className="h-5 w-5 text-primary" />,
            title: "Next.js Hybrid Rendering",
            sub: "Server Components & Hydration",
            desc: "Presents beautiful responsive layouts. Pages compile on the server for speed and SEO rankings, then hydrate client-side for smooth transitions.",
            color: "#1B8E92",
          },
          {
            id: "software-gateway",
            icon: <Lock className="h-5 w-5 text-primary" />,
            title: "API Gateway Routing",
            sub: "JSON Web Token Verification",
            desc: "Manages network endpoints. Translates client URL inputs, validates incoming authorization tokens, and handles rate limiting to prevent DDoS overload.",
            color: "#1B8E92",
          },
          {
            id: "software-backend",
            icon: <Cpu className="h-5 w-5 text-primary" />,
            title: "Async Backend Services",
            sub: "FastAPI Async Processing",
            desc: "Executes business process models. Highly efficient async worker engines process backend logic layers, validation rules, and third-party integrations.",
            color: "#1B8E92",
          },
          {
            id: "software-storage",
            icon: <Database className="h-5 w-5 text-primary" />,
            title: "Data Cache & Storage",
            sub: "PostgreSQL & Redis Cluster",
            desc: "Saves application state securely. Employs Postgres Row-Level Security to enforce tenant isolation, combined with a fast Redis caching layer.",
            color: "#F59E0B",
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
          <svg viewBox="0 0 500 360" className="w-full h-full stroke-border fill-none">
            {/* Outer Cloud Boundary */}
            <rect x="15" y="15" width="470" height="330" rx="16" strokeDasharray="4, 4" className="stroke-border" />
            <text x="35" y="42" className="fill-muted-foreground font-mono text-[9px] uppercase tracking-wider">AWS VPC Cloud Environment</text>

            {/* Global Transit Tier */}
            <g
              role="button"
              tabIndex={0}
              aria-pressed={activeTierId === "cloud-gateway"}
              aria-label="Global Transit and DNS"
              className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-primary focus-visible:[&>rect]:stroke-2"
              onClick={() => setActiveTierId("cloud-gateway")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("cloud-gateway"); } }}
            >
              <rect
                x="40"
                y="65"
                width="420"
                height="50"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "cloud-gateway" ? "stroke-primary fill-primary/5 stroke-2" : "stroke-border fill-muted"
                }`}
              />
              <text x="55" y="95" className={`font-semibold text-xs transition-colors ${activeTierId === "cloud-gateway" ? "fill-primary" : "fill-foreground"}`}>
                1. Transit Network & Security Edge
              </text>
            </g>

            {/* Security Tiers */}
            <g
              role="button"
              tabIndex={0}
              aria-pressed={activeTierId === "cloud-security"}
              aria-label="Identity and Key Access"
              className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-primary focus-visible:[&>rect]:stroke-2"
              onClick={() => setActiveTierId("cloud-security")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("cloud-security"); } }}
            >
              <rect
                x="40"
                y="130"
                width="200"
                height="70"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "cloud-security" ? "stroke-primary fill-primary/5 stroke-2" : "stroke-border fill-muted"
                }`}
              />
              <text x="55" y="160" className={`font-semibold text-xs transition-colors ${activeTierId === "cloud-security" ? "fill-primary" : "fill-foreground"}`}>
                2. Security & Control
              </text>
              <text x="55" y="180" className="fill-muted-foreground text-[10px] font-mono">IAM roles, KMS & Key rotation</text>
            </g>

            {/* App Compute Tiers */}
            <g
              role="button"
              tabIndex={0}
              aria-pressed={activeTierId === "cloud-compute"}
              aria-label="Isolated App Compute"
              className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-primary focus-visible:[&>rect]:stroke-2"
              onClick={() => setActiveTierId("cloud-compute")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("cloud-compute"); } }}
            >
              <rect
                x="260"
                y="130"
                width="200"
                height="70"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "cloud-compute" ? "stroke-primary fill-primary/5 stroke-2" : "stroke-border fill-muted"
                }`}
              />
              <text x="275" y="160" className={`font-semibold text-xs transition-colors ${activeTierId === "cloud-compute" ? "fill-primary" : "fill-foreground"}`}>
                3. Isolated App Compute
              </text>
              <text x="275" y="180" className="fill-muted-foreground text-[10px] font-mono">EKS Pods & Autoscaling</text>
            </g>

            {/* Database Tiers */}
            <g
              role="button"
              tabIndex={0}
              aria-pressed={activeTierId === "cloud-data"}
              aria-label="Replicated Data Tier"
              className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-accent focus-visible:[&>rect]:stroke-2"
              onClick={() => setActiveTierId("cloud-data")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("cloud-data"); } }}
            >
              <rect
                x="40"
                y="220"
                width="420"
                height="100"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "cloud-data" ? "stroke-accent fill-accent/5 stroke-2" : "stroke-border fill-muted"
                }`}
              />
              <text x="55" y="250" className={`font-semibold text-xs transition-colors ${activeTierId === "cloud-data" ? "fill-accent-foreground" : "fill-foreground"}`}>
                4. Replicated Database Tier (Private Multi-AZ)
              </text>

              <rect x="55" y="270" width="180" height="35" rx="4" strokeDasharray="3, 3" className="stroke-border fill-card" />
              <text x="65" y="290" className="fill-muted-foreground text-[9px] font-mono">Master Database Node</text>

              <rect x="255" y="270" width="190" height="35" rx="4" strokeDasharray="3, 3" className="stroke-border fill-card" />
              <text x="265" y="290" className="fill-muted-foreground text-[9px] font-mono">Multi-AZ Read Replica</text>
            </g>

            {/* Connecting lines */}
            <line x1="250" y1="115" x2="250" y2="130" strokeDasharray="3, 3" className="stroke-border" />
            <line x1="140" y1="200" x2="140" y2="220" strokeDasharray="3, 3" className="stroke-border" />
            <line x1="360" y1="200" x2="360" y2="220" strokeDasharray="3, 3" className="stroke-border" />
          </svg>
        );
 
      case "devops":
        return (
          <svg viewBox="0 0 500 360" className="w-full h-full stroke-border fill-none">
            {/* Outer Pipeline Frame */}
            <rect x="15" y="15" width="470" height="330" rx="16" strokeDasharray="4, 4" className="stroke-border" />
            <text x="35" y="42" className="fill-muted-foreground font-mono text-[9px] uppercase tracking-wider">DevOps Build & Deployment Flow</text>

            {/* Step 1: Git push */}
            <g
              role="button"
              tabIndex={0}
              aria-pressed={activeTierId === "devops-git"}
              aria-label="Commit Trigger"
              className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-primary focus-visible:[&>rect]:stroke-2"
              onClick={() => setActiveTierId("devops-git")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("devops-git"); } }}
            >
              <rect
                x="40"
                y="65"
                width="190"
                height="85"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "devops-git" ? "stroke-primary fill-primary/5 stroke-2" : "stroke-border fill-muted"
                }`}
              />
              <text x="55" y="95" className={`font-semibold text-xs transition-colors ${activeTierId === "devops-git" ? "fill-primary" : "fill-foreground"}`}>
                1. Git Push / Merge
              </text>
              <text x="55" y="115" className="fill-muted-foreground text-[10px] font-mono">Code repository webhooks</text>
              <circle cx="190" cy="115" r="8" className="stroke-primary/40 fill-card" />
              <path d="M190 111 v8 M187 115 h6" className="stroke-primary/60" />
            </g>

            {/* Step 2: SecOps Scan */}
            <g
              role="button"
              tabIndex={0}
              aria-pressed={activeTierId === "devops-scan"}
              aria-label="SecOps Compliance Scan"
              className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-primary focus-visible:[&>rect]:stroke-2"
              onClick={() => setActiveTierId("devops-scan")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("devops-scan"); } }}
            >
              <rect
                x="270"
                y="65"
                width="190"
                height="85"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "devops-scan" ? "stroke-primary fill-primary/5 stroke-2" : "stroke-border fill-muted"
                }`}
              />
              <text x="285" y="95" className={`font-semibold text-xs transition-colors ${activeTierId === "devops-scan" ? "fill-primary" : "fill-foreground"}`}>
                2. Security Scan
              </text>
              <text x="285" y="115" className="fill-muted-foreground text-[10px] font-mono">Snyk & Trivy vulnerability checks</text>
            </g>

            {/* Step 3: Container Build */}
            <g
              role="button"
              tabIndex={0}
              aria-pressed={activeTierId === "devops-build"}
              aria-label="Container Packaging"
              className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-primary focus-visible:[&>rect]:stroke-2"
              onClick={() => setActiveTierId("devops-build")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("devops-build"); } }}
            >
              <rect
                x="40"
                y="200"
                width="190"
                height="85"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "devops-build" ? "stroke-primary fill-primary/5 stroke-2" : "stroke-border fill-muted"
                }`}
              />
              <text x="55" y="230" className={`font-semibold text-xs transition-colors ${activeTierId === "devops-build" ? "fill-primary" : "fill-foreground"}`}>
                3. Docker Build & Registry
              </text>
              <text x="55" y="250" className="fill-muted-foreground text-[10px] font-mono">Multi-stage push to AWS ECR</text>
            </g>

            {/* Step 4: GitOps Rollout */}
            <g
              role="button"
              tabIndex={0}
              aria-pressed={activeTierId === "devops-deploy"}
              aria-label="ArgoCD GitOps Rollout"
              className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-accent focus-visible:[&>rect]:stroke-2"
              onClick={() => setActiveTierId("devops-deploy")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("devops-deploy"); } }}
            >
              <rect
                x="270"
                y="200"
                width="190"
                height="85"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "devops-deploy" ? "stroke-accent fill-accent/5 stroke-2" : "stroke-border fill-muted"
                }`}
              />
              <text x="285" y="230" className={`font-semibold text-xs transition-colors ${activeTierId === "devops-deploy" ? "fill-accent-foreground" : "fill-foreground"}`}>
                4. ArgoCD / K8s Deploy
              </text>
              <text x="285" y="250" className="fill-muted-foreground text-[10px] font-mono">Auto scaling pods deploy</text>
            </g>

            {/* Connection Paths */}
            <path d="M230 107 H270" className="stroke-border" markerEnd="url(#arrow)" />
            <path d="M365 150 V200" className="stroke-border" />
            <path d="M135 150 V200" className="stroke-border" />
            <path d="M230 242 H270" className="stroke-border" />
          </svg>
        );
 
      case "software":
      default:
        return (
          <svg viewBox="0 0 500 360" className="w-full h-full stroke-border fill-none">
            {/* Outer Box */}
            <rect x="15" y="15" width="470" height="330" rx="16" strokeDasharray="4, 4" className="stroke-border" />
            <text x="35" y="42" className="fill-muted-foreground font-mono text-[9px] uppercase tracking-wider">Multi-Tier Software Stack</text>

            {/* Tier 1: Client Frontends */}
            <g
              role="button"
              tabIndex={0}
              aria-pressed={activeTierId === "software-client"}
              aria-label="Next.js Hybrid Rendering"
              className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-primary focus-visible:[&>rect]:stroke-2"
              onClick={() => setActiveTierId("software-client")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("software-client"); } }}
            >
              <rect
                x="40"
                y="65"
                width="420"
                height="50"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "software-client" ? "stroke-primary fill-primary/5 stroke-2" : "stroke-border fill-muted"
                }`}
              />
              <text x="55" y="95" className={`font-semibold text-xs transition-colors ${activeTierId === "software-client" ? "fill-primary" : "fill-foreground"}`}>
                1. User Interface (Next.js & Mobile)
              </text>
            </g>

            {/* Tier 2: API Gateway */}
            <g
              role="button"
              tabIndex={0}
              aria-pressed={activeTierId === "software-gateway"}
              aria-label="API Gateway Routing"
              className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-primary focus-visible:[&>rect]:stroke-2"
              onClick={() => setActiveTierId("software-gateway")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("software-gateway"); } }}
            >
              <rect
                x="40"
                y="130"
                width="420"
                height="50"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "software-gateway" ? "stroke-primary fill-primary/5 stroke-2" : "stroke-border fill-muted"
                }`}
              />
              <text x="55" y="160" className={`font-semibold text-xs transition-colors ${activeTierId === "software-gateway" ? "fill-primary" : "fill-foreground"}`}>
                2. API Gateway & JWT Auth
              </text>
            </g>

            {/* Tier 3: Async Services */}
            <g
              role="button"
              tabIndex={0}
              aria-pressed={activeTierId === "software-backend"}
              aria-label="Async Backend Services"
              className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-primary focus-visible:[&>rect]:stroke-2"
              onClick={() => setActiveTierId("software-backend")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("software-backend"); } }}
            >
              <rect
                x="40"
                y="195"
                width="420"
                height="50"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "software-backend" ? "stroke-primary fill-primary/5 stroke-2" : "stroke-border fill-muted"
                }`}
              />
              <text x="55" y="225" className={`font-semibold text-xs transition-colors ${activeTierId === "software-backend" ? "fill-primary" : "fill-foreground"}`}>
                3. Business Async Microservices
              </text>
            </g>

            {/* Tier 4: Cache & Postgres DB */}
            <g
              role="button"
              tabIndex={0}
              aria-pressed={activeTierId === "software-storage"}
              aria-label="Data Cache and Storage"
              className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-accent focus-visible:[&>rect]:stroke-2"
              onClick={() => setActiveTierId("software-storage")}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("software-storage"); } }}
            >
              <rect
                x="40"
                y="260"
                width="420"
                height="65"
                rx="8"
                className={`transition-all duration-300 ${
                  activeTierId === "software-storage" ? "stroke-accent fill-accent/5 stroke-2" : "stroke-border fill-muted"
                }`}
              />
              <text x="55" y="290" className={`font-semibold text-xs transition-colors ${activeTierId === "software-storage" ? "fill-accent-foreground" : "fill-foreground"}`}>
                4. Data Tier (Postgres & Redis Cache)
              </text>
            </g>

            {/* Connections */}
            <line x1="250" y1="115" x2="250" y2="130" strokeDasharray="3, 3" className="stroke-border" />
            <line x1="250" y1="180" x2="250" y2="195" strokeDasharray="3, 3" className="stroke-border" />
            <line x1="250" y1="245" x2="250" y2="260" strokeDasharray="3, 3" className="stroke-border" />
          </svg>
        );
    }
  };
 
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 border-t border-border relative">
      <SectionHeader
        tag="Security & Architecture"
        title={<>{getSectionTitle()} for <span className="text-primary-strong">{serviceName}</span></>}
        subtitle={getSectionSubtitle()}
        align="center"
        className="mb-16"
      />
 
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Tiers Selector */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest block mb-2">
            Architecture Blueprint Nodes
          </p>
          <div className="space-y-3">
            {tiers.map((tier) => {
              const isActive = tier.id === activeTierId;
              return (
                <button
                  key={tier.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveTierId(tier.id)}
                  onMouseEnter={() => setActiveTierId(tier.id)}
                  onFocus={() => setActiveTierId(tier.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col gap-3 cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                    isActive
                      ? "bg-primary/10 border-primary shadow-md scale-[1.01]"
                      : "bg-card border-border hover:bg-muted hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-start gap-4 w-full">
                    <div className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0">
                      {tier.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-base font-bold transition-colors ${isActive ? "text-primary-strong" : "text-foreground"}`}>
                        {tier.title}
                      </h4>
                      <span className="text-sm font-mono text-muted-foreground block mt-0.5">
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
                        <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border">
                          {tier.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
 
        {/* Right Column: Dynamic SVG & Info Panel */}
        <div className="lg:col-span-7 space-y-6">
          <div className="surface-card rounded-2xl p-6 border border-border relative aspect-[4/3] flex items-center justify-center overflow-hidden shadow-lg">
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
                className="p-5 rounded-xl border border-border surface-card space-y-2 relative"
              >
                <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono font-semibold text-primary-strong">
                  <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" /> node-blueprint
                </div>
                <h4 className="text-base font-bold text-foreground inline-flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeTier.color }} aria-hidden="true" />
                  {activeTier.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
