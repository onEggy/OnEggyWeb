"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "../common/section-header";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cloud, 
  Settings, 
  Code, 
  Database, 
  Activity, 
  Cpu, 
  Layers, 
  GitBranch 
} from "lucide-react";

interface TechItem {
  name: string;
  desc: string;
  icon: string | React.ReactNode;
  isAsset?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: TechItem[];
}

const categories: Category[] = [
  {
    id: "cloud-platforms",
    name: "Cloud Platforms",
    icon: <Cloud className="h-4 w-4" />,
    items: [
      { 
        name: "AWS", 
        desc: "EC2, EKS, RDS, IAM, Lambda, S3, CloudFront orchestration", 
        icon: "/service/aws.svg", 
        isAsset: true
      },
      { 
        name: "Google Cloud", 
        desc: "GKE, Compute Engine, BigQuery, Cloud Run, Cloud SQL platforms", 
        icon: (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
        )
      },
      { 
        name: "Azure", 
        desc: "AKS integration, Azure Functions, Blob Storage, Entra ID", 
        icon: (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
          </svg>
        )
      }
    ]
  },
  {
    id: "devops-tools",
    name: "DevOps Tools",
    icon: <Settings className="h-4 w-4" />,
    items: [
      { 
        name: "Kubernetes", 
        desc: "EKS deployment, Ingress controllers, Helm releases, horizontal pod scaling", 
        icon: "/kubernetes.png", 
        isAsset: true
      },
      { 
        name: "Docker", 
        desc: "Multi-stage builds, container orchestration, microservice isolation", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.983 8.871h-1.996v1.996h1.996V8.871zm-2.495 0H9.492v1.996h1.996V8.871zm-2.495 0H7.04v1.996h1.996V8.871zm-2.495 0H4.55v1.996h1.996V8.871zm0-2.495H4.55v1.996h1.996V6.376zm0-2.495H4.55v1.996h1.996V3.881zm2.495 2.495H9.492v1.996h1.996V6.376zm0-2.495H9.492v1.996h1.996V3.881zm2.495 2.495h-1.996v1.996h1.996V6.376zM3.61 10.873L1.87 11.23l-.15 1.02c-.22 1.45.17 2.94 1.13 4.14C4.34 18.25 6.44 19 8.64 19h10.96c2.3 0 4.23-1.63 4.4-3.92.1-1.33-.28-2.61-1.07-3.62l-.76-.98-.44.75c-.83 1.4-2.31 2.27-3.93 2.27H8.64c-1.84 0-3.32-1.48-3.32-3.32 0-.46.09-.9.27-1.31z"/>
          </svg>
        )
      },
      { 
        name: "Ansible", 
        desc: "Configuration management, server hardening, agentless host configurations", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.2c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm4.8 12.6h-1.8c-.3 0-.6-.2-.7-.5l-.8-2.2H10.5l-.8 2.2c-.1.3-.4.5-.7.5H7.2c-.4 0-.7-.4-.5-.8L10.5 7h3l3.8 8.8c.2.4-.1.8-.5.8z"/>
          </svg>
        )
      }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Technologies",
    icon: <Code className="h-4 w-4" />,
    items: [
      { 
        name: "React", 
        desc: "Interactive components, client application architectures, hook states", 
        icon: "/service/react.svg", 
        isAsset: true
      },
      { 
        name: "Next.js", 
        desc: "React framework, Server Side Rendering (SSR), App router layouts", 
        icon: "/next.svg", 
        isAsset: true
      },
      { 
        name: "Vue", 
        desc: "Sleek frontend dashboards, modular templates, reactive composition systems", 
        icon: "/service/vue.svg", 
        isAsset: true
      },
      { 
        name: "Angular", 
        desc: "Enterprise client panels, strict typing structure, component modularity", 
        icon: "/service/angular.svg", 
        isAsset: true
      },
      { 
        name: "HTML5", 
        desc: "Semantic element trees, accessible tags, structural web standard bases", 
        icon: "/service/html.svg", 
        isAsset: true
      },
      { 
        name: "CSS3", 
        desc: "Fluid layouts, CSS variables tokenizing, media queries, animations", 
        icon: "/service/css.svg", 
        isAsset: true
      }
    ]
  },
  {
    id: "backend",
    name: "Backend Technologies",
    icon: <Cpu className="h-4 w-4" />,
    items: [
      { 
        name: "Node.js", 
        desc: "Non-blocking JavaScript runtimes, Express and NestJS microservices", 
        icon: "/service/node.svg", 
        isAsset: true
      },
      { 
        name: "Python", 
        desc: "Automation scripts, machine learning integrations, Django data architectures", 
        icon: "/service/python.svg", 
        isAsset: true
      },
      { 
        name: "Go Lang", 
        desc: "Statically typed compiled languages, high concurrency microservices", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1.81 10.37h20.38v3.26H1.81zm0-4.89h20.38v3.26H1.81zm0 9.78h20.38V18.5H1.81z"/>
          </svg>
        )
      },
      { 
        name: "FastAPI", 
        desc: "High-performance Python APIs, automated OpenAPI Swagger configurations", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L2 12h8v12l10-12h-8z"/>
          </svg>
        )
      }
    ]
  },
  {
    id: "databases",
    name: "Databases",
    icon: <Database className="h-4 w-4" />,
    items: [
      { 
        name: "MongoDB", 
        desc: "Document store, flexible JSON models, automated scaling and sharding", 
        icon: "/service/mongodb.svg", 
        isAsset: true
      },
      { 
        name: "MySQL", 
        desc: "Relational database tables, robust schema configs, transactional models", 
        icon: "/service/mysql.svg", 
        isAsset: true
      },
      { 
        name: "PostgreSQL", 
        desc: "Advanced relational query schemas, geo-spatial configurations", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
          </svg>
        )
      },
      { 
        name: "Redis", 
        desc: "Time-series caches, fast cluster caching, pub-sub configurations", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 13h-2v-2h2zm0-4h-2V7h2z"/>
          </svg>
        )
      }
    ]
  },
  {
    id: "monitoring",
    name: "Monitoring & Observability",
    icon: <Activity className="h-4 w-4" />,
    items: [
      { 
        name: "Prometheus", 
        desc: "Metric scraping rules, custom alert rules, time-series storage engines", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0A12 12 0 1024 12 12.01 12.01 0 0012 0zm4.5 17h-9l4.5-8.5z"/>
          </svg>
        )
      },
      { 
        name: "Grafana", 
        desc: "Log queries panels, cluster visual telemetry charts, dashboard layouts", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm1.76 17.65h-3.52c-1.34 0-2.43-1.09-2.43-2.43v-4.98c0-1.34 1.09-2.43 2.43-2.43h3.52c1.34 0 2.43 1.09 2.43 2.43v4.98c0 1.34-1.09 2.43-2.43 2.43z"/>
          </svg>
        )
      },
      { 
        name: "Datadog", 
        desc: "APM call tracer tracing, automated error logs indexing, serverless alerts", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.237 17.72c-.895.895-2.613.567-3.834-.73-1.221-1.298-1.503-3.064-.608-3.959.895-.895 2.613-.568 3.834.73 1.222 1.298 1.504 3.064.608 3.959z"/>
          </svg>
        )
      }
    ]
  },
  {
    id: "infra",
    name: "Infrastructure Tools",
    icon: <Layers className="h-4 w-4" />,
    items: [
      { 
        name: "Terraform", 
        desc: "Infrastructure as Code (IaC) configurations, cloud state synchronization locking", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1.44 0h7.2v7.2H1.44zm8.64 0h7.2v7.2h-7.2zm8.64 8.64h7.2v7.2h-7.2zm-17.28 0h7.2v7.2H1.44z"/>
          </svg>
        )
      },
      { 
        name: "Helm", 
        desc: "Kubernetes YAML templates packaging, versioned chart deployments", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 16.5H7v-9h10v9z"/>
          </svg>
        )
      },
      { 
        name: "Nginx", 
        desc: "Reverse proxy routing rules, server-side caching, SSL termination", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1-5.5h-2v-2h2v2z"/>
          </svg>
        )
      }
    ]
  },
  {
    id: "cicd",
    name: "CI/CD Ecosystem",
    icon: <GitBranch className="h-4 w-4" />,
    items: [
      { 
        name: "Jenkins", 
        desc: "Self-hosted build runner nodes, groovy-based pipeline automation scripts", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.222 17.778h-4.444v-1.111h4.444v1.111zm0-2.222h-4.444v-1.111h4.444v1.111zm1.111-5.556H8.667c-.613 0-1.111-.498-1.111-1.111V5.556c0-.613.498-1.111 1.111-1.111h4.444c.613 0 1.111.498 1.111 1.111v3.333c0 .613-.498 1.111-1.111 1.111z"/>
          </svg>
        )
      },
      { 
        name: "GitHub Actions", 
        desc: "YAML workflows automation, remote hosted runners integration, trigger hooks", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 17.5v-11l7 5.5-7 5.5z"/>
          </svg>
        )
      },
      { 
        name: "GitLab CI", 
        desc: "Runner orchestrations, shared cache build steps, Docker config stages", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        )
      },
      { 
        name: "ArgoCD", 
        desc: "GitOps deployment sync controller, automatic cluster drift reconciliation settings", 
        icon: (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4 16H8v-2h8v2zm0-4H8v-2h8v2zm0-4H8V6h8v2z"/>
          </svg>
        )
      }
    ]
  }
];

