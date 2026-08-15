import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import WorkTabs from "@/components/work/WorkTabs";
import BlurText from "@/components/effects/BlurText";
import ScrollVelocity from "@/components/effects/ScrollVelocity";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Six years. Every sector. Brand films, designs, websites and campaigns that move the needle.",
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-white pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <BlurText
            as="h1"
            text="Work That Moves the Needle."
            className="text-5xl sm:text-6xl lg:text-[76px] font-normal tracking-tight text-black leading-[1.08] mb-8 max-w-3xl"
            direction="top"
            delay={70}
          />
          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-[#5A635A] leading-relaxed max-w-2xl">
              Six years. Every sector. Here is proof of what we are capable of.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="bg-[#1C2E1E] text-white py-8 sm:py-10 overflow-hidden">
        <ScrollVelocity
          texts={["BRAND FILMS · DESIGNS · ", "WEBSITES · CAMPAIGNS · "]}
          velocity={40}
          className="text-4xl sm:text-6xl tracking-tight px-4"
        />
      </div>

      <section className="bg-white pb-24 sm:pb-32 pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <WorkTabs />
          </Reveal>
        </div>
      </section>
    </>
  );
}
