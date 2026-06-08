import React from "react";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import { parseMarkdown } from "@/lib/markdown-parser";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface BlogPostFileEntry {
  title: string;
  category?: string;
  overview?: string;
  slug: string;
  mdFileLocation: string;
}

// Generate static params for all 65 blog posts
export async function generateStaticParams() {
  try {
    const indexFilePath = path.join(process.cwd(), "public/AllBlogs/index.json");
    if (!fs.existsSync(indexFilePath)) return [];
    
    const rawData = fs.readFileSync(indexFilePath, "utf8");
    const posts: BlogPostFileEntry[] = JSON.parse(rawData);
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params for blogs:", error);
    return [];
  }
}

// Helper to get blog post content and metadata
function getBlogPost(slug: string) {
  try {
    const indexFilePath = path.join(process.cwd(), "public/AllBlogs/index.json");
    if (!fs.existsSync(indexFilePath)) return null;

    const rawData = fs.readFileSync(indexFilePath, "utf8");
    const posts: BlogPostFileEntry[] = JSON.parse(rawData);
    const postEntry = posts.find((p) => p.slug === slug);
    if (!postEntry) return null;

    const mdPath = path.join(process.cwd(), postEntry.mdFileLocation.replace("./", ""));
    if (!fs.existsSync(mdPath)) return null;

    const fileContent = fs.readFileSync(mdPath, "utf8");

    // Extract frontmatter
    let date = "Oct 24, 2024";
    let readTime = "8 min";
    let subTitle = postEntry.overview;
    let description = postEntry.overview;
    let blogPageTitle = postEntry.title;
    let keywords = "";
    let mainBigImage = "/blogs-thumbnails/oneggy-technologies-integrating-aws-kubernetes.png";

    const frontmatterMatch = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (frontmatterMatch) {
      const lines = frontmatterMatch[1].split("\n");
      lines.forEach((line) => {
        const parts = line.split(":");
        if (parts.length >= 2) {
          const key = parts[0].trim();
          const val = parts.slice(1).join(":").trim();
          if (key === "date") date = val;
          else if (key === "readTime") readTime = val;
          else if (key === "subTitle") subTitle = val;
          else if (key === "description") description = val;
          else if (key === "blogPageTitle") blogPageTitle = val;
          else if (key === "keywords") keywords = val;
          else if (key === "mainBigImage") mainBigImage = val;
        }
      });
    }

    const htmlContent = parseMarkdown(fileContent);

    return {
      title: postEntry.title,
      category: postEntry.category || "DevOps",
      slug,
      date,
      readTime,
      subTitle,
      description,
      blogPageTitle,
      keywords: keywords.split(",").map((k) => k.trim()).filter(Boolean),
      mainBigImage,
      htmlContent,
    };
  } catch (error) {
    console.error("Error loading blog post details:", error);
    return null;
  }
}

// Generate metadata dynamically for each blog post
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | OnEggy Technologies",
    };
  }

  return {
    title: `${post.blogPageTitle} | OnEggy Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.oneggy.com/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.blogPageTitle,
      description: post.description,
      url: `https://www.oneggy.com/blogs/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["OnEggy Engineering Team"],
      images: [
        {
          url: `https://www.oneggy.com${post.mainBigImage}`,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.blogPageTitle,
      description: post.description,
      images: [`https://www.oneggy.com${post.mainBigImage}`],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Schema.org structured data JSON-LD markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://www.oneggy.com${post.mainBigImage}`,
    "datePublished": post.date,
    "description": post.description,
    "author": {
      "@type": "Organization",
      "name": "OnEggy Technologies",
      "url": "https://www.oneggy.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "OnEggy Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.oneggy.com/logov1.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.oneggy.com/blogs/${post.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup).replace(/</g, "\\u003c"),
        }}
      />
      <article className="relative max-w-4xl mx-auto px-6 py-8 md:py-16 space-y-10 overflow-hidden">
        {/* Glow Backgrounds */}
        <div className="absolute top-[5%] left-[-15%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[90px] pointer-events-none -z-10 animate-pulse" />
        <div className="absolute bottom-[20%] right-[-15%] w-[350px] h-[350px] rounded-full bg-teal-500/5 blur-[95px] pointer-events-none -z-10" />

        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-cyan-500 transition-colors group cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to engineering insights
        </Link>

        {/* Header Block */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-cyan-500 font-semibold uppercase tracking-wider">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground leading-[1.15] tracking-tight">
            {post.title}
          </h1>

          {post.subTitle && (
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed border-l-2 border-cyan-500/40 pl-4 italic">
              {post.subTitle}
            </p>
          )}

          {/* Telemetry metadata row */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-muted-foreground border-b border-border/40 pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-cyan-500" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-teal-500" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-indigo-500" /> OnEggy Engineering
            </span>
          </div>
        </div>

        {/* Main Banner Image */}
        {post.mainBigImage && (
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-border/40 bg-accent/25 shadow-2xl">
            <Image
              src={post.mainBigImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        )}

        {/* Dynamic Markdown parsed body HTML content */}
        <div 
          className="blog-prose prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6 text-sm sm:text-base"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />

        {/* Keywords / Tags Row */}
        {post.keywords.length > 0 && (
          <div className="border-t border-border/40 pt-8 mt-12 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <Tag className="h-4 w-4 text-cyan-400" /> Tag Ecosystem
            </span>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 rounded bg-accent/20 border border-border/50 text-xs font-medium hover:border-cyan-500/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author / Publisher Bio card */}
        <div className="glass-card p-6 md:p-8 rounded-2xl border border-border/40 bg-background/25 flex flex-col sm:flex-row items-center gap-6 mt-12 relative overflow-hidden">
          <div className="absolute top-[20%] right-[-10%] w-[150px] h-[150px] rounded-full bg-cyan-500/5 blur-[50px] pointer-events-none -z-10" />
          <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono flex items-center justify-center font-bold text-xl shrink-0 shadow-lg">
            OE
          </div>
          <div className="space-y-2 flex-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-foreground">OnEggy Engineering Team</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We are senior cloud architects and DevOps experts building stable, compliance-ready infrastructure blueprints, custom pipeline automations, and full-stack cloud products.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
