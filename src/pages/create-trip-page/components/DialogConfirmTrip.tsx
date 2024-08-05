import { Mail, User, X } from "lucide-react"
import { FormEvent } from "react";
import { Button } from "../../../components/button";

interface DialogConfirmTripProps {
    handleIsDialogConfirmOpen: () => void;
    confirmTrip: (event: FormEvent<HTMLElement>) => void;
}


export const DialogConfirmTrip: React.FC<DialogConfirmTripProps> = ({ confirmTrip, handleIsDialogConfirmOpen }) => {


    return (
        <div className="bg-zinc-950/80 fixed inset-0 flex items-center justify-center"  >

            <div className="flex flex-col space-y-5 w-[600px] bg-zinc-900 rounded-xl px-5 py-6 " >

                <div className="text-left " >
                    <div className="flex justify-between items-center " >
                        <h1 className="text-xl font-medium text-white" >Confirmar criação da viagem</h1>
                        <button onClick={() => handleIsDialogConfirmOpen()} >
                            <X className="size-5 text-zinc-500 hover:text-zinc-300" />
                        </button>
                    </div>

                    <p className="text-sm text-zinc-500 text-start">Para concluir a criação da viagem para <span className="text-white font-semibold">Florianópolis, Brasil</span> nas datas de <span className="text-white font-semibold" >16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>

                </div>

                <form onSubmit={confirmTrip} className="space-y-3" >

                    <div className="flex h-[56px] px-2 gap-2 items-center bg-zinc-950 border border-zinc-800 rounded-md">
                        <User className="size-5 text-zinc-400" />
                        <input name="name" placeholder="Seu nome completo" className="bg-transparent text-md text-zinc-300 w-[70%]  outline-none" />
                    </div>

                    <div className="flex h-[56px] px-2 gap-2 items-center bg-zinc-950 border border-zinc-800 rounded-md">
                        <Mail className="size-5 text-zinc-400" />
                        <input name="email" type="email" placeholder="Seu e-mail pessoal" className="bg-transparent text-md text-zinc-300 w-[70%]  outline-none" />
                    </div>

                    <Button type="submit" variant={"primary"} size="full" >
                        Convidar
                    </Button>

                </form>

            </div>

        </div>
    )
}