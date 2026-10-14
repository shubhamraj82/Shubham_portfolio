"use client"

import { type IntegrationsType } from "@/section/Skill"
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {motion} from "framer-motion"
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
        className={twMerge("flex flex-col gap-4 pb-4",className)}>
            {Array.from({length:2}).map((_,i) => (
                <Fragment 
                key={i}>
                     {integrations.map((integration)=>(
            <div 
            key={integration.name} 
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div 
                className="flex justify-center">
                    <Image
                    src={integration.icon}
                    alt={`${integration.name} icon`}
                    width={96}
                    height={96}
                    className="size-24"
                    />
                </div>
                <h3 
                className="mt-6 text-center text-3xl text-slate-900">
                    {integration.name}
                    </h3>
                <p 
                className="mt-2 text-center text-slate-600">
                    {integration.description}
                    </p>
            </div>
        ))}
                </Fragment>
            ))}
       
    </motion.div>
    )
}
