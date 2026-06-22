"use client";

import { useState } from "react";
import { faqs } from "./data";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-6 md:px-8">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal">
          <span className="text-sm font-black uppercase tracking-[0.04em] text-primary">FAQ</span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Clear answers before <span className="gradient-text">we start</span>
          </h2>
          <p className="mt-4 max-w-md text-muted">
            These answers explain the common things clients ask before starting a website project.
          </p>
        </div>

        <div className="reveal reveal-delay-1 grid gap-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const answerId = `faq-answer-${index}`;
            return (
              <div key={faq.question}
                className="rounded-[24px] border border-line bg-panel shadow-soft transition-all duration-400 ease-smooth hover:border-primary/25">
                <button onClick={() => setActiveIndex(isActive ? null : index)} aria-expanded={isActive} aria-controls={answerId}
                  className="flex w-full items-center justify-between gap-[18px] p-[22px] text-left font-black text-text">
                  <span>{faq.question}</span>
                  <i className={`fas ${isActive ? "fa-minus" : "fa-plus"} grid h-[34px] w-[34px] min-w-[34px] place-items-center rounded-full transition-all duration-300 ease-spring ${
                    isActive ? "rotate-180 bg-primary text-white" : "bg-primary/10 text-primary"
                  }`} />
                </button>
                <div id={answerId}
                  className={`grid transition-[grid-template-rows] duration-[450ms] ease-smooth ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className={`overflow-hidden px-[22px] leading-7 text-muted transition-all duration-400 ${
                    isActive ? "translate-y-0 pb-[22px] opacity-100" : "-translate-y-1.5 opacity-0"
                  }`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
