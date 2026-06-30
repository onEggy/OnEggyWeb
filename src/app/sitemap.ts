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
    const indexFilePath = path.join(process.cwd(), "public/AllBlogs/index.json");
    if (fs.existsSync(indexFilePath)) {
      const rawData = fs.readFileSync(indexFilePath, "utf8");
      const posts = JSON.parse(rawData);
      blogSitemap = posts.map((post: { slug: string }) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 0.6,
      }));
    }
  } catch (error) {
    console.error("Error generating sitemap for blogs:", error);
  }

  return [...staticSitemap, ...serviceSitemap, ...blogSitemap, ...legalSitemap];
}
