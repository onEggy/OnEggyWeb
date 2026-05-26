"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Server, Cloud, Cpu, Settings, ShieldAlert, Code } from "lucide-react";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { Hero } from "@/components/home/hero";

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
      {/* Cinematic Hero Section */}
      <Hero />

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
