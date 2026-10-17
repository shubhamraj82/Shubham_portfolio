"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Code2, ExternalLink, Medal, Trophy } from "lucide-react";

const scrollSpring = {
  stiffness: 90,
  damping: 24,
  restDelta: 0.001,
} as const;

const achievements = [
  {
    title: "4th place — Stack Hack 2.0",
    description:
      "Finished 4th in the Stack Hack 2.0 Hackathon, competing with 200+ participants.",
    Icon: Trophy,
    actionLabel: "Show GitHub",
    ActionIcon: Code2,
    secondaryActionLabel: "Show certificate",
    SecondaryActionIcon: ExternalLink,
    side: "left",
  },
  {
    title: "Global rank 1480 — LeetCode Weekly Contest",
    description: "Earned a global rank of 1480 in a LeetCode Weekly Contest.",
    Icon: Medal,
    actionLabel: "View LeetCode profile",
    ActionIcon: ExternalLink,
    secondaryActionLabel: undefined,
    SecondaryActionIcon: undefined,
    side: "right",
  },
  {
    title: "600+ DSA problems solved",
    description:
      "Solved 600+ data structures and algorithms problems across LeetCode and GeeksforGeeks, placing in the top 3%.",
    Icon: Code2,
    actionLabel: "View LeetCode profile",
    ActionIcon: ExternalLink,
    secondaryActionLabel: undefined,
    SecondaryActionIcon: undefined,
    side: "left",
  },
] as const;

