import React from "react";
import { Metadata } from "next";
import { Briefcase, MapPin, ArrowRight, Laptop, GraduationCap, Heart, Moon } from "lucide-react";
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
    icon: <Moon className="h-5 w-5 text-cyan-400" />,
    title: "Remote-First Autonomy",
    desc: "Work from wherever you are. We prioritize asynchronous documentation over endless daily meetings.",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-teal-400" />,
    title: "Continuous Learning Budget",
    desc: "We support certifications (AWS, CKA) and provide stipends for books, tutorials, and bootcamps.",
  },
  {
    icon: <Laptop className="h-5 w-5 text-indigo-400" />,
    title: "Premium Hardware Stipend",
    desc: "Get paid to set up your home workspace. We provide stipends for monitors, keyboards, and chairs.",
  },
  {
    icon: <Heart className="h-5 w-5 text-cyan-400" />,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-20">
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

      {/* Culture Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Our Team Culture</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            We are a squad of master builders, developers, and cloud engineers. We value ownership, documentation, and continuous automation. We avoid administrative bloat and encourage team members to experiment with bleeding-edge technology.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            If you enjoy refactoring legacy files, designing autoscaling cluster nodes, and implementing strict security postures, you will fit right in.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="glass-card p-6 rounded-2xl border border-border/40 relative overflow-hidden shadow-2xl flex flex-col justify-center h-[220px]">
            <div className="absolute top-4 right-4 text-[10px] font-mono font-semibold text-cyan-500">core value</div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground">Zero clickops. 100% automation.</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We believe infrastructure should live inside git. If a resource is not defined in Terraform, it does not exist in production. This is our operational baseline.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="space-y-12 border-t border-border/40 pt-16">
        <div className="max-w-xl space-y-3">
          <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest">Perks</span>
          <h2 className="text-3xl font-bold text-foreground">Engineering Benefits</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            We provide everything you need to perform at your absolute best:
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((feat) => (
            <StaggerItem
              key={feat.title}
              className="glass-card p-6 rounded-xl border border-border/40 hover:border-cyan-500/35 transition-all duration-300 flex flex-col justify-between h-[210px] group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-500 transition-colors">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Openings Grid */}
      <div className="space-y-12 border-t border-border/40 pt-16">
        <h2 className="text-3xl font-bold text-foreground">Open Roles</h2>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openings.map((role, index) => (
            <StaggerItem
              key={index}
              className="glass-card hover:border-cyan-500/40 p-8 rounded-xl flex flex-col justify-between transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-cyan-500 uppercase tracking-wider">{role.department}</span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                  {role.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-3.5 w-3.5" /> {role.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {role.location}
                  </span>
                </div>
              </div>
              <div className="flex justify-end pt-6">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-foreground group-hover:text-cyan-500 inline-flex items-center gap-1 cursor-pointer"
                >
                  Apply Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Bottom CTA */}
      <div className="py-12 border-t border-border/40">
        <CtaBlock
          title="Don't see a matching position?"
          description="Send us an open application. We are always looking for smart engineers, cloud specialists, and automation developers to join our growing team."
          btnText="Send Open Application"
          btnHref="/contact"
        />
      </div>
    </div>
  </>
);
}
