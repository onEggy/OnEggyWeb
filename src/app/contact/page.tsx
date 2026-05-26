"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Calendar, Check, Send } from "lucide-react";
import { FadeUp, FadeIn } from "@/components/animations/motion-wrappers";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "DevOps Consulting Query",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "DevOps Consulting Query", message: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      {/* Decorative Orb */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      {/* Left Block - Contact Info */}
      <div className="space-y-10">
        <div className="space-y-6">
          <FadeUp>
            <span className="text-xs uppercase tracking-widest text-cyan-500 font-semibold">Get in Touch</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Ready to <span className="gradient-text">Transform?</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about Kubernetes deployment sizes or AWS cost reduction options? Reach out to schedule a free architecture consultation session with our experts.
            </p>
          </FadeUp>
        </div>

        <FadeIn delay={0.3} className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-background border border-border/40 flex items-center justify-center">
              <Mail className="h-5 w-5 text-cyan-500" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Email Us</span>
              <a href="mailto:ask@oneggy.com" className="text-sm font-semibold hover:text-cyan-500 transition-colors">
                ask@oneggy.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-background border border-border/40 flex items-center justify-center">
              <Phone className="h-5 w-5 text-teal-500" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Call Us</span>
              <a href="tel:+919811133005" className="text-sm font-semibold hover:text-cyan-500 transition-colors">
                +91 98111 33005
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-background border border-border/40 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-indigo-500" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground block">Location</span>
              <span className="text-sm font-semibold">Gurgaon, Delhi NCR, India</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="p-6 rounded-xl border border-border/40 bg-background/50 backdrop-blur-sm space-y-4">
          <h2 className="text-lg font-bold text-foreground inline-flex items-center gap-2">
            <Calendar className="h-5 w-5 text-cyan-500" /> Need a meeting quickly?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
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

      {/* Right Block - Contact Form */}
      <FadeUp delay={0.2} className="glass-card p-8 rounded-2xl shadow-xl space-y-6">
        <h3 className="text-2xl font-bold text-foreground">Send Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground block">Full Name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground block">Email Address</label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground block">Subject</label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm"
            >
              <option>DevOps Consulting Query</option>
              <option>AWS Cost Audit Request</option>
              <option>Custom Product Development</option>
              <option>Other Query</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground block">Your Message</label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about your project infrastructure or goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-4 rounded-md bg-background border border-border focus:ring-2 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors cursor-pointer"
          >
            {isLoading ? (
              "Sending..."
            ) : success ? (
              <>
                Success <Check className="h-4 w-4 text-green-400" />
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
  );
}
