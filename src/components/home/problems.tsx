import React from "react";
import Link from "next/link";
import { TrendingUp, AlertTriangle, Activity, EyeOff, ShieldAlert, Boxes, ArrowUpRight } from "lucide-react";
import { FadeUp } from "../animations/motion-wrappers";

const problems = [
  {
    Icon: TrendingUp,
    pain: "Our AWS bill climbs every month and nobody can explain why.",
    fix: "We audit every line item, rightsize resources, and set budget guardrails — clients typically cut cloud spend by ~38%.",
    service: "Cloud cost optimization",
    href: "/services/cloud-cost-optimization",
  },
  {
    Icon: AlertTriangle,
    pain: "Releases are manual, slow, and keep breaking in production.",
    fix: "We build version-controlled CI/CD with automated checks and one-click rollbacks, so shipping is boring and safe.",
    service: "DevOps & CI/CD",
    href: "/services/cicd-pipeline-automation",
  },
  {
    Icon: Activity,
    pain: "Traffic spikes take us down and on-call is burning out the team.",
    fix: "We design autoscaling Kubernetes (EKS) with health checks and alerting, engineered to a 99.99% uptime target.",
    service: "Kubernetes",
    href: "/services/kubernetes",
  },
  {
    Icon: EyeOff,
    pain: "When something breaks, we're flying completely blind.",
    fix: "We instrument everything — Prometheus and Grafana dashboards plus alerting wired up before anything ships.",
    service: "Monitoring & observability",
    href: "/services/monitoring-observability",
  },
  {
    Icon: ShieldAlert,
    pain: "A SOC 2 / HIPAA / PCI audit is coming and our infra isn't ready.",
    fix: "We codify encryption, access controls, and compliance guardrails as code so you walk into the audit prepared.",
    service: "Security & DevSecOps",
    href: "/services/security-devsecops",
  },
  {
    Icon: Boxes,
    pain: "Our setup is undocumented click-ops that only one person understands.",
    fix: "We rebuild it as version-controlled Infrastructure as Code that you fully own — zero vendor lock-in, no key-person risk.",
    service: "Infrastructure automation",
    href: "/services/infrastructure-automation",
  },
];

export function Problems() {
  return (
    <section className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow mb-5">Problems we solve</span>
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl mt-4">
            Sound familiar? We&rsquo;ve <em>fixed it before.</em>
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            Most teams reach us with one of these. We start by finding the real root cause — then we
            engineer it away for good, not patch it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {problems.map(({ Icon, pain, fix, service, href }) => (
            <FadeUp key={service} className="h-full">
              <div className="surface-card rounded-2xl p-6 flex flex-col h-full">
                <Icon className="h-6 w-6 text-destructive/70" aria-hidden="true" />
                <p className="font-display text-lg text-foreground mt-4 leading-snug">
                  &ldquo;{pain}&rdquo;
                </p>
                <div className="mt-5 pt-5 border-t border-border flex flex-col flex-1">
                  <span className="text-xs font-mono uppercase tracking-[0.1em] text-primary-strong">
                    How we fix it
                  </span>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{fix}</p>
                  <Link
                    href={href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-strong hover:gap-2.5 transition-all"
                  >
                    {service} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
