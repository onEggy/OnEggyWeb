"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, Check, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { OrbitMark } from "./orbit-mark";

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

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
  { label: "GitHub", href: "https://github.com", path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
  { label: "Twitter", href: "https://twitter.com", path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646 1.014-.733 1.89-1.647 2.585-2.693z" },
];

function LinkColumn({ title, items }: { title: string; items: { name: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-mono uppercase tracking-[0.14em] text-background/40 mb-5">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="text-sm text-background/65 hover:text-background transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <OrbitMark size={560} className="absolute -bottom-56 -right-44 opacity-[0.04] pointer-events-none" />

      {/* Top — brand statement + newsletter */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-6">
            <Link href="/" className="inline-block" aria-label="OnEggy Technologies — home">
              <div className="relative h-10 w-32">
                <Image src="/logoWhite.png" alt="OnEggy Technologies" fill sizes="128px" className="object-contain object-left" />
              </div>
            </Link>
            <p className="font-display text-3xl sm:text-4xl leading-[1.1] tracking-tight text-background mt-7 max-w-[18ch]">
              Cloud platforms you can <span className="italic text-accent">bet on.</span>
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <h3 className="text-sm font-semibold text-background">Get our engineering insights</h3>
            <p className="text-sm text-background/55 mt-1.5 max-w-sm">
              Practical DevOps, AWS, and Kubernetes scaling notes — a few times a month, no spam.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-5 max-w-md">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                required
                disabled={status === "loading" || status === "success"}
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 pl-4 pr-14 rounded-md bg-white/5 border border-white/15 text-sm text-background focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none placeholder:text-background/35 disabled:opacity-50 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="absolute right-1.5 top-1.5 h-9 w-9 rounded-md bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 disabled:opacity-60 cursor-pointer transition-colors"
                aria-label="Subscribe"
              >
                <AnimatePresence mode="wait">
                  {status === "loading" ? (
                    <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                  ) : status === "success" ? (
                    <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Check className="h-4 w-4" /></motion.div>
                  ) : (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Send className="h-4 w-4" /></motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
            {status === "success" && (
              <p className="text-xs text-accent mt-2" role="status">Thanks — you&rsquo;re subscribed.</p>
            )}
          </div>
        </div>
      </div>

      {/* Middle — contact + link columns */}
      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.18em] text-accent">
              Cloud. DevOps. Scale.
            </p>
            <p className="text-sm text-background/55 leading-relaxed max-w-sm">
              Startup infrastructure experts. We design, build, automate, and scale secure modern
              digital systems to accelerate business growth.
            </p>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                <span>Gurgaon, Delhi NCR, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                <a href="mailto:ask@oneggy.com" className="hover:text-background transition-colors">ask@oneggy.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                <a href="tel:+919811133005" className="hover:text-background transition-colors">+91 98111 33005</a>
              </li>
            </ul>
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-background/60 hover:text-accent hover:border-accent/40 transition-all"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10">
            <LinkColumn title="Services" items={services} />
            <LinkColumn title="Company" items={company} />
            <LinkColumn title="Legal" items={legal} />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/45">
          <p>© {currentYear} OnEggy Technologies. All rights reserved.</p>
          <p className="font-mono tracking-wide text-center">
            CIN U72900DL2022OPC407567 &nbsp;·&nbsp; GSTIN 07AADCO9485D1Z6
          </p>
          <Link href="/contact" className="inline-flex items-center gap-1.5 text-background/70 hover:text-accent transition-colors">
            Start a project <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
