"use client";

import React from "react";
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";

const posts = [
  {
    title: "AWS Cost Optimization: Best Strategies for Startups",
    excerpt: "Learn how to conduct cost-saving audits, identify unused resources, and leverage spot instances to slash your cloud bill.",
    date: "May 20, 2026",
    readTime: "6 min read",
    category: "Cloud Cost",
  },
  {
    title: "How to Build Automated CI/CD Pipelines for EKS Clusters",
    excerpt: "A complete step-by-step guide to orchestrating deployments using GitHub Actions, Helm, and ArgoCD on AWS Kubernetes.",
    date: "May 15, 2026",
    readTime: "8 min read",
    category: "Kubernetes",
  },
  {
    title: "Why Infrastructure as Code is Vital for Platform Engineering",
    excerpt: "A deep dive into declarative infrastructure models using Terraform to build custom internal developer platforms.",
    date: "May 10, 2026",
    readTime: "5 min read",
    category: "IaC",
  },
];

export default function BlogPage() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24">
      {/* Decorative Orb */}
      <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-3xl mb-16 space-y-6">
        <FadeUp>
          <span className="text-xs uppercase tracking-widest text-cyan-500 font-semibold">Our Insights</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            The OnEggy <span className="gradient-text">Engineering Blog</span>
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stay up to date with the latest industry insights, tutorials, and best practices in DevOps, Kubernetes, and Cloud-Native platforms.
          </p>
        </FadeUp>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <StaggerItem
            key={index}
            className="glass-card hover:border-cyan-500/40 p-8 rounded-xl flex flex-col justify-between h-[320px] transition-all group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span className="px-2.5 py-0.5 rounded-full bg-background/80 border border-border/40 text-cyan-500 font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>
            <div className="border-t border-border/40 pt-4 mt-6 flex justify-between items-center text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> {post.date}
              </span>
              <span className="font-semibold text-foreground group-hover:text-cyan-500 inline-flex items-center gap-1">
                Read Post <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
