const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sodiol-sayem.vercel.app";
const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const siteConfig = {
  name: "Sodiol Sayem",
  shortName: "Sodiol",
  jobTitle: "Frontend Developer",
  url: siteUrl,
  email: "itssayem2023@gmail.com",
  phone: "+8801626974965",
  location: "Bangladesh",
  title: "Sodiol Sayem | Frontend Developer Portfolio",
  description:
    "Frontend developer portfolio of Sodiol Sayem, showcasing Next.js, Tailwind CSS, Firebase, responsive websites, realtime chat applications, ecommerce interfaces, and modern business websites.",
  keywords: [
    "Sodiol Sayem",
    "Sodiol portfolio",
    "frontend developer",
    "full stack developer",
    "mobile friendly website developer",
    "frontend developer Bangladesh",
    "Next.js developer",
    "React developer",
    "Tailwind CSS developer",
    "Firebase developer",
    "portfolio website developer",
    "business website developer",
    "responsive website developer",
    "web developer Bangladesh",
    "realtime chat app developer",
    "ecommerce frontend developer",
    "ecommerce full stack developer",
    "modern website developer",
  ],
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/Sodiols",
    linkedin: "https://www.linkedin.com/in/sodiol-sayem-64184b27b/",
    instagram: "https://www.instagram.com/ignawwte/",
    twitter: "https://x.com/sodiol_sayem",
    fiverr:
      "https://www.fiverr.com/sodiolsayem/build-a-modern-responsive-react-js-front-end-website"
  }
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
