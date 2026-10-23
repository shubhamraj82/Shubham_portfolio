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
      "A visual browser-automation platform for building, running, and observing AI-powered workflows. Create a workflow on a node-based canvas, connect browser and communication steps, and run the graph as a durable background task.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "PostgreSQL", "Browserbase", "Liveblocks", "Trigger", "Resend", "Polar"],
    category: "Web",
    previewImage: "/images/Neon Workflow Editor at Night.png",
    demoLabel: "Live Demo",
  },
  {
    name: "Resonance",
    description:
      "A multi-tenant text-to-speech workspace for turning written content into expressive audio, with organization-owned voices and a focused listening experience.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Cloudflare R2", "ChatterBox-TTS"],
    category: "Web",
    previewImage: "/images/Resonance AI Dashboard Interface.png",
    demoLabel: "Live Demo",
  },
  {
    name: "Requestly",
    description:
      "A collaborative API workspace with team workspaces, clear request organization, and AI assistance to speed up testing and debugging.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth", "PostgreSQL", "Prisma", "tRPC"],
    category: "Web",
    previewImage: "/images/Neon AI-Powered API Workspace.png",
    demoLabel: "View Details",
  },
  {
    name: "Aura Brand Identity",
    description:
      "A personal identity exploration shaped around a calm, modern visual system, with a flexible mark, refined typography, and a cohesive digital presence.",
    technologies: ["Figma", "Illustrator", "Photoshop", "Brand Strategy", "Visual Design"],
    category: "Mobile",
    demoLabel: "View Details",
  },
  {
    name: "Pocket Places",
    description:
      "A mobile guide for saving favorite places, organizing them into personal lists, and finding a great spot while on the move.",
    technologies: ["React Native", "Expo", "TypeScript", "Maps", "NativeWind"],
    category: "Mobile",
    demoLabel: "Live Demo",
  },
  {
    name: "Daily Form",
    description:
      "A gentle habit and wellness companion that turns small daily check-ins into clear, encouraging progress over time.",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Figma"],
    category: "Mobile",
    demoLabel: "View Details",
  },
  {
    name: "Solaris Digital",
    description:
      "A client project for a clean-energy studio, bringing its solar services, project portfolio, and customer journey together in a confident digital experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"],
    category: "AI",
    demoLabel: "Live Demo",
  },
  {
    name: "Workflow Copilot",
    description:
      "An AI assistant that turns plain-language goals into practical, reviewable workflow steps and helps teams automate routine work.",
    technologies: ["Python", "OpenAI API", "FastAPI", "PostgreSQL", "LangChain"],
    category: "AI",
    demoLabel: "View Details",
  },
  {
    name: "Knowledge Lens",
    description:
      "A conversational knowledge tool that helps people explore their documents and get grounded answers with useful source context.",
    technologies: ["Next.js", "TypeScript", "Embeddings", "Vector Search", "PostgreSQL"],
    category: "AI",
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
        <ul className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2" aria-label={`${project.name} technologies and tools`}>
          {project.technologies.map((technology) => (
            <li key={technology} className="rounded-full border border-[#28321E] bg-white/[0.035] px-2.5 py-1 text-[10px] leading-4 text-[#A6ADA3] sm:px-3 sm:text-xs">
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2.5 pt-5 sm:gap-3 sm:pt-6">
          <a href="#projects" className="inline-flex h-9 items-center gap-2 rounded-full bg-[#B7FF3C] px-3.5 text-xs font-semibold text-[#080A08] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF3C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A08] sm:h-10 sm:px-4 sm:text-sm">
            <ExternalLink aria-hidden="true" className="size-3.5" /> {project.demoLabel}
          </a>
          <a href="#projects" aria-label={`${project.name} GitHub repository`} className="inline-flex h-9 items-center gap-2 rounded-full border border-[#28321E]/45 px-3.5 text-xs font-medium text-[#F5F7F2] transition hover:border-[#28321E] hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#28321E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A08] sm:h-10 sm:px-4 sm:text-sm">
            <Code2 aria-hidden="true" className="size-3.5" /> GitHub
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
