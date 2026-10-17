"use client"

import { type IntegrationsType } from "@/section/Skill"
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {motion} from "motion/react"
import {Fragment } from "react"

export default function IntegrationColumn(props:{
    integrations:IntegrationsType;
    className?:string;
    reverse?:boolean;
}){
    const {integrations,className,reverse}=props;
    return (
        <motion.div
        initial={{
            y:reverse?'-50%':0
        }}
        animate={{
            y: reverse? 0:"-50%",
        }}
        transition={{
            duration:15,
            repeat:Infinity,
            ease:"linear",
        }}
            className={twMerge("flex flex-col gap-3 pb-3 sm:gap-4 sm:pb-4",className)}>
            {Array.from({length:2}).map((_,i) => (
                <Fragment 
                key={i}>
                     {integrations.map((integration)=>(
            <div 
            key={integration.name} 
            className="group relative overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_72%)] bg-slate-950/55 p-4 shadow-[0_12px_36px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-colors duration-300 sm:p-5">
                <div className="mx-auto flex size-14 items-center justify-center rounded-xl border border-slate-200/70 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:size-16">
                    <Image
                    src={integration.icon}
                    alt={`${integration.name} icon`}
                    width={56}
                    height={56}
                    className="size-10 object-contain sm:size-11"
                    />
                </div>
                <h3 className="mt-4 text-center text-lg font-medium tracking-tight text-white sm:text-xl">
                    {integration.name}
                    </h3>
                <p className="mt-2 text-center text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
                    {integration.description}
                    </p>
            </div>
        ))}
                </Fragment>
            ))}
       
    </motion.div>
    )
}
