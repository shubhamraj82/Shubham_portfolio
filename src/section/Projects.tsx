"use client";

import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Globe2,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

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
      className="sticky mx-auto h-[85vh] min-h-[520px] w-full max-w-5xl origin-top rounded-[40px] border-2 border-[#D7E2EA] bg-[#111416] p-4 shadow-[0_22px_70px_rgba(0,0,0,0.45)] sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      aria-labelledby={`project-${project.name.replaceAll(" ", "-")}`}
    >
      {project.previewImage ? (
        <div className="relative h-[42vh] min-h-[250px] max-h-[420px] overflow-hidden rounded-[26px] border border-white/10 bg-[#171d21] sm:rounded-[34px] md:rounded-[42px]">
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
          className="flex h-[42vh] min-h-[250px] max-h-[420px] items-end rounded-[26px] border border-dashed border-[#D7E2EA]/25 bg-[radial-gradient(ellipse_at_75%_15%,rgba(111,157,176,0.2),transparent_42%),linear-gradient(135deg,#171d21,#101214)] p-4 text-xs uppercase tracking-[0.22em] text-slate-500 sm:rounded-[34px] sm:p-6 md:rounded-[42px]"
        >
          Project image placeholder
        </div>
      )}

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto pt-4 sm:pt-5 md:pt-6">
        <div className="flex items-center justify-between gap-3">
          <h3 id={`project-${project.name.replaceAll(" ", "-")}`} className="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
            {project.name}
          </h3>
          <a
            href="#projects"
            aria-label={`Open ${project.name} project`}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-[#D7E2EA]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111416]"
          >
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-[15px] md:mt-4 md:text-base">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2" aria-label={`${project.name} technologies and tools`}>
          {project.technologies.map((technology) => (
            <li key={technology} className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[10px] leading-4 text-slate-300 sm:px-3 sm:text-xs">
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2.5 pt-5 sm:gap-3 sm:pt-6">
          <a href="#projects" className="inline-flex h-9 items-center gap-2 rounded-full bg-[#D7E2EA] px-3.5 text-xs font-semibold text-[#111416] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111416] sm:h-10 sm:px-4 sm:text-sm">
            <ExternalLink aria-hidden="true" className="size-3.5" /> {project.demoLabel}
          </a>
          <a href="#projects" aria-label={`${project.name} GitHub repository`} className="inline-flex h-9 items-center gap-2 rounded-full border border-[#D7E2EA]/45 px-3.5 text-xs font-medium text-white transition hover:border-[#D7E2EA] hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111416] sm:h-10 sm:px-4 sm:text-sm">
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
  const visibleProjects = projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="dark relative z-10 -mt-10 scroll-mt-8 rounded-t-[40px] bg-[#080d10] px-4 pb-10 pt-14 font-[family-name:var(--font-kanit)] text-white sm:-mt-12 sm:rounded-t-[50px] sm:px-7 sm:pt-16 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(116, 145, 151, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(116, 145, 151, 0.045) 1px, transparent 1px), radial-gradient(ellipse at 50% 45%, rgba(18, 39, 42, 0.22), transparent 70%)",
        backgroundSize: "160px 160px, 160px 160px, auto",
      }}
    >
      <div className="mx-auto w-full max-w-[92rem]">
        <header className="text-center">
          <h2 className="bg-[linear-gradient(180deg,#646973_0%,#BBCCD7_100%)] bg-clip-text text-4xl font-bold uppercase tracking-[0.12em] text-transparent sm:text-5xl md:text-6xl">
            Project
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:mt-4 sm:text-base">
            A selection of digital products, experiences, and experiments built with care.
          </p>
        </header>

        <Tabs value={activeFilter} onValueChange={(value) => setActiveFilter(value as ProjectCategory)} className="mt-7 items-center sm:mt-9">
          <TabsList aria-label="Project categories" className="h-10 rounded-full border border-white/10 bg-[#151719] p-1">
            {filters.map((filter) => (
              <TabsTrigger key={filter} value={filter} className="rounded-full px-5 text-slate-400 data-active:bg-[#D7E2EA] data-active:text-[#101214] sm:px-6">
                {filter}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <ProjectStack key={activeFilter} items={visibleProjects} />

        <div className="flex justify-center pb-10">
          <a href="#projects" className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-medium text-white transition hover:border-[#D7E2EA]/70 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]">
            Explore more projects <Globe2 aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
