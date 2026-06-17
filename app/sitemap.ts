import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-06-10"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
