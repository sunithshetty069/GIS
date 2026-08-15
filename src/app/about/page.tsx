import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import BlurText from "@/components/effects/BlurText";

export const metadata: Metadata = {
  title: "About",
  description:
    "Six years. Every sector. A creative force built for bold brands — Benchbox Media is the only call our clients need to make.",
};

const DIFFERENTIATORS = [
  {
    title: "Creativity That Converts",
    desc: "Every idea we build exists for one reason. To make your brand win. Not to win awards. Not to fill decks. To actually move the needle where it counts.",
  },
  {
    title: "Obsessed With Excellence",
    desc: "From the first brief to the final delivery, the standard we hold ourselves to has one setting. The highest one in the room.",
  },
  {
    title: "Cross Industry Authority",
    desc: "Six years. Every sector. Entertainment, healthcare, real estate, politics, retail, finance. We bring the full weight of that experience to every engagement.",
  },
  {
    title: "Partners Not Vendors",
    desc: "When you brief us, our entire attention goes on your business. We do not clock out. We do not handoff. We stay until the work is exactly where it needs to be.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <BlurText
            as="h1"
            text="A Creative Force. Built for Bold Brands."
            className="text-5xl sm:text-6xl lg:text-[76px] font-normal tracking-tight text-black leading-[1.08] max-w-3xl"
            direction="top"
            delay={70}
          />
        </div>
      </section>

      <section className="bg-[#FAFBF9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <Reveal className="text-[#5A635A] text-base sm:text-lg leading-relaxed space-y-5">
              <p>
                The best brands in the world do not have five agencies. They have one team
                that understands everything. That is a rare thing to find. We built Benchbox
                to be exactly that.
              </p>
              <p>
                We do not divide your brand across departments and hope it holds together.
                We hold it together ourselves.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="text-[#5A635A] text-base sm:text-lg leading-relaxed space-y-5">
              <p>
                From the first idea to the last impression, strategy, identity, content,
                performance, presence, it moves as one. Because it is made by one.
              </p>
              <p>This is not a service offering. This is a different way of building brands.</p>
              <p className="text-black font-medium">
                Six years in. Still here. Still the only call our clients need to make.
              </p>
              <p className="text-black font-medium">Benchbox Media. You name it. We do it.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-14">
            <h2 className="text-4xl sm:text-5xl tracking-tight font-normal leading-[1.08] text-black">
              What Sets Us Apart
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-x-10">
            {DIFFERENTIATORS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="py-8 border-t border-[#F1F3F1]">
                  <p className="text-xl sm:text-2xl tracking-tight text-black mb-3">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base text-[#5A635A] leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1C2E1E] text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-normal leading-[1.15] mb-3 max-w-2xl mx-auto">
              It does not matter where you start.
              <br />
              What matters is who builds you.
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-10">
              When you are ready. We are here.
            </p>
            <CtaButton href="/contact" variant="outline">
              Start a Project <span aria-hidden="true">→</span>
            </CtaButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
