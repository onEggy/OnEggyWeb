import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { servicesData } from "@/lib/services-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.oneggy.com";
  
  // Primary website routes
  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/industries",
    "/case-studies",
    "/careers",
    "/blog",
    "/contact",
  ];

  // Lower-priority compliance routes
  const legalRoutes = ["/privacy-policy", "/terms-and-conditions", "/refund-policy"];

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const legalSitemap = legalRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  // Dynamic service routing sitemap mapping
  const serviceSitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic blog sitemap mapping
  let blogSitemap: MetadataRoute.Sitemap = [];
  try {
    const indexFilePath = path.join(/*turbopackIgnore: true*/ process.cwd(), "public/AllBlogs/index.json");
    if (fs.existsSync(indexFilePath)) {
      const rawData = fs.readFileSync(indexFilePath, "utf8");
      const posts = JSON.parse(rawData);
      blogSitemap = posts.map((post: { slug: string; mdFileLocation: string }) => {
        let date = new Date();
        try {
          const mdPath = path.join(/*turbopackIgnore: true*/ process.cwd(), post.mdFileLocation.replace("./", ""));
          if (fs.existsSync(mdPath)) {
            const content = fs.readFileSync(mdPath, "utf8");
            const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
            if (frontmatterMatch) {
              const lines = frontmatterMatch[1].split("\n");
              for (const line of lines) {
                const parts = line.split(":");
                if (parts.length >= 2 && parts[0].trim() === "date") {
                  const val = parts.slice(1).join(":").trim();
                  const parsed = new Date(val);
                  if (!isNaN(parsed.getTime())) {
                    date = parsed;
                  }
                  break;
                }
              }
            }
          }
        } catch (e) {
          // fallback to build date
        }
        return {
          url: `${baseUrl}/blogs/${post.slug}`,
          lastModified: date,
          changeFrequency: "daily" as const,
          priority: 0.6,
        };
      });
    }
  } catch (error) {
    console.error("Error generating sitemap for blogs:", error);
  }

  return [...staticSitemap, ...serviceSitemap, ...blogSitemap, ...legalSitemap];
}
