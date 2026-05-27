"use client";

import React from "react";
import { SectionHeader } from "../common/section-header";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "OnEggy completely overhauled our AWS architecture. We went from manual EC2 instances to a fully automated EKS Kubernetes setup via Terraform. Our monthly cloud spend dropped by 34% in the first 30 days.",
    author: "Rajesh Sharma",
    role: "CTO",
    company: "CloudStok Technologies",
    initials: "RS",
  },
  {
    quote: "The senior platform architects at OnEggy feel like an extension of our core team. They configured our secure HIPAA-compliant environment on AWS and built CI/CD pipelines that reduced our release times from hours to under five minutes.",
    author: "Sarah Jenkins",
    role: "Founder & CEO",
    company: "Lumina Health",
    initials: "SJ",
  },
  {
    quote: "We partnered with OnEggy for mobile app development and cloud infrastructure. Their React Native and backend engineering expertise allowed us to launch our Fintech app weeks ahead of schedule with robust security audits.",
    author: "Vikram Malhotra",
    role: "VP of Engineering",
    company: "Beyond Imagination",
    initials: "VM",
  },
];

export function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative">
      {/* Background radial glow */}
      <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

      <SectionHeader
        tag="Client Success"
        title={<>Trusted by <span className="gradient-text">CTOs & Founders</span></>}
        subtitle="Read real outcomes from high-growth startups and businesses who partner with OnEggy to scale secure platforms."
        align="center"
        className="mb-16"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <StaggerItem
            key={index}
            className="glass-card p-8 rounded-xl border border-border/40 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between relative group"
          >
            {/* Top Quote Icon decoration */}
            <div className="absolute top-6 right-8 text-muted-foreground/10 group-hover:text-cyan-500/10 transition-colors">
              <Quote className="h-12 w-12" />
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic relative z-10 mb-8">
              &ldquo;{item.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4 border-t border-border/40 pt-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-400 flex items-center justify-center text-white font-bold font-mono text-sm shadow-md">
                {item.initials}
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">{item.author}</h4>
                <p className="text-xs text-muted-foreground">
                  {item.role}, <span className="text-cyan-500 font-semibold">{item.company}</span>
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
