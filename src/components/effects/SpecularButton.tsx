"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { motion } from "framer-motion";

const SIZE_MAP: Record<string, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

export default function SpecularButton({
  children,
  size = "md",
  radius = 999,
  tint = "#ffffff",
  tintOpacity = 0,
  textColor = "#ffffff",
  lineColor = "#ffffff",
  baseColor = "#1C2E1E",
  intensity = 1,
  shineSize = 60,
  shineFade = 40,
  thickness = 1,
  followMouse = true,
  proximity = 250,
  onClick,
  className = "",
  type = "button",
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  followMouse?: boolean;
  proximity?: number;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!followMouse || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
    setActive(dist < proximity);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden font-medium tracking-tight transition-colors duration-300 ${SIZE_MAP[size]} ${className}`}
      style={{
        borderRadius: radius,
        color: textColor,
        backgroundColor: baseColor,
        border: `${thickness}px solid ${lineColor}33`,
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: active ? intensity : 0,
          background: `radial-gradient(${shineSize}% ${shineSize}% at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) ${shineFade}%)`,
        }}
      />
      {tintOpacity > 0 && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: tint, opacity: tintOpacity }}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
