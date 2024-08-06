import { CircleCheck, CircleDashed, Plus } from "lucide-react"
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";


interface CreatedAndListedComponentsProps {
    openAndCloseDialogCreateActivity: () => void;
}

interface IActivityData {
    id: string;
    date: string;
    activities: {
        occurs_at: string
        title: string;
        trip_id: string;
    }[]
}

export const CreatedAndListedComponents = ({ openAndCloseDialogCreateActivity }: CreatedAndListedComponentsProps) => {

    const { tripId } = useParams();
    const [activities, setActivities] = useState<IActivityData[] | undefined>()

    useEffect(() => {
        api.get(`/trips/${tripId}/activities`).then(response => setActivities(response.data.activities))
    }, [tripId])



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

                {
                    activities?.map(elementActivities => {
                        return (
                            <div key={elementActivities.id} className="space-y-2">
                                <span className="text-zinc-300 text-md flex gap-2 items-baseline">
                                    Dia {format(elementActivities.date, 'd')}
                                    <span className="text-zinc-500 text-xs" >{format(elementActivities.date, 'EEEE', { locale: ptBR })}</span>
                                </span>
                                {
                                    elementActivities.activities.length > 0 ? (
                                        <div className="space-y-2.5" >
                                            {
                                                elementActivities.activities.map(activity => {
                                                    return (
                                                        <div key={activity.trip_id} className="space-y-2.5">
                                                            <div className="w-full h-10 px-4 flex items-center bg-zinc-900 shadow-shape rounded-xl">
                                                                <span className="flex gap-2 text-zinc-100 text-md">
                                                                    <CircleDashed className="size-5 text-zinc-400" />
                                                                    {activity.title}
                                                                </span>
                                                                <span className="ml-auto">{format(activity.occurs_at, 'HH:mm')}h</span>
                                                            </div>
                                                        </div>


                                                    )
                                                })
                                            }
                                        </div>
                                    ) : (
                                        <p className="text-zinc-500 text-sm" >Nenhuma atividade cadastrada nessa data.</p>
                                    )
                                }

                            </div>
                        )
                    })
                }

                <div className="space-y-2.5">

                    <span className="text-zinc-300 text-md flex gap-2 items-baseline">
                        Dia 18
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

                </div>

            </div>
        </aside>
    )

}