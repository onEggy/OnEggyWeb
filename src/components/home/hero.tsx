import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { OrbitMark } from "../common/orbit-mark";

const trustedBy = ["PineLabs", "EastMojo", "DigisPeax", "Anveshan"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Editorial copy */}
          <div className="lg:col-span-7 lg:pr-8">
            <span className="eyebrow mb-7">Cloud &amp; DevOps consulting</span>

            <h1 className="display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] mt-5">
              We engineer cloud platforms teams can <em>bet the company on.</em>
            </h1>

            <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-[46ch]">
              OnEggy designs, automates, and operates AWS and Kubernetes infrastructure — secure by
              default, cost-optimized, and built for zero-downtime releases.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors"
              >
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-1.5 h-12 px-3 text-sm font-semibold text-foreground hover:text-primary-strong transition-colors"
              >
                See client outcomes <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 pt-7 border-t border-border">
              <p className="text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground/80 mb-4">
                Trusted by engineering teams at
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {trustedBy.map((name) => (
                  <span key={name} className="text-base font-semibold tracking-tight text-foreground/45">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Reliability console — signature object */}
          <div className="lg:col-span-5">
            <ConsolePanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsolePanel() {
  return (
    <div className="relative surface-card rounded-2xl p-6 sm:p-7 max-w-md mx-auto lg:ml-auto">
      <OrbitMark size={120} className="absolute -top-6 -right-6 opacity-[0.06] pointer-events-none" />

      <div className="flex items-center justify-between relative">
        <span className="text-xs font-mono uppercase tracking-[0.1em] text-primary-strong">
          Reliability console
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="status-indicator" /> live
        </span>
      </div>

      <div className="mt-6 flex items-end gap-2">
        <span className="display text-5xl text-foreground">99.99%</span>
        <span className="text-sm text-muted-foreground pb-1.5">uptime</span>
      </div>

      <svg viewBox="0 0 280 44" className="w-full h-11 mt-3" preserveAspectRatio="none" aria-hidden="true">
        <polyline
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          points="0,32 35,27 70,33 105,16 140,21 175,11 210,18 245,7 280,12"
        />
      </svg>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-surface-subtle border border-border p-4">
          <div className="display text-2xl text-foreground">−38%</div>
          <div className="text-xs text-muted-foreground mt-1">cloud spend</div>
        </div>
        <div className="rounded-xl bg-surface-subtle border border-border p-4">
          <div className="display text-2xl text-foreground">10×</div>
          <div className="text-xs text-muted-foreground mt-1">deploy speed</div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
        <span className="status-indicator" />
        All systems operational
      </div>
    </div>
  );
}
