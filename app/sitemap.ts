import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/assisted-living",
    "/door-entry-systems",
    "/digital-switchover-2027",
    "/smoke-detection-systems",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `https://notio.uk${route}`,
    lastModified: new Date("2026-07-27"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/privacy-policy" ? 0.3 : 0.8,
  }));
}
