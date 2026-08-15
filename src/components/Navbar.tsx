"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "One Desk", href: "/#one-desk" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const close = () => setIsMobileMenuOpen(false);

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const nav = navRef.current;
    if (!nav) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = e.currentTarget.getBoundingClientRect();
    setHovered({ left: linkRect.left - navRect.left, width: linkRect.width });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-transparent">
        <Link href="/" onClick={close} className="flex flex-row items-center gap-3">
          <Logo className="h-6 sm:h-7 w-auto" />
          <span className="text-[21px] sm:text-[26px] tracking-tight text-black font-medium select-none">
            Benchbox Media
          </span>
        </Link>

        <nav
          ref={navRef}
          onMouseLeave={() => setHovered(null)}
          className="relative hidden md:flex flex-row items-center text-[23px] text-black"
        >
          {/* fluid glass highlight — follows the hovered link */}
          <AnimatePresence>
            {hovered && (
              <motion.span
                aria-hidden="true"
                className="absolute top-1/2 h-10 rounded-full bg-gradient-to-r from-[#8B2FC9]/10 to-[#E91E8C]/10 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] border border-[#8B2FC9]/15 pointer-events-none -z-10"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  left: hovered.left - 12,
                  width: hovered.width + 24,
                  y: "-50%",
                }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </AnimatePresence>

          {NAV_LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <Link
                href={link.href}
                onMouseEnter={handleHover}
                className="relative hover:opacity-70 transition-opacity px-1"
              >
                {link.label}
              </Link>
              {i < NAV_LINKS.length - 1 && <span className="opacity-40">,&nbsp;</span>}
            </span>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:block text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Start a Project
        </Link>

        <button
          type="button"
          className="md:hidden relative z-20 flex flex-col justify-center items-center gap-[6px] w-10 h-10"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            className="text-3xl tracking-tight text-black hover:opacity-60 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={close}
          className="text-3xl tracking-tight text-black underline underline-offset-4 hover:opacity-60 transition-opacity"
        >
          Start a Project
        </Link>
      </div>
    </>
  );
}
