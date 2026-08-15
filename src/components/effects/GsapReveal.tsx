"use client";

import { useLayoutEffect, useRef, createElement, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GsapReveal({
  children,
  className,
  stagger = 0.08,
  y = 24,
  start = "top 85%",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  start?: string;
  as?: "div" | "ul";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = Array.from(el.children);
    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [stagger, y, start]);

  /* eslint-disable react-hooks/refs */
  return createElement(as, { ref, className }, children);
  /* eslint-enable react-hooks/refs */
}
