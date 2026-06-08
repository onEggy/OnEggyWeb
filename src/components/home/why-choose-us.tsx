"use client";

import React, { useState } from "react";
import { ShieldCheck, PiggyBank, Terminal as TermIcon, FileCode, Terminal } from "lucide-react";
import { SectionHeader } from "../common/section-header";
import { FadeIn, FadeUp } from "../animations/motion-wrappers";

type TabName = "main.tf" | "variables.tf" | "drift.log";

export function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<TabName>("main.tf");
  const [isHovered, setIsHovered] = useState(false);

  // File code mappings
  const codeContents: Record<TabName, React.ReactNode> = {
    "main.tf": (
      <pre className="text-[10px] sm:text-xs font-mono text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre">
{`# AWS VPC & Private Subnets for EKS
resource "aws_vpc" "eks_vpc" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name      = "oneggy-eks-vpc"
    ManagedBy = "Terraform"
  }
}

module "eks_cluster" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = "oneggy-prod-eks"
  cluster_version = "1.30"
  vpc_id          = aws_vpc.eks_vpc.id
  subnet_ids      = aws_subnet.private[*].id

  eks_managed_node_groups = {
    spot_nodes = {
      min_size       = 2
      max_size       = 10
      desired_size   = 3
      instance_types = ["m6i.xlarge", "m6a.xlarge"]
      capacity_type  = "SPOT"
    }
  }
}`}
      </pre>
    ),
    "variables.tf": (
      <pre className="text-[10px] sm:text-xs font-mono text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre">
{`variable "vpc_cidr" {
  type        = string
  default     = "10.0.0.0/16"
  description = "Target VPC IP Range"
}

variable "environment" {
  type        = string
  default     = "production"
  description = "Target Deployment Env"
}

variable "region" {
  type        = string
  default     = "us-east-1"
}`}
      </pre>
    ),
    "drift.log": (
      <pre className="text-[10px] sm:text-xs font-mono text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre">
{`$ terraform plan -detailed-exitcode

Refreshing Terraform state in-memory...
aws_vpc.eks_vpc: Refreshing state... [id=vpc-0d927f8a]
module.eks_cluster.aws_eks_cluster.this: Refreshing state...

No changes. Infrastructure matches spec.

✓ Drift status: 100% compliant.
✓ Resources managed: 142 resources.
✓ Verification timestamp: 2026-06-07T16:48`}
      </pre>
    )
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border/40 relative">
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-teal-500/5 blur-[90px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copy and detailed tech bullets */}
        <div className="lg:col-span-5 space-y-6">
          <SectionHeader
            tag="Why Partner With Us"
            title={<>Engineered for <span className="text-cyan-400">Absolute Reliability</span> & Scale</>}
            subtitle="We partner with startup founders and enterprise CTOs to replace manual deployment friction with declarative, drift-free platform automation."
            align="left"
            className="mb-0"
          />

          <FadeUp delay={0.2} className="space-y-4 pt-4 border-t border-border/20">
            <div className="flex gap-3.5">
              <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-4.5 w-4.5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Senior Architect Led</h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  We assign AWS Professional Certified Architects directly to your workloads. No junior hand-offs or outsourced QA loops.
                </p>
              </div>
            </div>

            <div className="flex gap-3.5">
              <div className="w-8 h-8 rounded bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                <PiggyBank className="h-4.5 w-4.5 text-teal-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Waste & Spend Optimization</h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Continuous rightsizing of EKS capacity and EBS volumes ensures you only pay for resources your platform actively consumes.
                </p>
              </div>
            </div>

            <div className="flex gap-3.5">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <TermIcon className="h-4.5 w-4.5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">100% Declarative IaC</h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  Every account tier, network rule, and IAM policy is written in modular Terraform/Helm blueprints to avoid vendor lock-in.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right Side: Interactive Mock Code Workspace Terminal */}
        <div className="lg:col-span-7">
          <FadeIn delay={0.3} className="w-full">
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="bg-zinc-950/90 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative"
            >
              {/* Terminal Window Header */}
              <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 select-none">
                  <FileCode className="h-3.5 w-3.5 text-cyan-400" />
                  <span>infrastructure-workspace / templates</span>
                </div>
                <div className="w-12" /> {/* spacer */}
              </div>

              {/* File Workspace Tabs */}
              <div className="flex border-b border-zinc-800 bg-zinc-900/50 select-none">
                {(["main.tf", "variables.tf", "drift.log"] as TabName[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 border-r border-zinc-800 font-mono text-[10px] sm:text-xs transition-colors cursor-pointer ${
                      activeTab === tab 
                        ? "bg-zinc-950 text-foreground border-b-2 border-b-cyan-500" 
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Code Panel */}
              <div className="p-4 sm:p-6 min-h-[320px] max-h-[380px] overflow-y-auto bg-zinc-950/80 select-text">
                {codeContents[activeTab]}
              </div>

              {/* Live Run overlay notification on hover */}
              <div className={`absolute bottom-0 inset-x-0 bg-zinc-900/95 border-t border-zinc-800 p-3 font-mono text-[9px] sm:text-xs flex items-center justify-between transition-all duration-300 ${
                isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
              }`}>
                <div className="flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-green-400 animate-pulse" />
                  <span className="text-zinc-300">Terraform drift inspector:</span>
                  <span className="text-green-400 font-semibold">Ready to test plan</span>
                </div>
                <span className="text-zinc-500 hidden sm:inline-block">drift status: fully compliant</span>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
