import type { MetadataRoute } from "next"

const baseUrl = "https://www.keyo.co.ke"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services/web-applications", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/mobile-apps", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/crm-erp", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/innovation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/outsourced-development", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/ui-ux-design", priority: 0.8, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.9, changeFrequency: "weekly" },
    { path: "/careers/apply", priority: 0.5, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
