import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Terminal, 
  Cpu, 
  Eye, 
  Lock, 
  CheckCircle,
  Sparkles
} from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn, FadeUp } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";
import { profile as teamProfiles } from "../../../public/data/teamSection.json";

export const metadata: Metadata = {
  title: "About Us & Team | OnEggy Technologies",
  description: "Meet the cloud and platform engineers powering modern startups and enterprises. Learn about our story, DevOps culture, and technical principles.",
  alternates: {
    canonical: "https://www.oneggy.com/about",
  },
};

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

const companyValues = [
  {
    icon: <Lock className="h-4.5 w-4.5 text-cyan-400" />,
    title: "100% Client Ownership",
    desc: "We enforce zero proprietary lock-in. Every line of Terraform, Helm, and application code lives inside your private repositories from day one.",
  },
  {
    icon: <Terminal className="h-4.5 w-4.5 text-teal-400" />,
    title: "Code-First Infrastructure",
    desc: "We believe console ClickOps changes are a liability. If infrastructure isn't defined inside git-versioned code, it doesn't exist in production.",
  },
  {
    icon: <Eye className="h-4.5 w-4.5 text-indigo-400" />,
    title: "Observability-First Sizing",
    desc: "We never launch blindly. Every workload we deploy is pre-configured with active CPU/memory thresholds, Slack alerts, and Prometheus logs.",
  },
  {
    icon: <Cpu className="h-4.5 w-4.5 text-cyan-400" />,
    title: "Engineering Excellence",
    desc: "We avoid shortcuts. We build multi-account landing zones, Transit Gateway network routing, and automated CI/CD security check gates.",
  },
];

