import React from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { OrbitMark } from "@/components/common/orbit-mark";

export const metadata: Metadata = {
  title: "Contact Us | OnEggy Technologies",
  description: "Get in touch with OnEggy's senior infrastructure engineers. Schedule a free 30-minute cloud audit or submit your full-stack requirements.",
  alternates: {
    canonical: "https://www.oneggy.com/contact",
  },
  openGraph: {
    title: "Contact Us | OnEggy Technologies",
    description: "Schedule a free 30-minute cloud audit with OnEggy's senior infrastructure engineers.",
    url: "https://www.oneggy.com/contact",
    type: "website",
  },
};

const channels = [
  { icon: Mail, label: "Email", value: "ask@oneggy.com", href: "mailto:ask@oneggy.com" },
  { icon: Phone, label: "Phone", value: "+91 98111 33005", href: "tel:+919811133005" },
  { icon: MapPin, label: "Studio", value: "Gurgaon, Delhi NCR, India", href: null },
];

const steps = [
  { n: "01", t: "We reply within 24 hours", d: "A senior architect — not a sales rep — reads your message and responds." },
  { n: "02", t: "A 30-minute architecture call", d: "We review your stack, surface the biggest risks, and answer your questions." },
  { n: "03", t: "A roadmap and proposal", d: "You get a concrete plan with priorities, timelines, and where we'd start." },
];

export default function ContactPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us | OnEggy Technologies",
    description: "Get in touch with OnEggy's senior infrastructure engineers. Schedule a free 30-minute cloud audit or submit your full-stack requirements.",
    url: "https://www.oneggy.com/contact",
    publisher: { "@type": "Organization", name: "OnEggy Technologies", url: "https://www.oneggy.com" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.oneggy.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.oneggy.com/contact" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left rail — statement + what happens next + channels */}
          <div className="lg:col-span-5 lg:pr-4">
            <span className="eyebrow mb-6">Get in touch</span>
            <h1 className="display text-5xl sm:text-6xl mt-5">
              Let&rsquo;s pressure-test <em>your cloud.</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-[42ch]">
              Tell us what you&rsquo;re running and where it hurts. A free 30-minute review with a
              senior architect — no obligation, no script.
            </p>

            {/* What happens next */}
            <div className="mt-12">
              <p className="text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground/80 mb-6">
                What happens next
              </p>
              <ol className="space-y-6 border-l border-border pl-6">
                {steps.map((s) => (
                  <li key={s.n} className="relative">
                    <span className="absolute -left-[31px] top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-accent ring-4 ring-background" aria-hidden="true" />
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-sm text-primary-strong/70 tabular-nums">{s.n}</span>
                      <h2 className="font-display text-lg text-foreground">{s.t}</h2>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-[40ch]">{s.d}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Direct channels */}
            <div className="mt-12 pt-8 border-t border-border space-y-1">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <span className="flex items-center gap-4 py-3">
                    <span className="w-10 h-10 rounded-lg bg-surface-subtle border border-border flex items-center justify-center shrink-0">
                      <Icon className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</span>
                      <span className="block text-sm font-semibold text-foreground">{value}</span>
                    </span>
                  </span>
                );
                return href ? (
                  <a key={label} href={href} className="block rounded-lg hover:bg-surface-subtle transition-colors -mx-2 px-2">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="px-2">{inner}</div>
                );
              })}
            </div>

            {/* Direct booking */}
            <div className="mt-8 relative surface-card rounded-xl p-5 overflow-hidden">
              <OrbitMark size={90} className="absolute -bottom-5 -right-5 opacity-[0.06] pointer-events-none" />
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[34ch]">
                Prefer to skip the form? Grab a slot on the calendar directly.
              </p>
              <a
                href="https://cal.com/oneggy-aakash-sharma/30min"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-strong hover:gap-2.5 transition-all"
              >
                Book a 30-min call <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
