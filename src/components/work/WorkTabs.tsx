"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Project = { title: string; subtitle: string };

const CATEGORIES: { label: string; projects: Project[] }[] = [
  {
    label: "Brand Films",
    projects: [
      { title: "Humans of Zomato", subtitle: "Content Series" },
      { title: "Adidas X Cult", subtitle: "Brand Collaboration Film" },
      { title: "Kantara Premiere Show", subtitle: "Event Film and Coverage" },
    ],
  },
  {
    label: "Designs",
    projects: [
      { title: "Altius Hospitals", subtitle: "Brand Identity" },
      { title: "RVR Healthcare", subtitle: "Brand Building and PR" },
      { title: "GK Builders", subtitle: "Social Media Creatives" },
    ],
  },
  {
    label: "Websites",
    projects: [
      { title: "RVR Healthcare", subtitle: "rvrhealthcare.in" },
      { title: "Hotel Amaravathi", subtitle: "hotelamaravathi.in" },
      { title: "Aashi Constructions", subtitle: "aashigroups.in" },
    ],
  },
  {
    label: "Campaigns",
    projects: [
      { title: "IKEA India", subtitle: "Digital Campaign" },
      { title: "BJP", subtitle: "Political Brand Campaign" },
      { title: "Arogya By RVR", subtitle: "Full Campaign" },
    ],
  },
];

export default function WorkTabs() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12">
        {CATEGORIES.map((cat, i) => {
          const isActive = i === active;
          return (
            <motion.button
              key={cat.label}
              type="button"
              onClick={() => setActive(i)}
              whileTap={{ scale: 0.96 }}
              aria-pressed={isActive}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base transition-colors ${
                isActive
                  ? "bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/5"
                  : "bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55"
              }`}
            >
              {cat.label}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={CATEGORIES[active].label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CATEGORIES[active].projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#FAFBF9] border border-[#F1F3F1] rounded-2xl p-8 aspect-[4/3] flex flex-col justify-end hover:bg-[#F1F3F1]/60 transition-colors"
            >
              <p className="text-xl sm:text-2xl tracking-tight text-black mb-1">
                {project.title}
              </p>
              <p className="text-sm text-[#5A635A]">{project.subtitle}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
