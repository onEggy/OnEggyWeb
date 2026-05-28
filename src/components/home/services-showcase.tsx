"use client";

import React from "react";
import { Cloud, Settings, Layers, Smartphone, Code, Palette, Cpu, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "../common/section-header";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";

const services = [
  {
    icon: <Cloud className="h-6 w-6 text-cyan-400" />,
    title: "AWS Managed Services",
    desc: "Enterprise cloud configurations, multi-account structures (Landing Zones), cost audits, and secure resource automation.",
    tag: "AWS. Cost. Scale.",
    techs: ["/service/aws.svg"]
  },
  {
    icon: <Settings className="h-6 w-6 text-teal-400" />,
    title: "DevOps Consulting",
    desc: "Eradicate manual errors. Build CI/CD pipelines, automate deployments, and configure Infrastructure as Code via Terraform.",
    tag: "IaC. CI/CD. Pipelines.",
    techs: ["/service/aws.svg", "/kubernetes.png"]
  },
  {
    icon: <Layers className="h-6 w-6 text-indigo-400" />,
    title: "Kubernetes Engineering",
    desc: "Migrate containerized apps to EKS/AKS. Custom ingress configs, network policies, cluster auto-scaling, and Service Mesh.",
    tag: "Containers. EKS. Helm.",
    techs: ["/kubernetes.png", "/service/aws.svg"]
  },
  {
    icon: <Cpu className="h-6 w-6 text-cyan-400" />,
    title: "Platform Engineering",
    desc: "Empower developer self-sufficiency. We engineer internal developer portals to abstract cloud complexity.",
    tag: "IDP. Developer Velocity.",
    techs: ["/kubernetes.png", "/service/node.svg"]
  },
  {
    icon: <Code className="h-6 w-6 text-teal-400" />,
    title: "Full Stack Development",
    desc: "Design and build fast modern software. Clean Next.js, React, Node.js, and Django backend codebases.",
    tag: "Next.js. React. Django.",
    techs: ["/service/react.svg", "/service/node.svg", "/service/python.svg"]
  },
  {
    icon: <Smartphone className="h-6 w-6 text-indigo-400" />,
    title: "Mobile App Development",
    desc: "Sleek iOS & Android mobile software built on top of React Native frameworks with offline syncing.",
    tag: "React Native. iOS. Android.",
    techs: ["/service/react.svg"]
  },
  {
    icon: <Palette className="h-6 w-6 text-cyan-400" />,
    title: "UI/UX Design",
    desc: "Modern digital designs that convert. Wireframes, user experience research, premium visual interfaces, and prototypes.",
    tag: "Figma. SaaS Design.",
    techs: ["/service/html.svg", "/service/css.svg"]
  },
  {
    icon: <Eye className="h-6 w-6 text-teal-400" />,
    title: "Monitoring & Observability",
    desc: "Zero blindspots. We configure centralized Prometheus, Grafana, OpenTelemetry, and Datadog alert boards.",
    tag: "Logs. Metrics. Traces.",
    techs: ["/service/aws.svg", "/kubernetes.png"]
  },
];

export function ServicesShowcase() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 border-t border-border/40">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

      <SectionHeader
        tag="What We Do"
        title={<>Enterprise-Grade <span className="gradient-text">Engineering Services</span></>}
        subtitle="We design, automate, and scale secure modern software products. Partner with us to speed up developer output and lower cloud costs."
        align="center"
        className="mb-16"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <StaggerItem
            key={index}
            className="glass-card hover:border-cyan-500/40 p-6 rounded-xl flex flex-col justify-between min-h-[270px] h-full transition-all group hover:-translate-y-1 shadow-sm relative overflow-hidden"
          >
            {/* Subtle glow border overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-background/50 border border-border/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-cyan-500 font-semibold tracking-wider block">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-border/20 mt-4">
              <div className="flex items-center gap-1.5">
                {item.techs?.map((t, idx) => (
                  <div key={idx} className="relative w-5 h-5 rounded bg-background/50 border border-border/40 flex items-center justify-center p-0.5" title={t.split('/').pop()?.split('.')[0]}>
                    <Image 
                      src={t} 
                      alt="tech logo" 
                      fill 
                      sizes="20px" 
                      className="object-contain" 
                    />
                  </div>
                ))}
              </div>
              <Link
                href="/services"
                className="text-[11px] font-semibold text-cyan-500 hover:text-cyan-400 inline-flex items-center gap-1 group/btn"
              >
                Learn More <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
