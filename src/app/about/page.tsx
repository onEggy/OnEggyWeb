import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import {
  Terminal,
  Cpu,
  Eye,
  Lock,
  CheckCircle,
  Shield,
} from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";
import { profile as teamProfiles } from "../../../public/data/teamSection.json";

export const metadata: Metadata = {
  title: "About Our Practice | OnEggy Technologies",
  description:
    "Learn about OnEggy's cloud modernization practice, our engineering standards, and advisory principles.",
  alternates: {
    canonical: "https://www.oneggy.com/about",
  },
  openGraph: {
    title: "About Our Practice | OnEggy Technologies",
    description:
      "Learn about OnEggy's cloud modernization practice, our engineering standards, and advisory principles.",
    url: "https://www.oneggy.com/about",
    type: "website",
  },
};

const companyValues = [
  {
    icon: <Lock className="h-4.5 w-4.5 text-primary" aria-hidden="true" />,
    title: "100% Client Ownership",
    desc: "We enforce zero proprietary vendor lock-in. Every line of Terraform configuration, Helm deployment code, and application logic lives inside your private repositories from day one.",
  },
  {
    icon: <Terminal className="h-4.5 w-4.5 text-primary" aria-hidden="true" />,
    title: "Code-First Infrastructure",
    desc: "We believe console ClickOps changes are a fundamental security and operational risk. If an environment change isn't defined inside git-versioned code, it doesn't exist.",
  },
  {
    icon: <Eye className="h-4.5 w-4.5 text-primary" aria-hidden="true" />,
    title: "Observability-First Deployment",
    desc: "We never launch blindly. Every workload we deploy is pre-configured with active CPU/memory alerting thresholds, slack-notifications, and Prometheus logging boards.",
  },
  {
    icon: <Cpu className="h-4.5 w-4.5 text-primary" aria-hidden="true" />,
    title: "Engineering Excellence",
    desc: "We follow strict cloud design frameworks. We construct multi-account landing zones, Transit Gateway network routing architectures, and automated CI/CD compliance audit gates.",
  },
];

