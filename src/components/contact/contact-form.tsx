"use client";

import React, { useState } from "react";
import { Check, Send } from "lucide-react";
import { FadeUp } from "@/components/animations/motion-wrappers";

export function ContactForm() {
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
  );
}
