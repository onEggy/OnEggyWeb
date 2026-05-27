import React from "react";
import Link from "next/link";
import { HelpCircle, Home, Calendar, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 relative py-12">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-500/5 blur-[125px] pointer-events-none -z-10" />

      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        {/* Large 404 Graphic */}
        <div className="relative">
          <h1 className="text-8xl sm:text-9xl font-extrabold tracking-widest text-foreground/10 font-mono select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-cyan-400">
              Page Not Found
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Looking for something?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The page you are looking for does not exist, has been archived, or has migrated to a new dynamic path.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-foreground text-background hover:bg-foreground/90 font-medium transition-colors cursor-pointer"
          >
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-background border border-border hover:bg-accent/40 font-medium transition-colors cursor-pointer"
          >
            <Calendar className="h-4 w-4 text-cyan-400" /> Book Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Support Link */}
        <div className="pt-8 border-t border-border/20 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <HelpCircle className="h-4 w-4 text-cyan-400" />
          <span>Need help finding a service? Contact our desk at </span>
          <a href="mailto:support@oneggy.com" className="text-cyan-400 hover:underline">
            support@oneggy.com
          </a>
        </div>
      </div>
    </div>
  );
}
