"use client";

import { useState } from "react";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const filters = ["Web", "Mobile", "AI"] as const;
type ProjectCategory = (typeof filters)[number];

const projects: {
  name: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  previewImage: string;
  demoLabel: string;
}[] = [
  {
    name: "AGENTSURF",
    description:
      "AgentSurf is a visual browser-automation platform for building, running, and observing AI-powered workflows. Create a workflow on a node-based canvas, connect browser and communication steps, and run the graph as a durable background task.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "PostgreSQL",
      "Browserbase",
      "Liveblocks",
      "Trigger",
      "Resend",
      "Polar",
    ],
    category: "Web",
    previewImage: "/images/Neon%20Workflow%20Editor%20at%20Night.png",
    demoLabel: "Live Demo",
  },
  {
    name: "RESONANCE",
    description:
      "Resonance is a multi-tenant text-to-speech workspace for turning written content into audio. Users work inside a Clerk organization, choose built-in or organization-owned voices, tune generation parameters, and listen to generated audio.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Tailwind CSS",
      "tRPC",
      "Cloudflare R2",
      "ChatterBox-TTS",
      "Polar",
    ],
    category: "Web",
    previewImage: "/images/Resonance%20AI%20Dashboard%20Interface.png",
    demoLabel: "Live Demo",
  },
  {
    name: "REQUESTLY",
    description:
      "Requestly is a multi-organization API testing and collaboration platform inspired by Postman, featuring built-in AI to simplify API development, automate workflows, and accelerate debugging. Designed with organization-based workspaces, team collaboration, and intelligent API assistance to help developers manage, test, and document APIs more efficiently.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth", "PostgreSQL", "Prisma", "tRPC",],
    category: "Web",
    previewImage: "/images/Neon%20AI-Powered%20API%20Workspace.png",
    demoLabel: "View Details",
  },
  // {
  //   name: "Fake News Detection",
  //   description:
  //     "A machine learning and NLP system to detect fake news articles using traditional ML models and deep learning techniques.",
  //   technologies: [
  //     "Python",
  //     "Scikit-learn",
  //     "TensorFlow",
  //     "Flask",
  //     "NLTK",
  //     "SQL",
  //   ],
  //   category: "AI",
  //   previewPosition: "55.2% 69.8%",
  //   demoLabel: "View Details",
  // },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("Web");
  const visibleProjects = projects.filter(
    (project) => project.category === activeFilter,
  );

  return (
    <section
      id="projects"
      className="dark relative scroll-mt-8 overflow-hidden bg-[#080d10] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(116, 145, 151, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(116, 145, 151, 0.045) 1px, transparent 1px), radial-gradient(ellipse at 50% 45%, rgba(18, 39, 42, 0.22), transparent 70%)",
        backgroundSize: "160px 160px, 160px 160px, auto",
      }}
    >
      <div className="relative mx-auto w-full max-w-[92rem]">
        <div className="text-center">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-slate-400">
            Real-world products built end to end — with a focus on scalability,
            performance, and the small details that make software feel good to
            use.
          </p>
        </div>

        <Tabs
          value={activeFilter}
          onValueChange={(value) => setActiveFilter(value as ProjectCategory)}
          className="mt-10 items-center"
        >
          <TabsList
            aria-label="Filter projects"
            className="h-10 rounded-full border border-slate-700/60 bg-slate-900/60 p-1 backdrop-blur"
          >
            {filters.map((filter) => (
              <TabsTrigger
                key={filter}
                value={filter}
                className="rounded-full px-6 text-slate-400 data-active:border-blue-400/40 data-active:bg-blue-500/10 data-active:text-blue-300 data-active:shadow-[0_0_14px_rgba(96,165,250,0.25)]"
              >
                {filter}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {visibleProjects.map((project) => (
            <Card
              key={project.name}
              className="group relative grid gap-6 rounded-xl border border-blue-400/15 bg-slate-950/40 p-5 ring-0 shadow-[0_0_0_1px_rgba(96,165,250,0.05),0_0_28px_-14px_rgba(96,165,250,0.35)] transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_0_1px_rgba(96,165,250,0.15),0_0_44px_-10px_rgba(96,165,250,0.45)] sm:p-6"
            >
              <div
                role="img"
                aria-label={`${project.name} project preview`}
                className="min-h-[230px] rounded-lg border border-slate-700/50 bg-[#0d141b] bg-no-repeat transition-colors group-hover:border-blue-400/25 md:min-h-[280px]"
                style={{
                  backgroundImage: `url('${project.previewImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="flex min-w-0 flex-col py-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {project.name}
                  </h3>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon-sm"
                    className="text-slate-400 hover:bg-transparent hover:text-blue-300"
                  >
                    <a href="#projects" aria-label={`Open ${project.name}`}>
                      <ExternalLink aria-hidden="true" />
                    </a>
                  </Button>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label="Technologies"
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>
                      <Badge
                        variant="secondary"
                        className="h-auto rounded-md border-slate-700/50 bg-slate-800/60 px-2.5 py-1 text-slate-200"
                      >
                        {technology}
                      </Badge>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="h-10 bg-white px-4 text-slate-950 hover:bg-blue-100"
                  >
                    <a href="#projects">
                      <ExternalLink aria-hidden="true" />
                      {project.demoLabel}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-10 border-slate-700 bg-transparent px-4 text-white hover:border-slate-500 hover:bg-slate-800/40 hover:text-white"
                  >
                    <a
                      href="#projects"
                      aria-label={`${project.name} on GitHub`}
                    >
                      <Code2 aria-hidden="true" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-8">
          <span className="hidden h-px w-40 bg-gradient-to-r from-transparent to-slate-700 sm:block" />
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 rounded-full border-slate-700 bg-transparent px-7 text-white shadow-[0_0_18px_-8px_rgba(96,165,250,0.4)] hover:border-blue-400/60 hover:bg-blue-500/5 hover:text-white hover:shadow-[0_0_24px_-6px_rgba(96,165,250,0.55)]"
          >
            <a href="#projects">
              View All Projects
              <ArrowRight aria-hidden="true" className="text-blue-300" />
            </a>
          </Button>
          <span className="hidden h-px w-40 bg-gradient-to-l from-transparent to-slate-700 sm:block" />
        </div>
      </div>
    </section>
  );
}
