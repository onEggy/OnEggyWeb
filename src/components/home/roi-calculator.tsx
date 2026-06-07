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
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative">
      {/* Background Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-teal-500/5 blur-[105px] pointer-events-none -z-10 animate-pulse" />

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest block">
          Cost Optimizations
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
          Calculate Your <span className="gradient-text">Cloud ROI</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Over-provisioned EKS clusters, idle RDS nodes, and un-optimized databases drain cash. Slide the bar to see what you could save with our senior architects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Column: Interactive Slider Controls (7 columns) */}
        <div className="lg:col-span-7 glass-card p-6 md:p-8 rounded-2xl border border-border/40 flex flex-col justify-between space-y-8 bg-background/25">
          <div className="space-y-6 w-full">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Calculator className="h-4.5 w-4.5 text-cyan-400" /> Current Monthly AWS / Cloud Spend
              </span>
              <span className="text-2xl font-mono font-bold text-cyan-500">
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
                className="w-full h-2 rounded-lg bg-border/60 appearance-none cursor-pointer accent-cyan-500 focus:outline-none"
                aria-label="Cloud Spend Slider"
              />
              <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase pt-1 font-semibold">
                <span>$2,000 / mo</span>
                <span>$75,000 / mo</span>
                <span>$150,000 / mo</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics display */}
          <div className="grid grid-cols-2 gap-4 border-t border-border/30 pt-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block font-semibold">
                Estimated Monthly Savings
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-foreground">
                ${Math.floor(monthlySavings).toLocaleString()}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block font-semibold">
                Projected Annual Savings
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-foreground">
                ${Math.floor(annualSavings).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-cyan-500/10 bg-cyan-500/[0.01] flex items-start gap-3">
            <PiggyBank className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              We audit log sizes, rightsize EC2 sizes, configure horizontal autoscalers, and leverage AWS Spot instances. Billed savings typically cover our retainer services within 30 days.
            </p>
          </div>
        </div>

        {/* Right Column: ROI Recommendation & Action Panel (5 columns) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/[0.02] shadow-2xl relative">
          
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-cyan-500 uppercase tracking-widest block mb-1">
                Recommended Engagement
              </span>
              <h3 className="text-2xl font-bold text-foreground">{recommendedPlan.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">Recommended for your budget footprint.</p>
            </div>

            <div className="border-t border-b border-border/40 py-5 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block font-semibold">
                  Setup Fee
                </span>
                <span className="text-lg font-mono font-bold text-foreground">{recommendedPlan.fee}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block font-semibold">
                  Projected Net 1st-Year ROI
                </span>
                <span className={`text-2xl font-mono font-bold ${recommendedPlan.roi > 0 ? "text-green-400" : "text-amber-500"}`}>
                  {recommendedPlan.roi > 0 
                    ? `+$${Math.floor(recommendedPlan.roi).toLocaleString()}` 
                    : `$${Math.floor(recommendedPlan.roi).toLocaleString()}`}
                </span>
              </div>
            </div>

            <ul className="space-y-2.5 text-xs text-muted-foreground leading-normal">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500" />
                <span>Rightsizing EC2 & DB memory clusters</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500" />
                <span>Zero-downtime pipeline deployments</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-500" />
                <span>100% money-back savings guarantee</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 sm:pt-0">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 text-sm font-semibold transition-all shadow-lg cursor-pointer"
            >
              Discuss Cloud Assessment <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
