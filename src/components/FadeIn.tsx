"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  delayMs?: number;
};

let fadeInObserver: IntersectionObserver | null = null;

function getFadeInObserver() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }

  fadeInObserver ??= new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target as HTMLElement;
        element.classList.remove("opacity-0", "translate-y-4");
        element.classList.add("opacity-100", "translate-y-0");
        observer.unobserve(element);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
  );

  return fadeInObserver;
}

export default function FadeIn({
  children,
  className = "",
  as = "div",
  delayMs = 0,
}: Props) {
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      el.classList.remove("opacity-0", "translate-y-4");
      el.classList.add("opacity-100", "translate-y-0");
    };

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const observer = getFadeInObserver();

    if (reduceMotion || !observer) {
      show();
      return;
    }

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const Comp: React.ElementType = as;
  return React.createElement(
    Comp,
    {
      ref,
      className: [
        "transform transition-[opacity,transform] duration-700 ease-out opacity-0 translate-y-4",
        className,
      ].join(" "),
      style: { transitionDelay: `${delayMs}ms` },
    },
    children
  );
}
