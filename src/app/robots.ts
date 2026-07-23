import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://endevis.cz/sitemap.xml",
    host: "https://endevis.cz",
  };
}
