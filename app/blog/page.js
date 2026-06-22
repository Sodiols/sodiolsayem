import Link from "next/link";
import Blog from "@/components/Blog";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollAnimations from "@/components/ScrollAnimations";
import { siteConfig } from "@/lib/seo";

export const metadata = {
  title: "Frontend Development Blog",
  description:
    "Frontend development notes by Sodiol Sayem about responsive websites, UI spacing, animation, Next.js, Tailwind CSS, Firebase projects, and clean website planning.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Frontend Development Blog | Sodiol Sayem",
    description:
      "Read practical frontend notes by Sodiol Sayem about responsive layouts, clean UI, animation, and website planning.",
    url: `${siteConfig.url}/blog`,
    type: "website",
    images: [siteConfig.ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Development Blog | Sodiol Sayem",
    description:
      "Practical frontend notes about responsive layouts, clean UI, animation, and website planning.",
    images: [siteConfig.ogImage]
  }
};

export default function BlogPage() {
  return (
    <>
      <ScrollAnimations />
      <CustomCursor />
      <Header />

      <main className="pt-20 bg-[radial-gradient(circle_at_12%_8%,rgba(79,70,229,0.11),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(37,99,235,0.09),transparent_28%),var(--page)] dark:bg-[radial-gradient(circle_at_14%_10%,rgba(79,70,229,0.18),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(124,58,237,0.14),transparent_30%),var(--page)]">
        <section className="mx-auto max-w-6xl px-6 py-16 text-center md:px-8">
          <Link href="/#home" className="inline-flex w-fit items-center gap-2.5 rounded-full border border-line bg-panel px-4 py-2.5 font-black text-text shadow-soft transition duration-300 hover:-translate-y-0.5 hover:text-primary mx-auto">
            <i className="fa-solid fa-arrow-left" /> Back to home
          </Link>

          <h1 className="mt-8 text-4xl font-black md:text-6xl">
            Frontend development <span className="gradient-text">blog</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500 dark:text-gray-300">
            Practical notes about Next.js, Tailwind CSS, responsive layouts, Firebase projects, website planning, and subtle animation.
          </p>
        </section>

        <Blog />
        <Footer />
      </main>
    </>
  );
}
