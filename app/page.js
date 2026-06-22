import About from "@/components/About";
import Availability from "@/components/Availability";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollAnimations from "@/components/ScrollAnimations";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import { projects } from "@/components/data";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl("/assets/logo.png"),
    jobTitle: siteConfig.jobTitle,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD"
    },
    knowsAbout: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Firebase",
      "Responsive Web Design",
      "Frontend Development",
      "Realtime Chat Applications",
      "Ecommerce Interfaces"
    ],
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.instagram,
      siteConfig.links.twitter,
      siteConfig.links.fiverr
    ]
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} web development projects`,
    itemListElement: projects.map((project, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: project.title,
      description: project.description,
      url: project.site,
      image: absoluteUrl(project.image)
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, portfolioSchema]) }}
      />
      <ScrollAnimations />
      <CustomCursor />
      <Header />

      <main className="pt-20 bg-[radial-gradient(circle_at_12%_8%,rgba(79,70,229,0.11),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(37,99,235,0.09),transparent_28%),var(--page)] dark:bg-[radial-gradient(circle_at_14%_10%,rgba(79,70,229,0.18),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(124,58,237,0.14),transparent_30%),var(--page)]">
        <Hero />
        <Stats />
        <Work />
        <Availability />
        <About />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
