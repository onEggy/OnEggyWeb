"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, ShieldAlert, Cpu, Database, Network, Activity, RefreshCw } from "lucide-react";

const checks = [
  {
    id: "ingress",
    name: "aws-ingress-gateway",
    status: "healthy",
    metrics: "ALB Routing | WAF Guard",
    uptime: "99.99%",
    icon: <Network className="h-4 w-4 text-cyan-400" />,
  },
  {
    id: "k8s",
    name: "k8s-pod-scaler",
    status: "healthy",
    metrics: "HPA Active | 14 Nodes",
    uptime: "99.98%",
    icon: <Cpu className="h-4 w-4 text-teal-400" />,
  },
  {
    id: "db",
    name: "replica-database-sync",
    status: "healthy",
    metrics: "Aurora Multi-AZ | 0ms lag",
    uptime: "100%",
    icon: <Database className="h-4 w-4 text-indigo-400" />,
  },
];

export function StatusBoard() {
  const [blockedThreats, setBlockedThreats] = useState(4209);
  const [lastCheckTime, setLastCheckTime] = useState("Just now");
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate random blocked threats increasing
      setBlockedThreats((prev) => prev + Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      const now = new Date();
      setLastCheckTime(`Checked at ${now.toLocaleTimeString()}`);
    }, 800);
  };

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
            We don&apos;t deploy and walk away. Our solutions are engineered with automated self-healing clusters, multi-AZ database replication, and real-time PagerDuty alarms to isolate security events before they impact your clients.
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

        {/* Right Side: Visual System Status Dashboard Panel */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-2xl border border-border/40 p-6 md:p-8 shadow-2xl relative overflow-hidden bg-background/25">
            {/* Edge glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-40 pointer-events-none" />

            {/* Header controls of status board */}
            <div className="flex items-center justify-between border-b border-border/40 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-bold text-foreground">Systems Status Dashboard</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline-block">
                  {lastCheckTime}
                </span>
                <button
                  onClick={handleManualRefresh}
                  disabled={isRefreshing}
                  className="p-1.5 rounded-lg border border-border/40 bg-background/40 hover:bg-accent/40 text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                  aria-label="Refresh Status"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin text-cyan-500" : ""}`} />
                </button>
              </div>
            </div>

            {/* Metrics Checklist Stack */}
            <div className="space-y-4">
              {checks.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-border/30 bg-background/50 backdrop-blur-sm group hover:border-cyan-500/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-background/80 border border-border/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground font-mono">{item.name}</h4>
                      <span className="text-[11px] text-muted-foreground block mt-0.5">{item.metrics}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 mt-3 sm:mt-0 pt-3 sm:pt-0 border-t border-border/10 sm:border-0">
                    <div className="text-left sm:text-right">
                      <span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-mono">Uptime</span>
                      <span className="text-xs font-mono font-bold text-foreground">{item.uptime}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] text-green-400 font-bold uppercase tracking-wider font-mono">
                      <CheckCircle2 className="h-3 w-3 shrink-0" />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Firewall Security Live Telemetry Card */}
              <div className="p-4 rounded-xl border border-red-500/10 bg-red-500/[0.01] flex flex-col sm:flex-row sm:items-center justify-between transition-all hover:border-red-500/25 duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-background/80 border border-red-500/10 flex items-center justify-center shrink-0">
                    <ShieldAlert className="h-4 w-4 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground font-mono">aws-waf-firewall</h4>
                    <span className="text-[11px] text-muted-foreground block mt-0.5">Threat Prevention Edge</span>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-6 mt-3 sm:mt-0 pt-3 sm:pt-0 border-t border-border/10 sm:border-0">
                  <div className="text-left sm:text-right">
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-mono">Threats Blocked</span>
                    <span className="text-xs font-mono font-bold text-red-400">{blockedThreats.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] text-red-400 font-bold uppercase tracking-wider font-mono">
                    <Activity className="h-3 w-3 shrink-0 animate-pulse" />
                    <span>Active Protection</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom SLA assurance footer */}
            <div className="mt-6 pt-5 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 text-[11px] text-muted-foreground">
              <span>SLA Response Target: &lt;15 mins for critical bugs</span>
              <span>Centralized Log Shipping: Active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
