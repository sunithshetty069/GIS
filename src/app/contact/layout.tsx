import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's build something the world will notice. Start a project with Benchbox Media — Indiranagar, Bengaluru.",
};

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return children;
}
