"use client";

import React, { useState } from "react";
import { Calendar, BookOpen, Search, ArrowUpRight } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/animations/motion-wrappers";
import Link from "next/link";
import Image from "next/image";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  slug: string;
  image?: string;
}

interface BlogContentProps {
  posts: Post[];
  categories: string[];
}

export function BlogContent({ posts, categories }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((post) => post.featured);

  const showFeaturedBanner =
    featuredPost && activeCategory === "All" && searchQuery.trim() === "";

  const regularPosts = showFeaturedBanner
    ? filteredPosts.filter((post) => !post.featured)
    : filteredPosts;

  return (
    <div className="space-y-12">
      {/* Filter + search — hairline editorial bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-border pb-6">
        <div
          className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none shrink-0 max-w-full"
          role="group"
          aria-label="Filter articles by category"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={isActive}
                className={`inline-flex items-center min-h-11 px-4 rounded-md text-sm font-semibold border transition-colors cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card hover:bg-surface-subtle border-border text-muted-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:max-w-xs">
          <label htmlFor="blog-search" className="sr-only">Search articles</label>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <input
            id="blog-search"
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-9 pr-4 rounded-md bg-card border border-border text-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none placeholder:text-muted-foreground transition-all"
          />
        </div>
      </div>

      {/* Featured lead post */}
      {showFeaturedBanner && featuredPost && (
        <FadeIn>
          <article className="group relative surface-card rounded-2xl overflow-hidden border-t-2 border-t-primary">
            <Link
              href={`/blogs/${featuredPost.slug}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-stretch focus-visible:outline-none"
            >
              {featuredPost.image && (
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto lg:min-h-[20rem] w-full overflow-hidden bg-muted">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}

              <div className={`${featuredPost.image ? "lg:col-span-7" : "lg:col-span-12"} flex flex-col justify-center p-7 sm:p-9`}>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.12em]">
                  <span className="text-primary-strong font-semibold">Featured · {featuredPost.category}</span>
                  {featuredPost.readTime && (
                    <span className="text-muted-foreground">{featuredPost.readTime}</span>
                  )}
                </div>

                <h2 className="display text-3xl sm:text-4xl mt-4 group-hover:text-primary-strong transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[60ch] line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-7 flex items-center gap-4">
                  {featuredPost.date && (
                    <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground tabular-nums">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" /> {featuredPost.date}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-strong">
                    Read the feature
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        </FadeIn>
      )}

      {/* Article index */}
      {regularPosts.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {regularPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="group flex flex-col h-full">
                {post.image && (
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="relative aspect-[16/9] w-full block overflow-hidden rounded-xl bg-muted border border-border"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </Link>
                )}

                <div className="flex flex-col flex-1 pt-5">
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.12em]">
                    <span className="text-primary-strong font-semibold">{post.category}</span>
                    {post.readTime && (
                      <span className="text-muted-foreground">{post.readTime}</span>
                    )}
                  </div>

                  <h3 className="font-display text-xl text-foreground mt-3 leading-snug group-hover:text-primary-strong transition-colors line-clamp-2">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-5 flex items-center justify-between border-t border-border">
                    {post.date ? (
                      <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground tabular-nums">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" /> {post.date}
                      </span>
                    ) : (
                      <span />
                    )}
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-strong"
                    >
                      Read article
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="text-center py-20 text-muted-foreground border-t border-border">
          <BookOpen className="h-10 w-10 mx-auto opacity-20 mb-3" aria-hidden="true" />
          <p className="text-sm font-semibold text-foreground">No articles found.</p>
          <p className="text-sm mt-1 text-muted-foreground/80">Try a different keyword or category.</p>
        </div>
      )}
    </div>
  );
}
