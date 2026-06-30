"use client";

import React, { useState } from "react";
import { Shield, Network, LayoutGrid, HardDrive } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tiers = [
  {
    id: "org-mgmt",
    icon: <LayoutGrid className="h-5 w-5 text-primary" />,
    title: "Organization Control Account",
    sub: "AWS Control Tower & Organizations",
    desc: "Handles root-level account orchestration, AWS billing consolidations, and security controls policies that prevent sub-accounts from bypassing corporate rules.",
    color: "#1B8E92",
  },
  {
    id: "security-logging",
    icon: <Shield className="h-5 w-5 text-primary" />,
    title: "Audit & Security Account",
    sub: "Centralized S3 logs & GuardDuty",
    desc: "Consolidates CloudTrail, VPC Flow logs, and GuardDuty alerts from all child accounts into a locked, read-only S3 bucket. Zero write access for normal developers.",
    color: "#1B8E92",
  },
  {
    id: "core-networking",
    icon: <Network className="h-5 w-5 text-primary" />,
    title: "Core Networking Account",
    sub: "AWS Transit Gateway & DNS Core",
    desc: "Centralizes cloud networking interfaces. Uses AWS Transit Gateways to manage secure, encrypted communication routing between production, sandbox, and local VPN endpoints.",
    color: "#1B8E92",
  },
  {
    id: "workloads",
    icon: <HardDrive className="h-5 w-5 text-primary" />,
    title: "App Workloads Account",
    sub: "Kubernetes (EKS) & Secure DB Tiers",
    desc: "The isolated tier where code is executed. EKS pods are deployed into isolated private subnets, only accessible via ALBs from the networking zone, communicating with replica database subnets.",
    color: "#F59E0B",
  },
];

