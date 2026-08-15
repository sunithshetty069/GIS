"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BackgroundVideo from "@/components/BackgroundVideo";
import SpecularButton from "@/components/effects/SpecularButton";
import { useTypewriter } from "@/hooks/useTypewriter";

const HEADLINE = "Were You Looking for Us?\nGood. Most brands find us too late.";

export default function Hero() {
  const { displayed, done } = useTypewriter(HEADLINE, 32, 500);
  const router = useRouter();

  return (
    <div className="relative bg-white flex flex-col lg:block lg:min-h-screen">
      <BackgroundVideo />

      <div className="relative z-10 flex flex-col order-first lg:order-none w-full bg-white lg:bg-transparent pb-8 lg:pb-0 lg:min-h-screen">
        <main className="w-full max-w-7xl mx-auto px-6 pt-28 sm:pt-36 pb-12 flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight text-black leading-[1.08] mb-8 select-none w-full max-w-3xl whitespace-pre-wrap">
              {displayed}
              {!done && (
                <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
              )}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg md:text-xl text-[#6B6470] leading-relaxed font-normal mb-10 max-w-xl">
              A full spectrum creative and marketing agency built for brands that refuse to
              be ordinary. You name it. We do it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6"
          >
            <SpecularButton
              size="lg"
              radius={999}
              baseColor="#0d0d0d"
              textColor="#ffffff"
              lineColor="#ffffff"
              intensity={0.9}
              shineSize={70}
              shineFade={45}
              proximity={220}
              onClick={() => router.push("/contact")}
            >
              Start a Project
            </SpecularButton>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-[#0d0d0d] font-medium tracking-tight hover:opacity-60 transition-opacity"
            >
              View Our Work <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
