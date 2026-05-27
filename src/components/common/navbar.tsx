"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Cloud, Server, Code, Layers, Settings, ShieldAlert, Laptop } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const megaMenuServices = [
  {
    category: "Cloud Solutions",
    items: [
      { name: "AWS Cloud Services", desc: "Enterprise account setup & operations", href: "/services/aws-cloud-managed-services", icon: <Cloud className="h-4 w-4 text-cyan-400" /> },
      { name: "Cost Optimization", desc: "Audit cloud bills & reduce waste", href: "/services/cloud-cost-optimization", icon: <Layers className="h-4 w-4 text-teal-400" /> },
      { name: "Cloud Migration", desc: "Multi-cloud architecture & migration", href: "/services/cloud-migration", icon: <Laptop className="h-4 w-4 text-indigo-400" /> }
    ]
  },
  {
    category: "DevOps & IaC",
    items: [
      { name: "Kubernetes Orchestration", desc: "Deploy & scale containerized apps", href: "/services/kubernetes", icon: <Server className="h-4 w-4 text-cyan-400" /> },
      { name: "CI/CD & Delivery", desc: "Automate build & release pipelines", href: "/services/cicd-pipeline-automation", icon: <Settings className="h-4 w-4 text-teal-400" /> },
      { name: "Platform Engineering", desc: "Developer self-service templates", href: "/services/platform-engineering", icon: <Code className="h-4 w-4 text-indigo-400" /> }
    ]
  },
  {
    category: "Engineering & QA",
    items: [
      { name: "Full Stack Development", desc: "Scalable Next.js & backend software", href: "/services/full-stack-web-development", icon: <Code className="h-4 w-4 text-cyan-400" /> },
      { name: "React Native Mobile Apps", desc: "Cross-platform iOS & Android apps", href: "/services/mobile-app-development", icon: <Laptop className="h-4 w-4 text-teal-400" /> },
      { name: "Security & DevSecOps", desc: "Rigorous pentesting & compliance checks", href: "/services/security-devsecops", icon: <ShieldAlert className="h-4 w-4 text-indigo-400" /> }
    ]
  }
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = windowHeight > 0 ? (scrollPosition / windowHeight) * 100 : 0;
      setScrollProgress(scrollPercentage);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/40 py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      {/* Scroll Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-border/20 z-50">
        <div
          className="h-full bg-cyan-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
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

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {/* Mega Menu Trigger */}
            <div
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <span className="text-sm font-medium text-muted-foreground hover:text-cyan-500 inline-flex items-center gap-1 transition-colors">
                Services <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", showMegaMenu ? "rotate-180" : "")} />
              </span>

              {/* Mega Menu Panel */}
              <AnimatePresence>
                {showMegaMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-[-200px] w-[750px] bg-background/95 backdrop-blur-md border border-border/60 p-6 rounded-xl shadow-2xl mt-2 grid grid-cols-3 gap-6"
                  >
                    {megaMenuServices.map((cat) => (
                      <div key={cat.category} className="space-y-4">
                        <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest font-semibold block border-b border-border/40 pb-2">
                          {cat.category}
                        </span>
                        <ul className="space-y-3">
                          {cat.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="group flex items-start gap-2.5 rounded-lg hover:bg-accent/40 p-2 transition-all"
                              >
                                <div className="mt-1 w-6 h-6 rounded-md border border-border/40 bg-background/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                                  {item.icon}
                                </div>
                                <div>
                                  <span className="text-sm font-medium text-foreground group-hover:text-cyan-500 transition-colors block">
                                    {item.name}
                                  </span>
                                  <span className="text-[11px] text-muted-foreground leading-normal line-clamp-1 block">
                                    {item.desc}
                                  </span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* General Links */}
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative py-1.5 text-sm font-medium transition-colors hover:text-cyan-500",
                    isActive ? "text-cyan-500" : "text-muted-foreground"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="h-4 w-[1px] bg-border/60" />

          {/* Theme Switcher & Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center text-xs sm:text-sm font-medium h-10 px-5 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all shadow-md shadow-foreground/10 cursor-pointer overflow-hidden group isolate"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span className="relative z-10 group-hover:text-black transition-colors">Book Free Consultation</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-6 px-6 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-6">
              {/* Services List for Mobile */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest block border-b border-border/40 pb-2">
                  Our Services
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li>
                    <Link href="/services/aws-cloud-managed-services" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground block py-1.5 hover:text-cyan-500">
                      AWS Cloud Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/devops-consulting" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground block py-1.5 hover:text-cyan-500">
                      DevOps Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/kubernetes" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground block py-1.5 hover:text-cyan-500">
                      Kubernetes setup
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/platform-engineering" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground block py-1.5 hover:text-cyan-500">
                      Platform Engineering
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col gap-3">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block py-1.5 text-base font-medium rounded-md transition-colors hover:text-cyan-500",
                          isActive ? "text-cyan-500 font-semibold" : "text-muted-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="h-[1px] bg-border/60" />

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full h-11 rounded-lg bg-foreground text-background hover:bg-foreground/90 text-sm font-medium transition-colors cursor-pointer"
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
