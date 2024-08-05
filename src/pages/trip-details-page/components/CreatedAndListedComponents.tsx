import { CircleCheck, CircleDashed, Plus } from "lucide-react"
import { Button } from "../../../components/button";


interface CreatedAndListedComponentsProps {
    openAndCloseDialogCreateActivity: () => void;
}

export const CreatedAndListedComponents = ({ openAndCloseDialogCreateActivity }: CreatedAndListedComponentsProps) => {
    return (
        <aside className="space-y-6 flex-1" >
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold text-zinc-50">Atividades</h1>
                
                <Button onClick={() => openAndCloseDialogCreateActivity()} variant={"primary"}>
                    <Plus className="size-5" />
                    Cadastrar atividade
                </Button>
            </div>

            <div className="space-y-7">
                <div className="space-y-2">
                    <span className="text-zinc-300 text-md flex gap-2 items-baseline">Dia 17
                        <span className="text-zinc-500 text-xs" >Sábado</span>
                    </span>
                    <p className="text-zinc-500 text-sm" >Nenhuma atividade cadastrada nessa data.</p>
                </div>


                <div className="space-y-2.5">
                    <span className="text-zinc-300 text-md flex gap-2 items-baseline">Dia 18
                        <span className="text-zinc-500 text-xs" >
                            Domingo
                        </span>
                    </span>

                    <div className="w-full h-10 px-4 flex items-center bg-zinc-900 shadow-shape rounded-xl">
                        <span className="flex gap-2 text-zinc-100 text-md">
                            <CircleCheck className="size-5 text-lime-300" />
                            Corrida de Kart
                        </span>
                        <span className="ml-auto">14:00h</span>
                    </div>

                    <div className="w-full h-10 px-4 flex items-center bg-zinc-900 shadow-shape rounded-xl">
                        <span className="flex gap-2 text-zinc-100 text-md">
                            <CircleCheck className="size-5 text-lime-300" />
                            Corrida de Kart
                        </span>
                        <span className="ml-auto">14:00h</span>
                    </div>

                    <div className="w-full h-10 px-4 flex items-center bg-zinc-900 shadow-shape rounded-xl">
                        <span className="flex gap-2 text-zinc-100 text-md">
                            <CircleDashed className="size-5 text-zinc-400" />
                            Corrida de Kart
                        </span>
                        <span className="ml-auto">14:00h</span>
                    </div>
                </div>

            </div>
        </aside>
    )

}