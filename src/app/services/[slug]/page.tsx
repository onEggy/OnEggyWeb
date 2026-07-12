import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getServiceBySlug, servicesData } from "@/lib/services-data";
import { ServiceArchitecture } from "@/components/services/service-architecture";
import { ServiceFaqAccordion } from "@/components/services/service-faq-accordion";
import { OrbitMark } from "@/components/common/orbit-mark";
import { FadeUp } from "@/components/animations/motion-wrappers";
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
    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
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

  // Breadcrumb structured data (Home > Services > {service.title})
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
        "name": "Services",
        "item": "https://www.oneggy.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://www.oneggy.com/services/${service.slug}`
      }
    ]
  };

  // FAQ structured data built from the service FAQ entries
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Category-aware intro/timeline copy (problems/solutions arrays stay as-is)
  const categoryCopy = {
    cloud: {
      challengeIntro: "Organizations frequently hit compliance, deployment, and cost barriers due to legacy un-managed cloud setups:",
      solutionIntro: "We codify secure infrastructure policies and deploy automated workflows to optimize reliability:",
      timelineSubtitle: "How we transition your cloud workloads from initial audit reviews to governed production setups.",
      ctaTitle: "Optimize your AWS Cloud posture.",
      ctaDesc: "Schedule a 30-minute Cloud Optimization audit to identify redundant assets, right-size compute nodes, and cut waste.",
      ctaButton: "Get Free Cloud Audit"
    },
    devops: {
      challengeIntro: "Engineering teams frequently hit release-velocity, reliability, and toil barriers due to manual, un-automated pipelines:",
      solutionIntro: "We codify automated CI/CD pipelines and infrastructure-as-code workflows to optimize delivery reliability:",
      timelineSubtitle: "How we transition your delivery pipelines from initial audit reviews to governed, automated production workflows.",
      ctaTitle: "Automate your release lifecycle.",
      ctaDesc: "Partner with our platform team to eliminate developer toil, build automated CI/CD guardrails, and scale securely.",
      ctaButton: "Schedule DevOps Consult"
    },
    software: {
      challengeIntro: "Product teams frequently hit code quality, scalability, and maintainability barriers due to rushed, un-architected applications:",
      solutionIntro: "We engineer clean, well-tested application code and modular product architecture to optimize quality and velocity:",
      timelineSubtitle: "How we transition your product and application code from initial audit reviews to governed, production-ready releases.",
      ctaTitle: "Accelerate product engineering.",
      ctaDesc: "Discuss product roadmaps, cross-platform React Native performance, or Next.js migrations with senior software leads.",
      ctaButton: "Book Engineering Consult"
    }
  }[service.category];

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

  // Category-aware testimonials (restrained pull-quotes)
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

  return (
    <>
      {/* Inject Structured Data Schema */}
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
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* 1. HERO — editorial, two-column with engagement snapshot */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-16 sm:pt-10 lg:pt-14 lg:pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2.5 text-xs font-mono text-muted-foreground">
            <li><Link href="/" className="hover:text-primary-strong transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-muted-foreground/50">/</li>
            <li><Link href="/services" className="hover:text-primary-strong transition-colors">Services</Link></li>
            <li aria-hidden="true" className="text-muted-foreground/50">/</li>
            <li className="text-foreground truncate max-w-[50vw]">{service.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Editorial copy */}
          <div className="lg:col-span-7 lg:pr-4">
            <span className="eyebrow mb-6">{categoryLabel}</span>
            <h1 className="display text-4xl sm:text-5xl lg:text-[3.6rem] mt-5">
              {service.title} — <em>{service.headline}</em>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-[52ch]">
              {service.subtext}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-primary"
              >
                Request advisory assessment <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#blueprint"
                className="inline-flex items-center justify-center gap-1.5 h-12 px-3 text-sm font-semibold text-foreground hover:text-primary-strong transition-colors"
              >
                Review framework map <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Tech ecosystem row */}
            <div className="mt-12 pt-7 border-t border-border">
              <p className="text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground/80 mb-4">
                Built on
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {service.techs.map((tech) => {
                  const logo = getTechLogo(tech);
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono bg-surface-subtle border border-border text-foreground/80"
                    >
                      {logo && (
                        <span className="relative w-3.5 h-3.5 shrink-0">
                          <Image src={logo} alt="" fill sizes="14px" className="object-contain" />
                        </span>
                      )}
                      <span>{tech}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Engagement snapshot card */}
          <div className="lg:col-span-5">
            <div className="relative surface-card rounded-2xl p-7 overflow-hidden">
              <OrbitMark size={120} className="absolute -top-6 -right-6 opacity-[0.06] pointer-events-none" />
              <p className="text-xs font-mono uppercase tracking-[0.1em] text-primary-strong relative">
                Engagement at a glance
              </p>
              <dl className="mt-6 relative">
                <div className="flex items-center justify-between gap-4 py-3.5 border-b border-border">
                  <dt className="text-sm text-muted-foreground">Discipline</dt>
                  <dd className="text-sm font-semibold text-foreground text-right">{categoryLabel}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3.5 border-b border-border">
                  <dt className="text-sm text-muted-foreground">Capabilities</dt>
                  <dd className="text-sm font-semibold text-foreground">{service.features.length} core areas</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3.5 border-b border-border">
                  <dt className="text-sm text-muted-foreground">Foundations</dt>
                  <dd className="text-sm font-semibold text-foreground">{service.techs.length} technologies</dd>
                </div>
              </dl>
              {service.benefits[0] && (
                <div className="mt-6 pt-6 border-t border-border relative">
                  <div className="display text-4xl text-foreground tabular-nums">{service.benefits[0].num}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{service.benefits[0].label}</div>
                </div>
              )}
              <Link
                href="/contact"
                className="mt-6 relative inline-flex items-center gap-1.5 text-sm font-semibold text-primary-strong hover:gap-2.5 transition-all"
              >
                Get a tailored proposal <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE vs. THE SOLUTION — editorial two-column */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-5">Strategic context</span>
              <h2 className="display text-3xl sm:text-4xl mt-4">
                Business challenge &amp; <em>alignment.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-base text-muted-foreground leading-relaxed max-w-[54ch]">
                How we identify operational exposures, cost leakages, and pipeline friction to design
                compliant system solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Challenges */}
            <FadeUp>
              <p className="text-xs font-mono uppercase tracking-[0.12em] text-destructive/90 mb-5">
                Operational vulnerabilities
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-2">
                {categoryCopy.challengeIntro}
              </p>
              <ul className="border-t border-border mt-6">
                {service.problems.map((problem, idx) => (
                  <li key={idx} className="grid grid-cols-[auto_1fr] gap-x-4 py-5 border-b border-border">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" aria-hidden="true" />
                    <span className="text-base text-foreground/90 leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Solutions */}
            <FadeUp delay={0.1}>
              <p className="text-xs font-mono uppercase tracking-[0.12em] text-primary-strong mb-5">
                Strategic resolution model
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-2">
                {categoryCopy.solutionIntro}
              </p>
              <ul className="border-t border-border mt-6">
                {service.solutions.map((solution, idx) => (
                  <li key={idx} className="grid grid-cols-[auto_1fr] gap-x-4 py-5 border-b border-border">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                    <span className="text-base text-foreground/90 leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3. METRICS / BENEFITS BAND */}
      <section className="border-y border-border bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <span className="eyebrow mb-5">Measured impact</span>
              <h2 className="display text-3xl sm:text-4xl mt-4">Outcomes, not slideware.</h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[34ch]">
                Every engagement is measured against the numbers that move your business and your
                on-call rotation.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10 border-t border-border pt-10">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx}>
                    <div className="display text-5xl sm:text-6xl text-foreground tabular-nums">
                      {benefit.num}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground max-w-[22ch]">
                      {benefit.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICE FEATURES — editorial numbered list */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="eyebrow mb-5">Deliverables</span>
              <h2 className="display text-3xl sm:text-4xl mt-4">
                Core scope &amp; <em>capabilities.</em>
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[38ch]">
                Detailed technical features engineered following the industry&rsquo;s absolute best
                practices.
              </p>
            </div>

            <div className="lg:col-span-8">
              <ul className="border-t border-border">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-8 py-7 border-b border-border group"
                  >
                    <span className="font-mono text-sm text-primary-strong/70 tabular-nums pt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl text-foreground group-hover:text-primary-strong transition-colors">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-base text-foreground/80 leading-relaxed max-w-[56ch]">
                        {feature.desc}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-[56ch]">
                        {feature.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ARCHITECTURE BLUEPRINT */}
      <div id="blueprint" className="scroll-mt-24">
        <ServiceArchitecture category={service.category} serviceName={service.title} />
      </div>

      {/* 6. PROCESS TIMELINE */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-5">Methodology</span>
              <h2 className="display text-3xl sm:text-4xl mt-4">
                Advisory &amp; delivery <em>timeline.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-base text-muted-foreground leading-relaxed max-w-[54ch]">
                {categoryCopy.timelineSubtitle}
              </p>
            </div>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border divide-y divide-border sm:divide-y-0">
            {processSteps.map((step, idx) => (
              <li
                key={step.num}
                className={`py-8 lg:px-7 lg:first:pl-0 lg:last:pr-0 lg:border-l lg:first:border-l-0 lg:border-border ${idx % 2 === 1 ? "sm:border-l sm:border-border" : ""}`}
              >
                <span className="font-mono text-sm text-primary-strong/70 tabular-nums">{step.num}</span>
                <h3 className="font-display text-xl text-foreground mt-3">{step.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS — restrained pull-quotes */}
      <section className="border-t border-border bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">
            <div className="lg:col-span-5">
              <span className="eyebrow mb-5">Impact validation</span>
              <h2 className="display text-3xl sm:text-4xl mt-4">
                Enterprise success <em>stories.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <p className="text-base text-muted-foreground leading-relaxed max-w-[54ch]">
                How we&rsquo;ve partnered with engineering leadership teams to deliver key
                modernizations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayReviews.map((item, index) => (
              <figure
                key={index}
                className="surface-card rounded-2xl p-7 flex flex-col justify-between"
              >
                <blockquote className="display text-lg text-foreground/90 leading-snug">
                  &ldquo;{item.testimonial}&rdquo;
                </blockquote>
                <figcaption className="mt-7 pt-5 border-t border-border flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-muted border border-border flex items-center justify-center font-mono text-xs text-muted-foreground shrink-0">
                    {getInitials(item.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-base text-foreground truncate">{item.name}</span>
                    <span className="block text-xs font-mono uppercase tracking-wider text-muted-foreground truncate">
                      {item.designation}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow mb-5">Q&amp;A</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">
              Practice FAQ <em>details.</em>
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[38ch]">
              Advisory answers on engagement scope, billing schedules, and compliance configurations.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ServiceFaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* 9. CTA CONVERSION BLOCK — editorial */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">
          <div className="relative surface-card rounded-2xl p-8 sm:p-12 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <OrbitMark size={140} className="absolute -top-10 -right-10 opacity-[0.06] pointer-events-none" />
            <div className="lg:col-span-8 relative">
              <h2 className="display text-3xl sm:text-4xl">
                {categoryCopy.ctaTitle}
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[58ch]">
                {categoryCopy.ctaDesc}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end relative">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md border border-primary text-primary-strong hover:bg-primary/10 font-semibold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-primary"
              >
                {categoryCopy.ctaButton} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
