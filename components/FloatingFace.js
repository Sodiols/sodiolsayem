"use client";

import { useEffect, useRef } from "react";

export default function FloatingFace() {
  const stageRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const tilt = tiltRef.current;
    if (!stage || !tilt) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let tx = 0, ty = 0, cx = 0, cy = 0, frame;
    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 14;
      ty = ((e.clientY - r.top) / r.height - 0.5) * -14;
    };
    const onLeave = () => { tx = 0; ty = 0; };
    const render = () => {
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      tilt.style.transform = `perspective(900px) rotateY(${cx}deg) rotateX(${cy}deg)`;
      frame = requestAnimationFrame(render);
    };
    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={stageRef} className="reveal reveal-delay-2 relative grid aspect-[1/0.86] w-[min(100%,480px)] place-items-center">
      <span className="absolute right-[22px] top-6 z-[4] animate-slowFloat rounded-full border border-line bg-panel px-3.5 py-2.5 text-[13px] font-black shadow-soft max-md:hidden">Next.js</span>
      <span className="absolute right-[-12px] top-[48%] z-[4] animate-slowFloat rounded-full border border-line bg-panel px-3.5 py-2.5 text-[13px] font-black shadow-soft [animation-delay:0.7s] max-md:hidden">Firebase</span>
      <span className="absolute bottom-[30px] left-3 z-[4] animate-slowFloat rounded-full border border-line bg-panel px-3.5 py-2.5 text-[13px] font-black shadow-soft [animation-delay:1.4s] max-md:hidden">Animated UI</span>

      <div className="absolute left-1 top-[76px] z-[4] flex animate-slowFloat items-center gap-2.5 rounded-[18px] border border-line bg-panel px-3.5 py-2.5 text-xs font-extrabold shadow-soft [animation-delay:1s] max-md:hidden">
        <span className="h-2 w-2 rounded-full bg-primary" /><p>clean components</p>
      </div>
      <div className="absolute bottom-[74px] right-[18px] z-[4] flex animate-slowFloat items-center gap-2.5 rounded-[18px] border border-line bg-panel px-3.5 py-2.5 text-xs font-extrabold shadow-soft [animation-delay:2s] max-md:hidden">
        <span className="h-2 w-2 rounded-full bg-primary" /><p>smooth motion</p>
      </div>

      <div ref={tiltRef} className="absolute inset-0 grid place-items-center [transform:perspective(900px)] [will-change:transform] max-md:!transform-none">
        <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-[48px] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(248,250,252,0.74))] shadow-[0_30px_90px_rgba(79,70,229,0.16)] animate-cardFloat [backface-visibility:hidden] before:absolute before:h-[92%] before:w-[92%] before:rounded-full before:bg-indigo-100/40 before:content-[''] after:absolute after:h-[78%] after:w-[78%] after:rounded-full after:border-[16px] after:border-white/80 after:shadow-[0_12px_36px_rgba(79,70,229,0.08)_inset] after:content-[''] dark:border-white/10 dark:bg-[linear-gradient(145deg,rgba(15,23,42,0.94),rgba(17,24,39,0.74))] dark:shadow-[0_34px_92px_rgba(0,0,0,0.4)] dark:before:bg-primary/10 dark:after:border-white/10">
          <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[42px]" />
          <div className="relative z-[2] grid h-[188px] w-[188px] animate-faceFloat place-items-center rounded-full max-sm:h-[150px] max-sm:w-[150px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="h-full w-full">
              <circle cx="100" cy="100" r="90" fill="#E0E7FF" />
              <circle cx="100" cy="80" r="32" fill="#6366F1" fillOpacity="0.2" stroke="#4F46E5" strokeWidth="1.5" />
              <circle cx="100" cy="80" r="14" fill="#4F46E5" fillOpacity="0.7" />
              <path d="M70 130 Q100 155 130 130" stroke="#4F46E5" strokeWidth="5" fill="none" strokeLinecap="round" />
              <rect x="85" y="68" width="8" height="8" rx="4" fill="#1E1B4B" />
              <rect x="107" y="68" width="8" height="8" rx="4" fill="#1E1B4B" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
