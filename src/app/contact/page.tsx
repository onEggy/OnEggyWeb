import React from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Decorative Orb */}
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none -z-10 animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-[80px] pointer-events-none -z-10" />

        {/* Left Block - Contact Info (5 columns) */}
        <div className="lg:col-span-5 space-y-10 flex flex-col justify-between">
          <div className="space-y-6">
            <SectionHeader
              tag="Get in Touch"
              title={<>Ready to <span className="gradient-text">Transform?</span></>}
              subtitle="Have questions about Kubernetes deployments or AWS cost reduction options? Reach out to schedule a free architecture consultation session."
              align="left"
              className="mb-0"
            />

            <FadeIn delay={0.2} className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-background border border-border/40 flex items-center justify-center shadow-sm">
                  <Mail className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-mono">Email Us</span>
                  <a href="mailto:ask@oneggy.com" className="text-sm font-semibold hover:text-cyan-500 transition-colors">
                    ask@oneggy.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-background border border-border/40 flex items-center justify-center shadow-sm">
                  <Phone className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-mono">Call Us</span>
                  <a href="tel:+919811133005" className="text-sm font-semibold hover:text-cyan-500 transition-colors">
                    +91 98111 33005
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-background border border-border/40 flex items-center justify-center shadow-sm">
                  <MapPin className="h-5 w-5 text-indigo-500" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-mono">Location</span>
                  <span className="text-sm font-semibold">Gurgaon, Delhi NCR, India</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="p-6 rounded-xl border border-border/40 bg-background/50 backdrop-blur-sm space-y-4">
            <h2 className="text-base font-bold text-foreground inline-flex items-center gap-2">
              <Calendar className="h-5 w-5 text-cyan-500" /> Need a meeting quickly?
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Schedule a direct 30-minute cloud-native engineering assessment with our senior architect.
            </p>
            <a
              href="https://cal.com/oneggy-aakash-sharma/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center text-xs font-semibold h-9 px-4 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Book Free Meeting
            </a>
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
