"use client";

import React from "react";
import { SectionHeader } from "../common/section-header";
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
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 border-t border-border relative">
      <SectionHeader
        tag="Engagement Models"
        title={<>Pricing & Collaboration <span className="text-primary">Models</span></>}
        subtitle="Transparent flat-fee audits and retainer plans tailored for startups, SaaS platforms, and scaling businesses."
        align="center"
        className="mb-16"
      />

      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {models.map((model) => (
          <StaggerItem
            key={model.name}
            className={`surface-card p-8 rounded-2xl flex flex-col justify-between min-h-[520px] h-full transition-all relative ${
              model.highlight
                ? "border-primary/40 shadow-2xl lg:scale-[1.02] z-10"
                : "border-border hover:border-primary/25"
            }`}
          >
            {/* Highlighted Banner Badge */}
            {model.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider shadow-md">
                Squad-As-A-Service
              </span>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground font-display">{model.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 min-h-[32px]">{model.desc}</p>
              </div>

              <div className="border-y border-border py-5">
                <span className="text-4xl font-bold text-foreground font-mono">{model.price}</span>
                <span className="text-sm text-muted-foreground block mt-1 font-semibold">{model.type}</span>
              </div>

              <ul className="space-y-3.5">
                {model.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm text-muted-foreground leading-normal">
                    <Check className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                className={`w-full inline-flex items-center justify-center h-11 px-6 rounded-md text-sm font-semibold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-primary ${
                  model.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border border-primary text-primary-strong hover:bg-primary/10"
                }`}
              >
                {model.btnText}
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
