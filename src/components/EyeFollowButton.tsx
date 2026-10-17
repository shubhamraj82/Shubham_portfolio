"use client";

import { useState, type PointerEvent as ReactPointerEvent } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function EyeFollowButton() {
  const [gaze, setGaze] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const followPointer = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2);
    const y = (event.clientY - (bounds.top + bounds.height / 2)) / (bounds.height / 2);
    setGaze({
      x: Math.max(-1, Math.min(1, x)) * 4,
      y: Math.max(-1, Math.min(1, y)) * 3,
    });
  };

  return (
    <motion.a
      href="#contact"
      onPointerMove={followPointer}
      onPointerLeave={() => setGaze({ x: 0, y: 0 })}
      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.025 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      aria-label="Let's talk — go to contact section"
      className="group fixed right-5 top-5 z-[60] inline-flex size-11 shrink-0 items-center justify-center gap-2.5 rounded-full border border-white/20 bg-[#11171a] px-0 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,.42)] transition-colors hover:border-blue-300/70 hover:bg-[#17232c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080d10] sm:right-7 sm:top-7 sm:h-11 sm:w-auto sm:justify-start sm:px-3.5 lg:h-12"
    >
      <span aria-hidden="true" className="flex items-center gap-1">
        {[0, 1].map((eye) => (
          <span
            key={eye}
            className="grid h-[19px] w-[23px] place-items-center overflow-hidden rounded-[50%] border border-blue-100/80 bg-blue-50 shadow-[0_0_12px_rgba(147,197,253,.28)]"
          >
            <motion.span
              animate={reduceMotion ? { x: 0, y: 0 } : gaze}
              transition={{ type: "spring", stiffness: 360, damping: 24, mass: 0.35 }}
              className="size-[9px] rounded-full bg-[#10243a] shadow-[inset_0_1px_2px_rgba(0,0,0,.5)]"
            />
          </span>
        ))}
      </span>
      <span className="hidden sm:inline">Let&apos;s talk</span>
    </motion.a>
  );
}
