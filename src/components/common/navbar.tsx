"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Cloud, Server, Code, Layers, Settings, ShieldAlert, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const megaMenuServices = [
  {
    category: "Cloud Solutions",
    items: [
      { name: "AWS Cloud Services", desc: "Enterprise account setup & operations", href: "/services/aws-cloud-managed-services", icon: Cloud },
      { name: "Cost Optimization", desc: "Audit cloud bills & reduce waste", href: "/services/cloud-cost-optimization", icon: Layers },
      { name: "Cloud Migration", desc: "Multi-cloud architecture & migration", href: "/services/cloud-migration", icon: Laptop },
    ],
  },
  {
    category: "DevOps & IaC",
    items: [
      { name: "Kubernetes Orchestration", desc: "Deploy & scale containerized apps", href: "/services/kubernetes", icon: Server },
      { name: "CI/CD & Delivery", desc: "Automate build & release pipelines", href: "/services/cicd-pipeline-automation", icon: Settings },
      { name: "Platform Engineering", desc: "Developer self-service templates", href: "/services/platform-engineering", icon: Code },
    ],
  },
  {
    category: "Engineering & QA",
    items: [
      { name: "Full Stack Development", desc: "Scalable Next.js & backend software", href: "/services/full-stack-web-development", icon: Code },
      { name: "React Native Mobile Apps", desc: "Cross-platform iOS & Android apps", href: "/services/mobile-app-development", icon: Laptop },
      { name: "Security & DevSecOps", desc: "Rigorous pentesting & compliance checks", href: "/services/security-devsecops", icon: ShieldAlert },
    ],
  },
];

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = windowHeight > 0 ? (scrollPosition / windowHeight) * 100 : 0;
      setScrollProgress(scrollPercentage);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setShowMegaMenu(false);
    setIsOpen(false);
  }, [pathname]);

  // Escape + click-outside for the desktop mega-menu
  useEffect(() => {
    if (!showMegaMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowMegaMenu(false);
    };
    const onClick = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setShowMegaMenu(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [showMegaMenu]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-border py-3 shadow-[0_4px_24px_-16px_rgba(21,32,43,0.25)]"
          : "bg-background/60 backdrop-blur-sm border-transparent py-5"
      )}
    >
      {/* Scroll progress indicator */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-border/60 z-50">
        <div
          className="h-full bg-primary transition-[width] duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="OnEggy Technologies — home">
          <div className="relative h-8 w-24 md:h-10 md:w-32">
            <Image
              src="/logov1.png"
              alt="OnEggy Technologies"
              fill
              sizes="(max-width: 768px) 96px, 128px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {/* Mega menu */}
            <div
              ref={megaMenuRef}
              className="relative"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button
                type="button"
                aria-expanded={showMegaMenu}
                aria-haspopup="true"
                onClick={() => setShowMegaMenu((v) => !v)}
                className="py-2 text-sm font-medium text-muted-foreground hover:text-primary-strong inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                Services <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", showMegaMenu && "rotate-180")} />
              </button>

              <AnimatePresence>
                {showMegaMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    role="menu"
                    aria-label="Services"
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[min(760px,calc(100vw-3rem))] bg-card border border-border p-6 rounded-xl shadow-[0_24px_60px_-24px_rgba(21,32,43,0.35)] mt-3 grid grid-cols-3 gap-6"
                  >
                    {megaMenuServices.map((cat) => (
                      <div key={cat.category} className="space-y-4">
                        <span className="text-xs font-mono text-primary-strong uppercase tracking-widest font-semibold block border-b border-border pb-2">
                          {cat.category}
                        </span>
                        <ul className="space-y-1">
                          {cat.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  role="menuitem"
                                  className="group flex items-start gap-2.5 rounded-lg hover:bg-muted p-2 transition-colors"
                                >
                                  <span className="mt-0.5 w-7 h-7 rounded-md border border-border bg-surface-subtle flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                                    <Icon className="h-4 w-4 text-primary" />
                                  </span>
                                  <span>
                                    <span className="text-sm font-medium text-foreground group-hover:text-primary-strong transition-colors block">
                                      {item.name}
                                    </span>
                                    <span className="text-xs text-muted-foreground leading-snug line-clamp-1 block">
                                      {item.desc}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-3 border-t border-border pt-3 mt-1">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-strong hover:gap-2.5 transition-all"
                      >
                        View all services <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative py-1.5 text-sm font-medium transition-colors hover:text-primary-strong",
                    isActive ? "text-primary-strong" : "text-muted-foreground"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="h-4 w-px bg-border" />

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold h-10 px-5 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-sm cursor-pointer"
          >
            Book Free Consultation
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-foreground hover:bg-muted transition-colors cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-card border-b border-border py-6 px-6 shadow-xl overflow-y-auto max-h-[calc(100vh-4rem)]"
          >
            <nav className="flex flex-col gap-6">
              {megaMenuServices.map((cat) => (
                <div key={cat.category} className="space-y-3">
                  <span className="text-xs font-mono text-primary-strong uppercase tracking-widest block border-b border-border pb-2">
                    {cat.category}
                  </span>
                  <ul className="grid grid-cols-1 gap-1">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center min-h-11 text-sm text-foreground hover:text-primary-strong transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <ul className="flex flex-col gap-1 border-t border-border pt-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center min-h-11 text-base font-medium transition-colors hover:text-primary-strong",
                          isActive ? "text-primary-strong" : "text-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full h-12 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold transition-colors cursor-pointer"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
