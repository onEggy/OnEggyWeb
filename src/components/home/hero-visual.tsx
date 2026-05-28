"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Cpu, GitBranch, Terminal } from "lucide-react";
import Image from "next/image";

interface HeroVisualProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function HeroVisual({ mouseX, mouseY }: HeroVisualProps) {
  // Parallax offsets for different layers to create depth
  const layer1X = useTransform(mouseX, [-0.5, 0.5], [-25, 25]);
  const layer1Y = useTransform(mouseY, [-0.5, 0.5], [-25, 25]);

  const layer2X = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const layer2Y = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);

  const layer3X = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  const layer3Y = useTransform(mouseY, [-0.5, 0.5], [-6, 6]);

  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center select-none max-w-lg mx-auto">
      
      {/* Decorative Outer Glow Grid */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent blur-3xl rounded-full" />
      
      {/* Layer 1: Backdrop pipeline SVG (Deepest parallax layer) */}
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        className="absolute inset-0 w-full h-full flex items-center justify-center p-6"
      >
        <svg viewBox="0 0 500 400" className="w-full h-full stroke-muted-foreground/20" fill="none">
          <defs>
            <linearGradient id="line-grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="line-grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Infrastructure Pathways */}
          <path d="M 60 200 Q 150 100 250 200" strokeWidth="1.5" />
          <path d="M 60 200 Q 150 300 250 200" strokeWidth="1.5" />
          <path d="M 250 200 L 440 200" strokeWidth="1.5" />

          {/* Animated data packets flowing down paths */}
          <motion.path
            d="M 60 200 Q 150 100 250 200"
            stroke="url(#line-grad-cyan)"
            strokeWidth="2.5"
            strokeDasharray="6, 25"
            animate={{ strokeDashoffset: [0, -31] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          />

          <motion.path
            d="M 60 200 Q 150 300 250 200"
            stroke="url(#line-grad-teal)"
            strokeWidth="2.5"
            strokeDasharray="8, 30"
            animate={{ strokeDashoffset: [0, 38] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />

          <motion.path
            d="M 250 200 L 440 200"
            stroke="url(#line-grad-cyan)"
            strokeWidth="3"
            strokeDasharray="10, 20"
            animate={{ strokeDashoffset: [0, -30] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          />

          {/* Node Points circles */}
          <circle cx="60" cy="200" r="5" className="fill-cyan-500" />
          <circle cx="250" cy="200" r="6" className="fill-teal-400" />
          <circle cx="440" cy="200" r="5" className="fill-indigo-500" />
        </svg>
      </motion.div>

      {/* Layer 2: Main Interactive DevOps Node Elements (Medium parallax layer) */}
      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Node 1: AWS Node (Left) */}
        <div className="absolute top-[50%] left-[12%] -translate-x-1/2 -translate-y-1/2 group">
          <div className="relative w-12 h-12 rounded-xl bg-background/80 border border-border/80 flex items-center justify-center shadow-lg group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/10 transition-all cursor-pointer">
            <div className="relative w-6 h-6 group-hover:scale-105 transition-transform">
              <Image 
                src="/service/aws.svg" 
                alt="AWS Cloud" 
                fill 
                sizes="24px" 
                className="object-contain" 
              />
            </div>
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-xl border border-cyan-500/20 scale-110 animate-ping opacity-60 pointer-events-none" />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            aws-cloud
          </span>
        </div>

        {/* Node 2: Kubernetes Node (Center) */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 group">
          <div className="relative w-16 h-16 rounded-2xl bg-background/90 border border-border/80 flex items-center justify-center shadow-2xl group-hover:border-teal-500/50 group-hover:shadow-teal-500/15 transition-all cursor-pointer">
            <div className="relative w-9 h-9 group-hover:rotate-6 transition-transform">
              <Image 
                src="/kubernetes.png" 
                alt="Kubernetes Container Platform" 
                fill 
                sizes="36px" 
                className="object-contain" 
              />
            </div>
            
            {/* Scaling inner pod indicators */}
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-background animate-pulse" />
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            k8s-platform
          </span>
        </div>

        {/* Node 3: MongoDB Database Node (Right) */}
        <div className="absolute top-[50%] left-[88%] -translate-x-1/2 -translate-y-1/2 group">
          <div className="relative w-12 h-12 rounded-xl bg-background/80 border border-border/80 flex items-center justify-center shadow-lg group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/10 transition-all cursor-pointer">
            <div className="relative w-6 h-6 group-hover:scale-105 transition-transform">
              <Image 
                src="/service/mongodb.svg" 
                alt="MongoDB database" 
                fill 
                sizes="24px" 
                className="object-contain" 
              />
            </div>
          </div>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            mongodb-replica
          </span>
        </div>
      </motion.div>

      {/* Layer 3: Glass Floating Cards (Closest parallax layer, high interactive depth) */}
      <motion.div
        style={{ x: layer3X, y: layer3Y }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {/* Floating Card A: Cluster Uptime */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[15%] glass-card p-3 rounded-xl shadow-lg border border-white/5 flex items-center gap-2.5 pointer-events-auto hover:border-cyan-500/30 transition-colors w-[30%] max-w-[150px] min-w-[110px]"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
            <Cpu className="h-4 w-4 text-cyan-400" />
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-mono">CPU Usage</span>
            <span className="text-xs font-bold text-foreground font-mono">14.8% Active</span>
          </div>
        </motion.div>

        {/* Floating Card B: Deploy Status */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[12.5%] left-[25%] glass-card p-3 rounded-xl shadow-lg border border-white/5 flex items-center gap-2.5 pointer-events-auto hover:border-teal-500/30 transition-colors w-[36%] max-w-[180px] min-w-[120px]"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
            <GitBranch className="h-4 w-4 text-teal-400 animate-pulse" />
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-mono">CI/CD Runner</span>
            <span className="text-xs font-bold text-foreground font-mono">pipeline: success</span>
          </div>
        </motion.div>

        {/* Floating Card C: Active Logs Term */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[15%] right-[10%] glass-card p-3 rounded-xl shadow-xl border border-white/5 flex flex-col gap-1.5 pointer-events-auto hover:border-indigo-500/30 transition-colors w-[34%] max-w-[170px] min-w-[120px]"
        >
          <div className="flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-indigo-400" />
            <span className="text-[9px] font-mono text-muted-foreground">terminal-stream</span>
          </div>
          <div className="font-mono text-[9px] space-y-0.5 text-foreground/80 leading-normal">
            <p className="text-green-400">$ terraform apply</p>
            <p className="text-cyan-400">Apply complete! Resources: 14 added, 0 changed.</p>
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
}
