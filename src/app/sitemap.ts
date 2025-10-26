import type { MetadataRoute } from "next";
import { canonical } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/", "/landing",
    "/register", "/register/bank-account-information",
    "/register/personal-vehicle", "/register/service-area",
  ];
  return routes.map((p) => ({
    url: canonical(p),
    lastModified: now,
    changeFrequency: p === "/" ? "daily" : "weekly",
    priority: p === "/" ? 1 : 0.7,
  }));
}
