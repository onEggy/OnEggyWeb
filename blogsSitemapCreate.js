// OnEggy v2: Sitemaps are now dynamically managed in App Router via src/app/sitemap.ts
// (and robots via src/app/robots.ts). This script is intentionally a no-op.
//
// IMPORTANT: The Vercel build command is `next build && node blogsSitemapCreate.js`,
// so this file MUST exist or the deploy fails with MODULE_NOT_FOUND. If you want to
// remove it, first change the Vercel project Build Command (or add a vercel.json
// with `"buildCommand": "next build"`).
console.log("Next.js App Router dynamic sitemap builder active at /sitemap.xml.");
