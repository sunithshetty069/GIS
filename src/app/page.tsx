import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { ArrowLink, CtaButton } from "@/components/CtaButton";
import CurvedLoop from "@/components/effects/CurvedLoop";
import GsapReveal from "@/components/effects/GsapReveal";

const STATS = [
  { value: "6+", label: "Years in the Game" },
  { value: "100+", label: "Happy Clients" },
  { value: "500+", label: "Campaigns Delivered" },
  { value: "30+", label: "Brands Built" },
];

const SERVICES = [
  { num: "01", name: "The Mark", desc: "Brands built to be instantly recognised" },
  { num: "02", name: "The Signal", desc: "Precision marketing that actually reaches people" },
  { num: "03", name: "The Space", desc: "Digital experiences that work as hard as you do" },
  { num: "04", name: "The Frame", desc: "Content so compelling they stop scrolling" },
  { num: "05", name: "The Voice", desc: "Trusted faces telling your brand story" },
  { num: "06", name: "The Stage", desc: "Live experiences people do not forget" },
  { num: "07", name: "The Noise", desc: "Your name in the right rooms at the right time" },
  { num: "08", name: "The Presence", desc: "Your brand exactly where your audience stands" },
];

const ONE_DESK_PHASES = [
  {
    num: "01",
    title: "Brand Audit and Strategy",
    desc: "Week one and two. We study your brand, competitors and audience. Full marketing strategy delivered.",
  },
  {
    num: "02",
    title: "Full Execution Live",
    desc: "Week three onwards. Social, ads, content, PR, website. Everything live. One team. All channels.",
  },
  {
    num: "03",
    title: "Report and Optimise",
    desc: "Monthly. Performance report and strategy review. Every rupee accounted for.",
  },
];

const CLIENTS = [
  "IKEA",
  "Adidas",
  "HP",
  "MG Motors",
  "Zomato",
  "PVR",
  "INOX",
  "Cult.fit",
  "Max",
  "Duroflex",
  "Plum",
  "Leap Club",
  "The Souled Store",
  "XYXX",
  "Bloom",
  "River",
  "Altius Hospitals",
  "RVR Healthcare",
  "BJP",
  "Furnishka",
];

export default function Home() {
  return (
    <>
      <Hero />

      <Marquee items={CLIENTS} />

      {/* Stats */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <GsapReveal className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8" stagger={0.1}>
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl sm:text-5xl tracking-tight font-normal text-[#0d0d0d] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base text-[#6B6470]">{stat.label}</p>
              </div>
            ))}
          </GsapReveal>
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-[#FAF8FC] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl tracking-tight font-normal leading-[1.08] text-black">
                We Are Benchbox Media.
                <br />A Creative Force Built for Bold Brands.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-[#6B6470] text-base sm:text-lg leading-relaxed space-y-5">
                <p>
                  The best brands in the world do not have five agencies. They have one
                  team that understands everything. That is a rare thing to find. We built
                  Benchbox to be exactly that.
                </p>
                <p>
                  From the first idea to the last impression, strategy, identity, content,
                  performance, presence, it moves as one. Because it is made by one.
                </p>
                <p>
                  Six years in. Still here. Still the only call our clients need to make.
                </p>
                <ArrowLink href="/about" className="pt-2">
                  Our Story <span aria-hidden="true">→</span>
                </ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services snippet */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-14">
            <h2 className="text-4xl sm:text-5xl tracking-tight font-normal leading-[1.08] text-black">
              You Name It. We Do It.
            </h2>
          </Reveal>

          <GsapReveal className="grid sm:grid-cols-2 gap-x-10" stagger={0.06}>
            {SERVICES.map((service) => (
              <div
                key={service.num}
                className="flex items-baseline gap-5 py-6 border-t border-[#F1EBF5]"
              >
                <span className="text-sm text-[#9C8FAD] tabular-nums">{service.num}</span>
                <div>
                  <p className="text-xl sm:text-2xl tracking-tight text-black mb-1">
                    {service.name}
                  </p>
                  <p className="text-sm sm:text-base text-[#6B6470]">{service.desc}</p>
                </div>
              </div>
            ))}
          </GsapReveal>

          <Reveal delay={0.1} className="mt-10">
            <ArrowLink href="/services">
              See All Services <span aria-hidden="true">→</span>
            </ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* One Desk */}
      <section id="one-desk" className="bg-[#0d0d0d] text-white py-20 sm:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-[#d9a6e8] text-xs uppercase tracking-wide mb-4">
              ★ Flagship Product
            </p>
            <h2 className="text-4xl sm:text-5xl tracking-tight font-normal leading-[1.08] mb-6">
              One Desk.
              <br />
              Your entire marketing department. Outsourced.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl space-y-5 mb-16">
              <p>
                Most brands are dealing with five different vendors. One for design. One
                for social. One for ads. One for PR. One for website. Nobody is talking to
                each other. Nothing is consistent. Results are all over the place.
              </p>
              <p>One Desk changes all of that.</p>
              <p>
                One Benchbox team handles everything. Strategy, execution, reporting. All
                under one roof. One point of contact. One shared goal.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-8 mb-14">
            {ONE_DESK_PHASES.map((phase, i) => (
              <Reveal key={phase.num} delay={i * 0.1}>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-xs text-white/50 mb-3 tracking-wide">
                    Phase {phase.num}
                  </p>
                  <p className="text-xl tracking-tight mb-3">{phase.title}</p>
                  <p className="text-sm text-white/70 leading-relaxed">{phase.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <CtaButton href="/contact" variant="outline">
              Start with One Desk <span aria-hidden="true">→</span>
            </CtaButton>
          </Reveal>
        </div>
      </section>

      {/* Work snippet */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl tracking-tight font-normal leading-[1.08] text-black mb-4">
              Work That Moves the Needle.
            </h2>
            <p className="text-[#6B6470] text-base sm:text-lg mb-10">
              Brand Films &middot; Designs &middot; Websites &middot; Campaigns
            </p>
            <ArrowLink href="/work">
              View All Work <span aria-hidden="true">→</span>
            </ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* Curved drag marquee */}
      <div className="bg-white text-[#0d0d0d] h-[26vw] max-h-64 min-h-40 overflow-hidden">
        <CurvedLoop
          marqueeText="You Name It ✦ We Do It ✦ "
          speed={1.4}
          curveAmount={260}
          className="fill-[#8B2FC9]"
        />
      </div>

      {/* Clients */}
      <section className="bg-[#F1EBF5] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl tracking-tight font-normal text-black">
              Brands That Trusted Us.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-x-3 gap-y-4">
              {CLIENTS.map((client) => (
                <span
                  key={client}
                  className="text-base sm:text-lg text-[#0d0d0d]/70 px-4 py-2 bg-white rounded-full"
                >
                  {client}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal leading-[1.08] text-black mb-4">
              Were You Looking for Us?
            </h2>
            <p className="text-lg sm:text-xl text-[#6B6470] mb-10">
              You found us. Let us get to work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 text-[#0d0d0d]">
              <a
                href="mailto:marketing@benchboxmedia.com"
                className="hover:opacity-60 transition-opacity"
              >
                marketing@benchboxmedia.com
              </a>
              <a href="tel:+916361772547" className="hover:opacity-60 transition-opacity">
                +91 6361 772 547
              </a>
            </div>
            <CtaButton href="/contact">
              Start a Project <span aria-hidden="true">→</span>
            </CtaButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
