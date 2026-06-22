import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--page)] px-6 text-center text-[var(--text)]">
      <section className="max-w-xl rounded-[32px] border border-line bg-panel p-10 shadow-soft">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-primary">404</p>
        <h1 className="mt-3 text-4xl font-black">Page not found</h1>
        <p className="mt-4 leading-7 text-muted">
          This page does not exist anymore, or the link may be incorrect.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-slate-900 px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
