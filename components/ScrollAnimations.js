"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal:not(.is-visible)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: reveal everything immediately, skip the transition.
    if (reduced) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      // Trigger slightly before the element fully enters so motion feels anticipatory.
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}
