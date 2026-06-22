const skills = ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS", "Firebase", "GitHub", "Responsive UI"];

const steps = [
  { icon: "fa-compass-drafting", title: "Plan the structure", text: "I start with the sections, content flow, and the goal of the website before adding visual details." },
  { icon: "fa-layer-group", title: "Design the interface", text: "I focus on spacing, hierarchy, typography, cards, buttons, and mobile friendly layout decisions." },
  { icon: "fa-code", title: "Build with clean code", text: "I write simple component based code that is easy to read, edit, and improve later." }
];

export default function About() {
  return (
    <section id="about"
      className="scroll-mt-20 border-y border-line bg-[radial-gradient(circle_at_10%_20%,rgba(79,70,229,0.08),transparent_26%),rgba(255,255,255,0.48)] py-24 dark:bg-[radial-gradient(circle_at_10%_20%,rgba(79,70,229,0.16),transparent_26%),rgba(255,255,255,0.03)]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 md:grid-cols-[1fr_0.92fr] md:px-8">
        <div className="reveal">
          <span className="text-sm font-black uppercase tracking-[0.04em] text-primary">About me</span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            I build clean websites where <span className="gradient-text">design meets code</span>
          </h2>
          <p className="mt-5 leading-8 text-muted">
            I create modern frontend interfaces with strong attention to layout, spacing, typography, responsiveness, and small interaction details. My goal is to turn ideas into websites that feel smooth, clear, and ready for real users.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skills.map((skill) => (
              <span key={skill}
                className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-line bg-panel text-[13px] font-black text-text shadow-soft max-[380px]:text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-2 rounded-[34px] border border-line bg-panel p-6 shadow-soft transition-all duration-400 ease-smooth hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-card sm:p-[30px]">
          <div className="flex items-center gap-4">
            <div className="h-[62px] w-[62px] overflow-hidden rounded-[22px] border border-line bg-primary/10">
              <img src="/assets/logo.png" alt="Sodiol logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="text-[22px] font-black">Sodiol Sayem</h3>
              <p className="text-sm text-muted">Frontend UI Developer</p>
            </div>
          </div>
          <div className="my-6 h-px w-full bg-line" />
          <p className="leading-7 text-muted">
            “I care about making websites that look polished, load clearly, and feel natural to use. A good website should guide people without making them think too much.”
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-soft-panel px-3 py-2.5 text-[13px] font-extrabold text-muted">
              <i className="fa-solid fa-location-dot text-primary" /> Bangladesh
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-soft-panel px-3 py-2.5 text-[13px] font-extrabold text-muted">
              <i className="fa-solid fa-briefcase text-primary" /> Freelance ready
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-5 px-5 sm:px-6 md:grid-cols-3 md:px-8">
        {steps.map((step, index) => (
          <article key={step.title}
            className={`reveal reveal-delay-${Math.min(index + 1, 3)} rounded-[28px] border border-line bg-panel p-6 shadow-soft transition-all duration-400 ease-smooth hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-card sm:p-7`}>
            <i className={`fa-solid ${step.icon} grid h-12 w-12 place-items-center rounded-[18px] bg-primary/10 text-xl text-primary`} />
            <h3 className="mt-[22px] text-xl font-black">{step.title}</h3>
            <p className="mt-2.5 leading-[1.7] text-muted">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
