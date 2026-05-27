"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Calendar, Check, Send } from "lucide-react";
import { FadeUp, FadeIn } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "Infrastructure Audit",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsLoading(true);

    // Simulate API request post
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setSuccess(true);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      budget: "Infrastructure Audit",
      message: "",
    });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
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
        <FadeUp delay={0.2} className="glass-card p-8 rounded-2xl shadow-2xl space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Send Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground block">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground block">Company Name</label>
                <input
                  type="text"
                  required
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground block">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground block">Phone Number (Optional)</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground block">Project Size / Goal</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm cursor-pointer"
              >
                <option>Infrastructure Audit & Rightsizing</option>
                <option>Kubernetes Migration (EKS/AKS)</option>
                <option>DevOps Pipeline Automation</option>
                <option>Full-Stack / Mobile App Development</option>
                <option>Other cloud engineering inquiries</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground block">Your Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your setup, goals, or current cloud spend challenges..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-all cursor-pointer"
            >
              {isLoading ? (
                <span className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
              ) : success ? (
                <>
                  Success <Check className="h-4 w-4 text-green-400 font-bold" />
                </>
              ) : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </FadeUp>
      </div>
    </div>
  );
}
