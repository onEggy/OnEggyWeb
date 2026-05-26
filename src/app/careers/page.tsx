"use client";

import React from "react";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";

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

export default function CareersPage() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-20">
      
      {/* Decorative Orb */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[90px] pointer-events-none" />

      {/* Header */}
      <SectionHeader
        tag="Join the Team"
        title={<>Build the Future of <span className="gradient-text">Cloud Infrastructure</span></>}
        subtitle="At OnEggy Technologies, we value autonomy, technical mastery, and transparency. Join our remote-first, high-growth engineering team and tackle critical cloud challenges."
        align="left"
      />

      {/* Openings Grid */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-foreground">Open Roles</h2>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openings.map((role, index) => (
            <StaggerItem
              key={index}
              className="glass-card hover:border-cyan-500/40 p-8 rounded-xl flex flex-col justify-between transition-all group cursor-pointer"
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
                <span className="text-xs font-semibold text-foreground group-hover:text-cyan-500 inline-flex items-center gap-1">
                  Apply Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <CtaBlock
        title="Don't see a matching position?"
        description="We are always looking for smart engineers, cloud specialists, and builders. Send us your resume and we will contact you when roles open."
        btnText="Send Open Application"
        btnHref="/contact"
      />
    </div>
  );
}
