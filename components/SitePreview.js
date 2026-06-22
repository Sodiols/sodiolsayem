"use client";

import { useEffect, useRef, useState } from "react";

export default function SitePreview({ preview, onClose }) {
  const closeRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!preview) return;
    setLoaded(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => closeRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [preview, onClose]);

  if (!preview) return null;

  return (
    <div onClick={onClose}
      className="fixed inset-0 z-[9998] flex animate-backdropIn items-center justify-center bg-slate-950/70 p-3 backdrop-blur-md md:p-6">
      <div role="dialog" aria-modal="true" aria-label={`${preview.title} preview`} onClick={(e) => e.stopPropagation()}
        className="flex h-[88vh] w-[min(1100px,100%)] animate-previewIn flex-col overflow-hidden rounded-[18px] border border-line bg-panel shadow-[0_30px_90px_rgba(0,0,0,0.35)] md:h-[min(720px,86vh)] md:rounded-[26px]">
        <div className="flex min-h-[58px] items-center justify-between gap-4 bg-slate-900 px-3 py-3 font-black text-white md:min-h-[64px] md:px-[18px]">
          <div className="min-w-0">
            <span>{preview.title}</span>
            <small className="mt-0.5 block max-w-[560px] truncate text-[11px] font-semibold text-slate-300 max-md:hidden">{preview.site}</small>
          </div>
          <div className="flex items-center gap-2">
            <a href={preview.site} target="_blank" rel="noreferrer"
              className="rounded-full bg-white/10 px-3.5 py-2.5 text-[13px] font-black text-white max-md:hidden">Open live</a>
            <button ref={closeRef} onClick={onClose} aria-label="Close preview"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900">
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        </div>
        <div className="relative min-h-0 flex-1 bg-white">
          {!loaded && (
            <div aria-hidden="true" className="absolute inset-0 grid place-content-center justify-items-center gap-3.5 bg-panel text-sm font-bold text-muted">
              <span className="h-[34px] w-[34px] animate-spin360 rounded-full border-[3px] border-primary/20 border-t-primary" />
              <p>Loading live site…</p>
            </div>
          )}
          <iframe src={preview.site} title={`${preview.title} website preview`} onLoad={() => setLoaded(true)}
            style={{ opacity: loaded ? 1 : 0 }} className="h-full w-full border-none bg-white transition-opacity duration-400" />
        </div>
      </div>
    </div>
  );
}
