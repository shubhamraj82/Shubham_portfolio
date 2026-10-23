"use client";

import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface FlameButtonProps {
  text?: string;
  showArrow?: boolean;
  height?: number;
  textColor?: string;
  borderColor?: string;
  href?: string;
  onClick?: () => void;
}

export const FlameButton: React.FC<FlameButtonProps> = ({
  text = "LET’S BUILD TOGETHER",
  showArrow = true,
  height = 68,
  textColor = "#F5F7F2",
  borderColor = "#343633",
  href = "#projects",
  onClick,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [width, setWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [displayOpacity, setDisplayOpacity] = useState(0);
  const targetOpacityRef = useRef(0);

  useEffect(() => {
    const measure = () => {
      if (wrapperRef.current) setWidth(wrapperRef.current.getBoundingClientRect().width);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    setMouseX(event.clientX - rect.left);
  };

  const safeMouseX = mouseX ?? width / 2;
  const normX = width ? safeMouseX / width : 0.5;
  const isRightSide = normX >= 0.5;
  const edgeProximity = Math.pow(Math.min(1, Math.abs(normX - 0.5) * 2), 1.6);
  const targetOpacity = isHovering ? edgeProximity : 0;

  useEffect(() => {
    targetOpacityRef.current = targetOpacity;
  }, [targetOpacity]);

  useEffect(() => {
    let rafId = 0;
    const tick = () => {
      setDisplayOpacity((prev) => {
        const target = targetOpacityRef.current;
        const diff = target - prev;
        if (Math.abs(diff) < 0.002) return target;
        return prev + diff * 0.15;
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const hot = "220, 255, 180";
  const core = "183, 255, 60";
  const edge = "120, 164, 40";

  const handleClick = () => {
    if (href?.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
    onClick?.();
  };

  return (
    <div
      ref={wrapperRef}
      className="group relative isolate inline-block select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        style={{
          inset: "-8px",
          borderRadius: 9999,
          background: `radial-gradient(ellipse 34% 72% at ${normX * 100}% 50%, rgba(${hot}, 0.75) 0%, rgba(${core}, 0.58) 34%, rgba(${edge}, 0.2) 62%, transparent 82%)`,
          filter: "blur(9px) saturate(1.1)",
          opacity: displayOpacity * 0.8,
        }}
      />
      <button
        type="button"
        onClick={handleClick}
        style={{
          height,
          border: `1px solid ${borderColor}`,
          borderRadius: 9999,
          outline: "none",
          WebkitTapHighlightColor: "transparent",
          background: "linear-gradient(180deg, #101110 0%, #080908 100%)",
        }}
        className="relative z-10 flex cursor-pointer select-none items-center justify-between gap-3 overflow-hidden rounded-full pl-5 pr-2 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors duration-300 hover:bg-[#111311] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B7FF3C] sm:gap-7 sm:pl-9 sm:pr-2.5 sm:text-base sm:tracking-[0.14em]"
        onFocus={() => setIsHovering(true)}
        onBlur={() => setIsHovering(false)}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-px z-0 rounded-full transition-opacity duration-200"
          style={{
            opacity: displayOpacity * 0.58,
            filter: "blur(3px) saturate(1.15)",
            background: `radial-gradient(ellipse 18% 120% at ${normX * 100}% 50%, rgba(255,255,255,0.6) 0%, rgba(${hot},0.8) 12%, rgba(${core},0.7) 34%, rgba(${edge},0.24) 62%, transparent 100%)`,
          }}
        />
        <span className="relative z-10 whitespace-nowrap" style={{ color: textColor }}>{text}</span>
        {showArrow && (
          <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-[#B7FF3C] text-[#080A08] shadow-[0_0_18px_rgba(183,255,60,0.24)] transition-transform duration-300 group-hover:scale-[1.04] sm:size-14">
            <ArrowRight aria-hidden="true" className="size-6 sm:size-7" strokeWidth={2.4} />
          </span>
        )}
      </button>
    </div>
  );
};

export default FlameButton;
