import { MetadataRoute } from "next";
import { servicesData } from "@/lib/services-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.oneggy.com";
  
  // Static website routes
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

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic service routing sitemap mapping
  const serviceSitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticSitemap, ...serviceSitemap];
}
