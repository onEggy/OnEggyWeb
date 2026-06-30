import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Layers, Cloud, Smartphone, CheckCircle2 } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";
import { testimonials } from "../../../public/data/testimonial.json";

function getTechLogo(tech: string): string | null {
  const t = tech.toLowerCase();
  if (t.includes("aws") || t.includes("control tower") || t.includes("s3") || t.includes("cloudfront") || t.includes("cloudwatch")) return "/service/aws.svg";
  if (t.includes("eks") || t.includes("kubernetes") || t.includes("k8s")) return "/kubernetes.png";
  if (t.includes("react")) return "/service/react.svg";
  if (t.includes("node")) return "/service/node.svg";
  if (t.includes("python") || t.includes("django")) return "/service/python.svg";
  if (t.includes("mongodb")) return "/service/mongodb.svg";
  if (t.includes("mysql") || t.includes("sql") || t.includes("postgres")) return "/service/mysql.svg";
  if (t.includes("firebase")) return "/service/firebase.svg";
  if (t.includes("vue")) return "/service/vue.svg";
  if (t.includes("angular")) return "/service/angular.svg";
  if (t.includes("html")) return "/service/html.svg";
  if (t.includes("css")) return "/service/css.svg";
  return null;
}

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
    icon: <Cloud className="h-5 w-5 text-primary" />,
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
    icon: <Layers className="h-5 w-5 text-primary" />,
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
    icon: <Smartphone className="h-5 w-5 text-primary" />,
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
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 space-y-24">

        <SectionHeader
          as="h1"
          tag="Proven Outcomes"
          title={<>Client Success & <span className="text-primary">Modernization Case Studies</span></>}
          subtitle="Discover how we partner with engineering leaders to drive deployment speed, slash monthly cloud spend, and implement compliant architectures."
          align="left"
          className="max-w-3xl font-display"
        />

        <StaggerContainer className="space-y-16">
          {cases.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <StaggerItem
                key={index}
                className="surface-card border border-border p-6 sm:p-8 rounded transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch group hover:border-primary/40"
              >
                {/* Text block */}
                <div className={`md:col-span-7 flex flex-col justify-between space-y-6 ${
                  isEven ? "md:order-first" : "md:order-last"
                }`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-muted border border-border flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-sm font-mono text-primary-strong font-semibold tracking-wider block">
                          {item.sector}
                        </span>
                        <h2 className="text-xl font-bold text-foreground font-display group-hover:text-primary transition-colors">
                          {item.title}
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-3.5 pt-4 border-t border-border select-text font-sans">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground font-semibold">The Challenge:</strong> {item.challenge}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground font-semibold">Strategic Approach:</strong> {item.solution}
                      </p>
                    </div>
                  </div>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {item.techs.map((tech) => {
                      const logo = getTechLogo(tech);
                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-muted border border-border text-sm text-muted-foreground font-mono"
                        >
                          {logo && (
                            <div className="relative w-3.5 h-3.5 shrink-0">
                              <Image 
                                src={logo} 
                                alt={`${tech} logo`} 
                                fill 
                                sizes="14px" 
                                className="object-contain" 
                              />
                            </div>
                          )}
                          <span>{tech}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Corporate Performance Summary Board */}
                <div className={`md:col-span-5 flex flex-col justify-center bg-surface-subtle rounded border border-border p-6 relative overflow-hidden font-sans ${
                  isEven ? "md:order-last" : "md:order-first"
                }`}>
                  <div className="absolute top-3 right-4 text-sm font-mono font-bold text-primary-strong uppercase tracking-widest">
                    strategic deliverables
                  </div>

                  <div className="space-y-6 pt-4">
                    {item.metrics.map((m, i) => {
                      const isRating = m.num.includes("★");
                      return (
                      <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                        <div className="space-y-0.5">
                          <span className="text-sm uppercase tracking-wider text-muted-foreground font-mono font-semibold">
                            {m.label}
                          </span>
                          <span
                            className="text-xl sm:text-2xl font-bold text-foreground block tracking-tight font-display"
                            aria-label={isRating ? "4.8 out of 5" : undefined}
                          >
                            {m.num}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-sm font-bold px-2.5 py-1 rounded border border-border bg-muted font-mono text-primary-strong">
                          <CheckCircle2 className="h-3 w-3 text-primary" aria-hidden="true" />
                          <span>{m.status}</span>
                        </div>
                      </div>
                      );
                    })}
                  </div>
                </div>

              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="py-8 border-t border-border">
          <CtaBlock
            title="Interested in aligning your infrastructure metrics?"
            description="Schedule a free technology consulting call with our team to discuss your operational, scaling, or compliance requirements."
            btnText="Discuss Cloud Assessment"
            btnHref="/contact"
          />
        </div>
      </div>
    </>
  );
}
