"use client";

import React, { useState } from "react";
import { SectionHeader } from "../common/section-header";
import { Shield, Network, LayoutGrid, HardDrive, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tiers = [
  {
    id: "org-mgmt",
    icon: <LayoutGrid className="h-5 w-5 text-cyan-400" />,
    title: "Organization Control Account",
    sub: "AWS Control Tower & Organizations",
    desc: "Handles root-level account orchestration, AWS billing consolidations, and security controls policies that prevent sub-accounts from bypassing corporate rules.",
    color: "#22d3ee",
  },
  {
    id: "security-logging",
    icon: <Shield className="h-5 w-5 text-teal-400" />,
    title: "Audit & Security Account",
    sub: "Centralized S3 logs & GuardDuty",
    desc: "Consolidates CloudTrail, VPC Flow logs, and GuardDuty alerts from all child accounts into a locked, read-only S3 bucket. Zero write access for normal developers.",
    color: "#14b8a6",
  },
  {
    id: "core-networking",
    icon: <Network className="h-5 w-5 text-indigo-400" />,
    title: "Core Networking Account",
    sub: "AWS Transit Gateway & DNS Core",
    desc: "Centralizes cloud networking interfaces. Uses AWS Transit Gateways to manage secure, encrypted communication routing between production, sandbox, and local VPN endpoints.",
    color: "#6366f1",
  },
  {
    id: "workloads",
    icon: <HardDrive className="h-5 w-5 text-cyan-400" />,
    title: "App Workloads Account",
    sub: "Kubernetes (EKS) & Secure DB Tiers",
    desc: "The isolated tier where code is executed. EKS pods are deployed into isolated private subnets, only accessible via ALBs from the networking zone, communicating with replica database subnets.",
    color: "#06b6d4",
  },
];

export function ArchitectureVisuals() {
  const [activeTierId, setActiveTierId] = useState(tiers[0].id);

  const activeTier = tiers.find((t) => t.id === activeTierId) || tiers[0];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative">
      {/* Glow Backdrop */}
      <div className="absolute top-[30%] right-[10%] w-[450px] h-[450px] rounded-full bg-cyan-500/5 blur-[115px] pointer-events-none -z-10" />

      <SectionHeader
        tag="Security First"
        title={<>Enterprise AWS <span className="gradient-text">Landing Zone</span> Blueprint</>}
        subtitle="We build multi-account AWS architectures following strict Well-Architected Framework guidelines to prevent configuration drift and lateral attacks."
        align="center"
        className="mb-16"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Interactive Selector List */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-4">
            Interactive Architecture Map
          </p>
          <div className="space-y-3">
            {tiers.map((tier) => {
              const isActive = tier.id === activeTierId;
              return (
                <button
                  key={tier.id}
                  onClick={() => setActiveTierId(tier.id)}
                  onMouseEnter={() => setActiveTierId(tier.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 cursor-pointer select-none ${
                    isActive
                      ? "bg-accent/40 border-cyan-500/40 shadow-md"
                      : "bg-background/20 border-border/40 hover:bg-accent/20 hover:border-border"
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center shrink-0">
                    {tier.icon}
                  </div>
                  <div>
                    <h4 className={`text-base font-bold transition-colors ${isActive ? "text-cyan-500" : "text-foreground"}`}>
                      {tier.title}
                    </h4>
                    <span className="text-[11px] font-mono text-muted-foreground block mt-0.5">
                      {tier.sub}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Visual Diagram & Active Description Card */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* SVG Diagram representing Landing Zone Tiers */}
          <div className="glass-card rounded-2xl p-6 border border-border/40 relative aspect-[4/3] flex items-center justify-center overflow-hidden shadow-2xl">
            <svg viewBox="0 0 500 360" className="w-full h-full stroke-muted-foreground/20 fill-none">
              
              {/* Outer AWS Organization Box */}
              <rect x="15" y="15" width="470" height="330" rx="16" strokeDasharray="4, 4" className="stroke-muted-foreground/30" />
              <text x="35" y="42" className="fill-muted-foreground/60 font-mono text-[9px] uppercase tracking-wider">AWS Multi-Account Organization</text>

              {/* Tier 1: Org Management Box */}
              <g className="cursor-pointer" onClick={() => setActiveTierId("org-mgmt")}>
                <rect
                  x="40"
                  y="65"
                  width="420"
                  height="50"
                  rx="8"
                  className={`transition-all duration-300 ${
                    activeTierId === "org-mgmt" ? "stroke-cyan-500 fill-cyan-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                  }`}
                />
                <text x="55" y="95" className={`font-semibold text-xs transition-colors ${activeTierId === "org-mgmt" ? "fill-cyan-400" : "fill-foreground/80"}`}>
                  1. Organization Control Account (Control Tower Hub)
                </text>
              </g>

              {/* Tier 2: Audit Security Box */}
              <g className="cursor-pointer" onClick={() => setActiveTierId("security-logging")}>
                <rect
                  x="40"
                  y="130"
                  width="200"
                  height="70"
                  rx="8"
                  className={`transition-all duration-300 ${
                    activeTierId === "security-logging" ? "stroke-teal-500 fill-teal-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                  }`}
                />
                <text x="55" y="160" className={`font-semibold text-xs transition-colors ${activeTierId === "security-logging" ? "fill-teal-400" : "fill-foreground/80"}`}>
                  2. Security & Logs
                </text>
                <text x="55" y="180" className="fill-muted-foreground text-[10px] font-mono">Centralized Log Store</text>
              </g>

              {/* Tier 3: Core Networking Box */}
              <g className="cursor-pointer" onClick={() => setActiveTierId("core-networking")}>
                <rect
                  x="260"
                  y="130"
                  width="200"
                  height="70"
                  rx="8"
                  className={`transition-all duration-300 ${
                    activeTierId === "core-networking" ? "stroke-indigo-500 fill-indigo-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                  }`}
                />
                <text x="275" y="160" className={`font-semibold text-xs transition-colors ${activeTierId === "core-networking" ? "fill-indigo-400" : "fill-foreground/80"}`}>
                  3. Network Gateway
                </text>
                <text x="275" y="180" className="fill-muted-foreground text-[10px] font-mono">Transit Gateway Routing</text>
              </g>

              {/* Tier 4: Workloads Box */}
              <g className="cursor-pointer" onClick={() => setActiveTierId("workloads")}>
                <rect
                  x="40"
                  y="220"
                  width="420"
                  height="100"
                  rx="8"
                  className={`transition-all duration-300 ${
                    activeTierId === "workloads" ? "stroke-cyan-500 fill-cyan-500/5 stroke-2" : "stroke-border/40 fill-background/30"
                  }`}
                />
                <text x="55" y="250" className={`font-semibold text-xs transition-colors ${activeTierId === "workloads" ? "fill-cyan-400" : "fill-foreground/80"}`}>
                  4. App Workloads Account (Isolated Sandbox & Prod VPCs)
                </text>
                
                {/* Visual subnets nodes inside workloads */}
                <rect x="55" y="270" width="165" height="35" rx="4" strokeDasharray="3, 3" className="stroke-muted-foreground/30 fill-background/40" />
                <text x="65" y="290" className="fill-muted-foreground text-[9px] font-mono">Private EKS Subnets</text>

                <rect x="235" y="270" width="210" height="35" rx="4" strokeDasharray="3, 3" className="stroke-muted-foreground/30 fill-background/40" />
                <text x="245" y="290" className="fill-muted-foreground text-[9px] font-mono">Isolated DB Subnets</text>
              </g>

              {/* Connecting Data Flow Lines */}
              <line x1="250" y1="115" x2="250" y2="130" strokeDasharray="3, 3" className="stroke-muted-foreground/40" />
              <line x1="140" y1="200" x2="140" y2="220" strokeDasharray="3, 3" className="stroke-muted-foreground/40" />
              <line x1="360" y1="200" x2="360" y2="220" strokeDasharray="3, 3" className="stroke-muted-foreground/40" />
            </svg>
          </div>

          {/* Description Panel explaining the active layer details */}
          <div className="min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTierId}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl border border-cyan-500/20 bg-background/50 backdrop-blur-sm space-y-2 relative"
              >
                <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono font-semibold text-cyan-400">
                  <HelpCircle className="h-3.5 w-3.5" /> active-blueprint
                </div>
                <h4 className="text-base font-bold text-foreground inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeTier.color }} />
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
