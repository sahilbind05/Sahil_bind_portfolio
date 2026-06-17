import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Portfolio`,
    short_name: "Sahil Bind",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#080b0a",
    theme_color: "#080b0a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
