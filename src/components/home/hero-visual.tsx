"use client";

import React, { useState } from "react";
import { Shield, GitBranch, ArrowUpRight, Cpu, Layers } from "lucide-react";

type NodeKey = "root" | "security" | "workload" | "database";

const nodes: { key: NodeKey; cx: number; cy: number; label: string; labelY: number; Icon: React.ElementType }[] = [
  { key: "root", cx: 200, cy: 40, label: "Management", labelY: 18, Icon: Cpu },
  { key: "security", cx: 100, cy: 110, label: "Security", labelY: 140, Icon: Shield },
  { key: "workload", cx: 300, cy: 110, label: "EKS Compute", labelY: 140, Icon: Layers },
  { key: "database", cx: 200, cy: 180, label: "DB Subnets", labelY: 208, Icon: GitBranch },
];

const nodeDetails: Record<NodeKey, { title: string; subtitle: string; code: string }> = {
  root: {
    title: "AWS Organizations / Control Tower",
    subtitle: "Root governance level mapping policies and multi-account rules.",
    code: '{\n  "Name": "OnEggy-Core",\n  "Features": "ALL",\n  "ServiceControlPolicies": ["DenyClickOps", "EnforceMFA"]\n}',
  },
  security: {
    title: "Core Security & Log Archive OU",
    subtitle: "Centralized AWS CloudTrail storage and IAM Identity Center access control keys.",
    code: '{\n  "LoggingBucket": "s3://central-logs-secure",\n  "KMSKeyRotation": "30_DAYS",\n  "GuardDuty": "ENABLED"\n}',
  },
  workload: {
    title: "EKS Workload Node cluster Group",
    subtitle: "Container workloads run inside private VPC subnets with automated node updates.",
    code: '{\n  "ClusterName": "prod-eks-01",\n  "NodeGroups": "Managed-Spot",\n  "AutoscaleLimits": "2-20_Pods"\n}',
  },
  database: {
    title: "Encrypted DB Cluster Replica (RDS)",
    subtitle: "PostgreSQL master database with continuous backups and automated failovers.",
    code: '{\n  "Engine": "PostgreSQL-16",\n  "BackupRetention": "30_Days",\n  "MultiAZ": "ACTIVE"\n}',
  },
};

export function HeroVisual() {
  const [activeNode, setActiveNode] = useState<NodeKey | null>(null);

  return (
    <div className="surface-card w-full relative p-6 rounded-xl select-none max-w-lg mx-auto overflow-hidden">
      {/* Header */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
        <span>blueprints // lz-v3.0</span>
        <ArrowUpRight className="h-2.5 w-2.5" aria-hidden="true" />
      </div>

      <div className="mb-6 space-y-1">
        <span className="text-xs font-mono font-bold text-primary-strong uppercase tracking-widest">
          Systems Architecture Diagram
        </span>
        <h3 className="text-base font-bold text-foreground font-display tracking-tight">
          Secure AWS Landing Zone Topology
        </h3>
      </div>

      {/* SVG schematic */}
      <div className="relative aspect-video w-full border border-border bg-surface-subtle rounded-lg flex items-center justify-center p-4">
        <svg viewBox="0 0 400 224" className="w-full h-full" role="group" aria-label="Interactive AWS landing zone topology diagram">
          <path
            d="M 200 40 L 100 110 M 200 40 L 300 110 M 100 110 L 200 180 M 300 110 L 200 180"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            className={activeNode ? "text-primary/50" : "text-border"}
            style={{ transition: "color 0.3s" }}
          />
          <line
            x1="200" y1="40" x2="200" y2="180"
            stroke="currentColor"
            strokeWidth="0.8"
            className={activeNode ? "text-primary/30" : "text-border"}
            style={{ transition: "color 0.3s" }}
          />

          {nodes.map(({ key, cx, cy, label, labelY, Icon }) => {
            const isActive = activeNode === key;
            return (
              <g
                key={key}
                role="button"
                tabIndex={0}
                aria-label={`${label}: ${nodeDetails[key].title}`}
                aria-pressed={isActive}
                className="cursor-pointer focus:outline-none"
                onMouseEnter={() => setActiveNode(key)}
                onMouseLeave={() => setActiveNode(null)}
                onFocus={() => setActiveNode(key)}
                onBlur={() => setActiveNode(null)}
                onClick={() => setActiveNode(isActive ? null : key)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveNode(isActive ? null : key);
                  }
                }}
              >
                <circle
                  cx={cx}
                  cy={cy}
                  r="17"
                  className={isActive ? "fill-primary/15 stroke-primary" : "fill-card stroke-border"}
                  strokeWidth={isActive ? 2 : 1.2}
                  style={{ transition: "fill 0.3s, stroke 0.3s" }}
                />
                <foreignObject x={cx - 9} y={cy - 9} width="18" height="18" style={{ pointerEvents: "none" }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon
                      style={{
                        width: 13,
                        height: 13,
                        color: isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                        transition: "color 0.3s",
                      }}
                    />
                  </div>
                </foreignObject>
                <text
                  x={cx}
                  y={labelY}
                  textAnchor="middle"
                  className={isActive ? "fill-primary-strong" : "fill-muted-foreground"}
                  style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.12em", fontWeight: 600, textTransform: "uppercase" }}
                >
                  {label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Documentation console */}
      <div className="mt-4 pt-4 border-t border-border min-h-[120px] flex flex-col justify-between font-mono" aria-live="polite">
        {activeNode ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-primary-strong font-bold uppercase">{nodeDetails[activeNode].title}</span>
              <span className="text-muted-foreground font-semibold">[INSPECTING NODE]</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-normal">{nodeDetails[activeNode].subtitle}</p>
            <pre className="text-[9px] text-foreground/80 bg-muted p-2 rounded border border-border overflow-x-auto">
              {nodeDetails[activeNode].code}
            </pre>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[96px] text-muted-foreground text-[11px] text-center px-4">
            <span className="mb-1 text-primary-strong font-semibold">● Select a node</span>
            <span>Tap, click, or focus the topology nodes to inspect their compliance parameters and configuration manifests.</span>
          </div>
        )}
      </div>

      {/* Footer status line */}
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-muted-foreground font-semibold uppercase tracking-widest">
        <span>well-architected framework</span>
        <span className="text-primary-strong flex items-center gap-1.5">
          <span className="status-indicator" />
          compliance verified
        </span>
      </div>
    </div>
  );
}
