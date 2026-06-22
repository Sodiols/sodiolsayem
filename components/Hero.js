import FloatingFace from "./FloatingFace";

const quickStats = [
  { value: "Next.js", label: "modern builds" },
  { value: "Firebase", label: "app features" },
  { value: "Tailwind", label: "clean styling" }
];

const socials = [
  { href: "https://github.com/Sodiols", icon: "fab fa-github", label: "GitHub" },
  { href: "https://www.linkedin.com/in/sodiol-sayem-64184b27b/", icon: "fab fa-linkedin-in", label: "LinkedIn" },
  { href: "https://www.instagram.com/ignawwte/", icon: "fab fa-instagram", label: "Instagram" },
  { href: "https://x.com/sodiol_sayem", icon: "fab fa-twitter", label: "Twitter" }
];

export default function Hero() {
  return (
    <section id="home"
      className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl scroll-mt-20 flex-col-reverse items-center gap-12 px-5 py-16 sm:px-6 md:min-h-0 md:flex-row md:px-8 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 inset-y-[40px_0] bg-[linear-gradient(rgba(79,70,229,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.08)_1px,transparent_1px)] bg-[length:52px_52px] opacity-45 [mask-image:radial-gradient(circle_at_50%_40%,#000_0%,transparent_68%)]" />
      <div className="absolute left-0 top-[16%] h-24 w-24 animate-slowFloat rounded-full bg-primary/10 opacity-70 blur-[3px]" />
      <div className="absolute bottom-[14%] right-[8%] h-[120px] w-[120px] animate-slowFloat rounded-full bg-brandblue/10 opacity-70 blur-[3px] [animation-delay:1.8s]" />

      <div className="relative z-10 flex-1 text-center md:text-left">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(79,70,229,0.12)]" />
          Next.js, Tailwind & Firebase Developer
        </div>

        <h1 className="reveal reveal-delay-1 mt-5 text-[clamp(2.3rem,6.5vw,3.75rem)] font-extrabold leading-[1.07] tracking-[-0.02em] text-text">
          Building <span className="gradient-text">clean Next.js</span>
          <br /> websites with modern code
        </h1>

        <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-xl text-[clamp(1rem,2.4vw,1.125rem)] text-muted md:mx-0">
          I&apos;m Sodiol Sayem, a frontend developer from Bangladesh who builds responsive websites, Firebase web apps, ecommerce interfaces, and clean business landing pages.
        </p>

        <div className="reveal reveal-delay-3 mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <a href="#work"
            className="flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 font-semibold text-white shadow-md transition-all duration-300 ease-spring hover:-translate-y-[3px] hover:shadow-[0_18px_36px_rgba(15,23,42,0.18)] dark:bg-white dark:text-slate-900">
            View Projects <i className="fas fa-arrow-right text-sm" />
          </a>
          <a href="#availability"
            className="flex items-center gap-2 rounded-full border border-line bg-panel px-7 py-3 font-semibold text-text transition-all duration-300 ease-spring hover:-translate-y-[3px] hover:border-primary hover:text-primary">
            Hire Me <i className="far fa-comment-dots" />
          </a>
        </div>

        <div className="reveal reveal-delay-3 mx-auto mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 md:mx-0">
          {quickStats.map((item) => (
            <div key={item.value}
              className="rounded-[20px] border border-line/80 bg-white/70 px-3 py-3.5 shadow-soft backdrop-blur-[14px] dark:bg-slate-900/70">
              <strong className="block text-[15px] font-black text-text">{item.value}</strong>
              <span className="mt-0.5 block text-xs text-muted">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-3 mt-9 flex justify-center gap-6 md:justify-start">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
              className="flex min-h-[44px] items-center text-muted transition-all duration-300 ease-spring hover:-translate-y-[3px] hover:text-primary">
              <i className={`${s.icon} text-2xl`} />
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-1 justify-center">
        <FloatingFace />
      </div>
    </section>
  );
}
