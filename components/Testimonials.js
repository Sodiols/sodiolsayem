"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "./data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touch = useRef({ x: 0, active: false });

  const go = (i) => setCurrentIndex((i + testimonials.length) % testimonials.length);
  const next = () => go(currentIndex + 1);
  const prev = () => go(currentIndex - 1);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduced || testimonials.length < 2) return;
    const id = setInterval(() => setCurrentIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, [paused, currentIndex]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };
  const onTouchStart = (e) => { touch.current = { x: e.touches[0].clientX, active: true }; setPaused(true); };
  const onTouchEnd = (e) => {
    if (!touch.current.active) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
    touch.current.active = false; setPaused(false);
  };

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:px-8">
      <div className="reveal mb-12 text-center">
        <h2 className="text-3xl font-bold">Kind <span className="gradient-text">words</span></h2>
        <p className="mt-2 text-muted">What clients and projects say about my work</p>
      </div>

      <div tabIndex={0} role="group" aria-roledescription="carousel" aria-label="Testimonials"
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
        onKeyDown={onKeyDown} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
        className="reveal reveal-delay-1 overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#061424,#081b31)] p-[28px_22px] shadow-[0_25px_60px_rgba(2,12,27,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary/60 sm:rounded-[38px] sm:p-[42px]">
        <div className="mb-[38px] flex gap-3.5">
          <span className="block h-[14px] w-[14px] rounded-full bg-[#ff5f57] sm:h-[18px] sm:w-[18px]" />
          <span className="block h-[14px] w-[14px] rounded-full bg-[#ffbd2e] sm:h-[18px] sm:w-[18px]" />
          <span className="block h-[14px] w-[14px] rounded-full bg-[#28c840] sm:h-[18px] sm:w-[18px]" />
        </div>

        <div className="flex transition-transform duration-[600ms] ease-smooth [will-change:transform]"
          style={{ transform: `translate3d(-${currentIndex * 100}%,0,0)` }}>
          {testimonials.map((item, i) => (
            <div key={item.title} aria-hidden={i !== currentIndex} className="min-w-full px-2.5 py-5 text-center">
              <div className="mx-auto mb-[26px] flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-gradient-to-br from-blue-700 to-violet-600 text-[28px] text-white shadow-[0_18px_35px_rgba(79,70,229,0.35)] sm:h-[86px] sm:w-[86px] sm:rounded-[28px] sm:text-[34px]">
                <i className={`fas ${item.icon}`} />
              </div>
              <h3 className="mx-auto max-w-[760px] text-[clamp(1.4rem,7vw,1.9rem)] font-black leading-[1.15] text-white sm:text-[clamp(28px,5vw,48px)]">{item.title}</h3>
              <p className="mx-auto mt-6 max-w-[680px] text-base leading-[1.8] text-[#b9c7d8] sm:text-lg">{item.text}</p>
              <span className="mt-7 inline-block font-black text-white">{item.name}</span>
              <h4 className="text-gray-500">{item.role}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal reveal-delay-2 mt-7 flex items-center justify-center gap-4">
        <button onClick={prev} aria-label="Previous testimonial"
          className="h-[46px] w-[46px] rounded-full bg-[#061424] text-[30px] leading-none text-white transition duration-200 hover:-translate-y-[3px] hover:bg-[#0a1c31]">‹</button>
        <div role="tablist" aria-label="Choose testimonial" className="flex items-center gap-2.5">
          {testimonials.map((item, i) => (
            <button key={item.title} onClick={() => go(i)} role="tab" aria-selected={i === currentIndex}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-[9px] rounded-full transition-all duration-300 ${i === currentIndex ? "w-[26px] bg-primary" : "w-[9px] bg-slate-400/45"}`} />
          ))}
        </div>
        <button onClick={next} aria-label="Next testimonial"
          className="h-[46px] w-[46px] rounded-full bg-[#061424] text-[30px] leading-none text-white transition duration-200 hover:-translate-y-[3px] hover:bg-[#0a1c31]">›</button>
      </div>
    </section>
  );
}
