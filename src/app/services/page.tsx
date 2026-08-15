import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import BlurText from "@/components/effects/BlurText";
import ServiceQuickNav from "@/components/services/ServiceQuickNav";
import GsapReveal from "@/components/effects/GsapReveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Eight specialisations, one team. Brand identity, digital marketing, web design, creative production, influencer marketing, events, PR and on-ground activation.",
};

const SERVICES = [
  {
    num: "01",
    key: "The Mark",
    title: "Brand Identity and Design",
    desc: "Your brand is not just a logo. It is the first thing people feel before they read a single word. We build identities so distinct, so intentional, that recognition happens before the name does.",
    bullets: [
      "Logo Design and Brand Systems",
      "Visual Identity and Typography",
      "Brand Strategy and Positioning",
      "Packaging and Rebranding",
    ],
  },
  {
    num: "02",
    key: "The Signal",
    title: "Digital Marketing and Performance",
    desc: "Every channel. Every rupee placed with intent. We do not run campaigns for the sake of activity. We engineer outcomes, reach, consideration, conversion, with the precision of people who have done this at scale.",
    bullets: [
      "Meta and Google Advertising",
      "Search Engine Marketing and SEO",
      "Performance Campaigns and Analytics",
      "Conversion and Growth Strategy",
    ],
  },
  {
    num: "03",
    key: "The Space",
    title: "Web Design and Development",
    desc: "A website is not a brochure. It is the single most important sales asset your brand owns. We design and build digital experiences that reflect the full weight of your brand and turn every interaction into an opportunity.",
    bullets: [
      "Website Design and Development",
      "Landing Pages and E-commerce",
      "UI and UX Strategy",
      "Website Management",
    ],
  },
  {
    num: "04",
    key: "The Frame",
    title: "Creative Production and Films",
    desc: "The best ideas die in execution. The worst ideas survive because of it. We take concepts from brief to screen with the kind of craft and clarity that makes your audience feel something. Not just see something.",
    bullets: [
      "Brand Films and Commercial Production",
      "Concept Development and Direction",
      "Social Content and Reels",
      "Photography and Product Visuals",
    ],
  },
  {
    num: "05",
    key: "The Voice",
    title: "Influencer and Creator Marketing",
    desc: "Trust is not bought. It is borrowed from people your audience already believes in. We identify, brief and deploy the right creators to put your brand in front of the right eyes at exactly the right moment.",
    bullets: [
      "Influencer Strategy and Identification",
      "Micro Macro and Mega Campaigns",
      "Creator Content and Collaboration",
      "Campaign Tracking and Outcomes",
    ],
  },
  {
    num: "06",
    key: "The Stage",
    title: "Event Management",
    desc: "Digital makes people aware. Live makes them believers. We design, produce and deliver experiences so well-considered that people are talking about them before they have even left the room.",
    bullets: [
      "Corporate Events and Conferences",
      "Brand and Product Launch Events",
      "Press Conferences and Media Events",
      "End to End Production",
    ],
  },
  {
    num: "07",
    key: "The Noise",
    title: "PR and Media Relations",
    desc: "The right story, in the right publication, at the right moment, is worth more than any ad you will ever buy. We earn coverage in print, digital, broadcast and beyond that positions your brand as the only serious choice.",
    bullets: [
      "Press and Media Outreach",
      "Publication Placements",
      "Crisis and Reputation Management",
      "Broadcast and Spokesperson Coordination",
    ],
  },
  {
    num: "08",
    key: "The Presence",
    title: "On Ground Activation",
    desc: "The most powerful marketing still happens in person. We take your brand off screens and into spaces, building real moments with real people that no algorithm can replicate.",
    bullets: [
      "Retail and Trade Activations",
      "City and Mall Activations",
      "Pop-Up Experiences",
      "Outdoor and Transit Campaigns",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <BlurText
            as="h1"
            text="You Name It. We Do It."
            className="text-5xl sm:text-6xl lg:text-[76px] font-normal tracking-tight text-black leading-[1.08] mb-8 max-w-3xl"
            direction="top"
            delay={70}
          />
          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl text-[#6B6470] leading-relaxed max-w-2xl mb-12">
              Eight specialisations. One team. Every single thing your brand needs to grow,
              stand out and stay impossible to ignore.
            </p>
            <ServiceQuickNav items={SERVICES.map((s) => s.key)} />
          </Reveal>
        </div>
      </section>

      {SERVICES.map((service, i) => (
        <section
          key={service.num}
          id={`service-${service.num}`}
          className={`scroll-mt-24 ${i % 2 === 0 ? "bg-[#FAF8FC]" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16 border-t border-[#F1EBF5]">
            <Reveal>
              <div className="grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-16 items-start">
                <div className="flex items-baseline gap-4 lg:flex-col lg:gap-2 shrink-0">
                  <span className="text-sm text-[#9C8FAD] tabular-nums">{service.num}</span>
                  <p className="text-sm text-[#8B2FC9] uppercase tracking-wide">
                    {service.key}
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl tracking-tight font-normal text-black mb-5">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg text-[#6B6470] leading-relaxed max-w-2xl mb-8">
                    {service.desc}
                  </p>
                  <GsapReveal
                    as="ul"
                    className="grid sm:grid-cols-2 gap-x-8 gap-y-3"
                    stagger={0.05}
                    y={10}
                    start="top 92%"
                  >
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-3 text-sm sm:text-base text-[#0d0d0d]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B2FC9] shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </GsapReveal>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-[#0d0d0d] text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl tracking-tight font-normal leading-[1.1] mb-3">
              Not sure which service you need?
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-10">
              Most of our best clients take all of them.
            </p>
            <CtaButton href="/#one-desk" variant="outline">
              Explore One Desk <span aria-hidden="true">→</span>
            </CtaButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
