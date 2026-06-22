"use client";

import { useState } from "react";
import { projects } from "./data";
import SitePreview from "./SitePreview";

export default function Work() {
  const [preview, setPreview] = useState(null);

  return (
    <>
      <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-6 md:px-8">
        <div className="reveal mb-14 text-center">
          <span className="text-sm font-black uppercase tracking-[0.04em] text-primary">Selected Projects</span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Real websites <span className="gradient-text">built with purpose</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Each project focuses on clear structure, responsive layout, useful features, and a clean visual experience that feels professional on every screen.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title}
              className={`group reveal reveal-delay-${Math.min(index + 1, 3)} overflow-hidden rounded-[28px] border border-line bg-panel shadow-soft transition-all duration-400 ease-smooth hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-card`}>
              <div className={`relative flex h-60 items-center justify-center overflow-hidden text-white ${project.imageClass}`}>
                <img src={project.image} alt={project.alt} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition duration-300 group-hover:opacity-100">
                  <button onClick={() => setPreview(project)}
                    className="rounded-full bg-white px-6 py-3 font-black text-slate-900 transition duration-300 hover:scale-105 hover:bg-slate-900 hover:text-white">
                    Preview Project
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-indigo-500">Project</span>
                    <h3 className="mt-1 text-xl font-black">{project.title}</h3>
                  </div>
                  <span className={`${project.tagClass} rounded-full px-3 py-1 text-xs font-semibold`}>{project.category}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <button onClick={() => setPreview(project)}
                    className="rounded-full font-black text-primary transition duration-300 hover:-translate-y-0.5">Quick view</button>
                  <a href={project.site} target="_blank" rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm font-black text-text transition duration-300 hover:-translate-y-0.5 hover:text-primary">
                    Live site <i className="fa-solid fa-up-right-from-square" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SitePreview preview={preview} onClose={() => setPreview(null)} />
    </>
  );
}
