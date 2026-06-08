import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
import { 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Terminal,
  ChevronRight
} from "lucide-react";
import { getServiceBySlug, servicesData } from "@/lib/services-data";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";
import { ServiceArchitecture } from "@/components/services/service-architecture";
import { ServiceFaqAccordion } from "@/components/services/service-faq-accordion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { testimonials as rawTestimonials } from "../../../../public/data/testimonial.json";

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
      desc: "We analyze your current code repository structures, cloud usage parameters, and resource waste matrices to outline a migration checklist."
    },
    {
      num: "02",
      title: "Architecture Blueprint",
      desc: "Our senior architects design VPC isolation networks, Kubernetes cluster setups, or software routing schemas, providing high-fidelity visual maps."
    },
    {
      num: "03",
      title: "IaC & App Coding",
      desc: "We write robust Infrastructure as Code (IaC) Terraform modules, configure automated CI/CD pipeline triggers, and implement app features."
    },
    {
      num: "04",
      title: "Observability & SLA Support",
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
        {/* Glow Effects */}
        <div className="absolute top-[8%] left-[-15%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-[40%] right-[-15%] w-[450px] h-[450px] rounded-full bg-teal-500/5 blur-[125px] pointer-events-none -z-10 animate-pulse" />

        {/* 1. HERO SECTION */}
        <section className="relative pt-16 pb-24 md:py-32 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-6 space-y-8 relative z-10">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm text-xs font-mono text-cyan-400 shadow-sm">
                <Terminal className="h-3.5 w-3.5" />
                <span>{categoryLabel}</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-foreground leading-tight">
                {service.title}
                <br />
                <span className="text-cyan-400">{service.headline}</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {service.subtext}
              </p>
            </FadeUp>

            {/* Float Badges / Tech Row */}
            <FadeUp delay={0.25}>
              <div className="flex flex-wrap justify-center gap-2 pt-4">
                {service.techs.map((tech) => {
                  const logo = getTechLogo(tech);
                  return (
                    <span 
                      key={tech} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-accent/30 border border-border text-foreground/80 shadow-sm"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-foreground text-background hover:bg-foreground/90 font-semibold transition-colors cursor-pointer shadow-lg"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#blueprint"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-background border border-border hover:bg-accent/40 hover:border-border/80 font-semibold transition-colors cursor-pointer"
              >
                Explore Architecture
              </a>
            </FadeUp>
          </div>
        </section>

        {/* 2. THE CHALLENGE VS. THE SOLUTION */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-border/40">
          <SectionHeader
            tag="Solving Bottlenecks"
            title={<>The Challenge & <span className="text-cyan-400">Our Solution</span></>}
            subtitle="How we analyze pain points and build engineering workflows to achieve system scaling goals."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Challenges Card */}
            <div className="glass-card rounded-2xl p-8 border border-red-500/10 bg-red-500/[0.01] space-y-6 relative overflow-hidden shadow-md">
              <div className="absolute top-[20%] right-[10%] w-[120px] h-[120px] rounded-full bg-red-500/5 blur-[50px] pointer-events-none" />
              <div className="flex items-center gap-3 text-red-400 font-semibold">
                <AlertTriangle className="h-6 w-6" />
                <h3 className="text-xl font-display font-bold">Scaling Roadblocks</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Many businesses hit a bottleneck due to manual environments, drift, security exposures, and configuration errors:
              </p>
              <ul className="space-y-4">
                {service.problems.map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Solutions Card */}
            <div className="glass-card rounded-2xl p-8 border border-cyan-500/10 bg-cyan-500/[0.01] space-y-6 relative overflow-hidden shadow-md">
              <div className="absolute top-[20%] right-[10%] w-[120px] h-[120px] rounded-full bg-cyan-500/5 blur-[50px] pointer-events-none" />
              <div className="flex items-center gap-3 text-cyan-400 font-semibold">
                <CheckCircle2 className="h-6 w-6" />
                <h3 className="text-xl font-display font-bold">The OnEggy Way</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We design clean solutions directly in code to secure infrastructure and automate operations:
              </p>
              <ul className="space-y-4">
                {service.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICE FEATURES GRID */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-border/40">
          <SectionHeader
            tag="Scope of Work"
            title={<>Engineered <span className="text-cyan-400">Platform Capabilities</span></>}
            subtitle="Explore our detailed technical features engineered following the industry's absolute best practices."
            align="center"
            className="mb-16"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, idx) => (
              <StaggerItem 
                key={idx}
                className="glass-card hover:border-cyan-500/30 p-8 rounded-xl border border-border/40 transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono text-cyan-500/60 font-semibold uppercase">capability {idx + 1}</span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-semibold text-foreground/80 leading-relaxed">
                    {feature.desc}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.detail}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  production-ready <ChevronRight className="h-3 w-3" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* 4. METRICS / BENEFITS ROW */}
        <section className="border-y border-border/40 bg-accent/10 py-20 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-4xl sm:text-6xl font-extrabold tracking-tight text-cyan-400 font-mono">
                    {benefit.num}
                  </div>
                  <div className="text-xs sm:text-sm font-mono uppercase tracking-widest text-muted-foreground">
                    {benefit.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE ARCHITECTURE BLUEPRINT MAP */}
        <div id="blueprint">
          <ServiceArchitecture category={service.category} serviceName={service.title} />
        </div>

        {/* 6. PROCESS TIMELINE STEPPER */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-border/40">
          <SectionHeader
            tag="Our Workflow"
            title={<>Timeline & <span className="text-cyan-400">Delivery Process</span></>}
            subtitle="How we transition your workflows from requirements gathering to robust production setups."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl border border-border/40 relative space-y-4 shadow-sm hover:border-cyan-500/20 transition-all duration-300">
                <div className="absolute top-4 right-4 text-3xl font-extrabold text-cyan-500/10 font-mono">
                  {step.num}
                </div>
                <h4 className="text-base sm:text-lg font-display font-bold text-foreground pt-4">{step.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. CLIENT TESTIMONIALS */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-border/40 relative">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[95px] pointer-events-none -z-10" />
          
          <SectionHeader
            tag="Validation"
            title={<>Client <span className="text-cyan-400">Outcomes & Reviews</span></>}
            subtitle="See what our clients say about partnering with our senior engineering teams."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                  <div key={index} className="glass-card p-8 rounded-xl border border-border/40 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between relative group">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic relative z-10 mb-8">
                      &ldquo;{item.testimonial}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 border-t border-border/40 pt-6">
                      <div className={`w-10 h-10 rounded-full ${avatarStyle} flex items-center justify-center font-bold font-mono text-xs shadow-md shrink-0`}>
                        {getInitials(item.name)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {item.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </section>

        {/* 8. FAQ ACCORDION SECTION */}
        <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 border-t border-border/40 relative">
          <div className="absolute bottom-[10%] left-[-15%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

          <SectionHeader
            tag="Faqs"
            title={<>Dedicated Service <span className="text-cyan-400">Faq Details</span></>}
            subtitle="Read quick technical answers regarding project durations, setups, and developer access."
            align="center"
            className="mb-16"
          />

          <ServiceFaqAccordion faqs={service.faqs} />
        </section>

        {/* 9. CTA CONVERSION BLOCK */}
        <div className="py-12 border-t border-border/40">
          <CtaBlock
            title={`Ready to scale your ${service.title}?`}
            description="Schedule a free 30-minute consultation with a senior architect to discuss your budget, setup requirements, and timeline milestones."
            btnText="Book Free Consultation"
            btnHref="/contact"
          />
        </div>
      </div>
    </>
  );
}
