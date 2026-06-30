import React from "react";
import { Metadata } from "next";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { CtaBlock } from "@/components/common/cta-block";
import { testimonials } from "../../../public/data/testimonial.json";

export const metadata: Metadata = {
  title: "Case Studies & Outcomes | OnEggy Technologies",
  description: "Explore our real client success stories: AWS Cloud restructuring for Smile Foundation, EKS Kubernetes migrations for CloudStok, and fintech React Native setups for Beyond Imagination.",
  alternates: {
    canonical: "https://www.oneggy.com/case-studies",
  },
  openGraph: {
    type: "website",
    url: "https://www.oneggy.com/case-studies",
    title: "Case Studies & Outcomes | OnEggy Technologies",
    description: "Explore our real client success stories: AWS Cloud restructuring for Smile Foundation, EKS Kubernetes migrations for CloudStok, and fintech React Native setups for Beyond Imagination.",
    siteName: "OnEggy Technologies",
  },
};

const cases = [
  {
    title: "AWS Cloud Operations for Smile Foundation",
    sector: "Education / Non-Profit",
    challenge: "Smile Foundation struggled with legacy AWS accounts, unmonitored compute resources, and timeouts during donation campaigns, resulting in lost sponsorships.",
    solution: "We restructured their infrastructure under a secure AWS Landing Zone. We rightsized over-provisioned EC2 instances, moved static assets to S3 with CloudFront caching, and configured unified CloudWatch alarms.",
    techs: ["AWS Organizations", "Control Tower", "CloudFront CDN", "S3", "CloudWatch"],
    metrics: [
      { num: "-34%", label: "AWS Cost reduction", status: "Optimized" },
      { num: "+50%", label: "Web Response speeds", status: "Improved" },
      { num: "Zero", label: "Incident outages", status: "Compliant" },
    ],
  },
  {
    title: "Kubernetes Migration for CloudStok Technologies",
    sector: "SaaS / Platforms",
    challenge: "CloudStok's monolithic SaaS app ran on un-orchestrated instances. Deployments were manual and error-prone, and traffic peaks caused database lockups.",
    solution: "We containerized the workloads using Docker and migrated the platform to AWS EKS. We wrote modular Terraform scripts for IaC, and configured ArgoCD pipelines to enable zero-downtime canary updates.",
    techs: ["AWS EKS", "Terraform IaC", "ArgoCD Pipelines", "Docker", "Prometheus"],
    metrics: [
      { num: "10x", label: "Build Release speedups", status: "Automated" },
      { num: "10k+", label: "Concurrent pods handled", status: "Scaled" },
      { num: "99.99%", label: "EKS Cluster Uptime SLA", status: "Compliant" },
    ],
  },
  {
    title: "Mobile Architecture for Beyond Imagination",
    sector: "Fintech / Blockchain",
    challenge: "Building a fintech blockchain mobile application requiring low-latency database synchronization, secure encryption postures, and rigid compliance auditing.",
    solution: "We engineered a cross-platform React Native app with offline-first local SQL syncing, designed secure microservice APIs on FastAPI, and integrated AWS Secrets Manager for key rotation.",
    techs: ["React Native", "FastAPI APIs", "PostgreSQL Clusters", "AWS Secrets Manager", "GitHub Actions"],
    metrics: [
      { num: "<2.5s", label: "Transaction sync latency", status: "Optimized" },
      { num: "100%", label: "PCI-DSS compliance score", status: "Audit Pass" },
      { num: "4.8★", label: "App Store ratings", status: "Validated" },
    ],
  },
];

