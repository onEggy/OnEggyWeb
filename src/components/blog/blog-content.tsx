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
  
  // Only show featured post banner if we are in "All" category and search is empty
  const showFeaturedBanner =
    featuredPost && activeCategory === "All" && searchQuery.trim() === "";

  const regularPosts = showFeaturedBanner
    ? filteredPosts.filter((post) => !post.featured)
    : filteredPosts;

  return (
    <div className="space-y-10">
      {/* Search and Category Filter Header Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/40 pb-6">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none shrink-0 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground shadow-md"
                  : "bg-background/40 hover:bg-accent/40 border-border text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Instant Search Box */}
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-9 pr-4 rounded-lg bg-background/50 border border-border text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* 1. Featured Post Banner */}
      {showFeaturedBanner && featuredPost && (
        <FadeIn className="glass-card p-6 md:p-8 rounded-2xl border border-border/40 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden shadow-2xl">
          {/* Radial visual glow */}
          <div className="absolute -bottom-40 -left-20 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Featured Post Image */}
            {featuredPost.image && (
              <div className="lg:col-span-4 relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border/40 shadow-inner bg-accent/25">
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
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">
                  Featured: {featuredPost.category}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {featuredPost.readTime}
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-foreground hover:text-cyan-500 transition-colors">
                <Link href={`/blogs/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                  <Calendar className="h-3.5 w-3.5" /> {featuredPost.date}
                </span>
                <Link
                  href={`/blogs/${featuredPost.slug}`}
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors shadow-lg cursor-pointer"
                >
                  Read Featured Post <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      {/* 2. Regular Posts Grid */}
      {regularPosts.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <StaggerItem
              key={post.slug}
              className="glass-card hover:border-cyan-500/35 p-0 rounded-xl flex flex-col justify-between overflow-hidden transition-all duration-300 group"
            >
              {/* Optional Post Card Thumbnail */}
              {post.image && (
                <Link href={`/blogs/${post.slug}`} className="relative aspect-[16/9] w-full block overflow-hidden bg-accent/25 border-b border-border/40">
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
                    <span className="px-2 py-0.5 rounded bg-background/80 border border-border/40 text-cyan-500 font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-foreground group-hover:text-cyan-500 transition-colors line-clamp-2">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="border-t border-border/20 pt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="h-3.5 w-3.5" /> {post.date}
                  </span>
                  <Link 
                    href={`/blogs/${post.slug}`}
                    className="font-semibold text-foreground group-hover:text-cyan-500 inline-flex items-center gap-1 cursor-pointer"
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
          <BookOpen className="h-10 w-10 mx-auto opacity-20 mb-3 animate-pulse" />
          <p className="text-sm font-semibold">No articles found.</p>
          <p className="text-xs mt-1 text-muted-foreground/60">Try searching for other keywords or select a different category.</p>
        </div>
      )}
    </div>
  );
}
