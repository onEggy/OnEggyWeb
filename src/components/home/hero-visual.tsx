"use client";

import React, { useState } from "react";
import { Shield, GitBranch, ArrowUpRight, Cpu, Layers } from "lucide-react";

export function HeroVisual() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Technical documentation details shown on hover
  const nodeDetails: Record<string, { title: string; subtitle: string; code: string }> = {
    root: {
      title: "AWS Organizations / Control Tower",
      subtitle: "Root governance level mapping policies and multi-account rules.",
      code: '{\n  "Name": "OnEggy-Core",\n  "Features": "ALL",\n  "ServiceControlPolicies": ["DenyClickOps", "EnforceMFA"]\n}'
    },
    security: {
      title: "Core Security & Log Archive OU",
      subtitle: "Centralized AWS CloudTrail storage and IAM Identity Center access control keys.",
      code: '{\n  "LoggingBucket": "s3://central-logs-secure",\n  "KMSKeyRotation": "30_DAYS",\n  "GuardDuty": "ENABLED"\n}'
    },
    workload: {
      title: "EKS Workload Node cluster Group",
      subtitle: "Container workloads run inside private VPC subnets with automated node updates.",
      code: '{\n  "ClusterName": "prod-eks-01",\n  "NodeGroups": "Managed-Spot",\n  "AutoscaleLimits": "2-20_Pods"\n}'
    },
    database: {
      title: "Encrypted DB Cluster Replica (RDS)",
      subtitle: "PostgreSQL master database with continuous backups and automated failovers.",
      code: '{\n  "Engine": "PostgreSQL-16",\n  "BackupRetention": "30_Days",\n  "MultiAZ": "ACTIVE"\n}'
    }
  };

  return (
    <div className="w-full relative bg-zinc-950/20 border border-zinc-900 p-6 rounded-lg shadow-2xl select-none max-w-lg mx-auto overflow-hidden">
      
      {/* Decorative top header */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[8px] font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-1">
        <span>blueprints // lz-v3.0</span>
        <ArrowUpRight className="h-2.5 w-2.5 text-zinc-600" />
      </div>

      <div className="mb-6 space-y-1">
        <span className="text-[9px] font-mono font-bold text-primary uppercase tracking-widest">
          Systems Architecture Diagram
        </span>
        <h3 className="text-base font-bold text-foreground font-display tracking-tight">
          Secure AWS Landing Zone Topology
        </h3>
      </div>

      {/* SVG Canvas Schematic */}
      <div className="relative aspect-video w-full border border-zinc-900 bg-zinc-950/50 rounded flex items-center justify-center p-4">
        <svg viewBox="0 0 400 220" className="w-full h-full text-zinc-800">
          
          {/* Paths connecting nodes */}
          <path
            d="M 200 40 L 100 110 M 200 40 L 300 110 M 100 110 L 200 180 M 300 110 L 200 180"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            className={activeNode ? "text-primary/45 transition-colors duration-300" : "text-zinc-800 transition-colors duration-300"}
          />

          {/* Core connection pathways - highlighted */}
          <line 
            x1="200" y1="40" x2="200" y2="180" 
            stroke="currentColor" 
            strokeWidth="0.8" 
            className={activeNode ? "text-primary/30 transition-colors duration-300" : "text-zinc-900 transition-colors duration-300"} 
          />

          {/* Node 1: Root Management */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveNode("root")}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="200"
              cy="40"
              r="16"
              className={`transition-colors duration-300 ${
                activeNode === "root" ? "fill-primary/20 stroke-primary stroke-2" : "fill-zinc-900 stroke-zinc-800"
              }`}
            />
            <Cpu className={`h-4 w-4 absolute transition-colors duration-300`} style={{ left: "192px", top: "32px", color: activeNode === "root" ? "#f59e0b" : "#71717a" }} />
            <text x="200" y="20" textAnchor="middle" className="fill-zinc-400 font-mono text-[8px] tracking-widest font-semibold uppercase">
              Management
            </text>
          </g>

          {/* Node 2: Security & Logging */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveNode("security")}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="100"
              cy="110"
              r="16"
              className={`transition-colors duration-300 ${
                activeNode === "security" ? "fill-primary/20 stroke-primary stroke-2" : "fill-zinc-900 stroke-zinc-800"
              }`}
            />
            <Shield className="h-4 w-4 absolute" style={{ left: "92px", top: "102px", color: activeNode === "security" ? "#f59e0b" : "#71717a" }} />
            <text x="100" y="136" textAnchor="middle" className="fill-zinc-400 font-mono text-[8px] tracking-widest font-semibold uppercase">
              Security
            </text>
          </g>

          {/* Node 3: EKS Workloads */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveNode("workload")}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="300"
              cy="110"
              r="16"
              className={`transition-colors duration-300 ${
                activeNode === "workload" ? "fill-primary/20 stroke-primary stroke-2" : "fill-zinc-900 stroke-zinc-800"
              }`}
            />
            <Layers className="h-4 w-4 absolute" style={{ left: "292px", top: "102px", color: activeNode === "workload" ? "#f59e0b" : "#71717a" }} />
            <text x="300" y="136" textAnchor="middle" className="fill-zinc-400 font-mono text-[8px] tracking-widest font-semibold uppercase">
              EKS Compute
            </text>
          </g>

          {/* Node 4: DB Layer */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveNode("database")}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="200"
              cy="180"
              r="16"
              className={`transition-colors duration-300 ${
                activeNode === "database" ? "fill-primary/20 stroke-primary stroke-2" : "fill-zinc-900 stroke-zinc-800"
              }`}
            />
            <GitBranch className="h-4 w-4 absolute" style={{ left: "192px", top: "172px", color: activeNode === "database" ? "#f59e0b" : "#71717a" }} />
            <text x="200" y="204" textAnchor="middle" className="fill-zinc-400 font-mono text-[8px] tracking-widest font-semibold uppercase">
              DB Subnets
            </text>
          </g>
        </svg>
      </div>

      {/* Dynamic Documentation console (monospaced) */}
      <div className="mt-4 pt-4 border-t border-zinc-900/60 min-h-[110px] flex flex-col justify-between font-mono">
        {activeNode ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[9px]">
              <span className="text-primary font-bold uppercase">{nodeDetails[activeNode].title}</span>
              <span className="text-zinc-600 font-semibold">[INSPECTING NODE]</span>
            </div>
            <p className="text-[10px] text-zinc-400 leading-normal">
              {nodeDetails[activeNode].subtitle}
            </p>
            <pre className="text-[8px] text-zinc-500 bg-zinc-950 p-2 rounded border border-zinc-900 overflow-x-auto">
              {nodeDetails[activeNode].code}
            </pre>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[90px] text-zinc-500 text-[10px] text-center px-4">
            <span className="animate-pulse mb-1">● INITIALIZING BLUEPRINT SCAN</span>
            <span>Hover over the architectural topology nodes to inspect their compliance parameters and configuration manifests.</span>
          </div>
        )}
      </div>

      {/* Footer status line */}
      <div className="mt-4 pt-3 border-t border-zinc-900/60 flex items-center justify-between text-[8px] font-mono text-zinc-500 font-semibold uppercase tracking-widest">
        <span>well-architected framework</span>
        <span className="text-primary flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
          compliance verified
        </span>
      </div>
    </div>
  );
}
