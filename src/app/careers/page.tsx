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
    icon: <Moon className="h-4.5 w-4.5 text-cyan-400" />,
    title: "Remote-First Autonomy",
    desc: "Work from wherever you are. We prioritize asynchronous documentation over endless daily meetings.",
  },
  {
    icon: <GraduationCap className="h-4.5 w-4.5 text-teal-400" />,
    title: "Continuous Learning Budget",
    desc: "We support certifications (AWS, CKA) and provide stipends for books, tutorials, and bootcamps.",
  },
  {
    icon: <Laptop className="h-4.5 w-4.5 text-indigo-400" />,
    title: "Premium Hardware Stipend",
    desc: "Get paid to set up your home workspace. We provide stipends for monitors, keyboards, and chairs.",
  },
  {
    icon: <Heart className="h-4.5 w-4.5 text-cyan-400" />,
    title: "Comprehensive Healthcare",
    desc: "Full medical coverage for you and your family to ensure you are supported in times of need.",
  },
];

export default function CareersPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Careers at OnEggy Technologies",
    "description": "Join our remote-first, high-growth cloud-native engineering team. Explore open positions for DevOps engineers, frontend builders, and platform specialists.",
    "publisher": {
      "@type": "Organization",
      "name": "OnEggy Technologies",
      "url": "https://www.oneggy.com"
    }
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
        "name": "Careers",
        "item": "https://www.oneggy.com/careers"
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
      <div className="relative max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-24">
        {/* Decorative Orbs */}
        <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[95px] pointer-events-none -z-10 animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none -z-10" />

        {/* Header */}
        <SectionHeader
          tag="Join the Team"
          title={<>Build the Future of <span className="gradient-text">Cloud Infrastructure</span></>}
          subtitle="At OnEggy Technologies, we value autonomy, technical mastery, and transparency. Join our remote-first, high-growth engineering team and tackle critical cloud challenges."
          align="left"
          className="max-w-3xl"
        />

        {/* Culture Section (Asymmetric split block) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Our Team Culture</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We are a squad of master builders, developers, and cloud engineers. We value ownership, documentation, and continuous automation. We avoid administrative bloat and encourage team members to experiment with bleeding-edge technology.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              If you enjoy refactoring legacy configs, designing autoscaling cluster nodes, and implementing strict security structures, you will fit right in.
            </p>
          </div>
          <div className="lg:col-span-6 lg:pl-6">
            <div className="border border-border bg-background/25 p-8 rounded-xl relative overflow-hidden shadow-md flex flex-col justify-center min-h-[180px]">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-cyan-500 uppercase tracking-wider">engineering baseline</div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground font-mono">Zero ClickOps. 100% Automation.</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We believe infrastructure should live inside git. If a resource is not defined in Terraform, it does not exist in production. This is our operational baseline.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section (Split columns instead of cards grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-border/20 pt-16">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest">Perks</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Engineering Benefits</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We provide everything you need to perform at your absolute best:
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((feat) => (
                <StaggerItem
                  key={feat.title}
                  className="bg-background/20 border border-border/40 p-5 rounded-xl flex gap-4 items-start hover:border-cyan-500/25 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {feat.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-cyan-500 transition-colors">{feat.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Openings Rebuilt as a clean Table-style listing */}
        <div className="space-y-8 border-t border-border/20 pt-16">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest">Opportunities</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Open Roles</h2>
          </div>

          <div className="border border-border/30 rounded-xl overflow-hidden bg-background/20 backdrop-blur-sm shadow-md">
            <div className="hidden sm:grid grid-cols-12 gap-4 bg-zinc-900/40 p-4 border-b border-border/30 text-[10px] font-mono text-muted-foreground uppercase font-bold tracking-wider">
              <div className="col-span-5">Role Name</div>
              <div className="col-span-3">Department</div>
              <div className="col-span-3">Location</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            <div className="divide-y divide-border/20">
              {openings.map((role, index) => (
                <Link 
                  href="/contact" 
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 sm:p-5 items-center hover:bg-zinc-900/35 transition-colors group cursor-pointer text-xs sm:text-sm font-semibold"
                >
                  <div className="col-span-5 space-y-1 sm:space-y-0">
                    <span className="sm:hidden block text-[9px] font-mono text-cyan-500 uppercase tracking-wider">{role.department}</span>
                    <span className="text-foreground group-hover:text-cyan-400 transition-colors text-sm sm:text-base font-bold">{role.title}</span>
                  </div>
                  <div className="col-span-3 hidden sm:block text-muted-foreground font-mono text-xs">{role.department}</div>
                  <div className="col-span-3 text-muted-foreground text-xs font-mono flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
                    <span>{role.location}</span>
                  </div>
                  <div className="col-span-1 text-right flex items-center justify-end sm:opacity-0 group-hover:opacity-100 transition-all">
                    <span className="text-xs font-bold text-cyan-500 inline-flex items-center gap-0.5">
                      Apply <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="py-8 border-t border-border/20">
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
