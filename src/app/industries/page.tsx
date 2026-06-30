import type { ReactNode } from "react";
import { Metadata } from "next";
import { Landmark, HeartPulse, ShoppingCart, CloudLightning, GraduationCap, Rocket, Building2 } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";

export const metadata: Metadata = {
  title: "Industries We Serve | OnEggy Technologies",
  description: "Browse our industry-specific cloud engineering solutions: HIPAA-compliant architectures for Healthcare, PCI-DSS configurations for Fintech, multi-tenant SaaS scaling, and E-Commerce storefronts.",
  alternates: {
    canonical: "https://www.oneggy.com/industries",
  },
  openGraph: {
    type: "website",
    url: "https://www.oneggy.com/industries",
    title: "Industries We Serve | OnEggy Technologies",
    description: "Industry-specific cloud engineering blueprints: HIPAA-compliant Healthcare, PCI-DSS Fintech, multi-tenant SaaS, Headless E-Commerce, and more — engineered to your sector's regulatory standards.",
    siteName: "OnEggy Technologies",
  },
};

const sectors: { icon: ReactNode; title: string; spec: string; desc: string; featured?: boolean }[] = [
  {
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
    title: "Healthcare & Biotech",
    spec: "HIPAA COMPLIANCE",
    desc: "We deploy secure, isolated environments featuring encrypted database replica tiers, IAM audit tracking, and automated KMS key rotation to secure sensitive medical and patient records.",
  },
  {
    icon: <Landmark className="h-6 w-6 text-accent" />,
    title: "Fintech & Payments",
    spec: "PCI-DSS STANDARDS",
    desc: "Rigid security group partitions, secure gateway subnet isolation, automated database failovers, and centralized alert configurations designed to prevent transaction failures.",
  },
  {
    icon: <CloudLightning className="h-6 w-6 text-muted-foreground" />,
    title: "SaaS Platforms",
    spec: "MULTI-TENANT ISOLATION",
    desc: "Provisioning tenant namespace sandboxes inside Kubernetes clusters, multi-tenant database partitioning, custom billing alerts, and distributed Prometheus logging boards.",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    title: "Education & Non-Profits",
    spec: "HIGH CONCURRENCY",
    desc: "Optimizing CDN edge delivery caches, static resource setups, and Horizontal Pod Autoscaling (HPA) to ensure platform stability during large seasonal traffic spikes.",
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-accent" />,
    title: "Headless E-Commerce",
    spec: "SPEED & SCALE",
    desc: "Building high-performance Next.js storefronts layered over APIs. Configured with CDN routing, Redis cache tables, and server-side render strategies for optimized conversion.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-muted-foreground" />,
    title: "High-Growth Startups",
    spec: "RAPID DEPLOYMENT",
    desc: "Configuring multi-account AWS Organization layouts, setting up fast-deployment Terraform blueprints, and automated CI/CD releases to allow startup teams to build fast.",
  },
  {
    icon: <Building2 className="h-6 w-6 text-primary" />,
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

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-32 space-y-16">
        <SectionHeader
          as="h1"
          tag="Who We Serve"
          title="Tailored Industry Cloud Blueprints"
          subtitle="Every sector requires specialized security, data, and compliance layouts. We design systems engineered to match your industry's exact regulatory standards."
          align="left"
          className="max-w-3xl font-display"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((item, index) => (
            <StaggerItem
              key={index}
              className={`surface-card p-8 rounded-xl border border-border hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full ${
                item.featured ? "md:col-span-2 lg:col-span-3 min-h-[180px]" : "min-h-[280px]"
              }`}
            >
              <div className={`space-y-4 ${item.featured ? "md:flex md:flex-row md:items-center md:gap-8 md:space-y-0 w-full" : ""}`}>
                <div className="flex items-center justify-between shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-sm font-mono text-primary-strong font-bold tracking-widest md:hidden">
                    {item.spec}
                  </span>
                </div>
                <div className={item.featured ? "md:flex-1 space-y-2" : "space-y-2"}>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground font-display group-hover:text-primary-strong transition-colors">
                      {item.title}
                    </h2>
                    <span className={`text-sm font-mono text-primary-strong font-bold tracking-widest hidden ${item.featured ? "md:inline-block" : ""}`}>
                      {item.spec}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="py-12 border-t border-border">
          <CtaBlock
            title="Looking for a compliance-aligned architecture?"
            description="Schedule a consultation with our technology practice directors to configure your HIPAA, PCI-DSS, or ISO 27001 compliant cloud environment."
            btnText="Schedule Compliance Audit"
            btnHref="/contact"
          />
        </div>
      </div>
    </>
  );
}
