"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Search, ShieldCheck } from "lucide-react";

const auditSteps = [
  {
    num: "1",
    icon: <ShieldCheck className="h-5 w-5 text-cyan-400" />,
    title: "Read-Only STS Connect",
    desc: "Set up scoped read-only IAM access to your AWS or Kubernetes clusters in under 5 minutes. Zero write permissions required.",
  },
  {
    num: "2",
    icon: <Search className="h-5 w-5 text-teal-400" />,
    title: "Deep Leakage Scanning",
    desc: "We run checks to audit idle RDS clusters, orphan EBS volumes, over-provisioned EKS nodes, and loose IAM security groups.",
  },
  {
    num: "3",
    icon: <ClipboardCheck className="h-5 w-5 text-indigo-400" />,
    title: "Actionable Report Delivery",
    desc: "We deliver a comprehensive report showing exactly how to slash up to 40% of cloud waste and fix build deployment locks.",
  },
];

export function AssessmentCta() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative">
      {/* Visual background elements */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="glass-card rounded-2xl border border-cyan-500/20 p-8 md:p-12 shadow-2xl relative overflow-hidden bg-background/20 backdrop-blur-md">
        
        {/* Glow corner overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-50 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Copy and CTA block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest block">
                Free Assessment Offer
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Get a Free <br />
                <span className="gradient-text">Cloud Cost & Security Audit</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Stop guessing where your AWS spend is leaking. Our senior cloud architects perform a free read-only assessment of your environment to outline waste savings and pipeline audits.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-foreground text-background hover:bg-foreground/90 text-sm font-semibold transition-colors cursor-pointer shadow-lg"
              >
                Claim Free Cloud Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Three Process steps display card grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {auditSteps.map((step) => (
              <div
                key={step.num}
                className="glass-card p-5 rounded-xl border border-border/40 hover:border-cyan-500/25 transition-all duration-300 relative group flex flex-col justify-between min-h-[220px]"
              >
                <div className="space-y-4">
                  <div className="w-9 h-9 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{step.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>
                <span className="text-5xl font-mono font-bold text-muted-foreground/5 select-none text-right block self-end">
                  {step.num}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
