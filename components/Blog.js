import Link from "next/link";
import { blogs } from "./data";

export default function Blog() {
  return (
    <section id="blog"
      className="scroll-mt-20 border-y border-line bg-[radial-gradient(circle_at_10%_20%,rgba(79,70,229,0.08),transparent_26%),rgba(255,255,255,0.48)] py-24 dark:bg-[radial-gradient(circle_at_10%_20%,rgba(79,70,229,0.16),transparent_26%),rgba(255,255,255,0.03)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8">
        <div className="reveal mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.04em] text-primary">Learning Journal</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Frontend <span className="gradient-text">blogs</span></h2>
          </div>
          <p className="max-w-xl text-muted md:text-right">
            Practical notes about design, responsive layouts, animation, frontend workflow, and clean website planning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <article key={blog.slug}
              className={`reveal reveal-delay-${Math.min(index + 1, 3)} relative overflow-hidden rounded-[28px] border border-line bg-panel p-7 shadow-soft transition-all duration-400 ease-smooth hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-card before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-br before:from-brandblue before:to-violet2 before:content-['']`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-[13px] font-black uppercase tracking-[0.04em] text-primary">{blog.label}</span>
                <small className="font-bold text-muted">{blog.readingTime}</small>
              </div>
              <h3 className="mt-5 text-[22px] font-extrabold leading-tight">{blog.title}</h3>
              <p className="mt-4 leading-7 text-muted">{blog.text}</p>
              <Link href={`/blog/${blog.slug}`}
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-black text-primary transition-all duration-300 hover:gap-3 hover:text-primary-deep">
                Read more <i className="fas fa-arrow-right" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
