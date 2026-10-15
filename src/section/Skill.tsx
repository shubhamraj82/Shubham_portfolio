import IntegrationColumn from "@/components/IntegrationsColumn";

const integrations = [
  {
    name: "AWS",
    icon: "/images/aws.svg",
    description: "Deploy and scale applications with cloud infrastructure.",
  },
  {
    name: "ChatGPT",
    icon: "/images/chatgpt.svg",
    description:
      "Explore ideas, refine code, and work through implementation questions.",
  },
  {
    name: "Claude",
    icon: "/images/claude.svg",
    description:
      "Analyze code and work through technical problems with an AI assistant.",
  },
  {
    name: "Docker",
    icon: "/images/docker.svg",
    description:
      "Containerize and run applications consistently across environments.",
  },
  {
    name: "Express.js",
    icon: "/images/express.svg",
    description: "Build lightweight web servers and APIs with Node.js.",
  },
  {
    name: "Framer Motion",
    icon: "/images/framerMotion.svg",
    description: "Create fluid animations and transitions for React interfaces.",
  },
  {
    name: "Gemini",
    icon: "/images/gemini.svg",
    description:
      "Research and prototype with Google's multimodal AI assistant.",
  },
  {
    name: "GitHub",
    icon: "/images/github.svg",
    description: "Manage source code and collaborate through version control.",
  },
  {
    name: "GSAP",
    icon: "/images/gsap.svg",
    description: "Build precise, high-performance animations for the web.",
  },
  {
    name: "JavaScript",
    icon: "/images/javascript.svg",
    description: "Build interactive experiences for the web.",
  },
  {
    name: "Lovable",
    icon: "/images/lovable.svg",
    description:
      "Turn product ideas into app prototypes with AI-assisted development.",
  },
  {
    name: "MongoDB",
    icon: "/images/mongoDb.svg",
    description: "Store application data in a flexible document database.",
  },
  {
    name: "Next.js",
    icon: "/images/nextJs.svg",
    description: "Build full stack web applications with React.",
  },
  {
    name: "Node.js",
    icon: "/images/nodeJs.svg",
    description: "Build server side applications and APIs with JavaScript.",
  },
  {
    name: "PostgreSQL",
    icon: "/images/postgreSQL.svg",
    description: "Work with relational data in a dependable SQL database.",
  },
  {
    name: "Python",
    icon: "/images/python.svg",
    description: "Write clear, versatile code for applications and automation.",
  },
  {
    name: "React",
    icon: "/images/reactJs.svg",
    description: "Create interactive user interfaces with reusable components.",
  },
  {
    name: "shadcn/ui",
    icon: "/images/shadcn.svg",
    description:
      "Compose interfaces from accessible, customizable React components.",
  },
  {
    name: "Java",
    icon: "/images/java.svg",
    description:
      "Develop robust applications with a widely used object-oriented language.",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/tailwindCSS.svg",
    description: "Style responsive interfaces with utility-first CSS.",
  },
  {
    name: "Vercel",
    icon: "/images/vercel.svg",
    description: "Deploy projects and manage previews for web applications.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Skill() {
  return (
    <section
      className="dark relative isolate overflow-hidden bg-[#080d10] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
      style={{
        backgroundImage:
          "linear-gradient(rgba(116, 145, 151, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(116, 145, 151, 0.045) 1px, transparent 1px), radial-gradient(ellipse at 50% 45%, rgba(18, 39, 42, 0.22), transparent 70%)",
        backgroundSize: "160px 160px, 160px 160px, auto",
      }}
    >
      <div className="container relative mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/[0.07] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-blue-200">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]"
              />
              Tech stack
            </div>
            <h2 className="mt-7 max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              From first component{" "}
              <span className="text-blue-300">to production.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              From React interfaces and Node.js APIs to databases and cloud
              deployments, I work across the full product build.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              I also use ChatGPT, Claude, Gemini, and Lovable to explore
              approaches, prototype ideas, and debug. I review and adapt their
              suggestions to fit each project.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
              <span>Frontend</span>
              <span className="text-blue-400">/</span>
              <span>Backend</span>
              <span className="text-blue-400">/</span>
              <span>Cloud &amp; data</span>
              <span className="text-blue-400">/</span>
              <span>AI tools</span>
              <span className="text-blue-400">/</span>
              <span>Mobile apps</span>
            </div>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 [mask-image:linear-gradient(to_bottom,black,transparent)] backdrop-blur-[6px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 [mask-image:linear-gradient(to_top,black,transparent)] backdrop-blur-[6px]"
            />
            <div className="grid h-[560px] grid-cols-1 gap-3 overflow-hidden px-1 [mask-image:linear-gradient(to_bottom,transparent,black_9%,black_91%,transparent)] sm:gap-4 md:grid-cols-2 lg:h-[760px]">
              <IntegrationColumn integrations={integrations} />
              <IntegrationColumn
                integrations={integrations.slice().reverse()}
                reverse
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
