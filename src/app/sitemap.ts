import type { MetadataRoute } from "next";

// public/robots.txt advertises https://murmur.denvermilleriii.com/sitemap.xml,
// so emit one here. Single landing page; keep the host in sync with
// metadataBase in layout.tsx.
const SITE_URL = "https://murmur.denvermilleriii.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
