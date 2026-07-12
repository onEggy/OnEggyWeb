"use client";

import React, { useState, useEffect } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeadingItem {
  text: string;
  id: string;
  level: number;
}

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;

    // Cache elements once when headings change, instead of querying DOM on every single scroll tick
    const headingElements = headings
      .map((h) => ({ id: h.id, el: document.getElementById(h.id) }))
      .filter((item) => item.el !== null) as { id: string; el: HTMLElement }[];

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let currentActiveId = headings[0].id;
          const scrollPosition = window.scrollY + 120; // offset for sticky nav/header

          for (const { id, el } of headingElements) {
            if (el.offsetTop <= scrollPosition) {
              currentActiveId = id;
            } else {
              break; // Headings are sorted by offsetTop, so we can stop
            }
          }

          setActiveId((prev) => (prev !== currentActiveId ? currentActiveId : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // Close the mobile menu first to let the DOM collapse and layout recalculate
    setIsMobileOpen(false);

    // Calculate position and scroll in the next event loop tick to prevent layout shifts
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 96; // sticky header offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setActiveId(id);
      }
    }, 50);
  };

  return (
    <>
      {/* Mobile Collapse Table of Contents */}
      <div className="lg:hidden w-full mb-8 border border-border bg-surface-subtle rounded-xl overflow-hidden">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between px-5 py-4 font-mono text-xs uppercase tracking-wider text-foreground font-semibold"
        >
          <span className="flex items-center gap-2">
            <List className="h-4 w-4 text-primary" /> Table of Contents
          </span>
          {isMobileOpen ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        {isMobileOpen && (
          <ul className="px-5 pb-5 border-t border-border/60 divide-y divide-border/30 text-sm">
            {headings.map((heading) => (
              <li key={heading.id} className="py-2.5">
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => scrollToHeading(e, heading.id)}
                  className={cn(
                    "block hover:text-primary-strong transition-colors leading-snug",
                    heading.level === 3 ? "pl-4 text-muted-foreground/80 text-xs" : "font-medium text-foreground",
                    activeId === heading.id ? "text-primary-strong font-semibold" : "text-muted-foreground"
                  )}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop Sticky Table of Contents */}
      <div className="hidden lg:block space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-3 custom-scrollbar">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70 font-semibold flex items-center gap-2">
          <List className="h-3.5 w-3.5 text-primary" /> On This Page
        </p>
        <nav aria-label="Table of contents">
          <ul className="space-y-3.5 text-sm border-l border-border/60 pl-px">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              return (
                <li key={heading.id} className={cn(heading.level === 3 ? "pl-4" : "")}>
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => scrollToHeading(e, heading.id)}
                    className={cn(
                      "block transition-all duration-200 border-l -ml-px pl-4 py-0.5 leading-relaxed text-xs sm:text-sm font-medium",
                      isActive
                        ? "border-primary-strong text-primary-strong font-semibold translate-x-0.5"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                    )}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
