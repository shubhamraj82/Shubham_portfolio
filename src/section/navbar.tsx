"use client"

import { AnimatePresence,motion } from "framer-motion"
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
            className="fixed top-0 z-50 w-full px-4 py-5 transition-all duration-300 sm:px-6 lg:py-7"
        >
            <div className="mx-auto max-w-[1240px]">
                <div className={twMerge(
                    "overflow-hidden rounded-[28px] border border-white/70 bg-white/60 text-[#111111] shadow-[0_12px_35px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-all duration-300 md:rounded-full",
                    isScrolled
                        ? "bg-white/72 shadow-[0_16px_40px_rgba(15,23,42,0.2)]"
                        : "",
                )}>
                <div className="grid grid-cols-2 items-center px-5 py-3 sm:px-7 lg:grid-cols-3 lg:px-8 lg:py-3.5">
                    <a href="#" className="flex w-fit items-center gap-2.5 font-serif text-[21px] font-bold tracking-[-0.04em] sm:text-[24px]">
                        <span className="grid size-8 place-items-center text-black sm:size-9">
                            <Layers aria-hidden="true" className="size-7 stroke-[1.7] sm:size-8" />
                        </span>
                        <span>Portfolio</span>
                    </a>
                    <div className="hidden justify-center lg:flex">
                        <nav aria-label="Primary navigation" className="flex items-center gap-10 font-serif text-[21px] font-medium tracking-[-0.035em] xl:gap-12 xl:text-[23px]">
                            {navLinks.map(link=>(
                                <a href={link.href} key={link.label} className="rounded-md transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-2.5 sm:gap-4">
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
                        className="feather feather-menu size-7 cursor-pointer md:hidden"
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
                        <a href="#" className="hidden h-12 items-center justify-center rounded-full bg-gradient-to-b from-[#247cff] to-[#0755e8] px-7 font-serif text-[20px] font-medium uppercase tracking-[-0.03em] text-white shadow-[inset_0_1px_rgba(255,255,255,.4),0_7px_14px_rgba(25,92,230,.3)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 md:inline-flex lg:h-14 lg:px-9 lg:text-[22px]">Resume</a>
                        <a href="#" className="hidden h-12 items-center justify-center rounded-full bg-gradient-to-b from-[#247cff] to-[#0755e8] px-7 font-serif text-[20px] font-medium uppercase tracking-[-0.03em] text-white shadow-[inset_0_1px_rgba(255,255,255,.4),0_7px_14px_rgba(25,92,230,.3)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 md:inline-flex lg:h-14 lg:px-9 lg:text-[22px]">Github</a>
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
                        <a href={link.href} key={link.label} className="">{link.label}</a>
                    ))}
                    <a href="#" className="rounded-full bg-gradient-to-b from-[#247cff] to-[#0755e8] px-7 py-2.5 text-white">Resume</a>
                    <a href="#" className="rounded-full bg-gradient-to-b from-[#247cff] to-[#0755e8] px-7 py-2.5 text-white">Github</a>
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
