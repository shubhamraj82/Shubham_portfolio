"use client"

import  Button  from "@/components/Button";
import { AnimatePresence,motion } from "framer-motion"
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Layers } from "lucide-react";

const navLinks=[
    {label:"About", href:"#"},
    {label:"Experience", href:"#experience"},
    {label:"Projects", href:"#projects"},
    {label:"Contact", href:"#contact"},
];

export default function Navbar() {
    const [isOpen , setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updateScrollState = () => setIsScrolled(window.scrollY > 8);
        updateScrollState();
        window.addEventListener("scroll", updateScrollState, { passive: true });
        return () => window.removeEventListener("scroll", updateScrollState);
    }, []);

    return (
        <>
        <section
            className="fixed top-0 z-50 w-full py-4 transition-all duration-300 lg:py-8"
            style={isScrolled ? {
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                borderBottom: "1px solid rgba(15, 23, 42, 0.10)",
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
            } : undefined}
        >
            <div className="container mx-auto max-w-5xl">
                <div className={twMerge(
                    "rounded-[27px] border-[3px] transition-all duration-300 md:rounded-full",
                    isScrolled
                        ? "border-black/25 bg-white/12 shadow-lg shadow-black/10 backdrop-blur-2xl"
                        : "border-black bg-white",
                )}>
                <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center ">
                    <div className="flex items-center gap-2 font-semibold">
                        <Layers aria-hidden="true" className="size-6" />
                        <span>Layers</span>
                    </div>
                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map(link=>(
                                <a href={link.href} key={link.label}>{link.label}</a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-4">
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
                        className="feather feather-menu md:hidden "
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
                        <Button className="hidden md:inline-flex items-center uppercase font-medium " variant="secondary">Resume</Button>
                        <Button className="hidden md:inline-flex items-center uppercase font-medium" variant="primary">Github</Button>
                    </div>
                </div>
                <AnimatePresence>
                {isOpen && (
                <motion.div
                initial={{height:0}}
                animate={{height:'auto'}}
                exit={{height:0}}
                className=" overflow-hidden">
                    <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link)=>(
                        <a href={link.href} key={link.label} className="">{link.label}</a>
                    ))}
                    <Button variant="secondary">Resume</Button>
                    <Button variant="primary">Github</Button>
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
