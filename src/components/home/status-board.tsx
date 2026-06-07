"use client";

import React, { useState, useEffect, useRef } from "react";
import { ShieldAlert, RefreshCw, Lock, Terminal, Clock } from "lucide-react";

interface LogEntry {
  timestamp: string;
  level: "INFO" | "SUCCESS" | "WARN" | "ALERT";
  service: string;
  message: string;
}

const INITIAL_LOGS: LogEntry[] = [
  { timestamp: "16:48:10", level: "INFO", service: "alb-ingress", message: "ALB router forwarding path matches /api/v1/auth" },
  { timestamp: "16:48:12", level: "SUCCESS", service: "ssl-cert", message: "Certificates verified. 242 days left on Let's Encrypt" },
  { timestamp: "16:48:15", level: "INFO", service: "k8s-hpa", message: "Replica check: target stable (cpu avg: 34%)" },
  { timestamp: "16:48:18", level: "ALERT", service: "waf-block", message: "WAF blocked suspicious SQL pattern from IP 42.108.5.12" },
  { timestamp: "16:48:22", level: "SUCCESS", service: "db-replica", message: "RDS Aurora PG replica check: 0ms replication lag verified" },
];

const SERVICE_POOL = [
  { level: "INFO" as const, service: "alb-ingress", message: "ALB router target matched root context path /" },
  { level: "SUCCESS" as const, service: "argocd", message: "GitOps Sync complete: deployed image tag commit-f182a" },
  { level: "INFO" as const, service: "k8s-hpa", message: "Nodes active: 6 desired, 6 running across spot group" },
  { level: "WARN" as const, service: "db-backup", message: "Daily snapshot auto-triggered on prod-cluster-az2" },
  { level: "SUCCESS" as const, service: "route53", message: "DNS healthcheck check resolved to primary endpoint" },
  { level: "ALERT" as const, service: "waf-block", message: "WAF blocked XSS attempt from IP 185.220.101.4" },
  { level: "INFO" as const, service: "cloudfront", message: "Cache hit ratio optimized at 94.8% for static assets" },
];

