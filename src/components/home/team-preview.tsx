"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Network, Shield, Smartphone, Terminal } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../animations/motion-wrappers";
import { profile as teamProfiles } from "../../../public/data/teamSection.json";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

const avatarBgClasses = [
  "bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono",
  "bg-zinc-950 border border-zinc-900/60 text-zinc-450 font-mono",
  "bg-zinc-900/80 border border-zinc-850 text-zinc-400 font-mono",
];

const getAvatarStyle = (name: string) => {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return avatarBgClasses[sum % avatarBgClasses.length];
};

const getRoleIcon = (position: string) => {
  const pos = position.toLowerCase();
  if (pos.includes("founder")) return <Cpu className="h-4 w-4 text-primary" />;
  if (pos.includes("devops")) return <Network className="h-4 w-4 text-blue-400" />;
  if (pos.includes("full-stack")) return <Terminal className="h-4 w-4 text-slate-400" />;
  if (pos.includes("mentor")) return <Shield className="h-4 w-4 text-primary" />;
  return <Smartphone className="h-4 w-4 text-primary" />;
};

const getMemberCredential = (position: string) => {
  const pos = position.toLowerCase();
  if (pos.includes("founder")) return "AWS Certified SAP";
  if (pos.includes("devops")) return "Kubernetes CKA";
  if (pos.includes("full-stack")) return "Next.js Core Lead";
  if (pos.includes("mentor")) return "Scale Advisor";
  return "Mobile Architecture";
};

export function TeamPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border/40 relative">
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[110px] pointer-events-none -z-10" />

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4 max-w-xl">
          <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest block">
            Advisory Leadership
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            Our Certified <span className="text-primary font-display">Practice Directors</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
            Our teams are led directly by certified solutions architects and senior advisors who maintain direct oversight over all system modernizations.
          </p>
        </div>

        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary hover:text-foreground transition-colors uppercase tracking-widest group cursor-pointer"
        >
          View Team Credentials <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
        {teamProfiles.map((member) => {
          const avatarStyle = getAvatarStyle(member.name);
          return (
            <StaggerItem
              key={member.name}
              className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/20 hover:border-zinc-700 flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-5">
                {/* Visual Header Row */}
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-full ${avatarStyle} flex items-center justify-center font-bold font-mono text-xs shadow-md shrink-0 border border-zinc-800`}>
                    {getInitials(member.name)}
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    {getRoleIcon(member.position)}
                  </div>
                </div>

                {/* Profile Meta */}
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {member.name}
                  </h3>
                  <span className="text-[9px] font-mono text-primary font-semibold uppercase tracking-wider block">
                    {member.position}
                  </span>
                </div>

                <p className="text-[11px] text-muted-foreground leading-relaxed pt-2 border-t border-zinc-900/60 font-sans">
                  {member.description}
                </p>
              </div>

              {/* Verified Credentials instead of active telemetry status */}
              <div className="pt-4 border-t border-zinc-900/60 mt-6 flex items-center justify-between text-[8px] font-mono text-zinc-550 font-bold uppercase tracking-wider">
                <span>verified credential</span>
                <span className="text-primary font-semibold">{getMemberCredential(member.position)}</span>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
