"use client";

import React from "react";
import { XCircle, CheckCircle2, Shield, PiggyBank, Settings } from "lucide-react";
import { SectionHeader } from "../common/section-header";
import { FadeIn, FadeUp } from "../animations/motion-wrappers";

export function WhyChooseUs() {
  const comparisonRows = [
    {
      dimension: "Deployment Model",
      legacy: "Console adjustments (ClickOps) leading to undocumented configurations.",
      modern: "100% Declarative Infrastructure as Code (IaC) verified via automated pipeline check gates."
    },
    {
      dimension: "Capacity & Costs",
      legacy: "Over-provisioned static compute instances wasting up to 40% of monthly cloud budget.",
      modern: "Dynamic scaling node groups rightsized continuously using Karpenter optimization limits."
    },
    {
      dimension: "Observability",
      legacy: "Reactive alerts configured manually on individual servers after outages occur.",
      modern: "Proactive telemetry alerting and centralized log aggregation dashboards deployed on day one."
    },
    {
      dimension: "Security Posture",
      legacy: "Permissive access policies, manual credential keys, and compliance audit gaps.",
      modern: "Audit-ready controls, encryption keys rotation, and strict PCI-DSS & HIPAA compliance gates."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-32 border-t border-zinc-900/60 relative">
      {/* Blueprint Coordinates */}
      <div className="absolute top-2 left-10 font-mono text-[8px] text-zinc-650 opacity-40 select-none">
        GRID.SEC.C // TRANSFORM.MATRIX_V2.1
      </div>
      
      {/* Structural layout lines */}
      <div className="absolute left-10 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />
      <div className="absolute right-10 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Side: Context Narrative (5 columns) */}
        <div className="lg:col-span-5 space-y-8 pl-0 lg:pl-10">
          <SectionHeader
            tag="Why Partner With Us"
            title="Engineered for Resiliency & Scale"
            subtitle="We replace manual operations with standard cloud automation, aligning your technology infrastructure with business scale and compliance targets."
            align="left"
            className="mb-0"
          />

          <FadeUp delay={0.2} className="space-y-6 pt-8 border-t border-zinc-900/60 font-sans">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded border border-zinc-850 bg-zinc-900/20 flex items-center justify-center shrink-0">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Senior Architect Led</h4>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[40ch]">
                  We assign AWS Professional Certified Architects directly to your workloads to guarantee high-integrity designs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded border border-zinc-850 bg-zinc-900/20 flex items-center justify-center shrink-0">
                <PiggyBank className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Spend Optimization</h4>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[40ch]">
                  Continuous rightsizing of compute configurations ensures you only pay for what your workloads consume.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded border border-zinc-850 bg-zinc-900/20 flex items-center justify-center shrink-0">
                <Settings className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Zero Vendor Lock-in</h4>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[40ch]">
                  Every environment network rule and cluster setup is written in dry-run verified Terraform owned by you.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right Side: Cloud Maturity Comparison Table (7 columns) */}
        <div className="lg:col-span-7">
          <FadeIn delay={0.3} className="w-full">
            <div className="border border-zinc-900 rounded bg-zinc-950/20 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-900 bg-zinc-900/10">
                <span className="text-[9px] font-mono text-primary font-bold uppercase tracking-widest block">
                  Transformation Matrix
                </span>
                <h3 className="text-sm font-bold text-foreground font-display mt-0.5">
                  Legacy Operations vs. Engineered Posture
                </h3>
              </div>

              <div className="divide-y divide-zinc-900 font-sans">
                {comparisonRows.map((row) => (
                  <div key={row.dimension} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                    
                    {/* Dimension Label (3 cols) */}
                    <div className="md:col-span-3">
                      <span className="text-[9px] font-mono text-zinc-550 font-bold uppercase tracking-widest block pt-0.5">
                        {row.dimension}
                      </span>
                    </div>

                    {/* Legacy Posture (4 cols) */}
                    <div className="md:col-span-4 flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 text-red-500/80 shrink-0 mt-0.5" />
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        {row.legacy}
                      </p>
                    </div>

                    {/* Engineered Posture (5 cols) */}
                    <div className="md:col-span-5 flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <p className="text-[11px] text-foreground leading-relaxed font-semibold">
                        {row.modern}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
