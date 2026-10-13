"use client"

import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import AddProfileCard from "@/components/AddProfileCard";
import ProfileSidebarCard from "@/components/ProfileSidebarCard";
import {easeInOut, motion,useAnimate} from "framer-motion"
import { useEffect } from "react";

export default function Hero() {
    const [leftDesignscope,leftDesignanimate] = useAnimate();
    const [leftPointerscope,leftPointeranimate] = useAnimate();
    const [rightDesignScope,rightDesignAnimate]=useAnimate();
    const [rightPointerScope,rightPointerAnimate]=useAnimate();
    
    useEffect(()=>{

        leftDesignanimate(
            [
            [leftDesignscope.current,{ opacity:1},{duration:0.5}],
            [leftDesignscope.current,{y:0,x:0},{duration:0.5}]
        ]
    );
        leftPointeranimate(
            [
            [leftPointerscope.current,{opacity:1},{duration:0.5}],
            [leftPointerscope.current, {y:0,x:-100}, {duration:0.5}],
            [leftPointerscope.current,{x:0,y:[0,16,0]},{duration:0.5, ease:easeInOut}]
        ]
    );

        rightDesignAnimate([
            [
                rightDesignScope.current,
                {opacity:1},
                {duration:0.5,delay:1.5}
            ],
            [
                rightDesignScope.current,{x:0,y:0},{duration:0.5}
            ]
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,{opacity:1},{duration:0.5, delay:1.5}
            ],
            [
                rightPointerScope.current, {x:175,y:0},{duration:0.5}
            ],
            [
                rightPointerScope.current,{x:0, y:[0,20,0]},{duration:0.5}
            ]
        ])
    }, [
        leftDesignanimate,
        leftDesignscope,
        leftPointeranimate,
        leftPointerscope,
        rightDesignAnimate,
        rightDesignScope,
        rightPointerAnimate,
        rightPointerScope,
    ])
    return (
        <section className="py-24 overflow-x-clip" style={{
            cursor:"url('/images/cursor-you.svg'), auto"
        }}>
            <div className="container relative mx-auto">
                <motion.div 
                ref={leftDesignscope} 
                drag
                initial={{opacity:0, y:100,x:-100}}
                className="absolute left-0 top-16 hidden cursor-grab active:cursor-grabbing lg:block">
                    <ProfileSidebarCard />
                </motion.div>
                <motion.div 
                ref={leftPointerscope}
                 initial={{opacity:0, y:100,x:-200}}
                className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Shubham"/>
                </motion.div>
                <motion.div
                ref={rightDesignScope}
                initial={{opacity:0 , x:100,y:100}}
                drag
                className="absolute -right-64 -top-16 hidden lg:block">
                    <AddProfileCard />
                </motion.div>
               
                <motion.div 
                ref={rightPointerScope}
                initial={{opacity:0,x:275,y:100}}
                className="absolute right-80 -top-4 hidden lg:block">
                    
                </motion.div>
                {/* <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                    $7.5M seed round raised
                    </div>
                    </div> */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Turning complex problems into elegant solutions.
                    </h1>
                <p className="text-center text-xl text-foreground/70 mt-8 max-w-2xl mx-auto">
                    I&apos;m a full-stack developer and AI enthusiast building scalable applications and intelligent products. I love exploring new technologies, solving challenging problems, and bringing ambitious ideas to life through code.
                 </p>
                 <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input 
                    type="email" 
                    placeholder="Enter your email here...." 
                    className="bg-transparent px-4 md:flex-1 w-full"
                    />
                    <Button 
                    type="submit" 
                    variant="primary"
                    size="sm"
                    className="whitespace-nowrap"
                    >
                        Sign Up
                        </Button>
                 </form>
            </div>
        </section>
    );
}
