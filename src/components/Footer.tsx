import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "One Desk", href: "/#one-desk" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit">
              <Logo className="h-7 w-auto" />
              <span className="text-2xl tracking-tight font-medium select-none">
                Benchbox Media
              </span>
            </Link>
            <p className="text-3xl sm:text-4xl tracking-tight font-normal leading-[1.1] max-w-lg">
              You name it. We do it.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#0d0d0d] px-7 py-3.5 text-sm sm:text-base font-medium tracking-tight hover:bg-[#F1EBF5] transition-colors w-fit"
          >
            Start a Project
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/15">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-wide mb-4">Navigate</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:opacity-70 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/50 text-xs uppercase tracking-wide mb-4">Contact</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href="mailto:marketing@benchboxmedia.com"
                  className="hover:opacity-70 transition-opacity"
                >
                  marketing@benchboxmedia.com
                </a>
              </li>
              <li>
                <a href="tel:+916361772547" className="hover:opacity-70 transition-opacity">
                  +91 6361 772 547
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-2">
            <p className="text-white/50 text-xs uppercase tracking-wide mb-4">Studio</p>
            <p className="text-sm text-white/85 max-w-xs">Indiranagar, Bengaluru</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-10 mt-10 border-t border-white/15 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Benchbox Media. All rights reserved.</p>
          <p>www.benchboxmedia.com</p>
        </div>
      </div>
    </footer>
  );
}
