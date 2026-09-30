import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority"

const classes = cva('border h-12 rounded-full px-6 font-medium',{
    variants:{
        variant:{
            primary:'bg-blue-600 text-white border-blue-700 border-b-4 shadow-[0_3px_0_0_#1d4ed8] hover:bg-blue-500 active:translate-y-[2px] active:border-b-2 active:shadow-none transition-all',
            secondary:'bg-blue-600 text-white border-blue-700 border-b-4 shadow-[0_3px_0_0_#1d4ed8] hover:bg-blue-500 active:translate-y-[2px] active:border-b-2 active:shadow-none transition-all',
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
