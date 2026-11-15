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
import { HoverHighlightText } from "@/components/HoverHighlightText";

const milestones = ["2022", "2023", "2024", "2025", "2026"];
// Progress values track where the animated bar reaches the 2023 and 2024 markers.
const currentMilestoneProgress = 0.29;
const nextMilestoneProgress = 0.53;

function TimelineMarker({
  progress,
  threshold,
  active,
}: {
  progress: MotionValue<number>;
  threshold: number;
  active: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const fillProgress = useTransform(
    progress,
    [threshold, Math.min(1, threshold + 0.16)],
    [0, 1],
  );
  const fill = useTransform(fillProgress, [0, 1], ["#080A08", "#B7FF3C"]);

  return (
    <motion.span
      aria-hidden="true"
      className={`absolute left-1/2 top-0 size-4 -translate-x-1/2 rounded-full border-2 ${
        active
          ? "border-[#B7FF3C] shadow-[0_0_0_4px_rgba(183,255,60,0.1),0_0_14px_rgba(183,255,60,0.45)]"
          : "border-[#778071] shadow-[0_0_0_3px_rgba(255,255,255,0.025)]"
      }`}
      style={{
        backgroundColor: reduceMotion ? (active ? "#B7FF3C" : "#080A08") : fill,
      }}
    />
  );
}

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 38%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });
  const lineScale = reduceMotion ? 1 : progress;
  const roleReveal = useTransform(
    progress,
    [currentMilestoneProgress - 0.01, currentMilestoneProgress, nextMilestoneProgress, nextMilestoneProgress + 0.01],
    [0, 1, 1, 0],
  );
  const roleOpacity = roleReveal;
  const roleY = useTransform(roleReveal, [0, 1], [22, 0]);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="dark relative isolate scroll-mt-24 overflow-hidden bg-[#080A08] px-5 py-20 text-[#F5F7F2] sm:px-8 sm:py-24 lg:px-10 lg:py-28"
      style={{
        backgroundImage:
          "linear-gradient(rgba(183, 255, 60, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(183, 255, 60, 0.035) 1px, transparent 1px), radial-gradient(ellipse at 20% 45%, rgba(183, 255, 60, 0.045), transparent 60%)",
        backgroundSize: "140px 140px, 140px 140px, auto",
      }}
    >
      <div className="mx-auto max-w-[92rem]">
        <h2
          id="experience-heading"
          className="-translate-y-2 mb-14 bg-[linear-gradient(180deg,#A6ADA3_0%,#F5F7F2_100%)] bg-clip-text text-center font-[family-name:var(--font-kanit)] text-5xl font-bold uppercase tracking-[0.12em] text-transparent sm:mb-16 sm:text-6xl md:text-7xl"
        >
          Experience
        </h2>
        <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-20">
        <div className="flex min-w-0 flex-col justify-between lg:min-h-[620px] lg:py-2">
          <div>
            <p className="mb-8 flex items-center gap-4 font-sans text-sm font-medium uppercase tracking-[0.08em] text-[#B6C795]">
              <span aria-hidden="true" className="h-[3px] w-8 rounded-full bg-[#B7FF3C] shadow-[0_0_8px_rgba(183,255,60,.55)]" />
              My Experience <span className="text-[#B7FF3C]">/</span> 01
            </p>
              <h2 className="max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl xl:text-7xl">
                A journey
                <br />
                in building
                <br />
                <span className="text-[#B6D79A]">what’s next.</span>
              </h2>
          </div>

          <div ref={timelineRef} className="-translate-x-5 -translate-y-4 mt-12 lg:mt-16">
            <div className="relative overflow-visible">
              <span
                aria-hidden="true"
                className="absolute left-[6%] right-[11%] top-[6px] h-1 rounded-full bg-[#394336]"
              />
              <motion.span
                aria-hidden="true"
                className="absolute left-[6%] right-[11%] top-[6px] h-1 origin-left rounded-full bg-[#B7FF3C] shadow-[0_0_8px_rgba(183,255,60,0.55)]"
                style={{ scaleX: lineScale }}
              />
              <ol className="grid grid-cols-5" aria-label="Career timeline">
                {milestones.map((year, index) => {
                  const isCurrentRole = year === "2023";
                  return (
                    <li
                      key={year}
                      className="relative flex flex-col items-center pt-5"
                    >
                      <TimelineMarker
                        progress={progress}
                        threshold={index / milestones.length}
                        active={isCurrentRole}
                      />
                      <span
                        className={`font-mono text-[11px] tabular-nums tracking-[0.12em] ${
                          isCurrentRole ? "font-semibold text-[#B7FF3C]" : "text-[#849080]"
                        }`}
                      >
                        {year}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>

            <motion.article
              className="relative ml-[30%] mt-5 border-l border-[#526044] pl-5 sm:pl-7"
              style={reduceMotion ? undefined : { opacity: roleOpacity, y: roleY }}
            >
              <span
                aria-hidden="true"
                className="absolute -top-5 left-[-1px] h-5 w-px bg-[#B7FF3C]/70"
              />
              <h3 className="font-serif text-xl tracking-tight sm:text-2xl">
                Android Development <em className="font-normal">Intern</em>
              </h3>
              <p className="mt-1 text-base text-[#C4CABE] sm:text-lg">GlacierSoft Technology</p>
              <p className="mt-1 text-sm tracking-[0.08em] text-[#929B8D] sm:text-base">
                may 2023 - jun 2023
              </p>
              
            </motion.article>
          </div>
        </div>

        <div className="flex min-w-0 items-center justify-center py-4 lg:min-h-[620px]">
          <article className="w-full max-w-[48rem] rounded-[28px] bg-[#F7F8F1] p-6 text-[#10130D] shadow-[0_24px_80px_rgba(0,0,0,.28)] sm:rounded-[32px] sm:p-8 lg:p-9">
            <header className="flex flex-wrap items-center gap-4">
              <span className="grid size-[68px] shrink-0 place-items-center rounded-2xl bg-[#D9E9A9] text-[#20330D] sm:size-[76px]">
                <svg aria-hidden="true" viewBox="0 0 48 48" className="size-10" fill="currentColor">
                  <path d="M13.5 17.2 10 11.1l1.5-.9 3.7 6.4a19.4 19.4 0 0 1 17.6 0l3.7-6.4 1.5.9-3.5 6.1c4.1 2.6 6.8 6.7 7.2 11.4H6.3c.4-4.7 3.1-8.8 7.2-11.4ZM17 24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm14 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 30h34v3a3 3 0 0 1-3 3h-1v5a2 2 0 0 1-4 0v-5H15v5a2 2 0 0 1-4 0v-5h-1a3 3 0 0 1-3-3v-3Z" />
                </svg>
              </span>
              <div className="min-w-[180px] flex-1">
                <h3 className="text-xl font-bold leading-tight tracking-[-0.03em] sm:text-2xl">Android Developer Intern</h3>
                <p className="mt-1 text-sm font-medium sm:text-base">GlacierSoft Technology <span aria-hidden="true" className="ml-1 text-[#365719]">↗</span></p>
              </div>
              <p className="rounded-full bg-[#E7ECD9] px-4 py-2 text-xs font-medium text-[#35402A] sm:text-sm">▣ &nbsp;May 2023 – Jun 2023</p>
            </header>

            <p className="mt-6 text-base leading-7 sm:text-lg sm:leading-7">
              Worked on an Android ride-hailing application with real-time location tracking, navigation, and scalable backend integrations.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[["100+", "REST APIs"], ["50+", "Active Users"], ["1,000+", "User Workload (Designed)"]].map(([value, label]) => (
                <div key={label} className="rounded-xl bg-[#E9EDDF] px-4 py-3">
                  <p className="text-xl font-bold sm:text-2xl">{value}</p>
                  <p className="mt-0.5 text-sm text-[#41483A]">{label}</p>
                </div>
              ))}
            </div>

            <div className="my-6 h-px bg-[#D5D9CC]" />
            <ul className="space-y-3 text-sm leading-6 sm:text-base sm:leading-6">
              <li className="flex gap-3"><span aria-hidden="true" className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#4E741D] text-xs font-bold text-white">✓</span><HoverHighlightText text="Integrated 100+ REST API endpoints for ride management, user operations, and real-time data synchronization." /></li>
              <li className="flex gap-3"><span aria-hidden="true" className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#4E741D] text-xs font-bold text-white">✓</span><HoverHighlightText text="Implemented JWT authentication and role-based authorization for both riders and customers." /></li>
              <li className="flex gap-3"><span aria-hidden="true" className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#4E741D] text-xs font-bold text-white">✓</span><HoverHighlightText text="Built responsive Android interfaces for rider and customer applications." /></li>
              <li className="flex gap-3"><span aria-hidden="true" className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#4E741D] text-xs font-bold text-white">✓</span><HoverHighlightText text="Optimized Google Maps integration and background location updates for smoother navigation." /></li>
            </ul>
            <div className="my-6 h-px bg-[#D5D9CC]" />
            <ul className="flex flex-wrap gap-2.5" aria-label="Technologies">
              {["Java","Jetpack Compose", "Android SDK", "REST APIs", "JWT", "Google Maps SDK"].map((technology) => (
                <li key={technology} className="rounded-full bg-[#E7ECD9] px-3.5 py-2 text-xs font-medium text-[#26351A] sm:text-sm">{technology}</li>
              ))}
            </ul>
          </article>
        </div>
        </div>
      </div>
    </section>
  );
}
