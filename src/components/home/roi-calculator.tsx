"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, PiggyBank, ArrowUpRight } from "lucide-react";

const SPEND_MIN = 2000;
const SPEND_MAX = 150000;

export function RoiCalculator() {
  const [cloudSpend, setCloudSpend] = useState(12000);

  // Savings rate is a CONTINUOUS function of spend: larger estates have more
  // structural waste to reclaim, so the rate ramps smoothly from 30% → 38%
  // across the slider range (no abrupt step).
  const spendRatio = (cloudSpend - SPEND_MIN) / (SPEND_MAX - SPEND_MIN);
  const savingsPercent = 0.30 + 0.08 * Math.min(Math.max(spendRatio, 0), 1);
  const monthlySavings = cloudSpend * savingsPercent;
  const annualSavings = monthlySavings * 12;

  // Engagement model: a one-time audit for smaller estates, an ongoing monthly
  // retainer for larger ones. Cost is normalized to an ANNUAL figure so the
  // first-year economics are honest.
  const isRetainer = cloudSpend > 10000;
  const recommendedPlan = isRetainer
    ? {
        name: "DevOps Retainer Squad",
        feeLabel: "Monthly Retainer",
        feeDisplay: "$4,999 / month",
        annualCost: 4999 * 12,
      }
    : {
        name: "Cloud Waste Audit",
        feeLabel: "One-Time Engagement Fee",
        feeDisplay: "$1,499 one-time",
        annualCost: 1499,
      };

  const netFirstYearRoi = annualSavings - recommendedPlan.annualCost;
  const roiIsPositive = netFirstYearRoi > 0;

  // When the fee outpaces savings at low spend, never show a negative number —
  // surface an honest payback period instead.
  const paybackMonths =
    monthlySavings > 0 ? recommendedPlan.annualCost / monthlySavings : Infinity;
  const paybackDisplay = Number.isFinite(paybackMonths)
    ? paybackMonths < 1
      ? "under 1 month"
      : `~${Math.ceil(paybackMonths)} months`
    : "—";

  const fmt = (n: number) => `$${Math.round(n).toLocaleString()}`;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 border-t border-border relative">
      {/* Studio grid side rails — desktop only */}
      <div
        className="absolute left-10 md:left-20 top-0 bottom-0 w-px bg-border/60 pointer-events-none hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute right-10 md:right-20 top-0 bottom-0 w-px bg-border/60 pointer-events-none hidden lg:block"
        aria-hidden="true"
      />

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 relative z-10">
        <span className="text-xs font-mono font-bold text-primary-strong uppercase tracking-[0.2em] block">
          Cost Optimizations
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground font-display">
          Calculate Your Cloud ROI
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[65ch] mx-auto font-sans">
          Over-provisioned EKS clusters, idle RDS nodes, and un-optimized databases drain cash. Slide the bar to see what you could save with our senior architects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch relative z-10 pl-0 lg:pl-10">

        {/* Left Column: Interactive Slider Controls (7 columns) */}
        <div className="lg:col-span-7 p-6 md:p-8 rounded-md surface-card flex flex-col justify-between space-y-8">
          <div className="space-y-6 w-full">
            <div className="flex items-center justify-between font-sans">
              <span className="text-sm font-bold text-foreground flex items-center gap-2">
                <Calculator className="h-4 w-4 text-primary" aria-hidden="true" /> Current Monthly AWS / Cloud Spend
              </span>
              <span className="text-xl font-mono font-bold text-foreground">
                {fmt(cloudSpend)}
              </span>
            </div>

            {/* Premium Range Slider */}
            <div className="space-y-2 pt-2">
              <input
                type="range"
                min={SPEND_MIN}
                max={SPEND_MAX}
                step={1000}
                value={cloudSpend}
                onChange={(e) => setCloudSpend(Number(e.target.value))}
                className="w-full h-1.5 rounded-full bg-muted appearance-none cursor-pointer accent-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                aria-label="Current monthly cloud spend"
                aria-valuetext={`${fmt(cloudSpend)} per month`}
              />
              <p className="text-xs font-mono text-muted-foreground pt-1 font-semibold">
                At {fmt(cloudSpend)}/mo we project a{" "}
                <span className="text-primary-strong font-bold">
                  {(savingsPercent * 100).toFixed(1)}%
                </span>{" "}
                reduction.
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase pt-1 font-semibold">
                <span>$2,000 / mo</span>
                <span className="hidden sm:inline">$75,000 / mo</span>
                <span>$150,000 / mo</span>
              </div>
            </div>

            {/* Dynamic Savings Allocation Breakdown */}
            <div className="space-y-3 pt-6 border-t border-border">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block font-bold">
                Projected Savings Allocation
              </span>
              {/* Thin technical bar */}
              <div className="w-full h-1.5 bg-muted overflow-hidden flex rounded-full">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: "45%" }}
                  aria-hidden="true"
                />
                <div
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: "25%" }}
                  aria-hidden="true"
                />
                <div
                  className="h-full bg-accent-strong transition-all duration-300"
                  style={{ width: "30%" }}
                  aria-hidden="true"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <span className="text-muted-foreground truncate">Compute ({fmt(monthlySavings * 0.45)}/mo)</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  <span className="text-muted-foreground truncate">Storage ({fmt(monthlySavings * 0.25)}/mo)</span>
                </div>
                <div className="flex items-center gap-1.5 justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-strong shrink-0" aria-hidden="true" />
                  <span className="text-muted-foreground truncate">Network ({fmt(monthlySavings * 0.30)}/mo)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics display */}
          <div
            className="grid grid-cols-2 gap-4 border-t border-border pt-6"
            aria-live="polite"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block font-bold">
                Estimated Monthly Savings
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-foreground">
                {fmt(monthlySavings)}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block font-bold">
                Projected Annual Savings
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-foreground">
                {fmt(annualSavings)}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-md bg-muted flex items-start gap-3">
            <PiggyBank className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              We audit log sizes, rightsize EC2 types, configure autoscalers, and leverage AWS Spot configurations. Billed savings typically cover our retainer fees within 30 days.
            </p>
          </div>
        </div>

        {/* Right Column: ROI Recommendation & Action Panel (5 columns) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-md surface-card relative">

          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-primary-strong uppercase tracking-[0.15em] block mb-1">
                Recommended Engagement
              </span>
              <h3 className="text-xl font-bold text-foreground font-display">{recommendedPlan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 font-sans">Recommended for your monthly budget footprint.</p>
            </div>

            <div className="border-t border-b border-border py-5 space-y-4" aria-live="polite">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block font-bold">
                  {recommendedPlan.feeLabel}
                </span>
                <span className="text-base font-mono font-bold text-foreground">{recommendedPlan.feeDisplay}</span>
              </div>
              <div>
                {roiIsPositive ? (
                  <>
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block font-bold">
                      Projected Net 1st-Year ROI
                    </span>
                    <span className="text-xl font-mono font-bold text-success">
                      +{fmt(netFirstYearRoi)}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block font-bold">
                      Projected Payback Period
                    </span>
                    <span className="text-xl font-mono font-bold text-foreground">
                      {paybackDisplay}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1 font-sans">
                      Savings of {fmt(monthlySavings)}/mo offset the engagement, then compound from there.
                    </p>
                  </>
                )}
              </div>
            </div>

            <ul className="space-y-2.5 text-sm text-muted-foreground leading-normal font-sans">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <span>Rightsizing EC2 &amp; database clusters</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <span>Zero-downtime pipeline deployments</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                <span>100% ownership of modular IaC states</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              Discuss Cloud Assessment <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