export default function CaseStudiesPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "OnEggy Technologies Case Studies",
    "description": "Real-life cloud restructuring, EKS containerization, and React Native fintech case studies.",
    "url": "https://www.oneggy.com/case-studies",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": cases.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "CreativeWork",
          "name": item.title,
          "description": item.solution,
          "genre": item.sector
        }
      }))
    }
  };

  const reviewCount = testimonials.length;
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OnEggy Technologies",
    "url": "https://www.oneggy.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "reviewCount": reviewCount,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.oneggy.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Case Studies",
        "item": "https://www.oneggy.com/case-studies"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 sm:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-6">Proven Outcomes</span>
            <h1 className="display text-5xl sm:text-6xl lg:text-[4rem] mt-5 max-w-[16ch]">
              Client work, measured in <em>results.</em>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[44ch]">
              How we partner with engineering leaders to drive deployment speed, slash monthly
              cloud spend, and implement compliant architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
          <StaggerContainer className="space-y-8 sm:space-y-10">
            {cases.map((item, index) => {
              const featured = index === 0;
              const lead = item.metrics[0];
              const isLeadRating = lead.num.includes("★");
              return (
                <StaggerItem
                  key={index}
                  className={`surface-card rounded-2xl overflow-hidden ${
                    featured ? "border-t-2 border-t-primary" : ""
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Lead metric + identity */}
                    <div className="lg:col-span-4 p-8 sm:p-10 lg:border-r border-border flex flex-col">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-sm uppercase tracking-[0.12em] text-primary-strong">
                          {item.sector}
                        </span>
                        <span className="font-mono text-sm tabular-nums text-muted-foreground/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="mt-8">
                        <div
                          className="display text-6xl sm:text-7xl tabular-nums text-foreground"
                          aria-label={isLeadRating ? "4.8 out of 5" : undefined}
                        >
                          {lead.num}
                        </div>
                        <div className="mt-3 text-sm text-muted-foreground max-w-[24ch]">
                          {lead.label}
                        </div>
                      </div>

                      <h2 className="display text-2xl sm:text-3xl mt-auto pt-10 leading-tight">
                        {item.title}
                      </h2>
                    </div>

                    {/* Narrative + supporting metrics */}
                    <div className="lg:col-span-8 p-8 sm:p-10">
                      <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-6 gap-y-3">
                        <dt className="font-mono text-sm uppercase tracking-[0.1em] text-destructive pt-0.5">
                          Challenge
                        </dt>
                        <dd className="text-base text-foreground leading-relaxed max-w-[60ch]">
                          {item.challenge}
                        </dd>
                        <dt className="font-mono text-sm uppercase tracking-[0.1em] text-primary-strong pt-0.5 sm:mt-4">
                          Result
                        </dt>
                        <dd className="text-base text-muted-foreground leading-relaxed max-w-[60ch] sm:mt-4">
                          {item.solution}
                        </dd>
                      </dl>

                      {/* Supporting metrics */}
                      <div className="mt-8 pt-7 border-t border-border grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6">
                        {item.metrics.map((m, i) => {
                          const isRating = m.num.includes("★");
                          return (
                            <div key={i}>
                              <div
                                className="display text-3xl sm:text-4xl tabular-nums text-foreground"
                                aria-label={isRating ? "4.8 out of 5" : undefined}
                              >
                                {m.num}
                              </div>
                              <div className="mt-1.5 text-sm text-muted-foreground leading-snug">
                                {m.label}
                              </div>
                              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-success">
                                {m.status}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Stack */}
                      <div className="mt-8 pt-7 border-t border-border flex flex-wrap items-center gap-x-6 gap-y-3">
                        <span className="text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground/80">
                          Built with
                        </span>
                        {item.techs.map((tech) => (
                          <span key={tech} className="text-sm font-medium text-foreground/70">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <div className="py-16 sm:py-20 border-t border-border">
        <FadeUp>
          <CtaBlock
            title="Interested in aligning your infrastructure metrics?"
            description="Schedule a free technology consulting call with our team to discuss your operational, scaling, or compliance requirements."
            btnText="Discuss Cloud Assessment"
            btnHref="/contact"
          />
        </FadeUp>
      </div>
    </>
  );
}
