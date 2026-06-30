import React from "react";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { SectionHeader } from "@/components/common/section-header";
import { CtaBlock } from "@/components/common/cta-block";
import { BlogContent } from "@/components/blog/blog-content";

export const metadata: Metadata = {
  title: "Engineering Insights Blog | OnEggy Technologies",
  description: "Read technical articles and hands-on tutorials on DevOps, AWS, Kubernetes autoscaling, Terraform, and cloud-native platform engineering.",
  alternates: {
    canonical: "https://www.oneggy.com/blog",
  },
};

interface BlogPostInfo {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  image: string;
  featured: boolean;
}

interface RawBlogPost {
  title: string;
  category?: string;
  overview?: string;
  slug: string;
  mdFileLocation: string;
}

// Helper function to read all posts on the server
function getBlogPosts(): BlogPostInfo[] {
  try {
    const indexFilePath = path.join(process.cwd(), "public/AllBlogs/index.json");
    if (!fs.existsSync(indexFilePath)) return [];

    const rawData = fs.readFileSync(indexFilePath, "utf8");
    const rawPosts: RawBlogPost[] = JSON.parse(rawData);

    return rawPosts.map((post: RawBlogPost, idx: number): BlogPostInfo => {
      let image = "/blogs-thumbnails/oneggy-technologies-integrating-aws-kubernetes.png";

      // Posts have no date field; only the hero image is sourced from the
      // markdown frontmatter. Read time is estimated from the overview length.
      try {
        const mdPath = path.join(process.cwd(), post.mdFileLocation.replace("./", ""));
        if (fs.existsSync(mdPath)) {
          const content = fs.readFileSync(mdPath, "utf8");
          const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
          if (frontmatterMatch) {
            frontmatterMatch[1].split("\n").forEach((line) => {
              const parts = line.split(":");
              if (parts.length >= 2 && parts[0].trim() === "mainBigImage") {
                image = parts.slice(1).join(":").trim();
              }
            });
          }
        }
      } catch {
        // fallback to default image
      }

      // Estimate read time from word count (~200 wpm) rather than fabricating it.
      const wordCount = (post.overview || "").trim().split(/\s+/).filter(Boolean).length;
      const readTime = `${Math.max(3, Math.ceil(wordCount / 40))} min read`;

      return {
        title: post.title,
        excerpt: post.overview || "",
        date: "",
        readTime,
        category: post.category || "DevOps",
        slug: post.slug,
        image,
        // Feature the first (most-recent) post in the archive.
        featured: idx === 0,
      };
    });
  } catch (error) {
    console.error("Error reading blog index:", error);
    return [];
  }
}

export default function BlogPage() {
  const posts = getBlogPosts();
  
  // Compute categories dynamically
  const uniqueCategories = Array.from(new Set(posts.map((post) => post.category)));
  const categories = ["All", ...uniqueCategories];

  // Schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "OnEggy Technologies Engineering Blog",
    "description": "Read technical articles and hands-on tutorials on DevOps, AWS, Kubernetes autoscaling, Terraform, and cloud-native platform engineering.",
    "url": "https://www.oneggy.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "OnEggy Technologies",
      "url": "https://www.oneggy.com"
    },
    "blogPost": posts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "publisher": {
        "@type": "Organization",
        "name": "OnEggy Technologies"
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.oneggy.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.oneggy.com/blog"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-16">
        {/* Blueprint Coordinates */}
        <div aria-hidden="true" className="absolute top-2 left-10 font-mono text-xs text-muted-foreground opacity-40 select-none">
          GRID.SEC.L // BLOG.ARCHIVE_V1.1
        </div>

        <SectionHeader
          as="h1"
          tag="Our Insights"
          title={<>The OnEggy <span className="text-primary font-bold">Engineering Blog</span></>}
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
