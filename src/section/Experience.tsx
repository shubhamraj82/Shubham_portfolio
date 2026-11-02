import { CalendarDays, MapPin } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const milestones = ["2022", "2023", "2024", "2025", "2026"];


export default function Experience() {
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
          className="mb-14 bg-[linear-gradient(180deg,#A6ADA3_0%,#F5F7F2_100%)] bg-clip-text text-center font-[family-name:var(--font-kanit)] text-5xl font-bold uppercase tracking-[0.12em] text-transparent sm:mb-16 sm:text-6xl md:text-7xl"
        >
          Experience
        </h2>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
        <div className="flex min-w-0 flex-col justify-between lg:-ml-3 lg:min-h-[620px] lg:py-8 lg:pr-12 xl:pr-20">
          <div>
            <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_0.8fr] sm:gap-10">
              <h3 className="max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl xl:text-7xl">
                A journey
                <br />
                in building
                <br />
                <span className="text-[#B6D79A]">what’s next.</span>
              </h3>
              <p className="max-w-xs pt-1 font-serif text-sm leading-6 text-[#C0C6BC] sm:pt-2 sm:text-base sm:leading-7">
                Turning ideas into reliable, elegant products through thoughtful
                engineering and collaboration.
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <div className="relative overflow-hidden">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-[#4A5942]"
              />
              <span
                aria-hidden="true"
                className="experience-timeline-sweep absolute left-0 top-0 h-1 w-1/4 bg-gradient-to-r from-transparent via-[#B7FF3C] to-transparent shadow-[0_0_8px_rgba(183,255,60,0.85)]"
              />
              <ol className="grid grid-cols-5" aria-label="Career timeline">
                {milestones.map((year) => {
                  const isCurrentRole = year === "2023";
                  return (
                    <li
                      key={year}
                      className="relative flex flex-col items-start pt-4"
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute -top-[7px] left-2 size-3.5 rounded-full border ${
                          isCurrentRole
                            ? "border-[#B7FF3C] bg-[#B7FF3C] shadow-[0_0_18px_rgba(183,255,60,0.55)]"
                            : "border-[#78846F] bg-[#080A08]"
                        }`}
                      />
                      <span
                        className={`pl-1 text-xs tracking-[0.08em] ${
                          isCurrentRole ? "text-[#B7FF3C]" : "text-[#849080]"
                        }`}
                      >
                        {year}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>

            <article className="relative ml-[20%] mt-5 border-l border-[#526044] pl-5 sm:pl-7">
              <span
                aria-hidden="true"
                className="absolute -top-5 left-[-1px] h-5 w-px bg-[#B7FF3C]/70"
              />
              <h3 className="font-serif text-xl tracking-tight sm:text-2xl">
                Android Development <em className="font-normal">Intern</em>
              </h3>
              <p className="mt-1 text-sm text-[#C4CABE]">GlacierSoft Technology</p>
              <p className="mt-0.5 text-xs tracking-[0.08em] text-[#929B8D]">
                may 2023 - jun 2023
              </p>
              
            </article>
          </div>
        </div>

        <div className="flex min-h-[300px] items-center justify-center px-0 py-4 sm:min-h-[360px] sm:px-6 lg:min-h-[620px] lg:px-10">
          <CardContainer className="w-full" containerClassName="w-full py-0">
          <CardBody className="h-auto w-full max-w-[42rem] rounded-[10px] border-2 border-[#777D75] bg-[#26312E] px-5 py-5 text-[#D6D0C4] shadow-[0_18px_55px_rgba(0,0,0,0.16)] transition-shadow duration-300 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:px-7 sm:py-6">
            <CardItem translateZ={35} className="mt-2 flex w-full flex-wrap items-center gap-x-3 gap-y-1.5 font-serif text-[10px] text-[#B6B4A9] sm:text-[11px]">
             
              <span aria-hidden="true" className="text-[#A7A493]">•</span>
            </CardItem>
            <CardItem translateZ={20} as="ul" className="mt-5 w-full space-y-2 font-serif text-[12px] leading-[1.5] text-[#D2CCBF] sm:mt-6 sm:text-[13px]">
              <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.45em] size-1 shrink-0 rounded-full bg-[#B8AB84]" />Built an Android ride application with real-time location tracking for 50+ active users.</li>
              <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.45em] size-1 shrink-0 rounded-full bg-[#B8AB84]" />Implemented JWT authentication and secure API communication.</li>
              <li className="flex gap-3"><span aria-hidden="true" className="mt-[0.45em] size-1 shrink-0 rounded-full bg-[#B8AB84]" />Optimized maps and background location updates for smoother navigation.</li>
            </CardItem>
          </CardBody>
          </CardContainer>
      </div>~
        </div>
      </div>
    </section>
  );
}
