import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Layers, Cloud, Smartphone } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";

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
  title: "Case Studies | OnEggy Technologies",
  description: "Explore our real client success stories: AWS Cloud restructuring for Smile Foundation, EKS Kubernetes migrations for CloudStok, and fintech React Native setups for Beyond Imagination.",
  alternates: {
    canonical: "https://www.oneggy.com/case-studies",
  },
};

const cases = [
  {
    title: "AWS Cloud Operations for Smile Foundation",
    sector: "Education / Non-Profit",
    icon: <Cloud className="h-5 w-5 text-cyan-400" />,
    challenge: "Smile Foundation struggled with legacy AWS accounts, unmonitored server sizes, and frequent timeouts during high-traffic donation campaigns, resulting in lost sponsorships.",
    solution: "We restructured their infrastructure under a secure AWS Landing Zone. We rightsized over-provisioned EC2 instances, moved static media to S3 with CloudFront caching, and configured unified CloudWatch alarms.",
    techs: ["AWS Organizations", "Control Tower", "CloudFront CDN", "S3", "CloudWatch"],
    metrics: [
      { num: "-34%", label: "AWS Cost reduction", trend: "down" },
      { num: "+50%", label: "Web Response speeds", trend: "up" },
      { num: "0", label: "Incident outages", trend: "stable" },
    ],
  },
  {
    title: "Kubernetes Migration for CloudStok Technologies",
    sector: "SaaS / Platforms",
    icon: <Layers className="h-5 w-5 text-teal-400" />,
    challenge: "CloudStok's monolithic SaaS app ran on un-orchestrated instances. Deployments were manual and error-prone, and traffic peaks caused database lockups.",
    solution: "We containerized the workloads using Docker and migrated the platform to AWS EKS. We wrote modular Terraform scripts for IaC, and configured ArgoCD pipelines to enable zero-downtime canary updates.",
    techs: ["AWS EKS", "Terraform IaC", "ArgoCD Pipelines", "Docker", "Prometheus"],
    metrics: [
      { num: "10x", label: "Build Release speedups", trend: "up" },
      { num: "10k+", label: "Concurrent pods handled", trend: "up" },
      { num: "99.99%", label: "EKS Cluster Uptime SLA", trend: "stable" },
    ],
  },
  {
    title: "Mobile Architecture for Beyond Imagination",
    sector: "Fintech / Blockchain",
    icon: <Smartphone className="h-5 w-5 text-indigo-400" />,
    challenge: "Building a fintech blockchain mobile application requiring extremely low-latency database synchronization, secure encryption postures, and rigid compliance auditing.",
    solution: "We engineered a cross-platform React Native app with offline-first local SQL syncing, designed secure microservice APIs on FastAPI, and integrated AWS Secrets Manager for key rotation.",
    techs: ["React Native", "FastAPI APIs", "PostgreSQL Clusters", "AWS Secrets Manager", "GitHub Actions"],
    metrics: [
      { num: "<2.5s", label: "Transaction sync latency", trend: "down" },
      { num: "100%", label: "PCI-DSS compliance score", trend: "stable" },
      { num: "4.8★", label: "App Store ratings", trend: "up" },
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
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-24">
        {/* Decorative Orbs */}
        <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[95px] pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none -z-10" />

        <SectionHeader
          tag="Proven Outcomes"
          title={<>Client Success <span className="gradient-text">Case Studies</span></>}
          subtitle="Real outcomes. Discover how we've helped companies improve deployment speed, reduce cloud waste, and build high-performance products."
          align="left"
          className="max-w-3xl"
        />

        <StaggerContainer className="space-y-16">
          {cases.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <StaggerItem
                key={index}
                className="bg-background/25 border border-border/40 p-6 sm:p-8 rounded-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch group"
              >
                {/* Text block (orders last on odd steps on lg screens) */}
                <div className={`lg:col-span-7 flex flex-col justify-between space-y-6 ${
                  isEven ? "lg:order-first" : "lg:order-last"
                }`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-cyan-500 font-semibold tracking-wider block">
                          {item.sector}
                        </span>
                        <h2 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                          {item.title}
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-3.5 pt-2 border-t border-border/20 select-text">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground font-semibold">Challenge:</strong> {item.challenge}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground font-semibold">Solution:</strong> {item.solution}
                      </p>
                    </div>
                  </div>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/20">
                    {item.techs.map((tech) => {
                      const logo = getTechLogo(tech);
                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-950/60 border border-zinc-850 text-[10px] sm:text-xs text-zinc-400 font-mono"
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

                {/* Telemetry Metrics Panel (orders first on odd steps on lg screens) */}
                <div className={`lg:col-span-5 flex flex-col justify-center bg-zinc-950/50 rounded-xl border border-zinc-850 p-6 relative overflow-hidden font-mono ${
                  isEven ? "lg:order-last" : "lg:order-first"
                }`}>
                  <div className="absolute top-3 right-4 text-[9px] font-mono font-bold text-cyan-500/80 uppercase tracking-widest">
                    metrics-telemetry
                  </div>
                  
                  <div className="space-y-6 pt-2">
                    {item.metrics.map((m, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-zinc-900/60 pb-3 last:border-0 last:pb-0">
                        <div className="space-y-0.5">
                          <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
                            {m.label}
                          </span>
                          <span className="text-xl sm:text-2xl font-bold text-foreground block tracking-tight">
                            {m.num}
                          </span>
                        </div>
                        {/* Status trend badges */}
                        <div className={`flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded border ${
                          m.trend === "up" 
                            ? "bg-green-500/10 border-green-500/20 text-green-400" 
                            : m.trend === "down" 
                            ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" 
                            : "bg-zinc-900 border-zinc-800 text-zinc-400"
                        }`}>
                          {m.trend === "up" && <span>▲ GROWTH</span>}
                          {m.trend === "down" && <span>▼ OPTIMIZED</span>}
                          {m.trend === "stable" && <span>● COMPLIANT</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="py-8 border-t border-border/20">
          <CtaBlock
            title="Ready to optimize similar infrastructure metrics?"
            description="Hop on a quick, free cloud audit with our platform architects to outline cost-saving and pipeline deployment paths."
            btnText="Book Free Assessment"
            btnHref="/contact"
          />
        </div>
      </div>
    </>
  );
}
