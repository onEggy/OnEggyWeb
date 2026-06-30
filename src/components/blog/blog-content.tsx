"use client";

import React, { useState } from "react";
import { Calendar, Clock, ArrowRight, BookOpen, Search } from "lucide-react";
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
    <div className="space-y-10">
      {/* Search + category filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none shrink-0 max-w-full" role="group" aria-label="Filter articles by category">
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
                    : "bg-card hover:bg-muted border-border text-muted-foreground"
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

      {/* Featured post */}
      {showFeaturedBanner && featuredPost && (
        <FadeIn className="surface-card p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {featuredPost.image && (
              <div className="lg:col-span-4 relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border bg-muted">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover"
                />
              </div>
            )}

            <div className={`${featuredPost.image ? "lg:col-span-8" : "lg:col-span-12"} space-y-4`}>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary-strong font-semibold border border-primary/20">
                  Featured: {featuredPost.category}
                </span>
                {featuredPost.readTime && (
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {featuredPost.readTime}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-3xl font-display font-bold text-foreground hover:text-primary-strong transition-colors">
                <Link href={`/blogs/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                {featuredPost.date && (
                  <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" /> {featuredPost.date}
                  </span>
                )}
                <Link
                  href={`/blogs/${featuredPost.slug}`}
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors cursor-pointer"
                >
                  Read Featured Post <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      {/* Regular posts grid */}
      {regularPosts.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <StaggerItem
              key={post.slug}
              className="surface-card hover:border-primary/30 p-0 rounded-xl flex flex-col justify-between overflow-hidden transition-all duration-300 group"
            >
              {post.image && (
                <Link href={`/blogs/${post.slug}`} className="relative aspect-[16/9] w-full block overflow-hidden bg-muted border-b border-border">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              )}

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-muted border border-border text-primary-strong font-semibold">
                      {post.category}
                    </span>
                    {post.readTime && (
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {post.readTime}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-foreground group-hover:text-primary-strong transition-colors line-clamp-2">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="border-t border-border pt-4 flex items-center justify-between text-xs text-muted-foreground">
                  {post.date ? (
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" /> {post.date}
                    </span>
                  ) : (
                    <span />
                  )}
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="font-semibold text-primary-strong inline-flex items-center gap-1 cursor-pointer"
                  >
                    Read Article <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <BookOpen className="h-10 w-10 mx-auto opacity-20 mb-3" aria-hidden="true" />
          <p className="text-sm font-semibold">No articles found.</p>
          <p className="text-xs mt-1 text-muted-foreground/70">Try searching for other keywords or select a different category.</p>
        </div>
      )}
    </div>
  );
}
