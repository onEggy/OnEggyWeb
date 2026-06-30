import React from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "../animations/motion-wrappers";

const steps = [
  {
    num: "01",
    badge: "Assessment",
    title: "Discovery & Cost Auditing",
    desc: "We analyze your AWS billing statements, resource usage limits, and release lanes to map out architectural bottlenecks and compliance exposures.",
    duration: "3-5 Days",
    deliverables: ["AWS Cost Explorer audits", "IAM privilege maps", "EKS pod sizing analyses"],
  },
  {
    num: "02",
    badge: "Strategy",
    title: "Landing Zone Blueprints",
    desc: "We design a multi-account cloud layout detailing isolated networking routes, service-control policies, and container registry security gates.",
    duration: "5-7 Days",
    deliverables: ["AWS Control Tower planning", "Transit Gateway routing layouts", "Kubernetes RBAC specifications"],
  },
  {
    num: "03",
    badge: "Automation",
    title: "Declarative Infrastructure (IaC)",
    desc: "Our senior engineers write dry-run verified Terraform module frameworks and Helm charts, creating replicable staging environments.",
    duration: "2-3 Weeks",
    deliverables: ["Dry-run verified Terraform modules", "Helm v3 chart templates", "Isolated VPC configurations"],
  },
  {
    num: "04",
    badge: "Pipelines",
    title: "GitOps Continuous Delivery",
    desc: "We configure automated deployment pipelines to test, build, scan, and deploy microservices with zero deployment downtime.",
    duration: "1-2 Weeks",
    deliverables: ["GitHub Actions configurations", "ArgoCD synchronization workflows", "Trivy SAST security audits"],
  },
  {
    num: "05",
    badge: "Operations",
    title: "SRE Telemetry & Transition",
    desc: "We migrate production workloads, deploy active log alerting parameters, and hand over architectural blueprints with complete operational logs.",
    duration: "Ongoing Advisory",
    deliverables: ["Prometheus alerts configurations", "Grafana infrastructure boards", "PagerDuty incident triggers"],
  },
];

export function ProcessTimeline() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        <div className="lg:col-span-4">
          <FadeUp>
            <span className="eyebrow mb-5">Engineering model</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">
              A structured advisory <em>cycle.</em>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[38ch]">
              A rigorous, stage-by-stage roadmap to audit workloads, eliminate cloud waste, and accelerate your deploy loops.
            </p>
          </FadeUp>
        </div>

        <div className="lg:col-span-8">
          <StaggerContainer className="border-t border-border">
            {steps.map((item) => (
              <StaggerItem key={item.num}>
                <div className="grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-8 py-8 sm:py-10 border-b border-border">
                  <span className="font-mono text-sm text-primary-strong/70 tabular-nums pt-1.5">
                    {item.num}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="display text-xl sm:text-2xl text-foreground">{item.title}</h3>
                      <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground/80">
                        {item.badge} · {item.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-[60ch]">
                      {item.desc}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5">
                      {item.deliverables.map((deliv) => (
                        <li key={deliv} className="text-sm text-foreground/70">
                          {deliv}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
