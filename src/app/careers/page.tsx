import React from "react";
import { Metadata } from "next";
import { MapPin, ArrowRight, Laptop, GraduationCap, Heart, Moon } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";
import Link from "next/link";

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
    icon: <Moon className="h-4.5 w-4.5 text-primary" aria-hidden="true" />,
    title: "Remote-First Autonomy",
    desc: "Work from wherever you are. We prioritize asynchronous documentation over endless daily meetings.",
  },
  {
    icon: <GraduationCap className="h-4.5 w-4.5 text-primary" aria-hidden="true" />,
    title: "Continuous Learning Budget",
    desc: "We support certifications (AWS, CKA) and provide stipends for books, tutorials, and bootcamps.",
  },
  {
    icon: <Laptop className="h-4.5 w-4.5 text-primary" aria-hidden="true" />,
    title: "Premium Hardware Stipend",
    desc: "Get paid to set up your home workspace. We provide stipends for monitors, keyboards, and chairs.",
  },
  {
    icon: <Heart className="h-4.5 w-4.5 text-primary" aria-hidden="true" />,
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
      <div className="relative max-w-5xl mx-auto px-6 py-16 sm:py-20 lg:py-28 space-y-24">
        {/* Blueprint Coordinates */}
        <div className="absolute top-2 left-10 font-mono text-sm text-muted-foreground opacity-40 select-none" aria-hidden="true">
          GRID.SEC.K // CAREERS.ECOSYSTEM_V1.1
        </div>

        {/* Header */}
        <SectionHeader
          as="h1"
          tag="Join the Team"
          title={<>Build the Future of <span className="text-primary font-bold">Cloud Infrastructure</span></>}
          subtitle="At OnEggy Technologies, we value autonomy, technical mastery, and transparency. Join our remote-first, high-growth engineering team and tackle critical cloud challenges."
          align="left"
          className="max-w-3xl"
        />

        {/* Culture Section (Asymmetric split block) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground">Our Team Culture</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We build automation pipelines, deploy autoscaling clusters, and manage secure environments. We skip bureaucracy and focus entirely on engineering craftsmanship.
            </p>
          </div>
          <div className="lg:col-span-6 lg:pl-6">
            <div className="surface-card p-8 rounded-xl relative overflow-hidden shadow-md flex flex-col justify-center min-h-[180px]">
              <div className="absolute top-4 right-4 text-sm font-mono text-primary-strong uppercase tracking-wider">engineering baseline</div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground font-mono">Zero ClickOps. 100% Automation.</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We believe infrastructure should live inside git. If a resource is not defined in Terraform, it does not exist in production. This is our operational baseline.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section (Split columns instead of cards grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-border pt-20">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-sm font-mono font-semibold text-primary-strong uppercase tracking-widest">Perks</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground">Engineering Benefits</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Core frameworks and resources to support your work.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((feat) => (
                <StaggerItem
                  key={feat.title}
                  className="surface-card border border-border p-5 rounded-xl flex gap-4 items-start hover:border-primary/25 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded bg-muted border border-border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {feat.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{feat.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Openings Rebuilt as a clean Table-style listing */}
        <div className="space-y-8 border-t border-border pt-20">
          <div className="space-y-2">
            <span className="text-sm font-mono font-semibold text-primary-strong uppercase tracking-widest">Opportunities</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground">Open Roles</h2>
          </div>

          <div className="border border-border rounded-xl overflow-hidden bg-card shadow-md">
            <div className="hidden sm:grid grid-cols-12 gap-4 bg-muted p-4 border-b border-border text-sm font-mono text-muted-foreground uppercase font-bold tracking-wider">
              <div className="col-span-4">Role Name</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-3">Department</div>
              <div className="col-span-2">Location</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            <div className="divide-y divide-border">
              {openings.map((role, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 sm:p-5 items-center hover:bg-muted transition-colors group text-sm"
                >
                  <div className="col-span-4 space-y-1 sm:space-y-0">
                    <span className="sm:hidden block text-sm font-mono text-primary-strong uppercase tracking-wider">{role.department}</span>
                    <span className="text-foreground text-base font-bold">{role.title}</span>
                  </div>
                  <div className="col-span-2 text-muted-foreground font-mono text-sm">
                    <span className="sm:hidden font-semibold text-foreground">Type: </span>{role.type}
                  </div>
                  <div className="col-span-3 hidden sm:block text-muted-foreground font-mono text-sm">{role.department}</div>
                  <div className="col-span-2 text-muted-foreground text-sm font-mono flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span>{role.location}</span>
                  </div>
                  <div className="col-span-1 sm:text-right flex items-center sm:justify-end">
                    <Link
                      href="/contact"
                      aria-label={`Apply for ${role.title}`}
                      className="inline-flex items-center justify-center gap-1 min-h-[44px] px-3 text-sm font-semibold text-primary-strong hover:bg-primary/10 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      Apply <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="py-8 border-t border-border">
          <CtaBlock
            title="Don't see a matching position?"
            description="Send us an open application. We are always looking for smart engineers, cloud specialists, and automation developers to join our team."
            btnText="Send Open Application"
            btnHref="/contact"
          />
        </div>
      </div>
    </>
  );
}
