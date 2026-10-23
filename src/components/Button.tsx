import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority"

const classes = cva('border h-12 rounded-full px-6 font-medium',{
    variants:{
        variant:{
            primary:'bg-[#B7FF3C] text-[#080A08] border-[#B7FF3C] border-b-4 shadow-[0_3px_0_0_#B7FF3C] hover:brightness-105 active:translate-y-[2px] active:border-b-2 active:shadow-none transition-all',
            secondary:'bg-[#121612] text-[#F5F7F2] border-[#28321E] border-b-4 shadow-[0_3px_0_0_#28321E] hover:border-[#B7FF3C] active:translate-y-[2px] active:border-b-2 active:shadow-none transition-all',
        },
        size:{
            sm:"h-10",
        }
    }
})

export default function Button(props:{variant:"primary" | "secondary";size?:"sm"; } & ButtonHTMLAttributes<HTMLButtonElement>){
    const {variant ,size, className, ...otherProps} = props;
    return <button className={classes({variant,size, className,})}
    {...otherProps}
    />
}
