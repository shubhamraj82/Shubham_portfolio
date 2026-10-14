"use client";

import { useState } from "react";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";

const filters = ["All", "Web", "Mobile", "AI/ML", "Full Stack"] as const;
type ProjectCategory = Exclude<(typeof filters)[number], "All">;

const projects: {
  name: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  previewPosition: string;
  demoLabel: string;
}[] = [
  {
    name: "AgentSurf",
    description:
      "A visual browser automation workflow engine to create, execute, and monitor AI-powered workflows with real-time collaboration and session replay.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Browserbase", "Liveblocks", "Resend"],
    category: "Full Stack",
    previewPosition: "3.7% 34.4%",
    demoLabel: "Live Demo",
  },
  {
    name: "CargoFlow",
    description:
      "A production-ready SaaS platform for cargo and fleet tracking with real-time location, shipment management, and analytics.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Maps API", "Tailwind CSS"],
    category: "Web",
    previewPosition: "55.2% 34.4%",
    demoLabel: "Live Demo",
  },
  {
    name: "Stranger - VC App",
    description:
      "A random video calling Android app built with WebRTC and Firebase, featuring real-time communication and AdMob integration.",
    technologies: ["Kotlin", "XML", "WebRTC", "Firebase", "Google AdMob"],
    category: "Mobile",
    previewPosition: "3.7% 69.8%",
    demoLabel: "View Details",
  },
  {
    name: "Fake News Detection",
    description:
      "A machine learning and NLP system to detect fake news articles using traditional ML models and deep learning techniques.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Flask", "NLTK", "SQL"],
    category: "AI/ML",
    previewPosition: "55.2% 69.8%",
    demoLabel: "View Details",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter,
  );

  return (
    <section
      id="projects"
      className="relative scroll-mt-8 overflow-hidden bg-[#080d10] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(116, 145, 151, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(116, 145, 151, 0.045) 1px, transparent 1px), radial-gradient(ellipse at 50% 45%, rgba(18, 39, 42, 0.22), transparent 70%)",
        backgroundSize: "160px 160px, 160px 160px, auto",
      }}
    >
      <div className="relative mx-auto w-full">
        <div className="text-center">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-base leading-relaxed text-slate-300 sm:text-[17px]">
            A collection of real-world projects that solve actual problems, built with
            modern technologies and a focus on scalability, performance, and user experience.
          </p>
          <p className="mx-auto mt-3 max-w-[700px] text-base leading-relaxed text-slate-300">
            From AI-powered automation to real-time tracking systems, these projects showcase my
            ability to turn ideas into scalable products.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-6 py-2 text-sm transition-colors ${
                activeFilter === filter
                  ? "border-blue-400 text-blue-300 shadow-[0_0_18px_rgba(59,130,246,0.18)]"
                  : "border-slate-600/70 text-slate-200 hover:border-slate-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.name}
              className="group grid gap-5 rounded-xl border border-slate-600/50 bg-slate-950/25 p-4 transition-colors hover:border-slate-500/80 md:grid-cols-[1.18fr_0.82fr] md:gap-5"
            >
              <div
                role="img"
                aria-label={`${project.name} project preview`}
                className="min-h-[230px] rounded-lg border border-slate-600/50 bg-[#0d141b] bg-no-repeat md:min-h-[280px]"
                style={{
                  backgroundImage: "url('/images/Featured%20Projects%20Portfolio%20Showcase.png')",
                  backgroundSize: "400% 400%",
                  backgroundPosition: project.previewPosition,
                }}
              />
              <div className="flex min-w-0 flex-col py-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
                  <a
                    href="#projects"
                    aria-label={`Open ${project.name}`}
                    className="rounded p-1 text-slate-300 transition-colors hover:text-blue-300"
                  >
                    <ExternalLink aria-hidden="true" className="size-4" />
                  </a>
                </div>
                <p className="mt-2 text-[15px] leading-[1.45] text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-lg bg-slate-800/70 px-3 py-1.5 text-xs text-slate-100"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-3 pt-4">
                  <a
                    href="#projects"
                    className="inline-flex h-10 items-center gap-2 rounded-lg bg-white px-4 text-sm font-medium text-slate-950 transition-colors hover:bg-blue-100"
                  >
                    <ExternalLink aria-hidden="true" className="size-4" />
                    {project.demoLabel}
                  </a>
                  <a
                    href="#projects"
                    aria-label={`${project.name} on GitHub`}
                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-600 px-4 text-sm text-white transition-colors hover:border-slate-400"
                  >
                    <Code2 aria-hidden="true" className="size-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-8">
          <span className="hidden h-px w-40 bg-slate-700 sm:block" />
          <a
            href="#projects"
            className="inline-flex h-11 items-center gap-3 rounded-full border border-slate-600 px-7 text-sm text-white transition-colors hover:border-blue-400"
          >
            View All Projects
            <ArrowRight aria-hidden="true" className="size-4 text-blue-300" />
          </a>
          <span className="hidden h-px w-40 bg-slate-700 sm:block" />
        </div>
      </div>
    </section>
  );
}
