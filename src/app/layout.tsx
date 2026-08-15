import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Benchbox Media | You Name It. We Do It.",
    template: "%s | Benchbox Media",
  },
  description:
    "A full spectrum creative and marketing agency built for brands that refuse to be ordinary. Brand identity, digital marketing, web design, content, PR, events and on-ground activation — all under one roof.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="relative bg-white text-neutral-900 font-sans selection:bg-[#FCE4F2] selection:text-[#0d0d0d] antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
