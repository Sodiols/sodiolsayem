import { fiverrLink } from "./data";

export default function Availability() {
  return (
    <section id="availability" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-6 md:px-8">
      <div className="reveal relative flex flex-col items-start justify-between gap-7 overflow-hidden rounded-[26px] bg-gradient-to-br from-slate-900 to-indigo-950 p-[26px_22px] text-white shadow-[0_25px_60px_rgba(17,24,39,0.22)] sm:p-[46px] md:flex-row md:items-center md:rounded-[36px] before:absolute before:right-[-120px] before:top-[-120px] before:h-[300px] before:w-[300px] before:rounded-full before:bg-primary/30 before:content-[''] after:absolute after:bottom-[-80px] after:left-[-80px] after:h-[180px] after:w-[180px] after:rounded-full after:bg-brandblue/20 after:content-['']">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-3.5 py-2 text-sm font-black">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_0_6px_rgba(34,197,94,0.18)]" /> Available for freelance work
          </span>
          <h2 className="mt-5 text-[clamp(1.6rem,7vw,2rem)] font-extrabold leading-tight md:text-5xl">
            Hire me for your next clean website
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-300">
            I can help with portfolio websites, landing pages, business websites, ecommerce fronts, Firebase projects, and responsive frontend builds.
          </p>
        </div>

        <div className="relative z-10 grid w-full gap-3 md:w-auto md:min-w-[220px]">
          <a href={fiverrLink} target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-6 py-3.5 font-black text-slate-900 transition-transform duration-300 ease-spring hover:-translate-y-[3px]">
            Hire me on Fiverr <i className="fa-solid fa-up-right-from-square ml-2" />
          </a>
          <a href="#contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-black text-white transition-transform duration-300 ease-spring hover:-translate-y-[3px]">
            Send direct message <i className="fas fa-arrow-right ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
