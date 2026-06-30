import React from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "../animations/motion-wrappers";

const metrics = [
  { value: "38%", label: "average cloud cost reduction" },
  { value: "10×", label: "faster, safer deployments" },
  { value: "99.99%", label: "uptime target, met" },
  { value: "100%", label: "version-controlled infrastructure" },
];

const foundations = ["AWS Well-Architected", "Kubernetes / EKS", "Terraform", "GitOps", "24×7 observability"];

export function Outcomes() {
  return (
    <section className="border-y border-border bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <FadeUp>
              <span className="eyebrow mb-5">Proof</span>
              <h2 className="display text-3xl sm:text-4xl mt-4">Outcomes, not slideware.</h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[36ch]">
                Every engagement is measured against the numbers that move your business and your on-call rotation.
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-8">
            <StaggerContainer className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12">
              {metrics.map((m) => (
                <StaggerItem key={m.label}>
                  <div className="display text-5xl sm:text-6xl text-foreground tabular-nums">{m.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground max-w-[22ch]">{m.label}</div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-border flex flex-wrap items-center gap-x-7 gap-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground/80">
            Built on
          </span>
          {foundations.map((f) => (
            <span key={f} className="text-sm font-medium text-foreground/70">{f}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
