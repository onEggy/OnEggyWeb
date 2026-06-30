import React from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | OnEggy Technologies",
  description: "Get in touch with OnEggy's senior infrastructure developers. Schedule a free 30-minute cloud audit or submit your full-stack requirements.",
  alternates: {
    canonical: "https://www.oneggy.com/contact",
  },
};

export default function ContactPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us | OnEggy Technologies",
    "description": "Get in touch with OnEggy's senior infrastructure developers. Schedule a free 30-minute cloud audit or submit your full-stack requirements.",
    "url": "https://www.oneggy.com/contact",
    "publisher": {
      "@type": "Organization",
      "name": "OnEggy Technologies",
      "url": "https://www.oneggy.com"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.oneggy.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://www.oneggy.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Blueprint Coordinates */}
        <div className="absolute top-2 left-10 font-mono text-[8px] text-zinc-650 opacity-40 select-none">
          GRID.SEC.L // CONTACT.INTERFACE_V1.0
        </div>

        {/* Left Block - Contact Info (5 columns) */}
        <div className="lg:col-span-5 space-y-10 flex flex-col justify-between">
          <div className="space-y-6">
            <SectionHeader
              tag="Get in Touch"
              title={<>Ready to <span className="text-primary font-bold">Transform?</span></>}
              subtitle="Have questions about Kubernetes deployments or AWS cost reduction options? Reach out to schedule a free architecture consultation session."
              align="left"
              className="mb-0"
            />

            <FadeIn delay={0.2} className="divide-y divide-border/25 pt-4">
              <div className="flex items-center gap-4 py-4 first:pt-0">
                <div className="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="h-4.5 w-4.5 text-primary" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-mono">Email Us</span>
                  <a href="mailto:ask@oneggy.com" className="text-sm font-semibold hover:text-primary transition-colors">
                    ask@oneggy.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 py-4">
                <div className="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="h-4.5 w-4.5 text-amber-500" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-mono">Call Us</span>
                  <a href="tel:+919811133005" className="text-sm font-semibold hover:text-primary transition-colors">
                    +91 98111 33005
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 py-4 last:pb-0">
                <div className="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="h-4.5 w-4.5 text-amber-600" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground block font-mono">Location</span>
                  <span className="text-sm font-semibold">Gurgaon, Delhi NCR, India</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Quick Meeting Panel */}
          <FadeIn delay={0.3} className="p-5 rounded-xl border border-border bg-background/25 space-y-4 max-w-sm">
            <h3 className="text-sm font-bold text-foreground inline-flex items-center gap-2 font-mono">
              <Calendar className="h-4.5 w-4.5 text-primary" /> Need quick response?
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Schedule a direct 30-minute cloud-native engineering assessment with our senior architect.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://cal.com/oneggy-aakash-sharma/30min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center text-xs font-semibold h-9 px-4 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Book Review
              </a>
              <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>Next slot today</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Block - Contact Form (7 columns) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
