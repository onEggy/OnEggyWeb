import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";
import { BlogContent } from "@/components/blog/blog-content";

export const metadata: Metadata = {
  title: "Engineering Insights Blog | OnEggy Technologies",
  description: "Read technical articles, sitemaps blueprints, and tutorials on AWS Control Tower, Kubernetes autoscaling pipelines, Terraform configs, and FastAPI async structures.",
  alternates: {
    canonical: "https://www.oneggy.com/blog",
  },
};

const categories = ["All", "Cloud Cost", "Kubernetes", "IaC"];

const posts = [
  {
    title: "AWS Cost Optimization: Best Strategies for Startups",
    excerpt: "Learn how to conduct cost-saving audits, identify unused resources, and leverage spot instances to slash your monthly bills by 30%+.",
    date: "May 20, 2026",
    readTime: "6 min read",
    category: "Cloud Cost",
    featured: true,
  },
  {
    title: "How to Build Automated CI/CD Pipelines for EKS Clusters",
    excerpt: "A complete step-by-step guide to orchestrating deployments using GitHub Actions, Helm, and ArgoCD on AWS Kubernetes.",
    date: "May 15, 2026",
    readTime: "8 min read",
    category: "Kubernetes",
    featured: false,
  },
  {
    title: "Why Infrastructure as Code is Vital for Platform Engineering",
    excerpt: "A deep dive into declarative infrastructure models using Terraform to build custom internal developer platforms.",
    date: "May 10, 2026",
    readTime: "5 min read",
    category: "IaC",
    featured: false,
  },
  {
    title: "Multi-Account AWS Landing Zone Blueprint for Compliance",
    excerpt: "Configure secure, automated Control Tower accounts supporting strict segregation of concerns and log auditing.",
    date: "May 05, 2026",
    readTime: "7 min read",
    category: "Cloud Cost",
    featured: false,
  },
  {
    title: "Observability at Scale: Prometheus & Grafana Configuration Guide",
    excerpt: "Establish full telemetry clusters tracking CPU, latency spikes, and autoscaling logs with zero blindspots.",
    date: "Apr 28, 2026",
    readTime: "9 min read",
    category: "Kubernetes",
    featured: false,
  },
  {
    title: "HashiCorp Vault Secrets Rotation in GitHub Pipelines",
    excerpt: "Inject secure credentials dynamically at runtime to eliminate hardcoded credentials in git repositories.",
    date: "Apr 22, 2026",
    readTime: "6 min read",
    category: "IaC",
    featured: false,
  },
];

export default function BlogPage() {
  // Generate dynamic schema markup for the list of articles
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "OnEggy Technologies Engineering Blog",
    "description": "Read technical articles, sitemaps blueprints, and tutorials on AWS Control Tower, Kubernetes autoscaling pipelines, Terraform configs, and FastAPI async structures.",
    "url": "https://www.oneggy.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "OnEggy Technologies",
      "url": "https://www.oneggy.com"
    },
    "blogPost": posts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "publisher": {
        "@type": "Organization",
        "name": "OnEggy Technologies"
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-16">
        {/* Decorative Orb */}
        <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none -z-10" />
        <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none -z-10" />

        <SectionHeader
          tag="Our Insights"
          title={<>The OnEggy <span className="gradient-text">Engineering Blog</span></>}
          subtitle="Stay up to date with the latest industry insights, tutorials, and best practices in DevOps, Kubernetes, and Cloud-Native platforms."
          align="left"
          className="max-w-3xl"
        />

        {/* Stateful Client Blog Content */}
        <BlogContent posts={posts} categories={categories} />

        {/* Subscription CTA Block */}
        <div className="py-12 border-t border-border/40">
          <CtaBlock
            title="Want engineering articles delivered to your inbox?"
            description="Subscribe to our monthly newsletter to get Kubernetes scaling blueprints, AWS cost reviews, and secure pipeline checklists."
            btnText="Subscribe to Insights"
            btnHref="#footer-newsletter"
          />
        </div>
      </div>
    </>
  );
}
