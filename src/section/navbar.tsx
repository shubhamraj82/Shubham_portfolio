"use client"

import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Layers } from "lucide-react";

const navLinks=[
    {label:"About", href:"#about"},
    {label:"Experience", href:"#experience"},
    {label:"Projects", href:"#projects"},
    {label:"Contact", href:"#contact"},
];

export default function Navbar() {
    const [isOpen , setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const glassHover = "rounded-full border border-transparent px-3 py-1.5 transition-colors duration-200 hover:border-[#28321E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF3C]";
    const glassSurface = isScrolled
        ? "hover:bg-white/[0.05] hover:text-[#B7FF3C]"
        : "hover:bg-white/[0.05] hover:text-[#B7FF3C]";
    const actionHover = "shadow-[0_0_16px_rgba(183,255,60,0.14)] transition-all duration-300 hover:brightness-105 hover:shadow-[0_0_24px_rgba(183,255,60,0.28)]";
    const githubButton = "rounded-full border border-[#28321E] bg-[#080A08] text-[#F5F7F2] transition-all duration-300 hover:border-[#3D5427] hover:bg-[#14210F] hover:text-[#B7FF3C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF3C]";

    useEffect(() => {
        let animationFrame: number | null = null;
        const updateScrollState = () => {
            if (animationFrame !== null) return;

            animationFrame = window.requestAnimationFrame(() => {
                const nextIsScrolled = window.scrollY > 8;
                setIsScrolled((current) => current === nextIsScrolled ? current : nextIsScrolled);
                animationFrame = null;
            });
        };
        updateScrollState();
        window.addEventListener("scroll", updateScrollState, { passive: true });
        return () => {
            window.removeEventListener("scroll", updateScrollState);
            if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <>
        <section
            className="fixed left-0 top-0 z-50 w-[calc(100%-76px)] px-4 py-5 transition-all duration-300 sm:w-[calc(100%-180px)] sm:px-6 lg:py-7"
        >
            <div className="mx-auto max-w-[1240px]">
                <div className={twMerge(
                    "overflow-hidden rounded-[28px] border border-[#28321E] text-[#F5F7F2] backdrop-blur-xl transition-all duration-300 md:rounded-full",
                    isScrolled
                        ? "bg-[#080A08]/95"
                        : "bg-[#080A08]/90",
                )}>
                <div className="grid grid-cols-[1fr_auto] items-center gap-x-4 px-5 py-3 sm:px-7 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-x-5 lg:px-6 lg:py-3.5 xl:gap-x-8 xl:px-8">
                    <a href="#" className={twMerge(`flex w-fit items-center gap-2.5 font-serif text-[21px] font-bold tracking-[-0.04em] sm:text-[24px] ${glassHover}`, glassSurface)}>
                        <span className="grid size-8 place-items-center text-[#B7FF3C] sm:size-9">
                            <Layers aria-hidden="true" className="size-7 stroke-[1.7] sm:size-8" />
                        </span>
                        <span>Portfolio</span>
                    </a>
                    <div className="hidden min-w-0 justify-center lg:flex">
                        <nav aria-label="Primary navigation" className="flex items-center gap-3 font-serif text-[17px] font-medium tracking-[-0.035em] xl:gap-5 xl:text-[19px] 2xl:gap-8 2xl:text-[21px]">
                            {navLinks.map(link=>(
                                <a href={link.href} key={link.label} className={twMerge(glassHover, glassSurface)}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-2 sm:gap-3 lg:gap-2 xl:gap-3">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={twMerge("feather feather-menu size-7 cursor-pointer rounded-full p-1 transition-all duration-300 hover:scale-105 hover:backdrop-blur-xl md:hidden", glassSurface)}
                        onClick={()=>setIsOpen(!isOpen)}
                        >
                            <line  
                            x1="3" 
                            y1="6" 
                            x2="21" 
                            y2="6" 
                            className={twMerge("origin-left transition",isOpen && 'rotate-45 -translate-y-1')}>
                            </line>
                            <line 
                            x1="3" 
                            y1="12" 
                            x2="21" 
                            y2="12" 
                            className={twMerge("transition",isOpen && "opacity-0")}>
                            </line>
                            <line 
                            x1="3" 
                            y1="18" 
                            x2="21" 
                            y2="18" 
                            className={twMerge("origin-left transition",isOpen && '-rotate-45 translate-y-1')}>
                            </line>
                        </svg>
                        <a href="#" className={`hidden h-11 items-center justify-center rounded-full bg-[#B7FF3C] px-4 font-serif text-[16px] font-medium uppercase tracking-[-0.03em] text-[#080A08] ${actionHover} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF3C] md:inline-flex lg:h-12 lg:px-5 lg:text-[17px] xl:px-6 xl:text-[18px]`}>Resume</a>
                        <a href="#" className={`hidden h-11 items-center justify-center px-4 font-serif text-[16px] font-medium uppercase tracking-[-0.03em] md:inline-flex lg:h-12 lg:px-5 lg:text-[17px] xl:px-6 xl:text-[18px] ${githubButton}`}>GitHub</a>
                    </div>
                </div>
                <AnimatePresence>
                {isOpen && (
                <motion.div
                initial={{height:0}}
                animate={{height:'auto'}}
                exit={{height:0}}
                className=" overflow-hidden">
                    <div className="flex flex-col items-center gap-4 border-t border-black/10 px-5 py-5 font-serif text-lg">
                    {navLinks.map((link)=>(
                        <a href={link.href} key={link.label} className={twMerge(glassHover, glassSurface)}>{link.label}</a>
                    ))}
                    <a href="#" className={`rounded-full bg-[#B7FF3C] px-7 py-2.5 text-[#080A08] ${actionHover}`}>Resume</a>
                    <a href="#" className={`px-7 py-2.5 ${githubButton}`}>GitHub</a>
                    </div>
                </motion.div>
                )}
                </AnimatePresence>
                </div>
            </div>
        </section>
        <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]">

        </div>
        </>
    )
}
