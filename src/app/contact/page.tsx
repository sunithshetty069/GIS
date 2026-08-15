"use client";

import Reveal from "@/components/Reveal";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

const SERVICE_PILLS = [
  "The Mark",
  "The Signal",
  "The Space",
  "The Frame",
  "The Voice",
  "The Stage",
  "The Noise",
  "The Presence",
  "One Desk",
];

export default function ContactPage() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ContactHero onConfirmServices={scrollToForm} />

      {/* Service pills reference row */}
      <section className="bg-white pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="flex flex-wrap gap-3">
            {SERVICE_PILLS.map((pill) => (
              <span
                key={pill}
                className="px-4 py-2 rounded-full text-xs sm:text-sm bg-[#FAFBF9] border border-[#F1F3F1] text-[#5A635A]"
              >
                {pill}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#FAFBF9] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl tracking-tight font-normal text-black mb-3">
              Let&apos;s Build Something The World Will Notice.
            </h2>
            <p className="text-[#5A635A] text-base sm:text-lg max-w-xl">
              You found us. That is already the first smart decision. The second is
              starting the conversation.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Details */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="grid sm:grid-cols-3 gap-8">
            <div className="border-t border-[#F1F3F1] pt-6">
              <p className="text-xs text-[#738273] uppercase tracking-wide mb-2">Email</p>
              <a
                href="mailto:marketing@benchboxmedia.com"
                className="text-lg text-[#1C2E1E] hover:opacity-60 transition-opacity"
              >
                marketing@benchboxmedia.com
              </a>
            </div>
            <div className="border-t border-[#F1F3F1] pt-6">
              <p className="text-xs text-[#738273] uppercase tracking-wide mb-2">Phone</p>
              <a
                href="tel:+916361772547"
                className="text-lg text-[#1C2E1E] hover:opacity-60 transition-opacity"
              >
                +91 6361 772 547
              </a>
            </div>
            <div className="border-t border-[#F1F3F1] pt-6">
              <p className="text-xs text-[#738273] uppercase tracking-wide mb-2">
                Location
              </p>
              <p className="text-lg text-[#1C2E1E]">Indiranagar, Bengaluru</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#1C2E1E] text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal leading-[1.08] mb-4">
              Were You Looking for Us?
            </h2>
            <p className="text-lg sm:text-xl text-white/70">
              Good. Most brands find us too late.
            </p>
            <p className="text-white/50 mt-6 text-sm">benchboxmedia.com</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
