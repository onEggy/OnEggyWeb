"use client";

import React, { useState } from "react";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccess(false);

    // Frontend validation
    if (!formData.name.trim()) {
      setErrorMsg("Please provide your name.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg("Please provide your email address.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg("Please tell us about your project details.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
      } else {
        setErrorMsg(data.error || "An error occurred while sending your request. Please email us directly at ask@oneggy.com.");
      }
    } catch (err) {
      console.error("Form Submission Error:", err);
      setErrorMsg("Could not connect to the server. Please check your network connection or email us directly at ask@oneggy.com.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FadeUp delay={0.2} className="glass-card p-6 md:p-8 rounded-2xl shadow-2xl space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl md:text-2xl font-bold text-foreground">Initiate Infrastructure Audit</h3>
        <p className="text-xs text-muted-foreground">
          Fill out your details below to schedule an assessment or discuss your project specifications.
        </p>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-xs sm:text-sm flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {success && (
        <div className="p-4 rounded-xl border border-green-500/20 bg-green-500/5 text-green-400 text-xs sm:text-sm flex items-center gap-3">
          <Check className="h-5 w-5 shrink-0" />
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
            <label className="text-xs font-semibold text-muted-foreground block">Full Name *</label>
            <input
              type="text"
              required
              placeholder="Aakash Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground block">Company Name</label>
            <input
              type="text"
              placeholder="OnEggy Technologies"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60 transition-all"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground block">Email Address *</label>
            <input
              type="email"
              required
              placeholder="aakash@oneggy.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground block">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 98111 33005"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60 transition-all"
            />
          </div>
        </div>

        {/* Service & Budget Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground block">Service Interested In</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm cursor-pointer"
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
            <label className="text-xs font-semibold text-muted-foreground block">Budget Range</label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm cursor-pointer"
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
            <label className="text-xs font-semibold text-muted-foreground block">Target Timeline</label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm cursor-pointer"
            >
              <option>Immediate (Under 2 weeks)</option>
              <option>Within 30 Days</option>
              <option>Flexible / Planning Phase</option>
              <option>Consultation / Advisory Only</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground block">Country / Location</label>
            <input
              type="text"
              placeholder="e.g. India, USA, South Korea"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full h-11 px-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60 transition-all"
            />
          </div>
        </div>

        {/* Project Details message */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground block">Project Details & Current Infrastructure *</label>
          <textarea
            required
            rows={4}
            placeholder="Tell us about your tech stack, number of developers, active cloud hosting cost challenges, or project scope..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-4 rounded-md bg-background border border-border focus:ring-1 focus:ring-cyan-500 focus:outline-none text-sm placeholder:text-muted-foreground/60 transition-all resize-y min-h-[100px]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-all cursor-pointer disabled:opacity-50"
        >
          {isLoading ? (
            <span className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              Submit Audit Request <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </FadeUp>
  );
}
