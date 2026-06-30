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
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 border-t border-border relative">
      {/* Blueprint Coordinates */}
      <div className="absolute top-2 left-6 lg:left-10 font-mono text-xs text-muted-foreground opacity-40 select-none" aria-hidden="true">
        GRID.SEC.C // TRANSFORM.MATRIX_V2.1
      </div>

      {/* Structural layout lines */}
      <div className="absolute left-6 md:left-20 top-0 bottom-0 w-[1px] bg-border pointer-events-none" aria-hidden="true" />
      <div className="absolute right-6 md:right-20 top-0 bottom-0 w-[1px] bg-border pointer-events-none" aria-hidden="true" />

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

          <FadeUp delay={0.2} className="space-y-6 pt-8 border-t border-border font-sans">
            <div className="flex gap-4">
              <div className="w-9 h-9 rounded border border-border bg-muted flex items-center justify-center shrink-0">
                <Shield className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Senior Architect Led</h4>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[40ch]">
                  We assign AWS Professional Certified Architects directly to your workloads to guarantee high-integrity designs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-9 h-9 rounded border border-border bg-muted flex items-center justify-center shrink-0">
                <PiggyBank className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Spend Optimization</h4>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[40ch]">
                  Continuous rightsizing of compute configurations ensures you only pay for what your workloads consume.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-9 h-9 rounded border border-border bg-muted flex items-center justify-center shrink-0">
                <Settings className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Zero Vendor Lock-in</h4>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[40ch]">
                  Every environment network rule and cluster setup is written in dry-run verified Terraform owned by you.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right Side: Cloud Maturity Comparison Table (7 columns) */}
        <div className="lg:col-span-7">
          <FadeIn delay={0.3} className="w-full">
            <div className="surface-card rounded overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-surface-subtle">
                <span className="text-xs font-mono text-primary-strong font-bold uppercase tracking-widest block">
                  Transformation Matrix
                </span>
                <h3 className="text-base font-bold text-foreground font-display mt-0.5">
                  Legacy Operations vs. Engineered Posture
                </h3>
              </div>

              <div className="divide-y divide-border font-sans">
                {comparisonRows.map((row) => (
                  <div key={row.dimension} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">

                    {/* Dimension Label (3 cols) */}
                    <div className="md:col-span-3">
                      <span className="text-xs font-mono text-muted-foreground font-bold uppercase tracking-widest block pt-0.5">
                        {row.dimension}
                      </span>
                    </div>

                    {/* Legacy Posture (4 cols) */}
                    <div className="md:col-span-4 flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="space-y-1">
                        <span className="md:hidden text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground block">
                          Legacy
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {row.legacy}
                        </p>
                      </div>
                    </div>

                    {/* Engineered Posture (5 cols) */}
                    <div className="md:col-span-5 flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="space-y-1">
                        <span className="md:hidden text-xs font-mono font-bold uppercase tracking-widest text-primary-strong block">
                          Engineered
                        </span>
                        <p className="text-sm text-foreground leading-relaxed font-semibold">
                          {row.modern}
                        </p>
                      </div>
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
