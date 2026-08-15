"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const SERVICE_OPTIONS = [
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

export default function ServicePills({
  onConfirm,
}: {
  onConfirm?: (services: string[]) => void;
}) {
  const [services, setServices] = useState<string[]>([]);

  const toggle = (option: string) => {
    setServices((prev) =>
      prev.includes(option) ? prev.filter((s) => s !== option) : [...prev, option]
    );
  };

  return (
    <div>
      <h3 className="text-2xl font-medium tracking-tight mb-2 text-black">
        What sort of service?
      </h3>
      <p className="opacity-85 text-[#9C8FAD] mb-8">Select all that apply</p>

      <div className="flex flex-wrap gap-3">
        {SERVICE_OPTIONS.map((option) => {
          const active = services.includes(option);
          return (
            <motion.button
              key={option}
              type="button"
              onClick={() => toggle(option)}
              whileTap={{ scale: 0.96 }}
              aria-pressed={active}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base transition-colors ${
                active
                  ? "bg-[#0d0d0d] text-white shadow-md shadow-purple-950/10 transform"
                  : "bg-white text-[#0d0d0d] border border-[#F1EBF5] hover:bg-[#F1EBF5]/55"
              }`}
            >
              <AnimatePresence initial={false}>
                {active && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-flex"
                  >
                    <Check size={16} strokeWidth={2.5} />
                  </motion.span>
                )}
              </AnimatePresence>
              {option}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {services.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="italic text-xs mt-6 text-[#6B6470]"
          >
            Please click to select services above.
          </motion.p>
        ) : (
          <motion.div
            key="active"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden mt-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF8FC] border border-[#F1EBF5] rounded-2xl px-6 py-5">
              <p className="text-sm text-[#0d0d0d]">
                Ready to inquire about:{" "}
                <span className="font-medium">{services.join(", ")}</span>
              </p>
              <button
                type="button"
                onClick={() => onConfirm?.(services)}
                className="flex items-center gap-1.5 text-[#8B2FC9] uppercase text-xs font-medium tracking-wide hover:opacity-70 transition-opacity shrink-0"
              >
                Let&apos;s Go
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
