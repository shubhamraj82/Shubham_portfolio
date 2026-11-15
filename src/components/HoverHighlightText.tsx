"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type HoverHighlightTextProps = {
  text: string;
  className?: string;
};

const highlightColors = [
  "#F4B942", // Soft peach
  "#E8EE83", // Pastel lemon
  "#91D68B", // Mint green
  "#65D6E8", // Sky cyan
  "#A494F2", // Lavender
  "#E99CEB", // Soft pink
  "#C99BEA", // Light purple
  "#A8D5B4", // Sage green
  "#F0A18F", // Dusty peach
  "#EAA4BE", // Baby pink
  "#9BC9D9", // Powder blue
  "#C5C5E8", // Lavender mist
  "#E8C17A", // Light apricot
  "#A5D8B8", // Pale mint
  "#CE9BE8", // Orchid pastel
  "#E39BCF", // Light mauve
  "#7FADEB", // Periwinkle blue
  "#F0A878", // Apricot
  "#8FC8B5", // Seafoam
  "#D2C3CC", // Soft gray pink
];

export function HoverHighlightText({
  text,
  className = "",
}: HoverHighlightTextProps) {
  const [activeWord, setActiveWord] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const words = text.split(/\s+/);

  return (
    <span className={className} onPointerLeave={() => setActiveWord(null)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <motion.span
            onPointerEnter={() => setActiveWord(index)}
            animate={{
              backgroundColor:
                activeWord === index
                  ? highlightColors[index % highlightColors.length]
                  : "#00000000",
            }}
            transition={reduceMotion ? { duration: 0 } : { type: "tween", duration: 0.18, ease: "easeOut" }}
            className="inline rounded-[0.22em] px-[0.12em] py-[0.04em] text-black"
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
