"use client";

import React from "react";
import { ShieldCheck, PiggyBank, Settings, XCircle, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../common/section-header";
import { FadeIn, FadeUp } from "../animations/motion-wrappers";

export function WhyChooseUs() {
  const comparisonRows = [
    {
      dimension: "Deployment Model",
      legacy: "Console adjustments (ClickOps) leading to undocumented, drift-prone configurations.",
      modern: "100% Declarative Infrastructure as Code (IaC) verified via automated release gates."
    },
    {
      dimension: "Capacity & Costs",
      legacy: "Over-provisioned static compute instances wasting up to 40% of monthly cloud budget.",
      modern: "Dynamic horizontal autoscaling (EKS Node Groups) rightsized using AWS Spot instances."
    },
    {
      dimension: "Observability Posture",
      legacy: "Reactive alerts configured manually on individual servers after outages occur.",
      modern: "Proactive telemetry dashboarding and centralized log alerting deployed on day one."
    },
    {
      dimension: "Security & Auditing",
      legacy: "Permissive static credentials, manual key management, and security posture gaps.",
      modern: "Audit-ready controls, KMS encryption, automated key rotation, and strict compliance alignment."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border/40 relative">
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[90px] pointer-events-none -z-10 animate-pulse" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Editorial context and consulting narrative (5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <SectionHeader
            tag="Why Partner With Us"
            title="Engineered for System Resiliency & Efficiency"
            subtitle="We replace manual operations with standard cloud automation, aligning your technology infrastructure with business scale and compliance targets."
            align="left"
            className="mb-0"
          />

          <FadeUp delay={0.2} className="space-y-4 pt-6 border-t border-zinc-800">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">Senior Architect Led</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We assign AWS Professional Certified Architects directly to your workloads to guarantee high-integrity designs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                <PiggyBank className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">Spend Optimization</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Continuous rightsizing of Kubernetes node capacity ensures you only pay for what your services actively consume.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">Zero Vendor Lock-in</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every account tier and networking rule is written in clean, modular Terraform configurations owned entirely by you.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right Side: Cloud Maturity Comparison Framework Table (7 columns) */}
        <div className="lg:col-span-7">
          <FadeIn delay={0.3} className="w-full">
            <div className="border border-zinc-850 rounded-2xl overflow-hidden bg-zinc-950/20 shadow-xl">
              <div className="p-6 border-b border-zinc-850 bg-zinc-900/10">
                <h3 className="text-base font-bold text-foreground font-display">
                  Transformation Matrix: Legacy vs. Engineered Posture
                </h3>
              </div>

              <div className="divide-y divide-zinc-900">
                {comparisonRows.map((row) => (
                  <div key={row.dimension} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                    {/* Dimension Label (3 cols) */}
                    <div className="md:col-span-3">
                      <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider">
                        {row.dimension}
                      </span>
                    </div>

                    {/* Legacy Posture (4 cols) */}
                    <div className="md:col-span-4 flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500/80 shrink-0 mt-0.5" />
                      <p className="text-[11px] text-muted-foreground leading-relaxed font-sans">
                        {row.legacy}
                      </p>
                    </div>

                    {/* Engineered Posture (5 cols) */}
                    <div className="md:col-span-5 flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <p className="text-[11px] text-foreground leading-relaxed font-sans font-medium">
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
