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
      ? "bg-[#0d0d0d] text-white hover:bg-[#2b0e3d] shadow-md shadow-purple-950/10"
      : "bg-white text-[#0d0d0d] border border-[#0d0d0d]/15 hover:bg-[#F1EBF5]/70";

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
      className={`inline-flex items-center gap-1.5 text-[#0d0d0d] font-medium tracking-tight hover:opacity-60 transition-opacity ${className}`}
    >
      {children}
    </Link>
  );
}
