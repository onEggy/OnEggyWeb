import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CtaBlock } from "@/components/common/cta-block";
import { OrbitMark } from "@/components/common/orbit-mark";
import { profile as teamProfiles } from "../../../public/data/teamSection.json";

export const metadata: Metadata = {
  title: "About Our Practice | OnEggy Technologies",
  description: "Learn about OnEggy's cloud modernization practice, our engineering standards, and advisory principles.",
  alternates: { canonical: "https://www.oneggy.com/about" },
  openGraph: {
    title: "About Our Practice | OnEggy Technologies",
    description: "Learn about OnEggy's cloud modernization practice, our engineering standards, and advisory principles.",
    url: "https://www.oneggy.com/about",
    type: "website",
  },
};

const principles = [
  { title: "100% client ownership", desc: "Zero proprietary vendor lock-in. Every line of Terraform, Helm chart, and application logic lives in your private repositories from day one." },
  { title: "Code-first infrastructure", desc: "Console ClickOps is an operational risk. If an environment change isn't defined in git-versioned code, it doesn't exist." },
  { title: "Observability-first delivery", desc: "We never launch blind. Every workload ships with CPU/memory alerting, Slack notifications, and Prometheus/Grafana boards pre-configured." },
  { title: "Engineering excellence", desc: "Strict cloud design frameworks: multi-account landing zones, Transit Gateway routing, and automated CI/CD compliance gates." },
];

const culture = [
  "Scoped boards and project channels for every engagement",
  "Weekly peer review and codebase refactoring sprints",
  "Sponsored continuous training and sandbox environments",
];

export default function AboutPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us & Team | OnEggy Technologies",
    description: "Meet the cloud and platform engineers powering modern startups and enterprises.",
    publisher: { "@type": "Organization", name: "OnEggy Technologies", url: "https://www.oneggy.com" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.oneggy.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.oneggy.com/about" },
    ],
  };

  const leadership = teamProfiles.filter(
    (p) => p.position.toLowerCase() === "founder" || p.position.toLowerCase().includes("mentor")
  );
  const engineering = teamProfiles.filter((p) => !leadership.some((l) => l.name === p.name));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 sm:pt-16 lg:pt-20">
        <span className="eyebrow mb-6">About OnEggy</span>
        <h1 className="display text-5xl sm:text-6xl lg:text-[4rem] mt-5 max-w-[18ch]">
          A senior cloud practice, not a body shop.
        </h1>
        <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
          We help startups and enterprises restructure legacy infrastructure, enforce DevSecOps
          governance, and ship high-performance applications — combining tactical engineering
          precision with advisory rigor.
        </p>
      </section>

      {/* Signature DNA statement */}
      <section className="border-y border-border bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="display text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Zero ClickOps. <em>100% GitOps.</em>
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              Every security group, routing rule, and container cluster is managed through
              version-controlled, declarative code pipelines — never a console. It&rsquo;s how we keep
              your environments drift-free, auditable, and yours.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Leadership */}
          <div className="lg:col-span-5">
            <span className="eyebrow mb-5">Leadership</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">The directors</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[40ch]">
              The architects directing our consulting frameworks, audits, and delivery.
            </p>
            <div className="mt-8 space-y-5">
              {leadership.map((leader) => (
                <div key={leader.name} className="surface-card rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-muted border border-border shrink-0 relative">
                      <Image src={leader.image} alt={leader.alt} fill sizes="56px" className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground">{leader.name}</h3>
                      <span className="text-xs font-mono uppercase tracking-wider text-primary-strong">{leader.position}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{leader.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering */}
          <div className="lg:col-span-7">
            <div className="flex items-baseline justify-between mb-6">
              <span className="eyebrow">Engineering</span>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {engineering.length} specialists
              </span>
            </div>
            <ul className="border-t border-border">
              {engineering.map((member) => (
                <li key={member.name} className="flex items-start gap-4 py-6 border-b border-border">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted border border-border shrink-0 relative">
                    <Image src={member.image} alt={member.alt} fill sizes="48px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-lg text-foreground">{member.name}</h3>
                      <span className="px-2 py-0.5 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground">
                        {member.position}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed max-w-[52ch]">{member.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow mb-5">How we operate</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">Principles we don&rsquo;t bend.</h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="border-t border-border">
              {principles.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[auto_1fr] gap-x-6 py-7 border-b border-border">
                  <span className="font-mono text-sm text-primary-strong/70 tabular-nums">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[58ch]">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="border-t border-border bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="display text-3xl sm:text-4xl">Built for focus, not meetings.</h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[52ch]">
              We run structured, asynchronous engagements so architects spend their time on platform
              design and automation — not status calls.
            </p>
            <ul className="mt-7 space-y-3">
              {culture.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base text-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="relative surface-card rounded-2xl p-8 overflow-hidden">
              <OrbitMark size={130} spin className="absolute -top-8 -right-8 opacity-[0.07] pointer-events-none" />
              <p className="text-xs font-mono uppercase tracking-[0.1em] text-primary-strong">Continuous development</p>
              <p className="mt-4 display text-2xl leading-snug">
                Technologies change. Sound architecture is <em>permanent.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-16 sm:py-20 border-t border-border">
        <CtaBlock
          title="Want to build systems with us?"
          description="Explore our open roles for DevOps professionals, cloud architects, and backend engineers."
          btnText="Browse open positions"
          btnHref="/careers"
        />
      </div>
    </>
  );
}
