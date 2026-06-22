import { absoluteUrl, siteConfig } from "@/lib/seo";

export default function robots() {
  const isPreview = process.env.VERCEL_ENV === "preview";

  if (isPreview) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/"
      },
      sitemap: absoluteUrl("/sitemap.xml"),
      host: siteConfig.url
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url
  };
}
