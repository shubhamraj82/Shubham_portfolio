"use client"

import AddProfileCard from "@/components/AddProfileCard";
import ProfileSidebarCard from "@/components/ProfileSidebarCard";
import TechText from "@/components/TechText";
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
            className="relative isolate overflow-x-clip py-24"
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
                <p className="relative z-0 mt-6 text-center font-serif text-lg text-white/75 md:text-xl">
                    Hi, I&apos;m Shubham Raj <span aria-hidden="true">👋</span>
                </p>
                <h1 className="relative z-0 mx-auto mt-5 max-w-[900px] text-center font-serif text-5xl font-bold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[76px]">
                    <span className="sr-only">I build software that solves real-world problems.</span>
                    <span aria-hidden="true" className="block h-[1.08em]">
                        <TechText text="I build software that solves" fontFamily="Georgia, 'Times New Roman', serif" fontWeight={700} fontSize={76} letterSpacing={-0.045}
                            color="currentColor" accentColor="#2563eb" reveal="letter" specks={12} intro="none"
                            guides={false} style={{ height: "100%" }} />
                    </span>
                    <span aria-hidden="true" className="flex h-[1.08em] items-center justify-center gap-[0.2em]">
                        <span className="inline-block h-full w-[5.4em] shrink-0 align-top">
                            <TechText text="real-world" fontFamily="Georgia, 'Times New Roman', serif" fontWeight={700} fontSize={76} letterSpacing={-0.045}
                                color="#2563eb" accentColor="#111827" reveal="letter" specks={12} intro="none"
                                guides={false} style={{ height: "100%" }} />
                        </span>
                        <span className="inline-block h-full w-[4.55em] shrink-0 align-top">
                            <TechText text="problems." fontFamily="Georgia, 'Times New Roman', serif" fontWeight={700} fontSize={76} letterSpacing={-0.045}
                                color="currentColor" accentColor="#2563eb" reveal="letter" specks={12} intro="none"
                                guides={false} style={{ height: "100%" }} />
                        </span>
                    </span>
                </h1>
                <p className="relative z-0 mx-auto mt-7 max-w-[620px] text-center font-serif text-lg leading-relaxed text-white/80 sm:text-xl md:text-[22px]">
                    Full-stack developer building scalable applications and intelligent products.
                 </p>
                 <div className="relative z-0 mt-8 flex flex-wrap justify-center gap-4">
                    <a href="#projects" className="inline-flex h-[58px] min-w-[220px] items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#247cff] to-[#0755e8] px-8 font-serif text-lg font-medium text-white shadow-[inset_0_1px_rgba(255,255,255,.4),0_7px_14px_rgba(25,92,230,.3)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                        View my projects <span aria-hidden="true">→</span>
                    </a>
                    <a href="#contact" className="inline-flex h-[58px] min-w-[180px] items-center justify-center rounded-full border border-sky-400/80 px-8 font-serif text-lg text-white transition hover:bg-sky-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                        Contact me
                    </a>
                 </div>
            </div>
        </motion.section>
    );
}