function TimelineMilestone({
  title,
  description,
  Icon,
  actionLabel,
  ActionIcon,
  secondaryActionLabel,
  SecondaryActionIcon,
  side,
  progress,
  threshold,
}: (typeof achievements)[number] & {
  progress: MotionValue<number>;
  threshold: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const left = side === "left";
  const appear = useTransform(
    progress,
    [Math.max(0, threshold - 0.16), threshold],
    [0, 1],
  );
  const smoothAppear = useSpring(appear, scrollSpring);
  const cardX = useTransform(smoothAppear, [0, 1], [left ? -32 : 32, 0]);
  const cardOpacity = useTransform(smoothAppear, [0, 0.72], [0, 1]);
  const pathLength = useTransform(smoothAppear, [0.28, 1], [0, 1]);
  const pathOpacity = useTransform(smoothAppear, [0.22, 0.7], [0.35, 1]);
  const nodeFill = useTransform(
    smoothAppear,
    [0.55, 1],
    ["#475569", "#60a5fa"],
  );
  const pathStyle = prefersReducedMotion
    ? { pathLength: 1, opacity: 1 }
    : { pathLength, opacity: pathOpacity };

  return (
    <div className="relative grid grid-cols-[32px_minmax(0,1fr)] items-center md:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)]">
      <svg
        aria-hidden="true"
        viewBox="0 0 32 14"
        preserveAspectRatio="none"
        className={`pointer-events-none absolute left-3 top-1/2 z-[3] h-3.5 w-5 -translate-y-1/2 overflow-visible drop-shadow-[0_0_5px_rgba(59,130,246,.8)] md:h-4 md:w-12 ${left ? "md:left-[calc(50%-48px)]" : "md:left-1/2"}`}
      >
        <motion.path
          d={
            left
              ? "M0 7 H5 L11 2 L17 12 L23 2 L27 7 H32"
              : "M32 7 H27 L23 2 L17 12 L11 2 L5 7 H0"
          }
          className="hidden md:block"
          fill="none"
          stroke="#7db7ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={pathStyle}
        />
        <motion.path
          d="M32 7 H27 L23 2 L17 12 L11 2 L5 7 H0"
          className="md:hidden"
          fill="none"
          stroke="#7db7ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={pathStyle}
        />
      </svg>
      <motion.span
        aria-hidden="true"
        className="absolute left-3 top-1/2 z-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#080d10] md:left-1/2"
        style={
          prefersReducedMotion
            ? {
                backgroundColor: "#60a5fa",
                boxShadow:
                  "0 0 0 5px rgba(59,130,246,.18), 0 0 18px rgba(59,130,246,.6)",
              }
            : {
                backgroundColor: nodeFill,
                boxShadow:
                  "0 0 0 5px rgba(59,130,246,.18), 0 0 18px rgba(59,130,246,.6)",
              }
        }
      />

      <motion.article
        style={
          prefersReducedMotion ? undefined : { opacity: cardOpacity, x: cardX }
        }
        className={`relative col-start-2 flex min-h-40 items-start gap-4 rounded-2xl border border-blue-300/15 bg-[#10171d] px-5 py-5 shadow-[0_14px_40px_rgba(0,0,0,.28)] transition-colors hover:border-blue-300/35 sm:gap-5 sm:px-7 sm:py-6 md:min-h-44 ${left ? "md:col-start-1 md:row-start-1 md:flex-row-reverse md:text-right" : "md:col-start-3 md:row-start-1"}`}
      >
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-blue-300 sm:size-12"
        >
          <Icon className="size-5 sm:size-[22px]" strokeWidth={1.8} />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug tracking-[-0.025em] text-white sm:text-xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-[15px]">
            {description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-blue-300/30 bg-blue-400/10 px-3.5 text-xs font-semibold text-blue-200 transition-colors hover:border-blue-200/60 hover:bg-blue-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10171d]"
            >
              {actionLabel}
              <ActionIcon aria-hidden="true" className="size-3.5" />
            </button>
            {secondaryActionLabel && SecondaryActionIcon ? (
              <button
                type="button"
                className="inline-flex h-9 items-center gap-2 rounded-lg border border-blue-300/30 bg-blue-400/10 px-3.5 text-xs font-semibold text-blue-200 transition-colors hover:border-blue-200/60 hover:bg-blue-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10171d]"
              >
                {secondaryActionLabel}
                <SecondaryActionIcon aria-hidden="true" className="size-3.5" />
              </button>
            ) : null}
          </div>
        </div>
      </motion.article>
      <div
        className="hidden md:block md:col-start-2 md:row-start-1"
        aria-hidden="true"
      />
    </div>
  );
}

export default function AchievementSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 68%", "end 32%"],
  });
  const scaleY = useSpring(scrollYProgress, scrollSpring);

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative isolate overflow-hidden bg-[#080d10] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(116,145,151,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(116,145,151,.045) 1px, transparent 1px), radial-gradient(ellipse at 50% 45%, rgba(18,39,42,.22), transparent 70%)",
          backgroundSize: "160px 160px, 160px 160px, auto",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <header className="mb-16 text-center sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-300 sm:text-sm">
            My Journey
          </p>
          <h2
            id="achievements-heading"
            className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl"
          >
            Achievements
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            A few milestones along the way, shaped by curiosity, collaboration,
            and a love of building.
          </p>
        </header>

        <div ref={timelineRef} className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-3 top-5 w-[11px] -translate-x-1/2 rounded-full border border-blue-300/25 bg-[#06152b] shadow-[0_0_18px_rgba(59,130,246,.24),0_0_5px_rgba(147,197,253,.2),2px_0_5px_rgba(0,0,0,.55)] md:left-1/2"
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-5 left-3 top-5 z-[1] w-[7px] -translate-x-1/2 origin-top rounded-full border-x border-blue-100/30 bg-gradient-to-r from-blue-500 via-blue-100 to-blue-400 shadow-[0_0_22px_rgba(59,130,246,.76),0_0_9px_rgba(191,219,254,.62)] before:absolute before:inset-y-0 before:left-[1px] before:w-px before:bg-white/80 after:absolute after:inset-y-0 after:right-[1px] after:w-px after:bg-blue-200/65 md:left-1/2"
            style={prefersReducedMotion ? { scaleY: 1 } : { scaleY }}
          />
          <div className="relative z-[2] space-y-7 sm:space-y-9 md:space-y-12">
            {achievements.map((achievement, index) => (
              <TimelineMilestone
                key={achievement.title}
                {...achievement}
                progress={scrollYProgress}
                threshold={0.1 + (index / (achievements.length - 1)) * 0.8}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
