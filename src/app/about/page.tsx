"use client";

import React from "react";
import { Handshake, Heart, Shield, Sparkles } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";

const values = [
  {
    icon: <Heart className="h-6 w-6 text-cyan-400" />,
    title: "Customer Satisfaction",
    desc: "We place customer needs first, tailoring digital solutions and cloud infrastructure to ensure maximum efficiency.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-teal-400" />,
    title: "Tech Innovation",
    desc: "We explore the bleeding edge of containerization, DevOps, and IaC technologies, implementing best practices.",
  },
  {
    icon: <Handshake className="h-6 w-6 text-indigo-400" />,
    title: "Honesty Culture",
    desc: "Integrity is the backbone of our operations. We maintain absolute transparency in cloud billing and timelines.",
  },
  {
    icon: <Shield className="h-6 w-6 text-cyan-400" />,
    title: "No-Compromise Quality",
    desc: "Our systems are built to be robust, secure, and auto-scaling, eliminating single points of failure.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-20">
      
      {/* Hero Header */}
      <div className="max-w-3xl space-y-6">
        <FadeUp>
          <span className="text-xs uppercase tracking-widest text-cyan-500 font-semibold">About OnEggy</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Your Partners in <span className="gradient-text">Cloud & Tech Excellence</span>
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At OnEggy Technologies, we help modern startups and enterprises architect high-performance, cost-effective infrastructures. We merge state-of-the-art automation tools with expert product engineering.
          </p>
        </FadeUp>
      </div>

      {/* Core Values Section */}
      <div className="space-y-12">
        <FadeUp>
          <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
        </FadeUp>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {values.map((item, index) => (
            <StaggerItem
              key={index}
              className="glass-card hover:border-cyan-500/40 p-6 rounded-xl space-y-4 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
