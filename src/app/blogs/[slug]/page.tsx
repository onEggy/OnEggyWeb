import React from "react";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import { OrbitMark } from "@/components/common/orbit-mark";
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

// Helper to parse date string (e.g. "24-Oct-2024") to ISO string for search engines
function parseToIsoDate(dateStr: string): string {
  try {
    const d = new Date(dateStr.trim());
    if (!isNaN(d.getTime())) {
      return d.toISOString();
    }
  } catch (e) {
    console.error("Error parsing date:", dateStr, e);
  }
  return "2024-01-01T00:00:00Z"; // fallback
}

// Read the blog index once and return all entries
function getAllPosts(): BlogPostFileEntry[] {
  try {
    const indexFilePath = path.join(process.cwd(), "public/AllBlogs/index.json");
    if (!fs.existsSync(indexFilePath)) return [];
    const rawData = fs.readFileSync(indexFilePath, "utf8");
    return JSON.parse(rawData) as BlogPostFileEntry[];
  } catch (error) {
    console.error("Error reading blog index:", error);
    return [];
  }
}

// Pick up to 3 related posts sharing the same category (fallback to most-recent others)
function getRelatedPosts(slug: string, category: string): BlogPostFileEntry[] {
  const posts = getAllPosts();
  const others = posts.filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => (p.category || "DevOps") === category);
  const pool = sameCategory.length > 0 ? sameCategory : others;
  return pool.slice(0, 3);
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
      publishedTime: parseToIsoDate(post.date),
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

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  // Schema.org structured data JSON-LD markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://www.oneggy.com${post.mainBigImage}`,
    "datePublished": parseToIsoDate(post.date),
    "dateModified": parseToIsoDate(post.date),
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

  // BreadcrumbList structured data (Home > Blog > {post.title})
  const breadcrumbMarkup = {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.oneggy.com/blogs/${post.slug}`
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
          __html: JSON.stringify(breadcrumbMarkup).replace(/</g, "\\u003c"),
        }}
      />
      <article className="max-w-3xl mx-auto px-6 pt-10 pb-16 sm:pt-12 lg:pt-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary-strong transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          Back to engineering insights
        </Link>

        {/* Article header */}
        <header className="mt-8">
          <span className="eyebrow mb-5">{post.category}</span>

          <h1 className="display text-4xl sm:text-5xl mt-5 leading-[1.08]">
            {post.title}
          </h1>

          {post.subTitle && (
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
              {post.subTitle}
            </p>
          )}

          {/* Byline / meta */}
          <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
            <span className="flex items-center gap-1.5 text-foreground">
              <User className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> OnEggy Engineering
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> {post.readTime}
            </span>
          </div>
        </header>

        {/* Lead image */}
        {post.mainBigImage && (
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-border bg-muted mt-10">
            <Image
              src={post.mainBigImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        {/* Long-form body — single-column readable measure */}
        <div
          className="blog-prose prose text-foreground leading-relaxed space-y-6 text-base mt-12 max-w-[68ch]"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />

        {/* Topics */}
        {post.keywords.length > 0 && (
          <div className="mt-14 pt-7 border-t border-border">
            <p className="text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground/80 mb-4">
              Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-surface-subtle border border-border text-sm font-medium text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author note */}
        <div className="mt-12 relative surface-card rounded-2xl p-7 sm:p-8 flex flex-col sm:flex-row items-start gap-5 overflow-hidden">
          <OrbitMark size={110} className="absolute -top-6 -right-6 opacity-[0.06] pointer-events-none" />
          <div className="w-14 h-14 rounded-full bg-surface-subtle border border-border text-primary-strong font-mono flex items-center justify-center font-semibold text-lg shrink-0">
            OE
          </div>
          <div className="space-y-2 flex-1 relative">
            <p className="text-xs font-mono uppercase tracking-[0.1em] text-primary-strong">Written by</p>
            <h2 className="font-display text-lg text-foreground">OnEggy Engineering Team</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[58ch]">
              We are senior cloud architects and DevOps experts building stable, compliance-ready infrastructure blueprints, custom pipeline automations, and full-stack cloud products.
            </p>
          </div>
        </div>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-border">
            <div className="flex items-baseline justify-between">
              <h2 className="display text-2xl sm:text-3xl">Related articles</h2>
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Keep reading
              </span>
            </div>
            <ul className="mt-8 border-t border-border">
              {relatedPosts.map((related, i) => (
                <li key={related.slug}>
                  <Link
                    href={`/blogs/${related.slug}`}
                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 sm:gap-x-8 py-6 border-b border-border transition-colors hover:bg-surface-subtle -mx-4 px-4 rounded-lg focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="font-mono text-sm text-primary-strong/70 tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs uppercase tracking-[0.12em] text-primary-strong font-semibold">
                        {related.category || "DevOps"}
                      </span>
                      <span className="block font-display text-lg sm:text-xl text-foreground mt-1.5 group-hover:text-primary-strong transition-colors">
                        {related.title}
                      </span>
                      {related.overview && (
                        <span className="block mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2 max-w-[60ch]">
                          {related.overview}
                        </span>
                      )}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground/50 group-hover:text-primary-strong group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all self-center shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </>
  );
}
