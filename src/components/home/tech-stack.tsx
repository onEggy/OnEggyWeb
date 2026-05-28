"use client";

import React, { useState } from "react";
import { SectionHeader } from "../common/section-header";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    items: [
      { name: "AWS", desc: "EC2, EKS, RDS, IAM, Lambda, S3, CloudFront", icon: "☁️", color: "from-orange-500/20 to-amber-500/10 border-orange-500/30 text-orange-400" },
      { name: "Kubernetes", desc: "Cluster setups, Ingress, Pod scheduling, Helm, Kustomize", icon: "☸️", color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400" },
      { name: "Docker", desc: "Image orchestration, container configuration, Docker Compose", icon: "🐳", color: "from-cyan-500/20 to-teal-500/10 border-cyan-500/30 text-cyan-400" },
      { name: "Terraform", desc: "Declarative Infrastructure as Code (IaC), State lock files", icon: "🏗️", color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400" },
      { name: "Ansible", desc: "Configuration provisioning, automated server hardening", icon: "⚙️", color: "from-red-500/20 to-rose-500/10 border-red-500/30 text-rose-400" },
    ]
  },
  {
    id: "languages-frameworks",
    name: "Languages & Frameworks",
    items: [
      { name: "Next.js", desc: "Server side rendering, layouts routing, high performance SEO", icon: "▲", color: "from-neutral-500/20 to-neutral-800/10 border-neutral-500/30 text-foreground" },
      { name: "FastAPI", desc: "High-performance Python APIs, auto Swagger OpenAPI validation", icon: "⚡", color: "from-teal-500/20 to-emerald-500/10 border-teal-500/30 text-teal-400" },
      { name: "Go Lang", desc: "Concurreny pipelines, fast microservices compile models", icon: "🐹", color: "from-sky-500/20 to-blue-500/10 border-sky-500/30 text-sky-400" },
      { name: "Python", desc: "Data pipelines, automation scripts, Django/Flask architectures", icon: "🐍", color: "from-yellow-500/20 to-amber-500/10 border-yellow-500/30 text-yellow-400" },
      { name: "React Native", desc: "Cross-platform iOS & Android apps, mobile components design", icon: "⚛️", color: "from-indigo-500/20 to-blue-500/10 border-indigo-500/30 text-indigo-400" },
    ]
  },
  {
    id: "monitoring-observability",
    name: "Monitoring & Observability",
    items: [
      { name: "Prometheus", desc: "Central time-series metric databases, alerting gateways", icon: "🔥", color: "from-orange-600/20 to-red-500/10 border-orange-600/30 text-orange-500" },
      { name: "Grafana", desc: "Telemetry charts, log analysis dashboards, metrics monitoring", icon: "📊", color: "from-yellow-600/20 to-orange-500/10 border-yellow-600/30 text-yellow-500" },
      { name: "Datadog", desc: "APM tracing, log index ingestions, container monitoring", icon: "🐕", color: "from-purple-600/20 to-indigo-500/10 border-purple-600/30 text-purple-400" },
      { name: "OpenTelemetry", desc: "Standardized agent tracing metrics collection API formats", icon: "📡", color: "from-blue-600/20 to-indigo-500/10 border-blue-600/30 text-blue-400" },
    ]
  }
];

export function TechStack() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  const activeCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative">
      {/* Background glow orb */}
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[95px] pointer-events-none -z-10" />

      <SectionHeader
        tag="Our Technical Stack"
        title={<>Modern Technologies We <span className="gradient-text">Master</span></>}
        subtitle="We avoid outdated tech. Our teams specialize in bleeding-edge automation tools, cloud infrastructures, and high-performance product frameworks."
        align="center"
        className="mb-12"
      />

      {/* Tabs list */}
      <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium border transition-all cursor-pointer ${
              activeTab === cat.id
                ? "bg-foreground text-background border-foreground shadow-md"
                : "bg-background/40 hover:bg-accent/40 border-border text-muted-foreground"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Categorized Tech Items Grid */}
      <div className="min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory?.items.map((item, index) => {
              const isLastAndOdd = index === activeCategory.items.length - 1 && activeCategory.items.length % 2 !== 0;
              return (
                <div
                  key={item.name}
                  className={`glass-card p-6 rounded-xl border bg-gradient-to-tr ${item.color} flex gap-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg ${
                    isLastAndOdd ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="text-2xl w-10 h-10 rounded-lg bg-background border border-border/40 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-foreground">{item.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