export default function AboutPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us & Team | OnEggy Technologies",
    "description": "Meet the cloud and platform engineers powering modern startups and enterprises. Learn about our story, DevOps culture, and technical principles.",
    "publisher": {
      "@type": "Organization",
      "name": "OnEggy Technologies",
      "url": "https://www.oneggy.com"
    }
  };

  // Separate real profiles based on designation/position
  const leadership = teamProfiles.filter(
    (p) => p.position.toLowerCase() === "founder" || p.position.toLowerCase().includes("mentor")
  );

  const engineering = teamProfiles.filter(
    (p) => !leadership.some((l) => l.name === p.name)
  );

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
        "name": "About",
        "item": "https://www.oneggy.com/about"
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
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-28">
        {/* Decorative Blur Orbs */}
        <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[95px] pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none -z-10" />

        {/* 1. HERO SECTION */}
        <div className="relative pt-8 pb-4 flex flex-col items-start space-y-6 max-w-4xl">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm text-xs font-mono text-cyan-400 shadow-sm animate-pulse">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Meet the Tech Architects</span>
            </div>
          </FadeUp>
          <SectionHeader
            title={<>Built By Passionate <span className="text-cyan-400">Cloud & Product Engineers</span></>}
            subtitle="At OnEggy Technologies, we replace manual operational friction with standardized code templates. We merge expert infrastructure design with active development masterclasses."
            align="left"
            className="mb-0"
          />
        </div>

        {/* 2. COMPANY STORY & DNA (Asymmetric Split Screen) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-border/20 pt-16">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Our Story & DNA</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              OnEggy Technologies was founded by senior cloud architects who grew tired of seeing scaling startups struggle with unstable configurations, manual console clicks, and skyrocketing AWS bills. We realized that while modern cloud tools are incredibly powerful, they are also highly complex.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We function as a specialized infrastructure squad-as-a-service, partnering with CTOs and founders to deliver production-grade configurations, automated CI/CD releases, and rigorous security postures. Today, we manage critical cloud infrastructure for businesses across fintech, healthcare, and SaaS.
            </p>
          </div>
          <div className="lg:col-span-6 lg:pl-6">
            <div className="border border-border bg-background/20 backdrop-blur-xs p-8 rounded-xl relative overflow-hidden shadow-md flex flex-col justify-center min-h-[200px]">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-cyan-500 uppercase tracking-wider">operations DNA</div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground font-mono">Zero ClickOps. 100% GitOps.</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We believe that stable, secure, and auto-scaling infrastructure is not a luxury, but the baseline requirement for any company looking to grow. That&apos;s why we enforce declarative setups where every configuration resides in version-controlled git code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. LEADERSHIP & ADVISORY (Differentiated circular layout) */}
        <div className="space-y-12 border-t border-border/20 pt-16">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest">Leadership Team</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Tech & Strategy Direction</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Meet the strategic mentors and founders guiding OnEggy Technologies:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {leadership.map((leader, index) => {
              const avatarStyle = getAvatarStyle(leader.name);
              return (
                <FadeIn
                  key={leader.name}
                  delay={index * 0.1}
                  className="bg-background/25 border border-border/40 hover:border-cyan-500/30 p-6 rounded-xl flex gap-5 items-start transition-all duration-300 relative group"
                >
                  <div className="absolute top-4 right-4">
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-cyan-400 transition-colors"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </Link>
                  </div>

                  {/* Circular profile image with hover borders */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-background/50 border border-border/45 shrink-0 shadow group-hover:border-cyan-500/30 transition-colors">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.alt || leader.name}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className={`w-full h-full ${avatarStyle} flex items-center justify-center font-bold text-2xl`}>
                        {getInitials(leader.name)}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 flex-1 min-w-0">
                    <div>
                      <h3 className="text-base font-bold text-foreground group-hover:text-cyan-500 transition-colors leading-snug">
                        {leader.name}
                      </h3>
                      <span className="text-[10px] font-semibold text-cyan-500 font-mono tracking-wider block mt-0.5">
                        {leader.position}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {leader.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* 4. ENGINEERING TEAM SECTION (High density, borderless card layout) */}
        <div className="space-y-12 border-t border-border/20 pt-16">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest">Engineering Squad</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Developers, Architects & Designers</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The technical specialists automating configurations and writing clean software codebases:
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineering.map((member) => {
              const avatarStyle = getAvatarStyle(member.name);
              return (
                <StaggerItem
                  key={member.name}
                  className="bg-transparent border border-border/30 hover:border-cyan-500/25 p-5 rounded-xl flex flex-col justify-between min-h-[220px] transition-all duration-300 group relative"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between w-full">
                      {/* Circular Avatar */}
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-background/50 border border-border/40 shrink-0 shadow-xs group-hover:border-cyan-500/30 transition-colors">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.alt || member.name}
                            fill
                            sizes="48px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className={`w-full h-full ${avatarStyle} flex items-center justify-center font-bold text-sm`}>
                            {getInitials(member.name)}
                          </div>
                        )}
                      </div>
                      
                      <Link
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-cyan-400 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </Link>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                        {member.name}
                      </h3>
                      <span className="text-[10px] font-mono text-cyan-500 font-semibold tracking-wider block">
                        {member.position}
                      </span>
                      <p className="text-xs text-muted-foreground leading-relaxed pt-1 select-text">
                        {member.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="pt-3 border-t border-border/20 mt-4 flex items-center justify-between text-[9px] font-mono text-muted-foreground uppercase font-bold">
                    <span>Platform Engineer</span>
                    <span className="text-green-400 font-semibold">• Online</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* 5. ENGINEERING VALUES SECTION (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-border/20 pt-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest">Our Standards</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Engineering Principles</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We enforce strict compliance checks, code reviews, and automated standards to guarantee absolute reliability.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {companyValues.map((value, i) => (
              <div 
                key={i} 
                className="p-5 rounded-xl border border-border/40 bg-background/25 flex gap-4 items-start group hover:border-cyan-500/25 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {value.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. WORK CULTURE SECTION (Asymmetric blocks) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-border/20 pt-16">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Collaborative Work DNA</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We operate as a remote-first, asynchronous-heavy engineering squad. We avoid structural bureaucracy, administrative alignment blocks, and meeting bloat, allowing developers to focus purely on creating automated, clean configurations.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-foreground font-semibold">100% Dedicated Slack & Jira workflows</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-foreground font-semibold">Weekly peer-reviews and codebase refactoring sprints</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-foreground font-semibold">Stipends for continuous cloud certifications (AWS, CNCF)</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-6">
            <div className="border border-border bg-background/25 p-8 rounded-xl relative overflow-hidden shadow-md flex flex-col justify-center min-h-[200px]">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-cyan-500 uppercase tracking-wider">learning culture</div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground font-mono">Continuous Evolution</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Technology changes, but solid engineering fundamentals remain. We sponsor continuous education, certifications, and active experimentations inside isolated cloud sandbox structures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. JOIN OUR TEAM CTA */}
        <div className="py-8 border-t border-border/20">
          <CtaBlock
            title="Want to build systems with us?"
            description="Explore our open roles for DevOps professionals, product builders, and UI developers."
            btnText="Browse Open Positions"
            btnHref="/careers"
          />
        </div>
      </div>
    </>
  );
}
