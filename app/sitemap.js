import { blogs } from "@/components/data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap() {
  const lastModified = new Date("2026-06-22");

  const staticRoutes = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: absoluteUrl("/blog"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];

  const blogRoutes = blogs.map((blog) => ({
    url: absoluteUrl(`/blog/${blog.slug}`),
    lastModified,
    changeFrequency: "yearly",
    priority: 0.7
  }));

  return [...staticRoutes, ...blogRoutes];
}
