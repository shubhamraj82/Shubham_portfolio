"use client";

import { useId, useRef, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Globe2,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const filters = ["Web", "Mobile", "AI"] as const;
type ProjectCategory = (typeof filters)[number];
type Project = {
  name: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  previewImage?: string;
  demoLabel: string;
};

const projects: Project[] = [
  {
    name: "Agentsurf",
    description:
      "A multi-organizational AI-powered browser automation platform for building, executing, and monitoring intelligent workflows. Features a visual node-based canvas to design automation pipelines, AI-driven browser interactions, web data extraction, and integrated communication workflows. Built with organization-level workspace isolation, durable background execution, automatic retries, real-time monitoring, and collaborative workflow management.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "PostgreSQL", "Browserbase", "Liveblocks", "Trigger", "Resend", "Polar"],
    category: "AI",
    previewImage: "/images/Neon Workflow Editor at Night.png",
    demoLabel: "Live Demo",
  },
  {
    name: "Resonance",
    description:
      "An AI-powered, multi-tenant text-to-speech and voice cloning platform that transforms written content into expressive, natural-sounding audio using customizable voice profiles. Features organization-specific voice libraries, custom voice uploads, configurable speech generation parameters, and an intuitive audio playback experience. Built with secure organization-level data isolation, subscription-based access and usage tracking, authenticated audio storage, and reliable generation workflows.",
    technologies: ["Next.js", "TypeScript","Tailwind CSS","Shadcn/UI", "PostgreSQL","tRPC", "Prisma", "Clerk", "Cloudflare R2", "ChatterBox-TTS","Polar","Sentry"],
    category: "Web",
    previewImage: "/images/Resonance AI Dashboard Interface.png",
    demoLabel: "Live Demo",
  },
  {
    name: "Requestly",
    description:
      "A collaborative API workspace with team workspaces, clear request organization, and AI assistance to speed up testing and debugging.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS","Shadcn/UI", "Better Auth", "PostgreSQL", "Prisma", "tRPC","Zustand"],
    category: "AI",
    previewImage: "/images/Neon AI-Powered API Workspace.png",
    demoLabel: "View Details",
  },

];

function StackedProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const start = index / Math.max(total - 1, 1);
  const end = (index + 1) / Math.max(total - 1, 1);
  const scale = useTransform(progress, [start, end], [1, targetScale]);

  return (
    <motion.article
      style={{ scale, top: `calc(6rem + ${index * 28}px)`, zIndex: index + 1 }}
      className="sticky mx-auto h-[85vh] min-h-[520px] w-full max-w-5xl origin-top rounded-[40px] border-2 border-[#28321E] bg-[#080A08] p-4 shadow-[0_22px_70px_rgba(0,0,0,0.45)] sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      aria-labelledby={`project-${project.name.replaceAll(" ", "-")}`}
    >
      {project.previewImage ? (
        <div className="relative h-[42vh] min-h-[250px] max-h-[420px] overflow-hidden rounded-[26px] border border-[#28321E] bg-[#121612] sm:rounded-[34px] md:rounded-[42px]">
          {/* Local project previews are supplied in public/images. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.previewImage}
            alt={`${project.name} project preview`}
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
      ) : (
        <div
          role="img"
          aria-label={`${project.name} image placeholder`}
          className="flex h-[42vh] min-h-[250px] max-h-[420px] items-end rounded-[26px] border border-dashed border-[#28321E] bg-[radial-gradient(ellipse_at_75%_15%,rgba(183,255,60,0.08),transparent_42%),linear-gradient(135deg,#121612,#080A08)] p-4 text-xs uppercase tracking-[0.22em] text-[#A6ADA3] sm:rounded-[34px] sm:p-6 md:rounded-[42px]"
        >
          Project image placeholder
        </div>
      )}

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto pt-4 sm:pt-5 md:pt-6">
        <div className="flex items-center justify-between gap-3">
          <h3 id={`project-${project.name.replaceAll(" ", "-")}`} className="text-xl font-semibold tracking-tight text-[#F5F7F2] sm:text-2xl md:text-3xl">
            {project.name}
          </h3>
          <a
            href="#projects"
            aria-label={`Open ${project.name} project`}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[#28321E] text-[#A6ADA3] transition hover:border-[#28321E]/60 hover:text-[#F5F7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#28321E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A08]"
          >
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#A6ADA3] sm:text-[15px] md:mt-4 md:text-base">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5" aria-label={`${project.name} technologies and tools`}>
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="inline-flex items-center gap-2 rounded-full border border-[#B7FF3C]/20 bg-[#121612] px-3 py-1.5 text-[10px] font-medium leading-none tracking-[0.02em] text-[#D9E2D1] transition-colors duration-200 hover:border-[#B7FF3C]/50 hover:bg-[#1B2416] hover:text-[#F5F7F2] sm:px-3.5 sm:text-xs"
            >
              <span aria-hidden="true" className="size-1.5 rounded-full bg-[#B7FF3C]/70" />
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap justify-center gap-2.5 pt-10 sm:gap-3 sm:pt-12">
          <a href="#projects" className="group inline-flex rounded-full bg-[#4B7112] pb-1.5 shadow-[0_0_18px_rgba(183,255,60,0.16)] transition-shadow duration-200 hover:shadow-[0_0_26px_rgba(183,255,60,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B7FF3C]">
            <span className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#B7FF3C] px-4 font-sans text-sm font-semibold text-[#080A08] shadow-[inset_0_2px_0_#E5FFB8,inset_0_-3px_0_#689817] transition-[transform,background-color,box-shadow] duration-150 group-hover:-translate-y-0.5 group-active:translate-y-1 group-active:bg-[#F78900] group-active:shadow-[inset_0_1px_0_#FFE5C4,inset_0_-3px_0_#915100]">
              <ExternalLink aria-hidden="true" className="size-3.5" /> {project.demoLabel}
            </span>
          </a>
          <a href="#projects" aria-label={`${project.name} GitHub repository`} className="group inline-flex rounded-full bg-[#4B7112] pb-1.5 shadow-[0_0_18px_rgba(183,255,60,0.16)] transition-shadow duration-200 hover:shadow-[0_0_26px_rgba(183,255,60,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B7FF3C]">
            <span className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#B7FF3C] px-4 font-sans text-sm font-semibold text-[#080A08] shadow-[inset_0_2px_0_#E5FFB8,inset_0_-3px_0_#689817] transition-[transform,background-color,box-shadow] duration-150 group-hover:-translate-y-0.5 group-active:translate-y-1 group-active:bg-[#F78900] group-active:shadow-[inset_0_1px_0_#FFE5C4,inset_0_-3px_0_#915100]">
              <Code2 aria-hidden="true" className="size-3.5" /> GitHub
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectStack({ items }: { items: Project[] }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  return (
    <div ref={container} className="relative mt-9 pb-20 sm:mt-12 sm:pb-24">
      {items.map((project, index) => (
        <StackedProjectCard
          key={project.name}
          project={project}
          index={index}
          total={items.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("Web");
  const activePillId = useId();
  const reduceMotion = useReducedMotion();
  const visibleProjects = projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="dark relative z-10 -mt-10 scroll-mt-8 rounded-t-[40px] bg-[#080A08] px-4 pb-10 pt-14 font-[family-name:var(--font-kanit)] text-[#F5F7F2] sm:-mt-12 sm:rounded-t-[50px] sm:px-7 sm:pt-16 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(183, 255, 60, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(183, 255, 60, 0.035) 1px, transparent 1px), radial-gradient(ellipse at 50% 45%, rgba(183, 255, 60, 0.045), transparent 70%)",
        backgroundSize: "160px 160px, 160px 160px, auto",
      }}
    >
      <div className="mx-auto w-full max-w-[92rem]">
        <header className="text-center">
          <h2 className="bg-[linear-gradient(180deg,#A6ADA3_0%,#F5F7F2_100%)] bg-clip-text text-5xl font-bold uppercase tracking-[0.12em] text-transparent sm:text-6xl md:text-7xl">
            Project
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#A6ADA3] sm:mt-4 sm:text-base">
            A selection of digital products, experiences, and experiments built with care.
          </p>
        </header>

        <Tabs value={activeFilter} onValueChange={(value) => setActiveFilter(value as ProjectCategory)} className="mt-7 items-center sm:mt-9">
          <TabsList aria-label="Project categories" className="h-14 rounded-full border border-white/20 bg-black/85 p-1.5 shadow-[0_12px_36px_rgba(0,0,0,.32)] backdrop-blur-xl sm:h-16">
            {filters.map((filter) => (
              <TabsTrigger key={filter} value={filter} className="relative isolate min-w-[88px] rounded-full border-0 bg-transparent px-6 text-sm font-semibold text-white/65 transition-colors hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white data-active:bg-transparent data-active:text-black sm:min-w-[108px] sm:px-9 sm:text-base">
                {activeFilter === filter && (
                  <motion.span
                    aria-hidden="true"
                    layoutId={reduceMotion ? undefined : `${activePillId}-selected-filter`}
                    transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 -z-10 rounded-full border border-white bg-white shadow-[0_3px_12px_rgba(255,255,255,.14)]"
                  />
                )}
                <span
                  className="relative z-10"
                  style={{ color: activeFilter === filter ? "#080808" : "rgba(255,255,255,0.65)" }}
                >
                  {filter}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <ProjectStack key={activeFilter} items={visibleProjects} />

        <div className="flex justify-center pb-10">
          <a href="#projects" className="inline-flex h-11 items-center gap-2 rounded-full border border-[#28321E] px-6 text-sm font-medium text-[#F5F7F2] transition hover:border-[#28321E]/70 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#28321E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A08]">
            Explore more projects <Globe2 aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