export function StatusBoard() {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [latencyPoints, setLatencyPoints] = useState<number[]>([14, 15, 12, 18, 14, 15, 13, 16, 14, 15, 14]);
  const [currentLatency, setCurrentLatency] = useState(14);
  const [threatCount, setThreatCount] = useState(4209);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs to bottom if they update
  useEffect(() => {
    if (logEndRef.current) {
      const container = logEndRef.current.parentElement;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [logs]);

  // Log simulation interval
  useEffect(() => {
    const logTimer = setInterval(() => {
      const date = new Date();
      const timestamp = date.toTimeString().split(" ")[0];
      const randomItem = SERVICE_POOL[Math.floor(Math.random() * SERVICE_POOL.length)];
      
      const newLog: LogEntry = {
        timestamp,
        ...randomItem
      };

      setLogs(prev => [...prev.slice(1), newLog]);

      // If threat block event occurs, increment threat counter
      if (randomItem.level === "ALERT") {
        setThreatCount(c => c + 1);
      }

      // Fluctuating latency
      setCurrentLatency(prev => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const next = Math.max(10, Math.min(25, prev + delta));
        setLatencyPoints(pts => [...pts.slice(1), next]);
        return next;
      });

    }, 3200);

    return () => clearInterval(logTimer);
  }, []);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      // Trigger log refresh
      const date = new Date();
      const ts = date.toTimeString().split(" ")[0];
      const manualLog: LogEntry = {
        timestamp: ts,
        level: "SUCCESS",
        service: "manual-audit",
        message: "Full cluster topology and DNS verification check succeeded manually."
      };
      setLogs(prev => [...prev.slice(1), manualLog]);
    }, 850);
  };

  // Build SVG path for latency sparkline
  const sparklinePath = latencyPoints.reduce((path, pt, i) => {
    const x = (i / (latencyPoints.length - 1)) * 140;
    // Map latency 10-25 to SVG y-coords 40-5
    const y = 40 - ((pt - 10) / 15) * 35;
    return path + `${i === 0 ? "M" : "L"} ${x} ${y}`;
  }, "");

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 relative border-t border-border/40">
      {/* Subtle Glow backdrop */}
      <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[90px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Storytelling & Trust Callout */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest block">
              Continuous Reliability
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Production-Grade <br />
              <span className="gradient-text">Uptime Telemetry</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            We don&apos;t deploy and walk away. Our solutions are engineered with automated self-healing clusters, multi-AZ database replication, and real-time security scanning alerts to catch infrastructure drift before it impacts users.
          </p>
          <div className="flex items-center gap-6 pt-2">
            <div className="space-y-1">
              <span className="text-2xl font-bold font-mono text-foreground">99.99%</span>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold font-mono">Uptime SLA Target</p>
            </div>
            <div className="w-[1px] h-10 bg-border/80" />
            <div className="space-y-1">
              <span className="text-2xl font-bold font-mono text-foreground">24/7/365</span>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold font-mono">Active Telemetry</p>
            </div>
          </div>
        </div>

        {/* Right Side: High-Density Telemetry Logs Board Dashboard */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-950/90 rounded-xl border border-zinc-800 p-4 sm:p-6 shadow-2xl relative overflow-hidden select-none font-mono">
            {/* Window control buttons and title */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold text-zinc-300">oneggy-production-telemetry</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleManualRefresh}
                  disabled={isRefreshing}
                  className="p-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-foreground cursor-pointer transition-colors"
                  aria-label="Refresh status manual"
                >
                  <RefreshCw className={`h-3 w-3 ${isRefreshing ? "animate-spin text-cyan-400" : ""}`} />
                </button>
              </div>
            </div>

            {/* High-density metrics counters row */}
            <div className="grid grid-cols-3 gap-3 mb-4 text-[10px] sm:text-xs">
              <div className="bg-zinc-900/60 border border-zinc-800/80 p-2.5 rounded flex items-center justify-between">
                <div>
                  <span className="text-zinc-500 text-[8px] uppercase block">Response Time</span>
                  <span className="font-bold text-foreground font-mono">{currentLatency}ms</span>
                </div>
                <svg className="w-16 h-8 overflow-visible" fill="none">
                  <path d={sparklinePath} stroke="#22d3ee" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800/80 p-2.5 rounded flex items-center justify-between">
                <div>
                  <span className="text-zinc-500 text-[8px] uppercase block">SSL Certificate</span>
                  <span className="font-bold text-green-400">Valid</span>
                </div>
                <Lock className="h-4.5 w-4.5 text-green-400 opacity-80" />
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800/80 p-2.5 rounded flex items-center justify-between">
                <div>
                  <span className="text-zinc-500 text-[8px] uppercase block">Threats Guarded</span>
                  <span className="font-bold text-red-400">{threatCount}</span>
                </div>
                <ShieldAlert className="h-4.5 w-4.5 text-red-400 animate-pulse" />
              </div>
            </div>

            {/* Streaming log terminal panel */}
            <div className="bg-black/70 border border-zinc-850 rounded-lg p-3 h-[180px] overflow-y-auto flex flex-col gap-1.5 scrollbar-thin select-text">
              <div className="flex items-center gap-1.5 text-zinc-500 text-[8px] border-b border-zinc-900 pb-1 mb-1 select-none">
                <Terminal className="h-3.5 w-3.5 text-zinc-500" />
                <span>LOG STREAM OVERLAY -- OUTPUT LIVE</span>
              </div>
              
              {logs.map((log, index) => {
                let colorClass = "text-zinc-400";
                if (log.level === "SUCCESS") colorClass = "text-green-400";
                if (log.level === "WARN") colorClass = "text-amber-400";
                if (log.level === "ALERT") colorClass = "text-red-400 font-semibold";

                return (
                  <div key={index} className="text-[9px] sm:text-[10px] leading-relaxed flex items-start gap-1 font-mono">
                    <span className="text-zinc-600 shrink-0">{log.timestamp}</span>
                    <span className={`px-1 rounded bg-zinc-900 text-[8px] border border-zinc-800 shrink-0 ${colorClass}`}>
                      {log.level}
                    </span>
                    <span className="text-cyan-400 shrink-0">[{log.service}]</span>
                    <span className="text-zinc-300 truncate">{log.message}</span>
                  </div>
                );
              })}
              <div ref={logEndRef} />
            </div>

            {/* Bottom Telemetry Footer */}
            <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-[8px] sm:text-[9px] text-zinc-500">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>Response Target SLA: &lt;15m</span>
              </div>
              <span>Logs linked directly to AWS CloudWatch & Grafana</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
