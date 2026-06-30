"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Award, Shield, User } from "lucide-react";
import { profile as teamProfiles } from "../../../public/data/teamSection.json";

export function TeamPreview() {
  // Extract founder for the spotlight
  const founder = teamProfiles.find((m) => m.position.toLowerCase() === "founder");
  // Extract other members for the roster
  const roster = teamProfiles.filter((m) => m.position.toLowerCase() !== "founder");

  // Custom mapping of verified credentials to look high-integrity
  const getCredential = (position: string) => {
    const pos = position.toLowerCase();
    if (pos.includes("devops")) return "CKA Certified Administrator";
    if (pos.includes("full-stack")) return "Next.js Core Specialist";
    if (pos.includes("mentor")) return "Scale & Growth Advisor";
    if (pos.includes("mobile")) return "React Native Tech Lead";
    return "Certified Systems Architect";
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-32 border-t border-zinc-900/60 relative">
      
      {/* Structural layout lines */}
      <div className="absolute left-10 md:left-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />
      <div className="absolute right-10 md:right-20 top-0 bottom-0 w-[1px] bg-zinc-900/40 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Column: Founder Spotlight & Philosophy (5 cols) */}
        <div className="lg:col-span-5 space-y-8 pl-0 lg:pl-10">
          <div className="space-y-4">
            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.2em] block">
              Leadership Spotlight
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground font-display leading-[1.1]">
              Human-Centered Infrastructure Core
            </h2>
          </div>

          {/* Founder block */}
          {founder && (
            <div className="p-6 rounded border border-zinc-900 bg-zinc-950/20 space-y-6">
              <p className="text-sm sm:text-base text-zinc-300 font-medium italic leading-relaxed font-sans">
                &ldquo;Traditional agencies click buttons in AWS console boards. We build declarative GitOps codebases owned entirely by you from day one.&rdquo;
              </p>
              
              <div className="flex items-center gap-3 border-t border-zinc-900 pt-4">
                <div className="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <User className="h-4.5 w-4.5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{founder.name}</h4>
                  <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider block">
                    {founder.position} // AWS Certified Solutions Architect
                  </span>
                </div>
              </div>
            </div>
          )}

          <div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-primary hover:text-foreground tracking-widest uppercase transition-colors group"
            >
              Review Practice Leadership <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Engineering Roster Table (7 cols) */}
        <div className="lg:col-span-7">
          <div className="border border-zinc-900 rounded bg-zinc-950/20 overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-900 bg-zinc-900/10 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-primary font-bold uppercase tracking-widest block">
                  Active Roster
                </span>
                <h3 className="text-sm font-bold text-foreground font-display mt-0.5">
                  Systems Specialists & Practice Credentials
                </h3>
              </div>
              <span className="text-[9px] font-mono text-zinc-550 uppercase tracking-wider">
                {roster.length} ENGINEERS ACTIVE
              </span>
            </div>

            <div className="divide-y divide-zinc-900 font-sans">
              {roster.map((member) => (
                <div 
                  key={member.name} 
                  className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-zinc-900/10 transition-colors"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {member.name}
                      </h4>
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-850 text-[9px] font-mono text-zinc-500">
                        {member.position}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed max-w-[42ch]">
                      {member.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                    <Award className="h-4.5 w-4.5 text-primary shrink-0" />
                    <span className="text-[10px] font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                      {getCredential(member.position)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
