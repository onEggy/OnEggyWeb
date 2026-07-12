import { Metadata } from "next";
import { FadeUp } from "@/components/animations/motion-wrappers";
import { CtaBlock } from "@/components/common/cta-block";

export const metadata: Metadata = {
  title: "Industries We Serve | OnEggy Technologies",
  description: "Browse OnEggy's sector-specific cloud engineering solutions: HIPAA compliance for Healthcare, PCI-DSS for Fintech, and multi-tenant SaaS scaling architectures.",
  alternates: {
    canonical: "https://www.oneggy.com/industries",
  },
  openGraph: {
    type: "website",
    url: "https://www.oneggy.com/industries",
    title: "Industries We Serve | OnEggy Technologies",
    description: "OnEggy's sector-specific cloud engineering solutions: HIPAA compliance for Healthcare, PCI-DSS for Fintech, and multi-tenant SaaS scaling.",
    siteName: "OnEggy Technologies",
  },
};

const sectors: { title: string; spec: string; desc: string; featured?: boolean }[] = [
  {
    title: "Healthcare & Biotech",
    spec: "HIPAA COMPLIANCE",
    desc: "We deploy secure, isolated environments featuring encrypted database replica tiers, IAM audit tracking, and automated KMS key rotation to secure sensitive medical and patient records.",
  },
  {
    title: "Fintech & Payments",
    spec: "PCI-DSS STANDARDS",
    desc: "Rigid security group partitions, secure gateway subnet isolation, automated database failovers, and centralized alert configurations designed to prevent transaction failures.",
  },
  {
    title: "SaaS Platforms",
    spec: "MULTI-TENANT ISOLATION",
    desc: "Provisioning tenant namespace sandboxes inside Kubernetes clusters, multi-tenant database partitioning, custom billing alerts, and distributed Prometheus logging boards.",
  },
  {
    title: "Education & Non-Profits",
    spec: "HIGH CONCURRENCY",
    desc: "Optimizing CDN edge delivery caches, static resource setups, and Horizontal Pod Autoscaling (HPA) to ensure platform stability during large seasonal traffic spikes.",
  },
  {
    title: "Headless E-Commerce",
    spec: "SPEED & SCALE",
    desc: "Building high-performance Next.js storefronts layered over APIs. Configured with CDN routing, Redis cache tables, and server-side render strategies for optimized conversion.",
  },
  {
    title: "High-Growth Startups",
    spec: "RAPID DEPLOYMENT",
    desc: "Configuring multi-account AWS Organization layouts, setting up fast-deployment Terraform blueprints, and automated CI/CD releases to allow startup teams to build fast.",
  },
  {
    title: "Enterprise Platforms",
    spec: "HYBRID CONTEXT",
    desc: "Architecting secure Transit Gateway connections between local physical servers and AWS accounts, backed by strict security policies and VAPT compliance checks.",
    featured: true,
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Industries We Serve",
  itemListElement: sectors.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.title,
    description: item.desc,
  })),
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
      "name": "Industries We Serve",
      "item": "https://www.oneggy.com/industries"
    }
  ]
};

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 sm:pt-16 lg:pt-20">
        <span className="eyebrow mb-6">Who we serve</span>
        <h1 className="display text-5xl sm:text-6xl mt-5 max-w-[20ch]">
          Tailored industry cloud <em>blueprints.</em>
        </h1>
        <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
          Every sector carries its own security, data, and compliance demands. We design
          systems engineered to match your industry&rsquo;s exact regulatory standards — and
          hold them there.
        </p>
      </section>

      {/* Sectors — numbered editorial index */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <FadeUp>
              <span className="eyebrow mb-5">Sectors</span>
              <h2 className="display text-3xl sm:text-4xl mt-4">
                Engineered to your standard.
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[38ch]">
                Seven practice areas, each mapped to the regulatory and scaling pressures that
                define it.
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-8">
            <FadeUp>
              <ul className="border-t border-border">
                {sectors.map((item, index) => (
                  <li
                    key={item.title}
                    className={`grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-8 py-7 border-b border-border ${
                      item.featured
                        ? "border-l-2 border-l-primary bg-surface-subtle/60 pl-5 sm:pl-6 -ml-px"
                        : ""
                    }`}
                  >
                    <span
                      className={`font-mono text-sm tabular-nums pt-0.5 ${
                        item.featured ? "text-primary-strong" : "text-primary-strong/70"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
                        <h3 className="font-display text-xl sm:text-2xl text-foreground">
                          {item.title}
                        </h3>
                        <span
                          className={`font-mono text-xs uppercase tracking-[0.12em] shrink-0 ${
                            item.featured ? "text-primary-strong" : "text-muted-foreground"
                          }`}
                        >
                          {item.spec}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[58ch]">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-16 sm:py-20 border-t border-border">
        <CtaBlock
          title="Looking for a compliance-aligned architecture?"
          description="Schedule a consultation with our technology practice directors to configure your HIPAA, PCI-DSS, or ISO 27001 compliant cloud environment."
          btnText="Schedule Compliance Audit"
          btnHref="/contact"
        />
      </div>
    </>
  );
}
