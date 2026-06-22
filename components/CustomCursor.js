"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Only run on devices with a precise pointer (real mouse), and respect reduced motion.
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) {
      document.documentElement.classList.add("no-custom-cursor");
      return;
    }

    const dot = dotRef.current;
    const circle = circleRef.current;
    if (!dot || !circle) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let circleX = mouseX;
    let circleY = mouseY;
    let hovering = false;
    let visible = false;
    let frameId;

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        circle.style.opacity = "1";
      }
      // Event delegation: any interactive element (incl. ones added later) enlarges the ring.
      const interactive = event.target.closest("a, button, input, textarea, select, [role='button'], [role='tab'], article");
      hovering = Boolean(interactive);
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      circle.style.opacity = "0";
    };

    const onDown = () => circle.classList.add("is-press");
    const onUp = () => circle.classList.remove("is-press");

    const render = () => {
      // Two-speed lerp: dot tracks fast, ring trails softly — gives the "buttery" feel.
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;
      circleX += (mouseX - circleX) * 0.16;
      circleY += (mouseY - circleY) * 0.16;

      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      const scale = hovering ? 1.55 : 1;
      circle.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) translate(-50%, -50%) scale(${scale})`;
      circle.classList.toggle("is-hover", hovering);

      frameId = requestAnimationFrame(render);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frameId);
      } else {
        frameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("visibilitychange", onVisibility);
    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} />
      <div ref={circleRef} className="cursor-circle" style={{ opacity: 0 }} />
    </>
  );
}
