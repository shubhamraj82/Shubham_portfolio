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
      className="dark relative isolate overflow-hidden bg-[#080A08] px-5 py-24 text-[#F5F7F2] sm:px-8 lg:px-10 lg:py-32"
      style={{
        backgroundImage:
          "linear-gradient(rgba(183, 255, 60, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(183, 255, 60, 0.035) 1px, transparent 1px), radial-gradient(ellipse at 50% 45%, rgba(183, 255, 60, 0.045), transparent 70%)",
        backgroundSize: "160px 160px, 160px 160px, auto",
      }}
    >
      <div className="container relative mx-auto max-w-7xl">
        <h2 className="mb-10 bg-[linear-gradient(180deg,#A6ADA3_0%,#F5F7F2_100%)] bg-clip-text text-center font-[family-name:var(--font-kanit)] text-5xl font-bold uppercase tracking-[0.12em] text-transparent sm:mb-12 sm:text-6xl md:text-7xl">
          Skills
        </h2>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="min-w-0">
          <h3 className="max-w-4xl font-serif text-5xl leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Tools
            <br />
            that turn
            <br />
            ideas into
            <br />
            <span className="italic text-[#B7FF3C] drop-shadow-[0_0_24px_rgba(183,255,60,0.28)]">
              real impact.
            </span>
          </h3>

          <div className="mt-8 flex items-center gap-1.5 text-[#B7FF3C]" aria-hidden="true">
            <span className="h-px w-8 bg-current" />
            <span className="size-1 rotate-45 bg-current" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#A6ADA3] sm:text-lg sm:leading-8">
            A curated stack of technologies I use to build, ship, and scale
            meaningful products.
          </p>

          <div className="mt-8 grid max-w-2xl grid-cols-3 border-y border-[#28321E] py-5 sm:mt-12 sm:py-6">
            <div>
              <p className="font-serif text-2xl tracking-tight sm:text-3xl">5+</p>
              <p className="mt-1 text-[10px] text-[#A6ADA3] sm:text-xs">Categories</p>
            </div>
            <div className="border-l border-[#28321E] pl-4 sm:pl-6">
              <p className="font-serif text-2xl tracking-tight sm:text-3xl">15+</p>
              <p className="mt-1 text-[10px] text-[#A6ADA3] sm:text-xs">Technologies</p>
            </div>
            <div className="border-l border-[#28321E] pl-4 sm:pl-6">
              <p className="font-serif text-2xl tracking-tight sm:text-3xl">100%</p>
              <p className="mt-1 text-[10px] text-[#A6ADA3] sm:text-xs">Hands-on experience</p>
            </div>
          </div>

          <div className="relative -mx-5 mt-8 h-[260px] -translate-y-10 overflow-hidden sm:-mx-8 sm:mt-12 sm:h-[360px] lg:mx-0 lg:h-[420px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_52%_80%,rgba(43,80,20,0.42),transparent_63%)]" />
            <svg
              aria-hidden="true"
              viewBox="0 0 1200 560"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <defs>
                <linearGradient id="mountain-fill" x1="600" y1="225" x2="600" y2="560" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#29451D" stopOpacity=".72" />
                  <stop offset="1" stopColor="#071008" stopOpacity=".08" />
                </linearGradient>
                <linearGradient id="mountain-line" x1="400" y1="250" x2="800" y2="560" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B7FF3C" stopOpacity=".72" />
                  <stop offset="1" stopColor="#50752C" stopOpacity=".08" />
                </linearGradient>
              </defs>
              <path d="M0 330 90 285 160 320 250 240 330 300 430 220 510 274 620 170 715 255 795 210 900 300 1000 245 1100 330 1200 280V560H0Z" fill="url(#mountain-fill)" />
              <g stroke="url(#mountain-line)" strokeWidth="1.5">
                <path d="M-30 335 80 285 157 320 250 240 330 300 430 220 510 274 620 170 715 255 795 210 900 300 1000 245 1100 330 1230 275" />
                <path d="M-25 355 85 305 160 340 252 260 332 320 432 240 512 294 622 190 717 275 797 230 902 320 1002 265 1102 350 1230 295" />
                <path d="M-20 375 90 325 163 360 255 280 335 340 435 260 515 314 625 210 720 295 800 250 905 340 1005 285 1105 370 1230 315" />
                <path d="M-15 395 95 345 166 380 258 300 338 360 438 280 518 334 628 230 723 315 803 270 908 360 1008 305 1108 390 1230 335" />
                <path d="M-10 415 100 365 169 400 261 320 341 380 441 300 521 354 631 250 726 335 806 290 911 380 1011 325 1111 410 1230 355" />
                <path d="M-5 435 105 385 172 420 264 340 344 400 444 320 524 374 634 270 729 355 809 310 914 400 1014 345 1114 430 1230 375" />
                <path d="M0 455 110 405 175 440 267 360 347 420 447 340 527 394 637 290 732 375 812 330 917 420 1017 365 1117 450 1230 395" />
                <path d="M5 475 115 425 178 460 270 380 350 440 450 360 530 414 640 310 735 395 815 350 920 440 1020 385 1120 470 1230 415" />
              </g>
            </svg>
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#080A08] to-transparent" />
            <blockquote className="absolute bottom-5 left-5 max-w-xs font-serif text-lg leading-tight text-[#E8EDE3] sm:bottom-8 sm:left-8 sm:text-2xl lg:left-10">
              <span className="mr-1 text-[#A6ADA3]">“</span>Better tools
              <br />
              build better things.”
              <span className="mt-4 flex items-center gap-1.5 text-[#B7FF3C]" aria-hidden="true">
                <span className="h-px w-8 bg-current" />
                <span className="size-1 rotate-45 bg-current" />
              </span>
            </blockquote>
          </div>

          </div>
          <div className="relative self-center">
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
