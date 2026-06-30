import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/animations/motion-wrappers";
import { CtaBlock } from "@/components/common/cta-block";
import { OrbitMark } from "@/components/common/orbit-mark";

export const metadata: Metadata = {
  title: "Careers | OnEggy Technologies",
  description: "Join our remote-first, high-growth cloud-native engineering team. Explore open positions for DevOps engineers, frontend builders, and platform specialists.",
  alternates: {
    canonical: "https://www.oneggy.com/careers",
  },
  openGraph: {
    title: "Careers | OnEggy Technologies",
    description: "Join our remote-first, high-growth cloud-native engineering team. Explore open positions for DevOps engineers, frontend builders, and platform specialists.",
    url: "https://www.oneggy.com/careers",
    siteName: "OnEggy Technologies",
    type: "website",
  },
};

const openings = [
  {
    title: "Senior DevOps Engineer",
    type: "Full-Time",
    location: "Remote / Gurgaon, India",
    department: "Infrastructure",
  },
  {
    title: "Next.js & Frontend Developer",
    type: "Full-Time",
    location: "Remote / Noida, India",
    department: "Product Engineering",
  },
  {
    title: "DevOps Engineer Intern",
    type: "Internship (6 Months)",
    location: "Remote",
    department: "Infrastructure",
  },
  {
    title: "Lead Generation Specialist",
    type: "Full-Time",
    location: "Remote",
    department: "Business Growth",
  },
];

const benefits = [
  {
    title: "Remote-First Autonomy",
    desc: "Work from wherever you are. We prioritize asynchronous documentation over endless daily meetings.",
  },
  {
    title: "Continuous Learning Budget",
    desc: "We support certifications (AWS, CKA) and provide stipends for books, tutorials, and bootcamps.",
  },
  {
    title: "Premium Hardware Stipend",
    desc: "Get paid to set up your home workspace. We provide stipends for monitors, keyboards, and chairs.",
  },
  {
    title: "Comprehensive Healthcare",
    desc: "Full medical coverage for you and your family to ensure you are supported in times of need.",
  },
];

// Map UI role.type strings to schema.org employmentType enum values.
const employmentTypeMap: Record<string, string> = {
  "Full-Time": "FULL_TIME",
  "Internship (6 Months)": "INTERN",
};

export default function CareersPage() {
  const jobPostingSchemas = openings.map((role) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": role.title,
    "description": `${role.title} (${role.type}) on the ${role.department} team at OnEggy Technologies. Join our remote-first, high-growth cloud-native engineering team and tackle critical cloud challenges.`,
    "datePosted": "2026-06-01",
    "employmentType": employmentTypeMap[role.type] ?? "OTHER",
    "directApply": true,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "OnEggy Technologies",
      "sameAs": "https://www.oneggy.com",
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gurgaon",
        "addressRegion": "Delhi NCR",
        "addressCountry": "IN",
      },
    },
  }));

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
        "name": "Careers",
        "item": "https://www.oneggy.com/careers"
      }
    ]
  };

  return (
    <>
      {jobPostingSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 sm:pt-16 lg:pt-20">
        <span className="eyebrow mb-6">Join the team</span>
        <h1 className="display text-5xl sm:text-6xl lg:text-[4rem] mt-5 max-w-[20ch]">
          Build the future of <em>cloud infrastructure.</em>
        </h1>
        <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
          At OnEggy Technologies, we value autonomy, technical mastery, and transparency. Join our
          remote-first, high-growth engineering team and tackle critical cloud challenges.
        </p>
      </section>

      {/* Why work here — engineering baseline */}
      <section className="border-y border-border bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-5">Our team culture</span>
            <p className="display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mt-4">
              Zero ClickOps. <em>100% automation.</em>
            </p>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-[52ch]">
              We build automation pipelines, deploy autoscaling clusters, and manage secure
              environments. We skip bureaucracy and focus entirely on engineering craftsmanship.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative surface-card rounded-2xl p-8 overflow-hidden">
              <OrbitMark size={130} className="absolute -top-8 -right-8 opacity-[0.07] pointer-events-none" />
              <p className="text-xs font-mono uppercase tracking-[0.1em] text-primary-strong">Engineering baseline</p>
              <p className="mt-4 display text-2xl leading-snug">
                If a resource isn&rsquo;t defined in Terraform, it doesn&rsquo;t exist in <em>production.</em>
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                We believe infrastructure should live inside git. That&rsquo;s our operational baseline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open roles — editorial hairline list */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <FadeUp>
              <span className="eyebrow mb-5">Opportunities</span>
              <h2 className="display text-3xl sm:text-4xl mt-4">Open roles</h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[38ch]">
                Senior engineers, cloud specialists, and automation developers — building dependable
                infrastructure from anywhere.
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-border">
              {openings.map((role, i) => (
                <li
                  key={role.title}
                  className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-baseline gap-x-5 sm:gap-x-8 gap-y-3 py-7 border-b border-border"
                >
                  <span className="font-mono text-sm text-primary-strong/70 tabular-nums">
                    0{i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="display text-xl sm:text-2xl text-foreground">{role.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm font-mono text-muted-foreground">
                      <span className="text-primary-strong uppercase tracking-wider">{role.department}</span>
                      <span>{role.type}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    aria-label={`Apply for ${role.title}`}
                    className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 rounded-md border border-primary text-sm font-semibold text-primary-strong hover:bg-primary/10 transition-colors focus-visible:ring-2 focus-visible:ring-primary justify-self-start sm:self-center"
                  >
                    Apply <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits — numbered editorial index */}
      <section className="border-t border-border bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow mb-5">Perks</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">Engineering benefits</h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[38ch]">
              Core frameworks and resources to support your work.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="border-t border-border">
              {benefits.map((feat, i) => (
                <li key={feat.title} className="grid grid-cols-[auto_1fr] gap-x-6 py-7 border-b border-border">
                  <span className="font-mono text-sm text-primary-strong/70 tabular-nums">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl text-foreground">{feat.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[58ch]">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="py-16 sm:py-20 border-t border-border">
        <CtaBlock
          title="Don't see a matching position?"
          description="Send us an open application. We are always looking for smart engineers, cloud specialists, and automation developers to join our team."
          btnText="Send Open Application"
          btnHref="/contact"
        />
      </div>
    </>
  );
}
