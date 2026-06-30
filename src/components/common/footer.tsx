"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "AWS Cloud Services", href: "/services/aws-cloud-managed-services" },
  { name: "DevOps Consulting", href: "/services/devops-consulting" },
  { name: "Kubernetes Setup", href: "/services/kubernetes" },
  { name: "Platform Engineering", href: "/services/platform-engineering" },
  { name: "Full Stack Development", href: "/services/full-stack-web-development" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-and-conditions" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Sitemap", href: "/sitemap.xml" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <footer className="relative border-t border-border bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
        {/* Brand & socials */}
        <div className="sm:col-span-2 space-y-6">
          <Link href="/" className="inline-block" aria-label="OnEggy Technologies — home">
            <div className="relative h-12 w-36 transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/logov1.png"
                alt="OnEggy Technologies"
                fill
                sizes="(max-width: 768px) 120px, 144px"
                className="object-contain object-left"
              />
            </div>
          </Link>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-primary-strong uppercase tracking-widest font-mono">
              Cloud. DevOps. Scale.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Startup infrastructure experts. We design, build, automate, and scale secure modern digital systems to accelerate business growth.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/45 hover:bg-card transition-all"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/45 hover:bg-card transition-all"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/45 hover:bg-card transition-all"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646 1.014-.733 1.89-1.647 2.585-2.693z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
          <ul className="space-y-3">
            {services.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary-strong transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
          <ul className="space-y-3">
            {company.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary-strong transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + newsletter */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span>Gurgaon, Delhi NCR, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <a href="mailto:ask@oneggy.com" className="hover:text-primary-strong transition-colors">
                  ask@oneggy.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <a href="tel:+919811133005" className="hover:text-primary-strong transition-colors">
                  +91 98111 33005
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2 border-t border-border pt-4">
            <h4 className="text-xs font-semibold text-foreground">Subscribe to Insights</h4>
            <p className="text-xs text-muted-foreground">Get DevOps &amp; Kubernetes scaling tutorials.</p>

            <form onSubmit={handleSubscribe} className="relative mt-2">
              <label htmlFor="footer-email" className="sr-only">Email Address</label>
              <input
                id="footer-email"
                type="email"
                required
                disabled={status === "loading" || status === "success"}
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 pl-3 pr-10 rounded-md bg-card border border-border text-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none placeholder:text-muted-foreground/70 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="absolute right-1.5 top-1.5 h-7 w-7 rounded-md bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 disabled:bg-muted disabled:text-muted-foreground cursor-pointer transition-colors"
                aria-label="Subscribe"
              >
                <AnimatePresence mode="wait">
                  {status === "loading" ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-3.5 h-3.5 border border-accent-foreground border-t-transparent rounded-full animate-spin"
                    />
                  ) : status === "success" ? (
                    <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Check className="h-3.5 w-3.5" />
                    </motion.div>
                  ) : (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Send className="h-3.5 w-3.5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
            {status === "success" && (
              <p className="text-[11px] text-success" role="status">Thanks! You are subscribed.</p>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="space-y-1 text-center md:text-left">
            <p>© {currentYear} OnEggy Technologies. All rights reserved.</p>
            <p className="text-[10px] text-muted-foreground/70 font-mono">
              CIN: U72900DL2022OPC407567 &nbsp;|&nbsp; GSTIN: 07AADCO9485D1Z6
            </p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {legal.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-primary-strong transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
