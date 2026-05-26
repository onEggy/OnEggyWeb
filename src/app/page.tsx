"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Server, Cloud, Cpu, Settings, ShieldAlert, Code } from "lucide-react";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem, Float } from "@/components/animations/motion-wrappers";

const servicesOverview = [
  {
    icon: <Cloud className="h-6 w-6 text-cyan-400" />,
    title: "AWS Cloud Management",
    description: "Multi-account governance, landing zones configuration, cost reduction audits, and secure managed services.",
  },
  {
    icon: <Settings className="h-6 w-6 text-teal-400" />,
    title: "DevOps & IaC Automation",
    description: "Declarative infrastructure automation using Terraform, Ansible, and automated CI/CD release pipelines.",
  },
  {
    icon: <Server className="h-6 w-6 text-indigo-400" />,
    title: "Kubernetes Orchestration",
    description: "Enterprise-grade container orchestration (EKS/AKS) with custom autoscaling, ingress controllers, and Service Mesh.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-cyan-400" />,
    title: "Platform Engineering",
    description: "Building developer self-service platforms to abstract infrastructure complexity and speed up local deployments.",
  },
  {
    icon: <Code className="h-6 w-6 text-teal-400" />,
    title: "Full-Stack Development",
    description: "Designing responsive, high-performance web and mobile products using Next.js, Django, and React Native.",
  },
  {
    icon: <ShieldAlert className="h-6 w-6 text-indigo-400" />,
    title: "Security & QA Auditing",
    description: "Vulnerability assessments (VAPT), penetration testing, and container security compliance scanning.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />
        
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-background/50 backdrop-blur-sm text-xs text-muted-foreground mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Empowering Startups & Enterprises
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight md:leading-none">
            Empowering Businesses with <br />
            <span className="gradient-text">Cloud-Native Engineering</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            OnEggy Technologies is a modern engineering company. We partner with teams to scale infrastructure, optimize cloud cost, and accelerate release cycles.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors shadow-lg"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-12 px-6 rounded-lg border border-border bg-background/50 hover:bg-accent hover:text-accent-foreground font-medium transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </FadeUp>

        {/* Dashboard Visual Mockup using Float wrapper */}
        <FadeUp delay={0.4} className="w-full max-w-4xl mt-16 px-4">
          <Float speed={5}>
            <div className="glass-card rounded-2xl p-6 shadow-2xl relative">
              <div className="absolute top-4 left-4 flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="border-b border-border/40 pb-4 mb-6 flex justify-center">
                <span className="text-xs text-muted-foreground font-mono">Infrastructure Controller Dashboard</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-border/40 rounded-xl p-4 bg-background/25">
                  <span className="text-xs text-muted-foreground block mb-1">EKS Cluster Status</span>
                  <span className="text-2xl font-bold text-teal-400 font-mono">Active</span>
                </div>
                <div className="border border-border/40 rounded-xl p-4 bg-background/25">
                  <span className="text-xs text-muted-foreground block mb-1">Avg Cloud Cost ROI</span>
                  <span className="text-2xl font-bold text-cyan-400 font-mono">+32%</span>
                </div>
                <div className="border border-border/40 rounded-xl p-4 bg-background/25">
                  <span className="text-xs text-muted-foreground block mb-1">Deployment Health</span>
                  <span className="text-2xl font-bold text-indigo-400 font-mono">100%</span>
                </div>
              </div>
            </div>
          </Float>
        </FadeUp>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest text-cyan-500 font-semibold mb-2 block">
              What We Do
            </span>
          </FadeIn>
          <FadeUp>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Enterprise Engineering Services
            </h2>
          </FadeUp>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-xl">
            We deliver outcomes, not just output. Our services help companies launch faster and scale resilient architectures.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesOverview.map((item, index) => (
            <StaggerItem
              key={index}
              className="glass-card hover:border-cyan-500/40 p-8 rounded-xl shadow-sm transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <Link
                  href="/services"
                  className="text-xs font-semibold text-cyan-500 hover:text-cyan-400 inline-flex items-center gap-1 group/btn"
                >
                  Learn More <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
