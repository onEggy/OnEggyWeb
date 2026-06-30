"use client";

import React, { useState } from "react";
import { Shield, Network, LayoutGrid, HardDrive, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tiers = [
  {
    id: "org-mgmt",
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "Organization control account",
    sub: "AWS Control Tower · Organizations",
    desc: "Handles root-level account orchestration, billing consolidation, and service control policies that stop sub-accounts from bypassing corporate guardrails.",
  },
  {
    id: "security-logging",
    icon: <Shield className="h-5 w-5" />,
    title: "Audit & security account",
    sub: "Centralized S3 logs · GuardDuty",
    desc: "Consolidates CloudTrail, VPC flow logs, and GuardDuty alerts from every child account into a locked, read-only bucket — zero write access for developers.",
  },
  {
    id: "core-networking",
    icon: <Network className="h-5 w-5" />,
    title: "Core networking account",
    sub: "Transit Gateway · DNS core",
    desc: "Centralizes networking. Transit Gateways manage encrypted routing between production, sandbox, and on-prem VPN endpoints.",
  },
  {
    id: "workloads",
    icon: <HardDrive className="h-5 w-5" />,
    title: "App workloads account",
    sub: "EKS · secure DB tiers",
    desc: "The isolated tier where code runs. EKS pods sit in private subnets, reachable only via load balancers from the networking zone, talking to walled-off replica databases.",
  },
];

export function ArchitectureVisuals() {
  const [activeId, setActiveId] = useState(tiers[0].id);

  return (
    <section className="border-t border-border bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Intro + legend */}
          <div className="lg:col-span-5">
            <span className="eyebrow mb-5">Security first</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">
              Enterprise AWS <em>landing zone.</em>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[42ch]">
              We build multi-account AWS architectures to the Well-Architected Framework — preventing
              configuration drift and lateral attacks by design.
            </p>
            <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-[40ch]">
              Select any account to see what it does and why it&rsquo;s isolated.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" /> Governance & network
              </span>
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" /> Workloads & data
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
                      aria-controls={`zone-${tier.id}`}
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
                          id={`zone-${tier.id}`}
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
