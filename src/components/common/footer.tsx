import React from "react";
import Link from "next/link";

const services = [
  { name: "AWS Cloud Services", href: "/services" },
  { name: "DevOps Consulting", href: "/services" },
  { name: "Kubernetes Setup", href: "/services" },
  { name: "Platform Engineering", href: "/services" },
  { name: "Full Stack Development", href: "/services" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Sitemap", href: "/sitemap" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Brand Block */}
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-teal-400 flex items-center justify-center text-white font-bold text-lg">
              O
            </div>
            <span className="font-semibold text-lg tracking-tight text-foreground">
              OnEggy<span className="text-cyan-500">.</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            OnEggy Technologies is a modern cloud-native engineering partner, helping startups and enterprises automate operations, optimize cloud costs, and deploy secure infrastructures.
          </p>
          <div className="flex gap-4">
            {/* Social Links placeholders */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted-foreground hover:text-cyan-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted-foreground hover:text-cyan-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted-foreground hover:text-cyan-500 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Directory Columns */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
          <ul className="space-y-3">
            {services.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
          <ul className="space-y-3">
            {company.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
          <ul className="space-y-3">
            {legal.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/40 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} OnEggy Technologies. All rights reserved.</p>
          <p className="flex gap-4">
            <span>Built with Next.js App Router & TypeScript.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
