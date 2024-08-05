import { ReactNode } from "react"




interface ButtonProps {
    children: ReactNode;
}


export const Button:React.FC<ButtonProps>=({children})=>{
    return(
        <button>
            {children}
        </button>
    )
}