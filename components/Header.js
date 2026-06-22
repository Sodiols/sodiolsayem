"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "./data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.href.replace("#", ""))];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const changeTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
  };

  const closeAndGo = () => setMenuOpen(false);
  const sectionLink = (href) => (href.startsWith("#") ? `/${href}` : href);
  const isActive = (href) => active === href.replace("#", "");

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-line bg-[var(--nav)] backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-[0_14px_40px_rgba(15,23,42,0.08)] dark:shadow-[0_16px_44px_rgba(0,0,0,0.5)]" : "shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-3.5 sm:px-6 md:px-8 md:py-4">
        <a href="/#home" onClick={closeAndGo} aria-label="Go to home section"
          className="inline-flex items-baseline text-[23px] font-black leading-none tracking-[-0.04em] text-brandblue sm:text-[26px]">
          <span className="text-transparent bg-gradient-to-br from-brandblue to-primary bg-clip-text">Sodiol</span>
          <small className="text-[25px] text-text sm:text-[28px]">.</small>
        </a>

        <nav className="mx-auto hidden items-center gap-1 rounded-full border border-line/70 bg-soft-panel/80 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_30px_rgba(15,23,42,0.04)] backdrop-blur dark:bg-slate-900/70 dark:shadow-none md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={sectionLink(link.href)} aria-current={isActive(link.href) ? "true" : undefined}
              className={`rounded-full px-3.5 py-2.5 text-sm font-bold transition-all duration-200 hover:-translate-y-px hover:text-primary ${
                isActive(link.href) ? "bg-primary/10 text-primary dark:bg-primary/20" : "text-muted"
              }`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2.5 sm:gap-3">
          <button onClick={changeTheme} aria-label="Toggle dark and white theme"
            title={theme === "dark" ? "Switch to white theme" : "Switch to dark theme"}
            className="relative h-[42px] w-[70px] rounded-full border border-line bg-panel p-1 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
            <span className={`grid h-8 w-8 place-items-center rounded-full text-white transition-transform duration-300 ${
              theme === "dark" ? "translate-x-7 bg-white text-slate-900" : "bg-primary"
            }`}>
              <i className={`fa-solid fa-sun col-start-1 row-start-1 text-[13px] transition-all ${theme === "dark" ? "scale-0 opacity-0" : "opacity-100"}`} />
              <i className={`fa-solid fa-moon col-start-1 row-start-1 text-[13px] transition-all ${theme === "dark" ? "opacity-100" : "scale-0 opacity-0"}`} />
            </span>
          </button>

          <a href="/#availability"
            className="hidden items-center justify-center rounded-full bg-gradient-to-br from-brandblue to-primary px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow md:inline-flex">
            Hire Me
          </a>

          <button onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-2xl border border-line bg-panel text-text shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:text-primary md:hidden">
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars-staggered"}`} />
          </button>
        </div>
      </div>

      <div onClick={() => setMenuOpen(false)} aria-hidden={!menuOpen}
        className={`fixed inset-0 top-0 z-40 bg-slate-950/40 backdrop-blur-[2px] transition-all duration-300 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`} />

      <div role="dialog" aria-modal="true" aria-hidden={!menuOpen}
        className={`absolute inset-x-0 top-full z-50 origin-top border-b border-line bg-[var(--nav)] shadow-[0_24px_50px_rgba(2,6,23,0.16)] backdrop-blur-xl transition-all duration-300 ease-smooth md:hidden ${
          menuOpen ? "visible translate-y-0 scale-y-100 opacity-100" : "pointer-events-none invisible -translate-y-3 scale-y-[0.98] opacity-0"
        }`}>
        <div className="grid gap-2 px-5 py-5">
          {navLinks.map((link, i) => (
            <a key={link.href} href={sectionLink(link.href)} onClick={closeAndGo}
              style={{ transitionDelay: menuOpen ? `${0.04 + i * 0.04}s` : "0s" }}
              className={`flex min-h-[44px] items-center rounded-2xl border border-line bg-panel px-4 py-3.5 font-bold transition-all duration-300 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              } ${isActive(link.href) ? "border-primary/40 text-primary" : "text-text"}`}>
              {link.label}
            </a>
          ))}
          <a href="/#availability" onClick={closeAndGo}
            style={{ transitionDelay: menuOpen ? `${0.04 + navLinks.length * 0.04}s` : "0s" }}
            className={`mt-2 flex items-center justify-center gap-1 rounded-full bg-gradient-to-br from-brandblue to-primary py-3.5 font-extrabold text-white shadow-glow transition-all duration-300 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}>
            Hire Me <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </header>
  );
}
