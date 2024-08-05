import { Calendar, Tag, X } from "lucide-react"
import { FormEvent } from "react";
import { Button } from "../../../components/button";

interface DialogCreateActivityProps {
    openAndCloseDialogCreateActivity: () => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}


export const DialogCreateActivity: React.FC<DialogCreateActivityProps> = ({ handleSubmit, openAndCloseDialogCreateActivity }) => {
    return (
        <div className="bg-zinc-950/80 fixed inset-0 flex items-center justify-center"  >

            <div className="flex flex-col space-y-5 w-[600px] bg-zinc-900 rounded-xl px-5 py-6 " >

                <div className="text-left " >
                    <div className="flex justify-between items-center " >
                        <h1 className="text-xl font-medium text-white" >Cadastrar atividade</h1>
                        <button onClick={() => openAndCloseDialogCreateActivity()} >
                            <X className="size-5 text-zinc-500 hover:text-zinc-300" />
                        </button>
                    </div>

                    <p className="text-sm text-zinc-500 text-start">Todos convidados podem visualizar as atividades.</p>

                </div>

                <form onSubmit={handleSubmit} className="space-y-3" >

                    <div className="flex h-[56px] px-2 gap-2 items-center bg-zinc-950 border border-zinc-800 rounded-md">
                        <Tag className="size-5 text-zinc-400" />
                        <input name="tag" placeholder="Qual a atividade?" className="bg-transparent text-md text-zinc-300 w-[70%]  outline-none" />
                    </div>

                    <div className="flex flex-1 h-[56px] px-2 gap-2 items-center bg-zinc-950 border border-zinc-800 rounded-md">
                        <Calendar className="size-5 text-zinc-400" />
                        <input name="date" type="datetime-local" placeholder="20 de agosto" className="bg-transparent text-md text-zinc-300 w-[100%]  outline-none [color-scheme:dark] " />
                    </div>

                    <Button type="submit" variant={"primary"} size="full" >
                        Salvar atividade
                    </Button>

                </form>

            </div>

        </div>
    )
}