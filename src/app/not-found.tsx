import React from "react";
import Link from "next/link";
import { HelpCircle, Home, Calendar, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="relative">
          <h1 className="text-8xl sm:text-9xl font-extrabold tracking-widest text-foreground/10 font-mono select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-primary-strong">Page Not Found</span>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground">Looking for something?</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The page you are looking for does not exist, has been archived, or has migrated to a new dynamic path.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-colors cursor-pointer"
          >
            <Home className="h-4 w-4" /> Back to Home
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md border border-primary text-primary-strong hover:bg-primary/10 font-semibold transition-colors cursor-pointer"
          >
            <Calendar className="h-4 w-4" /> Book Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="pt-8 border-t border-border flex items-center justify-center gap-2 text-xs text-muted-foreground flex-wrap">
          <HelpCircle className="h-4 w-4 text-primary" aria-hidden="true" />
          <span>Need help finding a service? Contact our desk at</span>
          <a href="mailto:support@oneggy.com" className="text-primary-strong hover:underline">support@oneggy.com</a>
        </div>
      </div>
    </div>
  );
}
