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
};

const sectors = [
  {
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
    title: "Healthcare & Biotech",
    spec: "HIPAA COMPLIANCE",
    desc: "We deploy secure, isolated environments featuring encrypted database replica tiers, IAM audit tracking, and automated KMS key rotation to secure sensitive medical and patient records.",
  },
  {
    icon: <Landmark className="h-6 w-6 text-blue-400" />,
    title: "Fintech & Payments",
    spec: "PCI-DSS STANDARDS",
    desc: "Rigid security group partitions, secure gateway subnet isolation, automated database failovers, and centralized alert configurations designed to prevent transaction failures.",
  },
  {
    icon: <CloudLightning className="h-6 w-6 text-slate-400" />,
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
    icon: <ShoppingCart className="h-6 w-6 text-blue-400" />,
    title: "Headless E-Commerce",
    spec: "SPEED & SCALE",
    desc: "Building high-performance Next.js storefronts layered over APIs. Configured with CDN routing, Redis cache tables, and server-side render strategies for optimized conversion.",
  },
  {
    icon: <Rocket className="h-6 w-6 text-slate-400" />,
    title: "High-Growth Startups",
    spec: "RAPID DEPLOYMENT",
    desc: "Configuring multi-account AWS Organization layouts, setting up fast-deployment Terraform blueprints, and automated CI/CD releases to allow startup teams to build fast.",
  },
  {
    icon: <Building2 className="h-6 w-6 text-primary" />,
    title: "Enterprise Platforms",
    spec: "HYBRID CONTEXT",
    desc: "Architecting secure Transit Gateway connections between local physical servers and AWS accounts, backed by strict security policies and VAPT compliance checks.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-32 space-y-16">
        {/* Background Accent */}
        <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[95px] pointer-events-none -z-10 animate-pulse" />

        <SectionHeader
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
              className={`p-8 rounded-xl border border-zinc-800 bg-zinc-950/20 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full ${
                index === 6 ? "md:col-span-2 lg:col-span-3 min-h-[180px]" : "min-h-[280px]"
              }`}
            >
              <div className={`space-y-4 ${index === 6 ? "md:flex md:flex-row md:items-center md:gap-8 md:space-y-0 w-full" : ""}`}>
                <div className="flex items-center justify-between shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-mono text-primary font-bold tracking-widest md:hidden">
                    {item.spec}
                  </span>
                </div>
                <div className={index === 6 ? "md:flex-1 space-y-2" : "space-y-2"}>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground font-display group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <span className={`text-[9px] font-mono text-primary font-bold tracking-widest hidden ${index === 6 ? "md:inline-block" : ""}`}>
                      {item.spec}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="py-12 border-t border-zinc-800">
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
