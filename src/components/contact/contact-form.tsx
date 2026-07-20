"use client";

import React, { useState, useRef } from "react";
import { Check, Send, AlertTriangle } from "lucide-react";
import { FadeUp } from "@/components/animations/motion-wrappers";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "AWS Managed Services",
    budget: "Startup Retainer ($1,000 - $3,000 / mo)",
    timeline: "Immediate (Under 2 weeks)",
    location: "",
    message: "",
    _honey: "", // honeypot spam protection
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Tracks which required fields failed validation so we can flag them a11y-wise.
  const [fieldErrors, setFieldErrors] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({});

  // Captures when the form was first rendered/started — sent as "_ts" so the
  // API can reject implausibly fast (bot) submissions.
  const startTimeRef = useRef<number>(Date.now());

  // Banners receive focus on submit result for screen-reader announcement.
  const errorBannerRef = useRef<HTMLDivElement>(null);
  const successBannerRef = useRef<HTMLDivElement>(null);

  const focusError = () => {
    // Defer until the banner has rendered, then move focus for SR announcement.
    requestAnimationFrame(() => errorBannerRef.current?.focus());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccess(false);
    setFieldErrors({});

    // Frontend validation
    if (!formData.name.trim()) {
      setErrorMsg("Please provide your name.");
      setFieldErrors({ name: true });
      focusError();
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg("Please provide your email address.");
      setFieldErrors({ email: true });
      focusError();
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg("Please tell us about your project details.");
      setFieldErrors({ message: true });
      focusError();
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, _ts: startTimeRef.current }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "AWS Managed Services",
          budget: "Startup Retainer ($1,000 - $3,000 / mo)",
          timeline: "Immediate (Under 2 weeks)",
          location: "",
          message: "",
          _honey: "",
        });
        // Reset the fill-time clock for any subsequent submission.
        startTimeRef.current = Date.now();
        requestAnimationFrame(() => successBannerRef.current?.focus());
      } else {
        setErrorMsg(data.error || "An error occurred while sending your request. Please email us directly at ask@oneggy.com.");
        focusError();
      }
    } catch (err) {
      console.error("Form Submission Error:", err);
      setErrorMsg("Could not connect to the server. Please check your network connection or email us directly at ask@oneggy.com.");
      focusError();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FadeUp delay={0.2} className="surface-card p-6 md:p-8 rounded-2xl shadow-2xl space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">Initiate Infrastructure Audit</h3>
        <p className="text-sm text-muted-foreground">
          Fill out your details below to schedule an assessment or discuss your project specifications.
        </p>
      </div>

      {errorMsg && (
        <div
          ref={errorBannerRef}
          role="alert"
          aria-live="polite"
          tabIndex={-1}
          className="p-4 rounded-xl border border-destructive/30 bg-destructive/5 text-destructive text-sm flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-primary outline-none"
        >
          <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span>{errorMsg}</span>
        </div>
      )}

      {success && (
        <div
          ref={successBannerRef}
          role="alert"
          aria-live="polite"
          tabIndex={-1}
          className="p-4 rounded-xl border border-success/30 bg-success/5 text-success text-sm flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-primary outline-none"
        >
          <Check className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span>Thank you! Your inquiry was submitted successfully. We will email you back within 24 hours.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot field (hidden from users, forces spam-bots to fail) */}
        <input 
          type="text" 
          name="botcheck" 
          style={{ display: "none" }} 
          value={formData._honey} 
          onChange={(e) => setFormData({ ...formData, _honey: e.target.value })} 
          tabIndex={-1} 
          autoComplete="off"
        />
        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="fullname" className="text-sm font-semibold text-muted-foreground block">Full Name *</label>
            <input
              id="fullname"
              type="text"
              required
              placeholder="Aakash Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              aria-invalid={fieldErrors.name ? true : undefined}
              aria-describedby={fieldErrors.name ? "fullname-error" : undefined}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus-visible:ring-2 focus-visible:ring-primary focus:outline-none text-sm placeholder:text-muted-foreground/60 transition-all"
            />
            {fieldErrors.name && (
              <p id="fullname-error" className="text-sm text-destructive">Please provide your name.</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="company" className="text-sm font-semibold text-muted-foreground block">Company Name</label>
            <input
              id="company"
              type="text"
              placeholder="OnEggy Technologies"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus-visible:ring-2 focus-visible:ring-primary focus:outline-none text-sm placeholder:text-muted-foreground/60 transition-all"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-muted-foreground block">Email Address *</label>
            <input
              id="email"
              type="email"
              required
              placeholder="aakash@oneggy.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              aria-invalid={fieldErrors.email ? true : undefined}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus-visible:ring-2 focus-visible:ring-primary focus:outline-none text-sm placeholder:text-muted-foreground/60 transition-all"
            />
            {fieldErrors.email && (
              <p id="email-error" className="text-sm text-destructive">Please provide your email address.</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-sm font-semibold text-muted-foreground block">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus-visible:ring-2 focus-visible:ring-primary focus:outline-none text-sm placeholder:text-muted-foreground/60 transition-all"
            />
          </div>
        </div>

        {/* Service & Budget Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="service" className="text-sm font-semibold text-muted-foreground block">Service Interested In</label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus-visible:ring-2 focus-visible:ring-primary focus:outline-none text-sm cursor-pointer"
            >
              <option>AWS Managed Services</option>
              <option>DevOps Consulting & Automation</option>
              <option>Kubernetes Engineering (EKS/AKS)</option>
              <option>Full-Stack Web Development</option>
              <option>Mobile App Development (React Native)</option>
              <option>UI/UX Design & Prototyping</option>
              <option>Monitoring & Observability Setup</option>
              <option>Infrastructure Cost Audit</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="budget" className="text-sm font-semibold text-muted-foreground block">Budget Range</label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus-visible:ring-2 focus-visible:ring-primary focus:outline-none text-sm cursor-pointer"
            >
              <option>Startup Retainer ($1,000 - $3,000 / mo)</option>
              <option>Growth Retainer ($3,000 - $5,000 / mo)</option>
              <option>Enterprise Retainer ($5,000+ / mo)</option>
              <option>One-time DevOps Audit ($1,500 - $3,000)</option>
              <option>Custom Project / Not Sure</option>
            </select>
          </div>
        </div>

        {/* Timeline & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="timeline" className="text-sm font-semibold text-muted-foreground block">Target Timeline</label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus-visible:ring-2 focus-visible:ring-primary focus:outline-none text-sm cursor-pointer"
            >
              <option>Immediate (Under 2 weeks)</option>
              <option>Within 30 Days</option>
              <option>Flexible / Planning Phase</option>
              <option>Consultation / Advisory Only</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="location" className="text-sm font-semibold text-muted-foreground block">Country / Location</label>
            <input
              id="location"
              type="text"
              placeholder="e.g. India, USA, South Korea"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus-visible:ring-2 focus-visible:ring-primary focus:outline-none text-sm placeholder:text-muted-foreground/60 transition-all"
            />
          </div>
        </div>

        {/* Project Details message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-semibold text-muted-foreground block">Project Details & Current Infrastructure *</label>
          <textarea
            id="message"
            required
            rows={4}
            placeholder="Tell us about your tech stack, number of developers, active cloud hosting cost challenges, or project scope..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            aria-invalid={fieldErrors.message ? true : undefined}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
            className="w-full p-4 rounded-md bg-background border border-border focus-visible:ring-2 focus-visible:ring-primary focus:outline-none text-sm placeholder:text-muted-foreground/60 transition-all resize-y min-h-[100px]"
          />
          {fieldErrors.message && (
            <p id="message-error" className="text-sm text-destructive">Please tell us about your project details.</p>
          )}
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          aria-busy={isLoading}
          className="w-full inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all cursor-pointer disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-primary focus:outline-none"
        >
          {isLoading ? (
            <span className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" aria-hidden="true" />
          ) : (
            <>
              Submit Audit Request <Send className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </form>
    </FadeUp>
  );
}
