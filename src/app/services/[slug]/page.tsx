import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Shield,
  ChevronRight
} from "lucide-react";
import { getServiceBySlug, servicesData } from "@/lib/services-data";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";
import { ServiceArchitecture } from "@/components/services/service-architecture";
import { ServiceFaqAccordion } from "@/components/services/service-faq-accordion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { testimonials as rawTestimonials } from "../../../../public/data/testimonial.json";

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

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

const avatarBgClasses = [
  "bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono",
  "bg-zinc-950 border border-zinc-900/60 text-zinc-450 font-mono",
  "bg-zinc-900/80 border border-zinc-850 text-zinc-400 font-mono",
];

const getAvatarStyle = (name: string) => {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return avatarBgClasses[sum % avatarBgClasses.length];
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all 25 services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Dynamic metadata generation for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: `https://www.oneggy.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `https://www.oneggy.com/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Pre-generate the structured data JSON-LD schema
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.seo.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "OnEggy Technologies",
      "url": "https://www.oneggy.com"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.features.map((f) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": f.title,
          "description": f.desc
        }
      }))
    }
  };

  // Reusable timeline process data
  const processSteps = [
    {
      num: "01",
      title: "Assessment & Audit",
      desc: "We analyze your current code repository structures, cloud usage parameters, and resource waste matrices to outline a modernization roadmap."
    },
    {
      num: "02",
      title: "Architecture Blueprint",
      desc: "Our senior architects design VPC isolation networks, Kubernetes cluster setups, or software routing schemas, providing high-fidelity visual blueprints."
    },
    {
      num: "03",
      title: "IaC & Software Engineering",
      desc: "We write modular Terraform configurations, automate continuous verify check pipelines, and implement product software features."
    },
    {
      num: "04",
      title: "Transition & Governance",
      desc: "We configure active dashboards (Prometheus/Grafana), deploy monitoring thresholds, and hand over files with complete documentation."
    }
  ];

  // Map categories to matching badges
  const categoryLabel = {
    cloud: "Cloud & Infrastructure",
    devops: "DevOps & Automation",
    software: "Software Engineering"
  }[service.category];

  return (
    <>
      {/* Inject Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup).replace(/</g, "\\u003c"),
        }}
      />

      <div className="relative overflow-hidden min-h-screen">
        {/* Subtle Background Accent */}
        <div className="absolute top-[8%] right-[-10%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />

        {/* 1. HERO SECTION */}
        <section className="relative pt-16 pb-24 md:py-32 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm text-xs font-mono text-primary shadow-sm">
                <Shield className="h-3.5 w-3.5" />
                <span>{categoryLabel}</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-foreground leading-tight">
                {service.title}
                <br />
                <span className="text-primary">{service.headline}</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
                {service.subtext}
              </p>
            </FadeUp>

            {/* Tech Ecosystem Row */}
            <FadeUp delay={0.25}>
              <div className="flex flex-wrap justify-center gap-2 pt-4">
                {service.techs.map((tech) => {
                  const logo = getTechLogo(tech);
                  return (
                    <span 
                      key={tech} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 border border-zinc-800 text-foreground/80 shadow-sm"
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
            </FadeUp>

            <FadeUp delay={0.3} className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-colors cursor-pointer shadow-lg"
              >
                Request Advisory Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#blueprint"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-background border border-border hover:bg-zinc-900 font-semibold transition-colors cursor-pointer"
              >
                Review Framework Map
              </a>
            </FadeUp>
          </div>
        </section>

        {/* 2. THE CHALLENGE VS. THE SOLUTION */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-zinc-900/60 relative">
          {/* Structural layout lines */}
          <div className="absolute left-10 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />
          <div className="absolute right-10 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />

          <div className="relative z-10">
            <SectionHeader
              tag="Strategic Context"
              title="Business Challenge & Alignment"
              subtitle="How we identify operational exposures, cost leakages, and pipeline friction to design compliant system solutions."
              align="center"
              className="mb-20"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* The Challenges Column */}
              <div className="space-y-6 pl-0 lg:pl-10">
                <div className="flex items-center gap-3 text-red-500/90 font-semibold">
                  <AlertTriangle className="h-5 w-5" />
                  <h3 className="text-lg font-display font-bold">Operational Vulnerabilities</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                  Organizations frequently hit compliance, deployment, and cost barriers due to legacy un-managed setups:
                </p>
                <ul className="space-y-4 font-sans text-xs sm:text-sm text-muted-foreground">
                  {service.problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-red-500 shrink-0 mt-2" />
                      <span className="leading-relaxed">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Solutions Column */}
              <div className="space-y-6 pr-0 lg:pr-10 border-t lg:border-t-0 lg:border-l border-zinc-900 pt-8 lg:pt-0 lg:pl-12">
                <div className="flex items-center gap-3 text-primary font-semibold">
                  <CheckCircle2 className="h-5 w-5" />
                  <h3 className="text-lg font-display font-bold">Strategic Resolution Model</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                  We codify secure infrastructure policies and deploy automated workflows to optimize reliability:
                </p>
                <ul className="space-y-4 font-sans text-xs sm:text-sm text-muted-foreground">
                  {service.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                      <span className="leading-relaxed">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICE FEATURES ROSTER */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-zinc-900/60 relative">
          {/* Structural layout lines */}
          <div className="absolute left-10 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />
          <div className="absolute right-10 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />

          <div className="relative z-10">
            <SectionHeader
              tag="Deliverables"
              title="Core Scope & Capabilities"
              subtitle="Explore our detailed technical features engineered following the industry's absolute best practices."
              align="center"
              className="mb-20"
            />

            <div className="divide-y divide-zinc-900 mx-0 md:mx-14 border-t border-b border-zinc-900">
              {service.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
                >
                  <div className="md:col-span-3">
                    <span className="text-[9px] font-mono text-primary font-bold uppercase tracking-widest block pt-0.5">
                      Practice Segment {idx + 1}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-base font-bold text-foreground font-display group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5 space-y-2 font-sans">
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-semibold">
                      {feature.desc}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. METRICS / BENEFITS ROW */}
        <section className="border-y border-zinc-900 bg-zinc-900/10 py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground font-mono">
                    {benefit.num}
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                    {benefit.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE ARCHITECTURE BLUEPRINT MAP */}
        <div id="blueprint" className="relative">
          <div className="absolute left-6 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />
          <div className="absolute right-6 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />
          <ServiceArchitecture category={service.category} serviceName={service.title} />
        </div>

        {/* 6. PROCESS TIMELINE STEPPER */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-zinc-900/60 relative">
          {/* Structural layout lines */}
          <div className="absolute left-10 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />
          <div className="absolute right-10 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />

          <div className="relative z-10">
            <SectionHeader
              tag="Methodology"
              title="Advisory & Delivery Timeline"
              subtitle="How we transition your cloud workloads from initial audit reviews to governed production setups."
              align="center"
              className="mb-20"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative border-t border-b border-zinc-900 py-10 divide-y sm:divide-y-0 sm:divide-x divide-zinc-900 mx-0 md:mx-14">
              {processSteps.map((step, idx) => (
                <div key={idx} className="space-y-4 px-0 sm:px-6 first:pl-0 last:pr-0 pt-6 sm:pt-0 first:pt-0">
                  <div className="text-xl font-bold text-primary font-mono">
                    {step.num}
                  </div>
                  <h4 className="text-xs font-bold text-foreground font-display uppercase tracking-wider">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CLIENT TESTIMONIALS */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-zinc-900/60 relative">
          {/* Structural layout lines */}
          <div className="absolute left-10 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />
          <div className="absolute right-10 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />
          
          <div className="relative z-10">
            <SectionHeader
              tag="Impact Validation"
              title="Enterprise Success Stories"
              subtitle="How we've partner with engineering leadership teams to deliver key modernizations."
              align="center"
              className="mb-20"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-0 md:mx-14">
              {(() => {
                const filteredReviews = rawTestimonials.filter((t) => {
                  const desc = t.designation.toLowerCase();
                  const test = t.testimonial.toLowerCase();
                  if (service.category === "cloud") {
                    return desc.includes("cloud") || desc.includes("aws") || test.includes("aws") || test.includes("cloud") || desc.includes("brahmatells");
                  } else if (service.category === "devops") {
                    return desc.includes("devops") || desc.includes("sre") || test.includes("kubernetes") || test.includes("eks") || test.includes("devops") || desc.includes("payu") || desc.includes("pinelabs");
                  } else { // software
                    return desc.includes("developer") || desc.includes("full stack") || desc.includes("mobile") || desc.includes("app") || test.includes("react native") || test.includes("next") || test.includes("software") || desc.includes("anveshan") || desc.includes("digispeax");
                  }
                });
                const displayReviews = filteredReviews.length >= 3 ? filteredReviews.slice(0, 3) : rawTestimonials.slice(0, 3);
                return displayReviews.map((item, index) => {
                  const avatarStyle = getAvatarStyle(item.name);
                  return (
                    <div key={index} className="p-6 rounded border border-zinc-900 bg-zinc-950/20 hover:border-primary/45 transition-colors flex flex-col justify-between relative group">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic relative z-10 mb-8 font-sans">
                        &ldquo;{item.testimonial}&rdquo;
                      </p>
                      <div className="flex items-center gap-3 border-t border-zinc-900/60 pt-4 font-sans">
                        <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-[10px] shrink-0">
                          {getInitials(item.name)}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-foreground truncate">{item.name}</h4>
                          <p className="text-[10px] text-zinc-500 truncate font-mono uppercase tracking-wider">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </section>

        {/* 8. FAQ ACCORDION SECTION */}
        <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 border-t border-border/40 relative">
          <div className="absolute bottom-[10%] left-[-15%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none -z-10" />

          <SectionHeader
            tag="Q&A"
            title="Practice FAQ Details"
            subtitle="Advisory answers regarding engagement scope, billing schedules, and compliance configurations."
            align="center"
            className="mb-16"
          />

          <ServiceFaqAccordion faqs={service.faqs} />
        </section>

        {/* 9. CTA CONVERSION BLOCK */}
        <div className="py-12 border-t border-border/40">
          <CtaBlock
            title={`Discuss Your ${service.title} Goals`}
            description="Schedule a 30-minute advisory call with our senior architects to map out infrastructure budgets, timeline scopes, and risk checkpoints."
            btnText="Book Free Assessment"
            btnHref="/contact"
          />
        </div>
      </div>
    </>
  );
}