export function ArchitectureVisuals() {
  const [activeTierId, setActiveTierId] = useState(tiers[0].id);

  const activeTier = tiers.find((t) => t.id === activeTierId) || tiers[0];

  return (
    <section className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
          <div className="lg:col-span-5">
            <span className="eyebrow mb-5">Security first</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">
              Enterprise AWS <em>landing zone.</em>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-base text-muted-foreground leading-relaxed max-w-[54ch]">
              We build multi-account AWS architectures following strict Well-Architected Framework
              guidelines to prevent configuration drift and lateral attacks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: Interactive Selector List */}
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground/80 mb-5">
              Interactive architecture map
            </p>
            <ul className="border-t border-border">
              {tiers.map((tier) => {
                const isActive = tier.id === activeTierId;
                return (
                  <li key={tier.id} className="border-b border-border">
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveTierId(tier.id)}
                      onMouseEnter={() => setActiveTierId(tier.id)}
                      onFocus={() => setActiveTierId(tier.id)}
                      className="w-full text-left py-5 flex flex-col gap-3 cursor-pointer select-none transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none group"
                    >
                      <div className="flex items-start gap-4 w-full">
                        <div
                          className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                            isActive ? "bg-primary/10 border-primary/40" : "bg-muted border-border"
                          }`}
                        >
                          {tier.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-display text-lg transition-colors ${isActive ? "text-primary-strong" : "text-foreground group-hover:text-primary-strong"}`}>
                            {tier.title}
                          </h3>
                          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mt-1">
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
                            <p className="text-sm text-muted-foreground leading-relaxed pl-14">
                              {tier.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Visual Diagram & Active Description Card */}
          <div className="lg:col-span-7 space-y-6">

          {/* SVG Diagram representing Landing Zone Tiers */}
          <div className="surface-card rounded-2xl p-6 relative aspect-[4/3] flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 500 360" className="w-full h-full stroke-border fill-none">

              {/* Outer AWS Organization Box */}
              <rect x="15" y="15" width="470" height="330" rx="16" strokeDasharray="4, 4" className="stroke-border" />
              <text x="35" y="42" className="fill-muted-foreground font-mono text-[9px] uppercase tracking-wider">AWS Multi-Account Organization</text>

              {/* Tier 1: Org Management Box */}
              <g
                role="button"
                tabIndex={0}
                aria-pressed={activeTierId === "org-mgmt"}
                aria-label="Organization Control Account"
                className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-primary focus-visible:[&>rect]:stroke-2"
                onClick={() => setActiveTierId("org-mgmt")}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("org-mgmt"); } }}
              >
                <rect
                  x="40"
                  y="65"
                  width="420"
                  height="50"
                  rx="8"
                  className={`transition-all duration-300 ${
                    activeTierId === "org-mgmt" ? "stroke-primary fill-primary/5 stroke-2" : "stroke-border fill-muted"
                  }`}
                />
                <text x="55" y="95" className={`font-semibold text-xs transition-colors ${activeTierId === "org-mgmt" ? "fill-primary" : "fill-foreground"}`}>
                  1. Organization Control Account
                </text>
              </g>

              {/* Tier 2: Audit Security Box */}
              <g
                role="button"
                tabIndex={0}
                aria-pressed={activeTierId === "security-logging"}
                aria-label="Audit and Security Account"
                className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-primary focus-visible:[&>rect]:stroke-2"
                onClick={() => setActiveTierId("security-logging")}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("security-logging"); } }}
              >
                <rect
                  x="40"
                  y="130"
                  width="200"
                  height="70"
                  rx="8"
                  className={`transition-all duration-300 ${
                    activeTierId === "security-logging" ? "stroke-primary fill-primary/5 stroke-2" : "stroke-border fill-muted"
                  }`}
                />
                <text x="55" y="160" className={`font-semibold text-xs transition-colors ${activeTierId === "security-logging" ? "fill-primary" : "fill-foreground"}`}>
                  2. Security & Logs
                </text>
                <text x="55" y="180" className="fill-muted-foreground text-[10px] font-mono">Centralized Log Store</text>
              </g>

              {/* Tier 3: Core Networking Box */}
              <g
                role="button"
                tabIndex={0}
                aria-pressed={activeTierId === "core-networking"}
                aria-label="Core Networking Account"
                className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-primary focus-visible:[&>rect]:stroke-2"
                onClick={() => setActiveTierId("core-networking")}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("core-networking"); } }}
              >
                <rect
                  x="260"
                  y="130"
                  width="200"
                  height="70"
                  rx="8"
                  className={`transition-all duration-300 ${
                    activeTierId === "core-networking" ? "stroke-primary fill-primary/5 stroke-2" : "stroke-border fill-muted"
                  }`}
                />
                <text x="275" y="160" className={`font-semibold text-xs transition-colors ${activeTierId === "core-networking" ? "fill-primary" : "fill-foreground"}`}>
                  3. Network Gateway
                </text>
                <text x="275" y="180" className="fill-muted-foreground text-[10px] font-mono">Transit Gateway Routing</text>
              </g>

              {/* Tier 4: Workloads Box */}
              <g
                role="button"
                tabIndex={0}
                aria-pressed={activeTierId === "workloads"}
                aria-label="App Workloads Account"
                className="cursor-pointer focus-visible:outline-none focus-visible:[&>rect]:stroke-accent focus-visible:[&>rect]:stroke-2"
                onClick={() => setActiveTierId("workloads")}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveTierId("workloads"); } }}
              >
                <rect
                  x="40"
                  y="220"
                  width="420"
                  height="100"
                  rx="8"
                  className={`transition-all duration-300 ${
                    activeTierId === "workloads" ? "stroke-accent fill-accent/5 stroke-2" : "stroke-border fill-muted"
                  }`}
                />
                <text x="55" y="250" className={`font-semibold text-xs transition-colors ${activeTierId === "workloads" ? "fill-accent-foreground" : "fill-foreground"}`}>
                  4. App Workloads Account (Sandbox & Prod VPCs)
                </text>

                {/* Visual subnets nodes inside workloads */}
                <rect x="55" y="270" width="165" height="35" rx="4" strokeDasharray="3, 3" className="stroke-border fill-card" />
                <text x="65" y="290" className="fill-muted-foreground text-[9px] font-mono">Private EKS Subnets</text>

                <rect x="235" y="270" width="210" height="35" rx="4" strokeDasharray="3, 3" className="stroke-border fill-card" />
                <text x="245" y="290" className="fill-muted-foreground text-[9px] font-mono">Isolated DB Subnets</text>
              </g>

              {/* Connecting Data Flow Lines */}
              <line x1="250" y1="115" x2="250" y2="130" strokeDasharray="3, 3" className="stroke-border" />
              <line x1="140" y1="200" x2="140" y2="220" strokeDasharray="3, 3" className="stroke-border" />
              <line x1="360" y1="200" x2="360" y2="220" strokeDasharray="3, 3" className="stroke-border" />
            </svg>
          </div>

          {/* Description Panel explaining the active layer details (desktop only) */}
          <div className="min-h-[120px] hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTierId}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="surface-card rounded-xl p-6 space-y-3 relative"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeTier.color }} aria-hidden="true" />
                  <h3 className="font-display text-lg text-foreground">{activeTier.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[62ch]">
                  {activeTier.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          </div>

        </div>
      </div>
    </section>
  );
}
