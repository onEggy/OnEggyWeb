import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "../animations/motion-wrappers";

const capabilities = [
  { slug: "aws-cloud-managed-services", title: "AWS cloud architecture", blurb: "Multi-account landing zones, Well-Architected reviews, and managed operations." },
  { slug: "devops-consulting", title: "DevOps & CI/CD", blurb: "Version-controlled pipelines, GitOps delivery, and infrastructure as code." },
  { slug: "kubernetes", title: "Kubernetes orchestration", blurb: "Production EKS clusters with autoscaling, ingress, and zero-downtime rollouts." },
  { slug: "cloud-cost-optimization", title: "Cloud cost optimization", blurb: "Rightsizing, waste audits, and commitment planning that cut spend ~38%." },
  { slug: "platform-engineering", title: "Platform engineering", blurb: "Internal developer platforms and golden paths that let teams ship safely." },
  { slug: "security-devsecops", title: "Security & DevSecOps", blurb: "Guardrails, compliance automation, and continuous posture management." },
];

export function ServicesShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <FadeUp>
            <span className="eyebrow mb-5">What we do</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">
              A senior cloud team, on demand.
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[38ch]">
              Six core practices that take infrastructure from fragile to dependable — and keep it that way.
            </p>
            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-strong hover:gap-2.5 transition-all"
            >
              View all 25 services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </FadeUp>
        </div>

        <div className="lg:col-span-8">
          <ul className="border-t border-border">
            {capabilities.map((c, i) => (
              <li key={c.slug}>
                <Link
                  href={`/services/${c.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 sm:gap-x-8 py-6 border-b border-border transition-colors hover:bg-surface-subtle -mx-4 px-4 rounded-lg"
                >
                  <span className="font-mono text-sm text-primary-strong/70 tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-xl sm:text-2xl text-foreground group-hover:text-primary-strong transition-colors">
                      {c.title}
                    </span>
                    <span className="block mt-1.5 text-sm text-muted-foreground leading-relaxed max-w-[52ch]">
                      {c.blurb}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/50 group-hover:text-primary-strong group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all self-center shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
