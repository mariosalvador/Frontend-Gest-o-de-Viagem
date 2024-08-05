import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants";


const buttonVariant = tv({
    base:'rounded-lg font-medium flex items-center gap-2 justify-center',
    variants:{
        variant:{
            primary:'bg-lime-500 text-lime-950 hover:bg-lime-400',  
            secondary:'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
        },
        size:{
            default:'h-9 p-5',
            full:'w-full h-11'
        }
    },
    defaultVariants:{
        variant:'primary',
        size:'default'
    }
})


interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariant> {
    children: ReactNode;
}


export const Button:React.FC<ButtonProps>=({children,size ,variant,...props})=>{
    return(
        <button {...props} className={buttonVariant({variant,size})}  >
            {children}
        </button>
    )
}