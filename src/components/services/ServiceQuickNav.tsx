"use client";

import OptionWheel from "@/components/effects/OptionWheel";

export default function ServiceQuickNav({ items }: { items: string[] }) {
  const scrollToService = (index: number) => {
    const num = String(index + 1).padStart(2, "0");
    document.getElementById(`service-${num}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
      <p className="text-xs uppercase tracking-wide text-[#738273] shrink-0">
        Scroll to jump
      </p>
      <OptionWheel
        items={items}
        defaultSelected={0}
        textColor="#5A635A"
        activeColor="#1C2E1E"
        side="left"
        fontSize={1.6}
        spacing={1.1}
        tilt={8}
        blur={2}
        fade={0.25}
        smoothing={200}
        inset={40}
        draggable
        onChange={(index) => scrollToService(index)}
      />
    </div>
  );
}
