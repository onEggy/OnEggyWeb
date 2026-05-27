import React from "react";
import { Metadata } from "next";
import { Terminal, Cpu, Eye, Lock, Rocket, Target, Users } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";

export const metadata: Metadata = {
  title: "About Us | OnEggy Technologies",
  description: "At OnEggy Technologies, we help modern startups and enterprises architect high-performance, cost-effective infrastructures. Learn about our story, mission, and DevOps automation culture.",
  alternates: {
    canonical: "https://www.oneggy.com/about",
  },
};

const philosophy = [
  {
    icon: <Terminal className="h-5 w-5 text-cyan-400" />,
    title: "Code-First Infrastructure",
    desc: "We enforce zero manually configured servers. Everything we build is structured entirely in declarative, reusable Terraform and Helm templates.",
  },
  {
    icon: <Eye className="h-5 w-5 text-teal-400" />,
    title: "Observability-First Sizing",
    desc: "We believe in full telemetry. We set up active metrics dashboards and thresholds alerts on top of every EKS cluster before live launch.",
  },
  {
    icon: <Cpu className="h-5 w-5 text-indigo-400" />,
    title: "Automated Release Guards",
    desc: "No developer should crash production. We configure automated CI/CD pipeline tests, lints, and vulnerability scans to block buggy commits.",
  },
  {
    icon: <Lock className="h-5 w-5 text-cyan-400" />,
    title: "100% Client Ownership",
    desc: "Security and control belong to you. We commit code directly to your private repositories and configure keys in secure Vault stores.",
  },
];

const focusAreas = [
  {
    icon: <Rocket className="h-6 w-6 text-cyan-400" />,
    title: "Startup Acceleration",
    desc: "We help early-stage teams establish reliable, compliant AWS landing zones in weeks instead of months, allowing founders to focus purely on product engineering.",
  },
  {
    icon: <Target className="h-6 w-6 text-teal-400" />,
    title: "Enterprise Standardization",
    desc: "We perform audits, restructure multi-account settings, rightsizes databases, and build scalable infrastructure clusters matching global compliance regulations.",
  },
  {
    icon: <Users className="h-6 w-6 text-indigo-400" />,
    title: "Hand-in-Hand Collaboration",
    desc: "We work directly with your in-house engineering team, running hand-off workshops and providing clean developer self-service templates (IDPs) to speed up iterations.",
  },
];

export default function AboutPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us | OnEggy Technologies",
    "description": "At OnEggy Technologies, we help modern startups and enterprises architect high-performance, cost-effective infrastructures. Learn about our story, mission, and DevOps automation culture.",
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
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[95px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none -z-10 animate-pulse" />

      {/* Hero Header */}
      <SectionHeader
        tag="About OnEggy"
        title={<>Your Partners in <span className="gradient-text">Cloud & Tech Excellence</span></>}
        subtitle="At OnEggy Technologies, we help modern startups and enterprises architect high-performance, cost-effective infrastructures. We merge state-of-the-art automation tools with expert product engineering."
        align="left"
        className="max-w-3xl"
      />

      {/* Company Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            OnEggy Technologies was founded by senior cloud architects who grew tired of seeing scaling startups struggle with unstable configurations, manual console clicks, and skyrocketing AWS bills. We realized that while modern cloud tools are incredibly powerful, they are also highly complex. 
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            We built OnEggy to bridge this gap. We function as a specialized infrastructure squad-as-a-service, partnering with CTOs and founders to deliver production-grade configurations, automated CI/CD releases, and rigorous security postures. Today, we manage critical cloud infrastructure for businesses across fintech, healthcare, and SaaS.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="glass-card p-8 rounded-2xl border border-border/40 relative overflow-hidden shadow-2xl flex flex-col justify-center h-[260px]">
            <div className="absolute top-4 right-4 text-xs font-mono font-semibold text-cyan-500">core values</div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Mission & Vision</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                To empower engineering teams to build with confidence. We believe that stable, secure, and auto-scaling infrastructure is not a luxury, but the baseline requirement for any company looking to grow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Engineering Philosophy */}
      <div className="space-y-12 border-t border-border/40 pt-16">
        <div className="max-w-xl space-y-3">
          <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest">How We Build</span>
          <h2 className="text-3xl font-bold text-foreground">Our Engineering Philosophy</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            We hold ourselves to strict architectural standards. Our setups follow these four core principles:
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophy.map((item, index) => (
            <StaggerItem
              key={index}
              className="glass-card hover:border-cyan-500/40 p-6 rounded-xl space-y-4 transition-all duration-300 flex flex-col justify-between h-[220px] group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-500 transition-colors">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Startup-First Approach */}
      <div className="space-y-12 border-t border-border/40 pt-16">
        <div className="max-w-xl space-y-3">
          <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest">Our Focus</span>
          <h2 className="text-3xl font-bold text-foreground">Collaborating with Tech Builders</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            We adapt our support structures to fit your organization&apos;s exact needs:
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <StaggerItem
              key={index}
              className="glass-card p-6 rounded-xl border border-border/40 hover:border-cyan-500/35 transition-all duration-300 space-y-4 group"
            >
              <div className="w-11 h-11 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                {area.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-500 transition-colors">{area.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {area.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Trust Block */}
      <div className="py-12 border-t border-border/40">
        <CtaBlock
          title="Looking for a trusted infrastructure partner?"
          description="Let's hop on a 30-minute cloud-native engineering audit to find waste blocks and secure your EKS or AWS environments."
          btnText="Book Free Assessment"
          btnHref="/contact"
        />
      </div>
    </div>
  </>
);
}
