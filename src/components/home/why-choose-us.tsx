"use client";

import React from "react";
import { ShieldCheck, PiggyBank, Terminal, Zap, CheckCircle } from "lucide-react";
import { SectionHeader } from "../common/section-header";
import { FadeIn, FadeUp } from "../animations/motion-wrappers";

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-cyan-400" />,
    title: "Senior Architect Led",
    desc: "We assign dedicated, highly experienced infrastructure specialists to manage your systems. No junior developer hand-offs.",
  },
  {
    icon: <PiggyBank className="h-6 w-6 text-teal-400" />,
    title: "Cost-Optimization Focus",
    desc: "We perform thorough waste audits on your EC2/EKS clusters, database queries, and data transfers to slash monthly bills.",
  },
  {
    icon: <Terminal className="h-6 w-6 text-indigo-400" />,
    title: "Standardized Clean IaC",
    desc: "Every cluster, policy, and network setup we design is built entirely via declarative Terraform & Helm. Zero vendor lock-in.",
  },
  {
    icon: <Zap className="h-6 w-6 text-cyan-400" />,
    title: "Continuous DevOps Velocity",
    desc: "We structure fully automated CI/CD pipelines to build, test, scan, and deploy changes inside isolated pods in under 5 minutes.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative">
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-teal-500/5 blur-[90px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copy and quick bullet metrics */}
        <div className="lg:col-span-5 space-y-6">
          <SectionHeader
            tag="Why Partner With Us"
            title={<>Engineered for <span className="gradient-text">Absolute Reliability</span> & Scale</>}
            subtitle="We partner with startup founders and enterprise CTOs to replace manual deployment friction with declarative, drift-free platform automation."
            align="left"
            className="mb-0"
          />

          <FadeUp delay={0.2} className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
              <span className="text-sm text-foreground font-semibold">AWS Certified Solutions Architects (Professional Level)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
              <span className="text-sm text-foreground font-semibold">Zero-Downtime Live Workload Migrations & Database Syncing</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
              <span className="text-sm text-foreground font-semibold">SOC2 Type II, HIPAA & PCI-DSS Compliance Hardening</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
              <span className="text-sm text-foreground font-semibold">Fractional CTO Strategic Architecture Advisory</span>
            </div>
          </FadeUp>
        </div>

        {/* Right Side: 2x2 Feature Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feat, index) => (
            <FadeIn
              key={feat.title}
              delay={index * 0.1}
              className="glass-card p-6 rounded-xl border border-border/40 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between min-h-[210px] h-full group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
