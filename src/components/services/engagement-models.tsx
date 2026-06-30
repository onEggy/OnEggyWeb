"use client";

import React from "react";
import { Check } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";
import Link from "next/link";

const models = [
  {
    name: "Cloud Waste Audit",
    price: "$1,499",
    type: "Flat-Fee / One-Time",
    desc: "A rapid, thorough audit of your AWS infrastructure to spot cost leaks, security gaps, and performance blocks.",
    features: [
      "VPC Flow & S3 access audits",
      "Rightsizing assessment reports",
      "AWS Organization IAM reviews",
      "Delivered in 7 business days",
      "Full cost-saving code patches",
    ],
    highlight: false,
    btnText: "Book Audit Now",
  },
  {
    name: "DevOps Retainer Squad",
    price: "$4,999",
    type: "/ Month Retainer",
    desc: "Ongoing support. Platform Engineering, Kubernetes updates, 24/7 emergency incident response, and billing audits.",
    features: [
      "Dedicated senior cloud architect",
      "24/7 telemetry alert monitoring",
      "EKS cluster upgrades & patches",
      "Continuous AWS cost tracking",
      "Standard Slack & Jira channels",
    ],
    highlight: true,
    btnText: "Retain Dedicated Squad",
  },
  {
    name: "Infrastructure Sprint",
    price: "$9,999",
    type: "Flat-Fee / Project",
    desc: "A complete target IaC project build. We build, migrate, and configure EKS namespaces, subnets, and pipelines.",
    features: [
      "VPC & Subnets Terraform setup",
      "EKS / AKS cluster configurations",
      "CI/CD pipelines with ArgoCD",
      "Zero-downtime database shift",
      "Delivered in 4-6 weeks",
    ],
    highlight: false,
    btnText: "Kickoff Infrastructure Sprint",
  },
];

export function EngagementModels() {
  return (
    <section className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
          <div className="lg:col-span-5">
            <span className="eyebrow mb-5">Engagement models</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">
              Pricing built for <em>scale.</em>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-base text-muted-foreground leading-relaxed max-w-[52ch]">
              Transparent flat-fee audits and retainer plans tailored for startups, SaaS platforms,
              and scaling businesses.
            </p>
          </div>
        </div>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {models.map((model) => (
            <StaggerItem
              key={model.name}
              className={`surface-card rounded-2xl flex flex-col h-full relative overflow-hidden ${
                model.highlight ? "border-primary/40 lg:-mt-3" : ""
              }`}
            >
              {/* Featured tier — subtle teal top accent */}
              {model.highlight && (
                <span className="absolute inset-x-0 top-0 h-0.5 bg-primary" aria-hidden="true" />
              )}

              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl text-foreground">{model.name}</h3>
                  {model.highlight && (
                    <span className="text-[0.7rem] font-mono uppercase tracking-[0.1em] text-primary-strong shrink-0">
                      Squad-as-a-Service
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed min-h-[3rem]">
                  {model.desc}
                </p>

                <div className="mt-6 pt-6 border-t border-border flex items-baseline gap-2">
                  <span className="display text-4xl text-foreground tabular-nums">{model.price}</span>
                  <span className="text-sm text-muted-foreground">{model.type}</span>
                </div>

                <ul className="mt-6 space-y-3.5 flex-1">
                  {model.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center h-11 px-6 rounded-md text-sm font-semibold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary ${
                      model.highlight
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "border border-primary text-primary-strong hover:bg-primary/10"
                    }`}
                  >
                    {model.btnText}
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
