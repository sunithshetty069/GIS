import Link from "next/link";
import type { ReactNode } from "react";

export function CtaButton({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm sm:text-base font-medium tracking-tight transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-[#1C2E1E] text-white hover:bg-[#25412a] shadow-md shadow-emerald-950/5"
      : "bg-white text-[#1C2E1E] border border-[#1C2E1E]/15 hover:bg-[#F1F3F1]/70";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 text-[#1C2E1E] font-medium tracking-tight hover:opacity-60 transition-opacity ${className}`}
    >
      {children}
    </Link>
  );
}