export function TechStack() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const activeCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border/40 relative animate-fade-in" id="technology-ecosystem">
      {/* Background glow orb */}
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[95px] pointer-events-none -z-10" />

      <SectionHeader
        tag="Ecosystem"
        title={<>Premium Technology <span className="text-cyan-400">Ecosystem</span></>}
        subtitle="We build exclusively with standard, enterprise-grade tools. Our teams specialize in cloud-native infrastructure, declarative automation, and highly scaling framework stacks."
        align="center"
        className="mb-16"
      />

      {/* Rebuilt: Center-aligned top horizontal tab bar selector */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 pb-6 border-b border-border/20 mb-10 w-full overflow-x-auto scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer select-none ${
                isActive
                  ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-md shadow-cyan-500/5"
                  : "bg-background/20 hover:bg-accent/40 border-border/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="shrink-0">{cat.icon}</div>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of clean, borderless, high-density Cards */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory?.items.map((item) => (
              <div
                key={item.name}
                className="bg-background/20 border border-border/40 p-5 rounded-xl flex gap-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-background/45 group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                  {item.isAsset && typeof item.icon === "string" ? (
                    <div className="relative w-6 h-6">
                      <Image
                        src={item.icon}
                        alt={item.name}
                        fill
                        sizes="24px"
                        className="object-contain filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  ) : (
                    <div className="text-muted-foreground group-hover:text-cyan-400 transition-colors">
                      {item.icon}
                    </div>
                  )}
                </div>
                <div className="space-y-1 min-w-0">
                  <h4 className="text-sm font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
