"use client";

import {
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";

const ROW_HEIGHT = 44;

export default function OptionWheel({
  items,
  defaultSelected = 0,
  textColor = "#6B6470",
  activeColor = "#0d0d0d",
  side = "left",
  fontSize = 1.5,
  spacing = 1.2,
  tilt = 6,
  blur = 2,
  fade = 0.22,
  smoothing = 220,
  inset = 60,
  loop = false,
  draggable = true,
  onChange,
}: {
  items: string[];
  defaultSelected?: number;
  textColor?: string;
  activeColor?: string;
  side?: "left" | "right";
  fontSize?: number;
  spacing?: number;
  tilt?: number;
  blur?: number;
  fade?: number;
  smoothing?: number;
  inset?: number;
  loop?: boolean;
  draggable?: boolean;
  onChange?: (index: number, item: string) => void;
}) {
  const [index, setIndex] = useState(defaultSelected);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStartY = useRef(0);

  const itemHeight = ROW_HEIGHT * spacing;

  const select = (next: number) => {
    const clamped = loop
      ? ((next % items.length) + items.length) % items.length
      : Math.min(Math.max(next, 0), items.length - 1);
    setIndex(clamped);
    onChange?.(clamped, items[clamped]);
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggable) return;
    setDragging(true);
    dragStartY.current = e.clientY;
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggable || !dragging) return;
    setDragOffset(e.clientY - dragStartY.current);
  };

  const endDrag = () => {
    if (!draggable || !dragging) return;
    const steps = Math.round(-dragOffset / itemHeight);
    setDragging(false);
    setDragOffset(0);
    if (steps !== 0) select(index + steps);
  };

  const onWheel = (e: ReactWheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.deltaY > 8) select(index + 1);
    else if (e.deltaY < -8) select(index - 1);
  };

  const floatIndex = index - dragOffset / itemHeight;

  return (
    <div
      className="relative select-none overflow-hidden w-full max-w-xs sm:max-w-sm"
      style={{
        height: itemHeight * 5,
        paddingTop: inset / 2,
        paddingBottom: inset / 2,
        perspective: 600,
        cursor: draggable ? (dragging ? "grabbing" : "grab") : "default",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onWheel={onWheel}
    >
      <div
        className="absolute top-1/2 h-px w-full pointer-events-none"
        style={{ backgroundColor: `${activeColor}22` }}
      />
      <div
        className="relative h-full"
        style={{ transformStyle: "preserve-3d", textAlign: side === "left" ? "left" : "right" }}
      >
        {items.map((item, i) => {
          const diff = i - floatIndex;
          const isActive = Math.round(floatIndex) === i;
          const opacity = Math.max(0.15, 1 - Math.abs(diff) * fade);
          const blurPx = Math.min(6, Math.abs(diff) * blur);

          return (
            <button
              key={item}
              type="button"
              onClick={() => !dragging && select(i)}
              className="absolute inset-x-0 flex items-center px-2"
              style={{
                top: "50%",
                height: itemHeight,
                marginTop: -itemHeight / 2,
                justifyContent: side === "left" ? "flex-start" : "flex-end",
                transform: `translateY(${diff * itemHeight}px) rotateX(${diff * -tilt}deg)`,
                transition: dragging ? "none" : `transform ${smoothing}ms ease, opacity ${smoothing}ms ease, filter ${smoothing}ms ease`,
                opacity,
                filter: `blur(${blurPx}px)`,
                color: isActive ? activeColor : textColor,
                fontSize: `${isActive ? fontSize : fontSize * 0.82}rem`,
                fontWeight: isActive ? 500 : 400,
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
