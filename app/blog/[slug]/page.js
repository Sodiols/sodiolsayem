import Link from "next/link";
import { notFound } from "next/navigation";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollAnimations from "@/components/ScrollAnimations";
import { blogs } from "@/components/data";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog not found",
      robots: { index: false, follow: false }
    };
  }

  const url = `/blog/${blog.slug}`;

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: `${blog.title} | ${siteConfig.name}`,
      description: blog.excerpt,
      url: absoluteUrl(url),
      type: "article",
      publishedTime: "2026-06-01T00:00:00.000Z",
      authors: [siteConfig.name],
      images: [siteConfig.ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | ${siteConfig.name}`,
      description: blog.excerpt,
      images: [siteConfig.ogImage]
    }
  };
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    datePublished: "2026-06-01",
    dateModified: "2026-06-22",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url
    },
    mainEntityOfPage: absoluteUrl(`/blog/${blog.slug}`),
    image: absoluteUrl(siteConfig.ogImage)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ScrollAnimations />
      <CustomCursor />
      <Header />

      <main className="pt-20 bg-[radial-gradient(circle_at_12%_8%,rgba(79,70,229,0.11),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(37,99,235,0.09),transparent_28%),var(--page)] dark:bg-[radial-gradient(circle_at_14%_10%,rgba(79,70,229,0.18),transparent_34%),radial-gradient(circle_at_82%_8%,rgba(124,58,237,0.14),transparent_30%),var(--page)]">
        <article className="blog-reader mx-auto max-w-4xl px-6 py-20 md:px-8">
          <Link href="/#blog" className="inline-flex w-fit items-center gap-2.5 rounded-full border border-line bg-panel px-4 py-2.5 font-black text-text shadow-soft transition duration-300 hover:-translate-y-0.5 hover:text-primary">
            <i className="fa-solid fa-arrow-left" /> Back to blogs
          </Link>

          <div className="reveal mt-8 rounded-[34px] border border-gray-200 bg-white/80 p-8 shadow-[var(--shadow)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 md:p-12">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[13px] font-black uppercase tracking-[0.04em] text-primary">{blog.label}</span>
              <small className="font-bold text-muted">{blog.date}</small>
              <small className="font-bold text-muted">{blog.readingTime}</small>
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {blog.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {blog.excerpt}
            </p>
          </div>

          <div className="reveal reveal-delay-1 mt-10 space-y-8">
            {blog.content.map((section) => (
              <section key={section.heading} className="rounded-[28px] border border-line bg-panel p-[30px] shadow-soft">
                <h2 className="text-[26px] font-black">{section.heading}</h2>
                <p className="mt-3.5 text-[17px] leading-[1.9] text-muted">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="reveal reveal-delay-2 mt-12 rounded-[28px] border border-gray-200 bg-white p-8 text-center shadow-[var(--shadow)] dark:border-white/10 dark:bg-slate-900">
            <h2 className="text-2xl font-black">Need a clean website like this?</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-500 dark:text-gray-300">
              I can help you plan, design, and build a polished frontend website with smooth responsive behavior.
            </p>
            <a href="/#availability" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 font-semibold text-white shadow-md transition-all duration-300 ease-spring hover:-translate-y-[3px] hover:shadow-[0_18px_36px_rgba(15,23,42,0.18)] dark:bg-white dark:text-slate-900">
              Hire Me <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
