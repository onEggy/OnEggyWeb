"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, PiggyBank, ArrowUpRight } from "lucide-react";

export function RoiCalculator() {
  const [cloudSpend, setCloudSpend] = useState(12000);

  // Business calculations based on engagement model mappings
  const savingsPercent = cloudSpend <= 10000 ? 0.30 : 0.38;
  const monthlySavings = cloudSpend * savingsPercent;
  const annualSavings = monthlySavings * 12;

  // Determine matching plan
  const recommendedPlan = cloudSpend <= 10000 
    ? { name: "Cloud Waste Audit", fee: "$1,499 one-time", roi: annualSavings - 1499 }
    : { name: "DevOps Retainer Squad", fee: "$4,999 / month", roi: annualSavings - 4999 * 12 };

  return (
    <section className="max-w-7xl mx-auto px-6 py-32 border-t border-zinc-900/60 relative">
      {/* Structural layout lines */}
      <div className="absolute left-10 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />
      <div className="absolute right-10 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 relative z-10">
        <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.2em] block">
          Cost Optimizations
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground font-display">
          Calculate Your Cloud ROI
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[65ch] mx-auto font-sans">
          Over-provisioned EKS clusters, idle RDS nodes, and un-optimized databases drain cash. Slide the bar to see what you could save with our senior architects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch relative z-10 pl-0 lg:pl-10">
        
        {/* Left Column: Interactive Slider Controls (7 columns) */}
        <div className="lg:col-span-7 p-6 md:p-8 rounded border border-zinc-900 flex flex-col justify-between space-y-8 bg-zinc-950/20">
          <div className="space-y-6 w-full">
            <div className="flex items-center justify-between font-sans">
              <span className="text-xs font-bold text-foreground flex items-center gap-2">
                <Calculator className="h-4 w-4 text-primary" /> Current Monthly AWS / Cloud Spend
              </span>
              <span className="text-xl font-mono font-bold text-foreground">
                ${cloudSpend.toLocaleString()}
              </span>
            </div>

            {/* Premium Range Slider */}
            <div className="space-y-2 pt-2">
              <input
                type="range"
                min="2000"
                max="150000"
                step="1000"
                value={cloudSpend}
                onChange={(e) => setCloudSpend(Number(e.target.value))}
                className="w-full h-1 rounded bg-zinc-800 appearance-none cursor-pointer accent-primary focus:outline-none"
                aria-label="Cloud Spend Slider"
              />
              <div className="flex items-center justify-between text-[9px] font-mono text-zinc-550 uppercase pt-1 font-semibold">
                <span>$2,000 / mo</span>
                <span>$75,000 / mo</span>
                <span>$150,000 / mo</span>
              </div>
            </div>

            {/* Dynamic Savings Allocation Breakdown */}
            <div className="space-y-3 pt-6 border-t border-zinc-900/60">
              <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-550 block font-bold">
                Projected Savings Allocation
              </span>
              {/* Thin technical bar */}
              <div className="w-full h-1.5 bg-zinc-900 overflow-hidden flex rounded-full">
                <div 
                  className="h-full bg-primary transition-all duration-300" 
                  style={{ width: "45%" }} 
                  title="Compute Rightsizing: 45%"
                />
                <div 
                  className="h-full bg-amber-600 transition-all duration-300" 
                  style={{ width: "25%" }} 
                  title="Orphan Volume Cleanup: 25%"
                />
                <div 
                  className="h-full bg-amber-800 transition-all duration-300" 
                  style={{ width: "30%" }} 
                  title="CloudFront & Egress: 30%"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-[9px] sm:text-[10px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-zinc-400 truncate">Compute (${Math.floor(monthlySavings * 0.45).toLocaleString()}/mo)</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span className="text-zinc-400 truncate">Storage (${Math.floor(monthlySavings * 0.25).toLocaleString()}/mo)</span>
                </div>
                <div className="flex items-center gap-1.5 justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-800 shrink-0" />
                  <span className="text-zinc-400 truncate">Network (${Math.floor(monthlySavings * 0.30).toLocaleString()}/mo)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics display */}
          <div className="grid grid-cols-2 gap-4 border-t border-zinc-900/60 pt-6">
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-550 block font-bold">
                Estimated Monthly Savings
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-foreground">
                ${Math.floor(monthlySavings).toLocaleString()}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-550 block font-bold">
                Projected Annual Savings
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-foreground">
                ${Math.floor(annualSavings).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="p-4 rounded border border-zinc-900 bg-zinc-900/10 flex items-start gap-3">
            <PiggyBank className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed font-sans">
              We audit log sizes, rightsize EC2 types, configure autoscalers, and leverage AWS Spot configurations. Billed savings typically cover our retainer fees within 30 days.
            </p>
          </div>
        </div>

        {/* Right Column: ROI Recommendation & Action Panel (5 columns) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded border border-zinc-900 bg-zinc-950/20 shadow-2xl relative">
          
          <div className="space-y-6">
            <div>
              <span className="text-[9px] font-mono font-bold text-primary uppercase tracking-[0.15em] block mb-1">
                Recommended Engagement
              </span>
              <h3 className="text-xl font-bold text-foreground font-display">{recommendedPlan.name}</h3>
              <p className="text-xs text-muted-foreground mt-1 font-sans">Recommended for your monthly budget footprint.</p>
            </div>

            <div className="border-t border-b border-zinc-900 py-5 space-y-4">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-550 block font-bold">
                  Setup Fee
                </span>
                <span className="text-base font-mono font-bold text-foreground">{recommendedPlan.fee}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-550 block font-bold">
                  Projected Net 1st-Year ROI
                </span>
                <span className={`text-xl font-mono font-bold text-foreground`}>
                  {recommendedPlan.roi > 0 
                    ? `+$${Math.floor(recommendedPlan.roi).toLocaleString()}` 
                    : `$${Math.floor(recommendedPlan.roi).toLocaleString()}`}
                </span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-muted-foreground leading-normal font-sans">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span>Rightsizing EC2 & database clusters</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span>Zero-downtime pipeline deployments</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span>100% ownership of modular IaC states</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 sm:pt-0">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 h-11 px-6 rounded bg-primary text-primary-foreground hover:bg-primary/95 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Discuss Cloud Assessment <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
