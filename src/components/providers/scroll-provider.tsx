"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Native scroll behavior. We previously used Lenis (JS smooth-scroll), which
 * intermittently "stuck" on long pages and inner scroll areas (blog list/article).
 * Native scrolling is reliable and fast; we only reset scroll position on route
 * change and disable the browser's automatic scroll restoration.
 */
export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return <>{children}</>;
}