export default function AboutPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us & Team | OnEggy Technologies",
    "description": "Meet the cloud and platform engineers powering modern startups and enterprises. Learn about our story, DevOps culture, and technical principles.",
    "publisher": {
      "@type": "Organization",
      "name": "OnEggy Technologies",
      "url": "https://www.oneggy.com"
    }
  };

  // Separate profiles based on designation/position
  const leadership = teamProfiles.filter(
    (p) => p.position.toLowerCase() === "founder" || p.position.toLowerCase().includes("mentor")
  );

  const engineering = teamProfiles.filter(
    (p) => !leadership.some((l) => l.name === p.name)
  );

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
        "name": "About",
        "item": "https://www.oneggy.com/about"
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
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 space-y-24">

        {/* 1. HERO SECTION */}
        <div className="relative flex flex-col items-start space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-sm font-mono text-primary-strong shadow-sm">
            <Shield className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Advisory Practice Directors</span>
          </div>
          <SectionHeader
            as="h1"
            title={<>Global Technology Modernization & <span className="text-primary">Cloud Strategy</span></>}
            subtitle="We help enterprise organizations restructure legacy infrastructure, enforce strict DevSecOps governance, and deploy high-performance applications. We combine tactical engineering precision with corporate advisory rigor."
            align="left"
            className="mb-0"
          />
        </div>

        {/* 2. COMPANY STORY & DNA (Asymmetric Split Screen) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-border pt-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground">Our Story &amp; Practice Scope</h2>
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              We design and maintain secure, auto-scaling cloud architectures. Our senior systems architects partner with corporate technology leaders to replace manual configurations with declarative, drift-free Infrastructure as Code (IaC) blueprints.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-6">
            <div className="surface-card p-8 rounded-xl relative overflow-hidden shadow-md flex flex-col justify-center min-h-[220px]">
              <div className="absolute top-4 right-4 text-sm font-mono text-primary-strong uppercase tracking-wider">engineering governance</div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground font-display">Zero ClickOps. 100% GitOps.</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  Enterprise workload configurations must be managed via version-controlled repositories. We reject ClickOps console modifications. Every security group, routing rule, and container cluster is managed via declarative code pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. PRACTICE LEADERSHIP & ROSTER SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-border pt-20 items-start">

          {/* Left: Leadership Spotlight (5 cols) */}
          <div className="lg:col-span-5 space-y-8 pl-0 lg:pl-4">
            <div className="space-y-3">
              <span className="text-sm font-mono font-bold text-primary-strong uppercase tracking-[0.2em] block">Practice Leadership</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground">Strategic Directors</h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[42ch]">
                The solutions architects directing our consulting frameworks, compliance audits, and system deliveries.
              </p>
            </div>

            <div className="space-y-6">
              {leadership.map((leader) => (
                <div key={leader.name} className="surface-card p-5 rounded-md space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {leader.description}
                  </p>
                  <div className="flex items-center gap-3 border-t border-border pt-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-muted border border-border shrink-0 relative">
                      <Image
                        src={leader.image}
                        alt={leader.alt}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{leader.name}</h4>
                      <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider block">{leader.position}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Engineering Roster (7 cols) */}
          <div className="lg:col-span-7">
            <div className="surface-card rounded-md overflow-hidden">
              <div className="px-6 py-4 border-b border-border bg-surface-subtle flex items-center justify-between">
                <div>
                  <span className="text-sm font-mono text-primary-strong font-bold uppercase tracking-widest block">Engineering Practice</span>
                  <h3 className="text-sm font-bold text-foreground font-display mt-0.5">Systems Specialists</h3>
                </div>
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{engineering.length} Engineers Active</span>
              </div>

              <div className="divide-y divide-border font-sans">
                {engineering.map((member) => (
                  <div
                    key={member.name}
                    className="p-6 flex flex-col sm:flex-row sm:items-center gap-4 group hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted border border-border shrink-0 relative">
                      <Image
                        src={member.image}
                        alt={member.alt}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary-strong transition-colors">
                          {member.name}
                        </h4>
                        <span className="px-2 py-0.5 rounded bg-muted border border-border text-sm font-mono text-muted-foreground">
                          {member.position}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-[42ch]">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 4. ENGINEERING PRINCIPLES SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-border pt-20 items-start">
          <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-10">
            <span className="text-sm font-mono font-bold text-primary-strong uppercase tracking-[0.2em] block">Our Standards</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground">Engineering Principles</h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[42ch]">
              We enforce strict compliance checks, codebase reviews, and automated configurations to guarantee absolute system availability.
            </p>
          </div>

          <div className="lg:col-span-7 divide-y divide-border font-sans">
            {companyValues.map((value, i) => (
              <div
                key={i}
                className="py-6 first:pt-0 last:pb-0 flex gap-4 items-start group transition-all duration-300"
              >
                <div className="w-8 h-8 rounded border border-border bg-muted flex items-center justify-center shrink-0">
                  {value.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary-strong transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. WORK CULTURE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-border pt-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground">Methodology &amp; Engagement DNA</h2>
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              We run highly structured asynchronous communication channels. We avoid alignment meetings, allowing practice architects to focus strictly on platform design, compliance checks, and codebase automation.
            </p>
            <div className="space-y-3 pt-2 font-sans">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-base text-foreground font-semibold">100% Scoped JIRA boards and Slack project channels</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-base text-foreground font-semibold">Weekly peer-reviews and codebase refactoring sprints</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" aria-hidden="true" />
                <span className="text-base text-foreground font-semibold">Stipends for continuous cloud certifications (AWS, CNCF)</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-6">
            <div className="surface-card p-8 rounded-xl relative overflow-hidden shadow-md flex flex-col justify-center min-h-[200px]">
              <div className="absolute top-4 right-4 text-sm font-mono text-primary-strong uppercase tracking-wider">advisory training</div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground font-display">Continuous Development</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  Technologies change, but sound system architectures are eternal. We sponsor continuous certifications, training courses, and sandbox environments to keep our teams sharp.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. JOIN OUR TEAM CTA */}
        <div className="py-8 border-t border-border">
          <CtaBlock
            title="Want to build systems with us?"
            description="Explore our open roles for DevOps professionals, cloud architects, and backend engineers."
            btnText="Browse Open Positions"
            btnHref="/careers"
          />
        </div>
      </div>
    </>
  );
}
