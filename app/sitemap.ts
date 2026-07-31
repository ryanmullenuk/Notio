import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/assisted-living",
    "/door-entry-systems",
    "/smoke-detection-systems",
    "/digital-switchover-2027",
    "/tender-support",
    "/xla",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `https://notio.uk${route}`,
    lastModified: new Date("2026-07-31"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/privacy-policy" ? 0.3 : 0.8,
  }));
}
