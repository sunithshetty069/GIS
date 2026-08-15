"use client";

import { motion, type Easing } from "framer-motion";
import { useEffect, useMemo, useRef, useState, createElement } from "react";

type Snapshot = Record<string, string | number>;

const buildKeyframes = (from: Snapshot, steps: Snapshot[]) => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, (string | number)[]> = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

export default function BlurText({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "easeOut" as Easing,
  onAnimationComplete,
  stepDuration = 0.35,
  as = "p",
}: {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Snapshot;
  animationTo?: Snapshot[];
  easing?: Easing;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  as?: "p" | "h1" | "h2" | "h3";
}) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo<Snapshot>(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo<Snapshot[]>(
    () => [
      { filter: "blur(5px)", opacity: 0.5, y: direction === "top" ? 5 : -5 },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  const spans = elements.map((segment, index) => {
    const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

    return (
      <motion.span
        className="inline-block will-change-[transform,filter,opacity]"
        key={index}
        initial={fromSnapshot as unknown as import("framer-motion").TargetAndTransition}
        animate={
          (inView ? animateKeyframes : fromSnapshot) as unknown as import("framer-motion").TargetAndTransition
        }
        transition={{
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        }}
        onAnimationComplete={
          index === elements.length - 1 ? onAnimationComplete : undefined
        }
      >
        {segment === "" ? " " : segment}
        {animateBy === "words" && index < elements.length - 1 ? " " : ""}
      </motion.span>
    );
  });

  /* eslint-disable react-hooks/refs */
  return createElement(
    as,
    { ref, className, style: { display: "flex", flexWrap: "wrap" } },
    spans
  );
  /* eslint-enable react-hooks/refs */
}
