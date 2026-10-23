"use client"

import AddProfileCard from "@/components/AddProfileCard";
import ProfileSidebarCard from "@/components/ProfileSidebarCard";
import TechText from "@/components/TechText";
import { FlameButton } from "@/components/ui/flame-button";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0.82]);
    const cardTransition = { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const };
    return (
        <motion.section
            ref={heroRef}
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="relative isolate min-h-screen overflow-x-clip px-2 py-32 sm:py-36 lg:min-h-[1000px] lg:py-44"
        >
            <div className="container relative z-10 mx-auto">
                <motion.div 
                drag
                initial={{ opacity: 0, y: 56, x: -255 }}
                animate={{ opacity: 1, y: 0, x: -155 }}
                transition={cardTransition}
                className="absolute left-0 top-16 z-30 hidden cursor-grab active:cursor-grabbing lg:block">
                    <ProfileSidebarCard />
                </motion.div>
                <motion.div
                initial={{ opacity: 0, x: 56, y: 56 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ ...cardTransition, delay: 0.18 }}
                drag
                className="absolute -right-36 -top-16 z-30 hidden lg:block">
                    <AddProfileCard />
                </motion.div>
               
                <motion.div 
                initial={{ opacity: 0, x: 275, y: 100 }}
                animate={{ opacity: 1, x: [275, 175, 175], y: [100, 0, 0] }}
                transition={{
                    opacity: { duration: 0.5, delay: 1.5 },
                    x: { duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] },
                    y: { duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] },
                }}
                className="absolute right-80 -top-4 z-30 hidden lg:block">
                    
                </motion.div>
                {/* <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                    $7.5M seed round raised
                    </div>
                    </div> */}
                <div className="relative z-0 mx-auto max-w-7xl -translate-y-16 px-4 text-center sm:-translate-y-20 sm:px-8 lg:-translate-y-24">
                <div className="mb-7 flex justify-center sm:mb-8">
                    <FlameButton text="Fullstack and AI Enthusiast" href="#projects" height={68} borderColor="#343633" />
                </div>
                {/* <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#B7FF3C] sm:text-base">
                    Fullstack and AI Enthusiast
                </p> */}
                <h1 className="relative -top-2 mx-auto mt-9 max-w-[1200px] text-center font-serif text-6xl font-bold leading-[1.02] tracking-[-0.055em] text-[#F5F7F2] sm:mt-10 sm:text-7xl md:text-8xl lg:text-[112px] xl:text-[128px]">
                    <span className="sr-only">Turning complex challenges into clear, engaging experiences</span>
                    <span aria-hidden="true" className="-mb-3 block h-[1.02em] sm:-mb-4 lg:-mb-8">
                        <TechText text="Turning complex" fontFamily="Georgia, 'Times New Roman', serif" fontWeight={700} fontSize={128} letterSpacing={-0.05}
                            color="#F5F7F2" accentColor="#B7FF3C" gradient reveal="letter" specks={12} intro="none"
                            guides={false} style={{ height: "100%" }} />
                    </span>
                    <span aria-hidden="true" className="-mb-3 block h-[1.02em] sm:-mb-4 lg:-mb-8">
                        <TechText text="challenges into clear," fontFamily="Georgia, 'Times New Roman', serif" fontWeight={700} fontSize={128} letterSpacing={-0.05}
                            color="#F5F7F2" accentColor="#B7FF3C" gradient reveal="letter" specks={12} intro="none"
                            guides={false} style={{ height: "100%" }} />
                    </span>
                    <span aria-hidden="true" className="block h-[1.02em]">
                        <TechText text="engaging experiences" fontFamily="Georgia, 'Times New Roman', serif" fontWeight={700} fontSize={128} letterSpacing={-0.05}
                            color="#F5F7F2" accentColor="#B7FF3C" gradient reveal="letter" specks={12} intro="none"
                            guides={false} style={{ height: "100%" }} />
                    </span>
                </h1>
                <p className="relative -top-2 mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-[#A6ADA3] sm:mt-9 sm:text-lg sm:leading-8 md:text-xl">
                    I&apos;m Shubham, a full-stack and AI developer building polished web apps and useful AI features—from first idea to production. I focus on creating intuitive experiences, reliable systems, and products that solve real problems.
                 </p>
                 <div className="relative -top-2 mt-9 flex flex-col justify-center gap-3 sm:mt-11 sm:flex-row sm:gap-4">
                    <a href="#projects" className="group inline-flex rounded-full bg-[#4B7112] pb-2 shadow-[0_0_22px_rgba(183,255,60,0.18)] transition-shadow duration-200 hover:shadow-[0_0_32px_rgba(183,255,60,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B7FF3C]">
                        <span className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#B7FF3C] px-8 font-sans text-base font-semibold text-[#080A08] shadow-[inset_0_2px_0_#E5FFB8,inset_0_-3px_0_#689817] transition-[transform,background-color,box-shadow] duration-150 group-hover:-translate-y-0.5 group-active:translate-y-1.5 group-active:bg-[#F78900] group-active:shadow-[inset_0_1px_0_#FFE5C4,inset_0_-3px_0_#915100]">
                            View my projects <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                    </a>
                    <a href="#contact" className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#28321E] bg-[#0B100B] px-8 font-sans text-base font-semibold text-[#F5F7F2] transition-all duration-300 hover:border-[#3D5427] hover:bg-[#14210F] hover:text-[#B7FF3C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B7FF3C]">
                        Contact me
                    </a>
                 </div>
                 </div>
            </div>
        </motion.section>
    );
}
