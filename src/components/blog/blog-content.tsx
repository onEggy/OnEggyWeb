"use client";

import React, { useState } from "react";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/animations/motion-wrappers";
import Link from "next/link";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
}

interface BlogContentProps {
  posts: Post[];
  categories: string[];
}

export function BlogContent({ posts, categories }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = posts.filter(
    (post) => activeCategory === "All" || post.category === activeCategory
  );

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured || activeCategory !== "All");

  return (
    <div className="space-y-16">
      {/* 1. Featured Post Banner */}
      {featuredPost && (activeCategory === "All" || activeCategory === featuredPost.category) && (
        <FadeIn className="glass-card p-6 md:p-8 rounded-2xl border border-border/40 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden shadow-2xl">
          {/* Radial visual glow */}
          <div className="absolute -bottom-40 -left-20 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-4 text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">
                  Featured: {featuredPost.category}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {featuredPost.readTime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground hover:text-cyan-500 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-xs text-muted-foreground pt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {featuredPost.date}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <Link
                href="/contact"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors shadow-lg cursor-pointer"
              >
                Read Featured Post <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      )}

      {/* 2. Category Filter Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 border-b border-border/40 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold border transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === cat
                ? "bg-foreground text-background border-foreground shadow-md"
                : "bg-background/40 hover:bg-accent/40 border-border text-muted-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Regular Posts Grid */}
      {regularPosts.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <StaggerItem
              key={index}
              className="glass-card hover:border-cyan-500/35 p-6 rounded-xl flex flex-col justify-between min-h-[300px] h-full transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-background/80 border border-border/40 text-cyan-500 font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="border-t border-border/20 pt-4 mt-6 flex justify-between items-center text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {post.date}
                </span>
                <span className="font-semibold text-foreground group-hover:text-cyan-500 inline-flex items-center gap-1 cursor-pointer">
                  Read Article <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <BookOpen className="h-10 w-10 mx-auto opacity-20 mb-3" />
          <p>No articles found matching this category.</p>
        </div>
      )}
    </div>
  );
}
