export default function Marquee({ items }: { items: string[] }) {
  const loopItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden border-y border-[#F1EBF5] bg-white py-4 sm:py-5">
      <div className="flex w-max animate-marquee items-center gap-8 sm:gap-12 whitespace-nowrap">
        {loopItems.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 sm:gap-12 text-lg sm:text-2xl tracking-tight text-[#0d0d0d]"
          >
            {item}
            <span className="text-[#9C8FAD]" aria-hidden="true">
              &#10033;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
