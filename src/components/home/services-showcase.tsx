"use client";

import React, { useState, useEffect } from "react";
import { Cloud, Settings, Layers, Smartphone, Code, Palette, Cpu, Eye, ArrowRight, Terminal as TermIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "../common/section-header";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";

export function ServicesShowcase() {
  // Mini state for dynamic animations inside the bento visual blocks
  const [pulseCount, setPulseCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCount(prev => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 border-t border-border/40">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

      <SectionHeader
        tag="Expertise"
        title={<>Enterprise-Grade <span className="gradient-text">Engineering Services</span></>}
        subtitle="We design, automate, and scale secure modern software products. Partner with us to speed up developer output and lower cloud costs."
        align="center"
        className="mb-16"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Core Card 1: AWS Managed Services (2 Columns) */}
        <StaggerItem className="lg:col-span-2 md:col-span-2 glass-card hover:border-cyan-500/40 p-6 rounded-xl flex flex-col justify-between min-h-[340px] transition-all group hover:-translate-y-1 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 h-full items-start">
            <div className="sm:col-span-7 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Cloud className="h-6 w-6 text-cyan-400" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-cyan-500 font-semibold tracking-wider block">
                  AWS. COST. SCALE.
                </span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                  AWS Managed Services
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Enterprise cloud configurations, multi-account structures (Landing Zones via Control Tower), deep cost audits, IAM governance, and secure infrastructure automation.
                </p>
              </div>
            </div>
            
            {/* Visual: Multi-account AWS structure mockup */}
            <div className="sm:col-span-5 h-full min-h-[140px] flex items-center justify-center bg-background/50 border border-border/40 rounded-lg p-3 relative select-none">
              <div className="w-full space-y-2 font-mono text-[9px] text-muted-foreground">
                <div className="flex items-center gap-1.5 bg-background/60 p-1 rounded border border-border/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-foreground font-semibold">Root Account</span>
                  <span className="text-[8px] bg-amber-400/10 text-amber-400 px-1 rounded ml-auto">Org</span>
                </div>
                
                <div className="pl-3 border-l border-border/40 space-y-2">
                  <div className="flex items-center gap-1.5 bg-background/30 p-1 rounded border border-border/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Core Security OU</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-cyan-950/20 p-1 rounded border border-cyan-500/20 text-cyan-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>Workload-Prod</span>
                    <span className="text-[8px] bg-cyan-500/20 text-cyan-400 px-1 rounded ml-auto">EKS</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-background/30 p-1 rounded border border-border/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span>Shared Sandbox</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-border/20 mt-6">
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="AWS">
                <Image src="/service/aws.svg" alt="AWS" fill sizes="20px" className="object-contain" />
              </div>
            </div>
            <Link href="/services" className="text-[11px] font-semibold text-cyan-500 hover:text-cyan-400 inline-flex items-center gap-1 group/btn">
              Explore Landing Zones <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </StaggerItem>

        {/* Core Card 2: DevOps Consulting (2 Columns) */}
        <StaggerItem className="lg:col-span-2 md:col-span-2 glass-card hover:border-teal-500/40 p-6 rounded-xl flex flex-col justify-between min-h-[340px] transition-all group hover:-translate-y-1 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/0 via-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 h-full items-start">
            <div className="sm:col-span-7 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Settings className="h-6 w-6 text-teal-400" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-teal-500 font-semibold tracking-wider block">
                  IAC. CI/CD. PIPELINES.
                </span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-teal-500 transition-colors">
                  DevOps Consulting
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Eliminate developer downtime. Build fast CI/CD pipelines, enforce test-driven deployment rules, and configure Infrastructure as Code using clean Terraform modules.
                </p>
              </div>
            </div>
            
            {/* Visual: DevOps CI/CD pipeline steps execution */}
            <div className="sm:col-span-5 h-full min-h-[140px] flex items-center justify-center bg-background/50 border border-border/40 rounded-lg p-3 relative select-none">
              <div className="w-full space-y-1.5 font-mono text-[9px] text-muted-foreground">
                <div className="flex items-center gap-1.5 border-b border-border/20 pb-1.5">
                  <TermIcon className="h-3 w-3 text-teal-400" />
                  <span className="text-foreground">runner #402-run</span>
                </div>
                <div className="flex items-center gap-2 text-[8px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-foreground/80">tf-validate: OK</span>
                  <span className="text-muted-foreground ml-auto">0.4s</span>
                </div>
                <div className="flex items-center gap-2 text-[8px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-foreground/80">security-lint: Passed</span>
                  <span className="text-muted-foreground ml-auto">1.2s</span>
                </div>
                <div className="flex items-center gap-2 text-[8px] text-teal-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                  <span>tf-apply: deploying...</span>
                  <span className="ml-auto">Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-border/20 mt-6">
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="AWS">
                <Image src="/service/aws.svg" alt="AWS" fill sizes="20px" className="object-contain" />
              </div>
              <div className="relative w-5 h-5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="Kubernetes">
                <Image src="/kubernetes.png" alt="Kubernetes" fill sizes="20px" className="object-contain" />
              </div>
            </div>
            <Link href="/services" className="text-[11px] font-semibold text-teal-500 hover:text-teal-400 inline-flex items-center gap-1 group/btn">
              Optimize Delivery <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </StaggerItem>

        {/* Core Card 3: Kubernetes Engineering (2 Columns) */}
        <StaggerItem className="lg:col-span-2 md:col-span-2 glass-card hover:border-purple-500/40 p-6 rounded-xl flex flex-col justify-between min-h-[340px] transition-all group hover:-translate-y-1 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 h-full items-start">
            <div className="sm:col-span-7 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Layers className="h-6 w-6 text-purple-400" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-purple-500 font-semibold tracking-wider block">
                  CONTAINERS. EKS. HELM.
                </span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-purple-500 transition-colors">
                  Kubernetes Engineering
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Migrate monoliths and microservices to AWS EKS or Azure AKS. Expert ingress setup, robust network policies, HPA scaling, and Istio Service Mesh architectures.
                </p>
              </div>
            </div>
            
            {/* Visual: Pod scaling telemetry preview */}
            <div className="sm:col-span-5 h-full min-h-[140px] flex items-center justify-center bg-background/50 border border-border/40 rounded-lg p-3 relative select-none">
              <div className="w-full space-y-2 font-mono text-[9px]">
                <div className="flex items-center justify-between text-muted-foreground border-b border-border/20 pb-1">
                  <span>HPA Replica Target</span>
                  <span className="text-purple-400 font-bold">4 / 8</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 pt-1">
                  <div className="bg-green-500/10 border border-green-500/30 p-1 rounded text-center text-green-400">
                    pod-1
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 p-1 rounded text-center text-green-400">
                    pod-2
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 p-1 rounded text-center text-green-400">
                    pod-3
                  </div>
                  <div className={`border p-1 rounded text-center transition-colors duration-500 ${
                    pulseCount === 0 
                      ? "bg-purple-500/20 border-purple-500/40 text-purple-400 animate-pulse" 
                      : "bg-green-500/10 border-green-500/30 text-green-400"
                  }`}>
                    {pulseCount === 0 ? "scale" : "pod-4"}
                  </div>
                </div>
                <div className="text-[8px] text-muted-foreground mt-2 leading-none">
                  Load Trigger: CPU Avg &gt; 75%
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-border/20 mt-6">
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="Kubernetes">
                <Image src="/kubernetes.png" alt="Kubernetes" fill sizes="20px" className="object-contain" />
              </div>
              <div className="relative w-5 h-5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="AWS">
                <Image src="/service/aws.svg" alt="AWS" fill sizes="20px" className="object-contain" />
              </div>
            </div>
            <Link href="/services" className="text-[11px] font-semibold text-purple-500 hover:text-purple-400 inline-flex items-center gap-1 group/btn">
              Configure Containers <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </StaggerItem>

        {/* Core Card 4: Platform Engineering (2 Columns) */}
        <StaggerItem className="lg:col-span-2 md:col-span-2 glass-card hover:border-cyan-500/40 p-6 rounded-xl flex flex-col justify-between min-h-[340px] transition-all group hover:-translate-y-1 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 h-full items-start">
            <div className="sm:col-span-7 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Cpu className="h-6 w-6 text-cyan-400" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-cyan-500 font-semibold tracking-wider block">
                  IDP. DEVELOPER VELOCITY.
                </span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                  Platform Engineering
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Empower developers with self-service templates. We engineer internal developer portals (Backstage / custom panels) to abstract AWS IAM, network pipelines, and DNS config details.
                </p>
              </div>
            </div>
            
            {/* Visual: Command prompt portal creation */}
            <div className="sm:col-span-5 h-full min-h-[140px] flex items-center justify-center bg-background/50 border border-border/40 rounded-lg p-3 relative select-none">
              <div className="w-full space-y-1.5 font-mono text-[9px] text-muted-foreground">
                <div className="flex items-center gap-1.5 border-b border-border/20 pb-1">
                  <TermIcon className="h-3 w-3 text-cyan-400" />
                  <span className="text-foreground">oneggy-portal cli</span>
                </div>
                <div className="text-[8px] text-cyan-400/90 font-semibold">
                  $ eggy create svc --name auth
                </div>
                <div className="text-[7.5px] leading-tight space-y-0.5">
                  <p>✔ Creating RDS PostgreSQL...</p>
                  <p>✔ Binding secrets via Vault...</p>
                  <p className="text-foreground font-bold">✔ App ready: staging-auth.oneggy.run</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-border/20 mt-6">
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="Kubernetes">
                <Image src="/kubernetes.png" alt="Kubernetes" fill sizes="20px" className="object-contain" />
              </div>
              <div className="relative w-5 h-5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="NodeJS">
                <Image src="/service/node.svg" alt="Node" fill sizes="20px" className="object-contain" />
              </div>
            </div>
            <Link href="/services" className="text-[11px] font-semibold text-cyan-500 hover:text-cyan-400 inline-flex items-center gap-1 group/btn">
              Build Developer Portal <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </StaggerItem>

        {/* Secondary Card 5: Full Stack Development (1 Column) */}
        <StaggerItem className="glass-card hover:border-teal-500/40 p-5 rounded-xl flex flex-col justify-between min-h-[280px] transition-all group hover:-translate-y-1 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/0 via-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="space-y-4">
            <div className="w-9 h-9 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Code className="h-5 w-5 text-teal-400" />
            </div>
            <div className="space-y-2">
              <span className="text-[9px] font-mono text-teal-500 font-semibold tracking-wider block">NEXT.JS. REACT. PYTHON</span>
              <h3 className="text-base font-bold text-foreground group-hover:text-teal-500 transition-colors">Full Stack Engineering</h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">
                Deploy clean, type-safe codebases. We build applications with React/Next.js and secure APIs on Node or Django.
              </p>
            </div>
          </div>
          <div className="pt-4 flex items-center justify-between border-t border-border/20 mt-4">
            <div className="flex items-center gap-1">
              <div className="relative w-4.5 h-4.5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="React">
                <Image src="/service/react.svg" alt="React" fill sizes="18px" className="object-contain" />
              </div>
              <div className="relative w-4.5 h-4.5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="Node">
                <Image src="/service/node.svg" alt="Node" fill sizes="18px" className="object-contain" />
              </div>
            </div>
            <Link href="/services" className="text-[10px] font-semibold text-teal-500 hover:text-teal-400 inline-flex items-center gap-0.5 group/btn">
              Details <ArrowRight className="h-2.5 w-2.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </StaggerItem>

        {/* Secondary Card 6: Mobile App Development (1 Column) */}
        <StaggerItem className="glass-card hover:border-purple-500/40 p-5 rounded-xl flex flex-col justify-between min-h-[280px] transition-all group hover:-translate-y-1 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="space-y-4">
            <div className="w-9 h-9 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Smartphone className="h-5 w-5 text-purple-400" />
            </div>
            <div className="space-y-2">
              <span className="text-[9px] font-mono text-purple-500 font-semibold tracking-wider block">REACT NATIVE. MOBILE</span>
              <h3 className="text-base font-bold text-foreground group-hover:text-purple-500 transition-colors">Mobile Engineering</h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">
                High-performance iOS and Android builds. Cross-platform React Native apps featuring offline data sync and native bridges.
              </p>
            </div>
          </div>
          <div className="pt-4 flex items-center justify-between border-t border-border/20 mt-4">
            <div className="flex items-center gap-1">
              <div className="relative w-4.5 h-4.5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="React Native">
                <Image src="/service/react.svg" alt="React Native" fill sizes="18px" className="object-contain" />
              </div>
            </div>
            <Link href="/services" className="text-[10px] font-semibold text-purple-500 hover:text-purple-400 inline-flex items-center gap-0.5 group/btn">
              Details <ArrowRight className="h-2.5 w-2.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </StaggerItem>

        {/* Secondary Card 7: UI/UX Design (1 Column) */}
        <StaggerItem className="glass-card hover:border-cyan-500/40 p-5 rounded-xl flex flex-col justify-between min-h-[280px] transition-all group hover:-translate-y-1 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="space-y-4">
            <div className="w-9 h-9 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Palette className="h-5 w-5 text-cyan-400" />
            </div>
            <div className="space-y-2">
              <span className="text-[9px] font-mono text-cyan-500 font-semibold tracking-wider block">FIGMA. SAAS LAYOUT</span>
              <h3 className="text-base font-bold text-foreground group-hover:text-cyan-500 transition-colors">UI/UX Strategy</h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">
                Stunning functional aesthetics. Custom SaaS layout design systems, user journeys, responsive wireframing, and Figma prototypes.
              </p>
            </div>
          </div>
          <div className="pt-4 flex items-center justify-between border-t border-border/20 mt-4">
            <div className="flex items-center gap-1">
              <div className="relative w-4.5 h-4.5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="HTML">
                <Image src="/service/html.svg" alt="HTML" fill sizes="18px" className="object-contain" />
              </div>
              <div className="relative w-4.5 h-4.5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="CSS">
                <Image src="/service/css.svg" alt="CSS" fill sizes="18px" className="object-contain" />
              </div>
            </div>
            <Link href="/services" className="text-[10px] font-semibold text-cyan-500 hover:text-cyan-400 inline-flex items-center gap-0.5 group/btn">
              Details <ArrowRight className="h-2.5 w-2.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </StaggerItem>

        {/* Secondary Card 8: Monitoring & Observability (1 Column) */}
        <StaggerItem className="glass-card hover:border-teal-500/40 p-5 rounded-xl flex flex-col justify-between min-h-[280px] transition-all group hover:-translate-y-1 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/0 via-teal-500/0 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="space-y-4">
            <div className="w-9 h-9 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Eye className="h-5 w-5 text-teal-400" />
            </div>
            <div className="space-y-2">
              <span className="text-[9px] font-mono text-teal-500 font-semibold tracking-wider block">LOGS. METRICS. TRACES</span>
              <h3 className="text-base font-bold text-foreground group-hover:text-teal-500 transition-colors">Observability</h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">
                Remove monitoring blindspots. Centralized telemetry via Datadog, Grafana dashboards, Prometheus metrics, and automated system alert routing.
              </p>
            </div>
          </div>
          <div className="pt-4 flex items-center justify-between border-t border-border/20 mt-4">
            <div className="flex items-center gap-1">
              <div className="relative w-4.5 h-4.5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="AWS">
                <Image src="/service/aws.svg" alt="AWS" fill sizes="18px" className="object-contain" />
              </div>
              <div className="relative w-4.5 h-4.5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title="Kubernetes">
                <Image src="/kubernetes.png" alt="Kubernetes" fill sizes="18px" className="object-contain" />
              </div>
            </div>
            <Link href="/services" className="text-[10px] font-semibold text-teal-500 hover:text-teal-400 inline-flex items-center gap-0.5 group/btn">
              Details <ArrowRight className="h-2.5 w-2.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </StaggerItem>

      </StaggerContainer>
    </section>
  );
}
