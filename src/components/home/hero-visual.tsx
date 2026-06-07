"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { GitBranch, ShieldCheck, RefreshCw, Terminal, Cpu, GitCommit } from "lucide-react";
import Image from "next/image";

interface HeroVisualProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function HeroVisual({ mouseX, mouseY }: HeroVisualProps) {
  // Parallax offsets for different layers to create depth
  const layer1X = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const layer1Y = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

  const layer2X = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const layer2Y = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);

  const layer3X = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  const layer3Y = useTransform(mouseY, [-0.5, 0.5], [-5, 5]);

  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center select-none max-w-lg mx-auto">
      
      {/* Decorative Outer Glow Grid */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-teal-500/5 blur-3xl rounded-full" />
      
      {/* Layer 1: Backdrop pipeline SVG (Deepest parallax layer) */}
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        className="absolute inset-0 w-full h-full flex items-center justify-center p-6"
      >
        <svg viewBox="0 0 500 400" className="w-full h-full stroke-muted-foreground/15" fill="none">
          <defs>
            <linearGradient id="line-grad-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="line-grad-teal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="line-grad-purple" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Infrastructure Pathways */}
          <path d="M 60 200 L 190 200" strokeWidth="1.5" />
          <path d="M 190 200 L 320 200" strokeWidth="1.5" />
          <path d="M 320 200 L 440 200" strokeWidth="1.5" />

          {/* Animated data packets flowing down paths */}
          <motion.path
            d="M 60 200 L 190 200"
            stroke="url(#line-grad-cyan)"
            strokeWidth="2.5"
            strokeDasharray="8, 20"
            animate={{ strokeDashoffset: [0, -28] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />

          <motion.path
            d="M 190 200 L 320 200"
            stroke="url(#line-grad-teal)"
            strokeWidth="2.5"
            strokeDasharray="10, 24"
            animate={{ strokeDashoffset: [0, -34] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
          />

          <motion.path
            d="M 320 200 L 440 200"
            stroke="url(#line-grad-purple)"
            strokeWidth="2.5"
            strokeDasharray="6, 18"
            animate={{ strokeDashoffset: [0, -24] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          />

          {/* Connective dots background */}
          <circle cx="60" cy="200" r="4" className="fill-muted-foreground/30" />
          <circle cx="190" cy="200" r="4" className="fill-muted-foreground/30" />
          <circle cx="320" cy="200" r="4" className="fill-muted-foreground/30" />
          <circle cx="440" cy="200" r="4" className="fill-muted-foreground/30" />
        </svg>
      </motion.div>

      {/* Layer 2: Main GitOps Pipeline Stages (Medium parallax layer) */}
      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Node 1: Source Code Git Commit (x=12%) */}
        <div className="absolute top-[50%] left-[12%] -translate-x-1/2 -translate-y-1/2 group z-20">
          <div className="relative w-11 h-11 rounded-lg bg-background/80 border border-border/80 flex items-center justify-center shadow-lg group-hover:border-cyan-500/50 transition-all cursor-pointer">
            <GitBranch className="h-5 w-5 text-cyan-400 group-hover:scale-105 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 border-2 border-background animate-pulse" />
          </div>
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-[9px] font-mono text-muted-foreground whitespace-nowrap bg-background/40 backdrop-blur-xs p-1 rounded-md border border-border/30 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="text-foreground font-semibold">commit-push</span>
            <span className="text-cyan-400/90">feat: eks-spot</span>
          </div>
        </div>

        {/* Node 2: CI Scan/Verify Node (x=38%) */}
        <div className="absolute top-[50%] left-[38%] -translate-x-1/2 -translate-y-1/2 group z-20">
          <div className="relative w-11 h-11 rounded-lg bg-background/80 border border-border/80 flex items-center justify-center shadow-lg group-hover:border-teal-500/50 transition-all cursor-pointer">
            <ShieldCheck className="h-5 w-5 text-teal-400 group-hover:scale-105 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-teal-400 border-2 border-background" />
          </div>
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-[9px] font-mono text-muted-foreground whitespace-nowrap bg-background/40 backdrop-blur-xs p-1 rounded-md border border-border/30 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="text-foreground font-semibold">tfsec-scanner</span>
            <span className="text-teal-400/90">0 issues ✓</span>
          </div>
        </div>

        {/* Node 3: GitOps CD Reconciler (x=64%) */}
        <div className="absolute top-[50%] left-[64%] -translate-x-1/2 -translate-y-1/2 group z-20">
          <div className="relative w-11 h-11 rounded-lg bg-background/80 border border-border/80 flex items-center justify-center shadow-lg group-hover:border-purple-500/50 transition-all cursor-pointer">
            <RefreshCw className="h-4 w-4 text-purple-400 animate-spin group-hover:scale-105 transition-transform" style={{ animationDuration: "8s" }} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-purple-400 border-2 border-background" />
          </div>
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-[9px] font-mono text-muted-foreground whitespace-nowrap bg-background/40 backdrop-blur-xs p-1 rounded-md border border-border/30 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="text-foreground font-semibold">state-sync</span>
            <span className="text-purple-400/90">in-sync 100%</span>
          </div>
        </div>

        {/* Node 4: AWS EKS / Landing Zone (x=88%) */}
        <div className="absolute top-[50%] left-[88%] -translate-x-1/2 -translate-y-1/2 group z-20">
          <div className="relative w-14 h-14 rounded-xl bg-background/90 border border-border/80 flex items-center justify-center shadow-xl group-hover:border-orange-500/50 transition-all cursor-pointer">
            <div className="relative w-8 h-8 group-hover:scale-105 transition-transform">
              <Image 
                src="/service/aws.svg" 
                alt="AWS EKS" 
                fill 
                sizes="32px" 
                className="object-contain filter brightness-95" 
              />
            </div>
            {/* Status light */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-background animate-pulse" />
          </div>
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-[9px] font-mono text-muted-foreground whitespace-nowrap bg-background/40 backdrop-blur-xs p-1 rounded-md border border-border/30 opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="text-foreground font-semibold">eks-prod-us</span>
            <span className="text-green-400">99.99% active</span>
          </div>
        </div>
      </motion.div>

      {/* Layer 3: Glass Floating Metric Cards (Closest parallax layer) */}
      <motion.div
        style={{ x: layer3X, y: layer3Y }}
        className="absolute inset-0 w-full h-full pointer-events-none z-30"
      >
        {/* Floating Card A: Cost Telemetry (Top Left) */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[10%] glass-card p-2.5 rounded-lg shadow-md border border-white/5 flex items-center gap-2 pointer-events-auto hover:border-cyan-500/30 transition-colors w-[28%] max-w-[130px] min-w-[100px]"
        >
          <div className="w-7 h-7 rounded bg-cyan-500/10 flex items-center justify-center shrink-0">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
          </div>
          <div className="min-w-0">
            <span className="text-[8px] uppercase tracking-wider text-muted-foreground block font-mono">Spot Nodes</span>
            <span className="text-[10px] font-bold text-foreground font-mono truncate block">84% Off-Demand</span>
          </div>
        </motion.div>

        {/* Floating Card B: GitOps Workspace state (Bottom Left-Center) */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute bottom-[10%] left-[28%] glass-card p-2.5 rounded-lg shadow-md border border-white/5 flex items-center gap-2 pointer-events-auto hover:border-teal-500/30 transition-colors w-[34%] max-w-[150px] min-w-[120px]"
        >
          <div className="w-7 h-7 rounded bg-teal-500/10 flex items-center justify-center shrink-0">
            <GitCommit className="h-3.5 w-3.5 text-teal-400" />
          </div>
          <div className="min-w-0">
            <span className="text-[8px] uppercase tracking-wider text-muted-foreground block font-mono">Managed IaC</span>
            <span className="text-[10px] font-bold text-foreground font-mono truncate block">Zero Drift Verified</span>
          </div>
        </motion.div>

        {/* Floating Card C: Real-time logs console (Top Right) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-[12%] right-[8%] glass-card p-2.5 rounded-lg shadow-lg border border-white/5 flex flex-col gap-1 pointer-events-auto hover:border-purple-500/30 transition-colors w-[32%] max-w-[160px] min-w-[110px]"
        >
          <div className="flex items-center gap-1">
            <Terminal className="h-3 w-3 text-purple-400" />
            <span className="text-[8px] font-mono text-muted-foreground">terminal-stream</span>
          </div>
          <div className="font-mono text-[8px] space-y-0.5 text-foreground/80 leading-tight">
            <p className="text-green-400 font-semibold">$ terraform plan</p>
            <p className="text-muted-foreground truncate">No changes. Infra matches spec.</p>
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
}

