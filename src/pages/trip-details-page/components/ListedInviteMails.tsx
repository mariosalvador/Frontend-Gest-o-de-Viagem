import { CircleDashed, CircleCheck, UserCog } from "lucide-react"
import { Button } from "../../../components/button"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { api } from "../../../services/api";


interface IParticipantsData {
    id: string;
    name: string;
    email: string;
    is_confirmed: boolean;
}

export const ListedInviteMails = () => {
    const { tripId } = useParams();
    const [participants, setParticipants] = useState<IParticipantsData[] | undefined>();

    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
    }, [tripId]);


    return (

        <div className="space-y-6">
            <h2 className="text-zinc-50 font-semibold text-xl">Convidados</h2>

            <div className="flex flex-col gap-4" >
                {
                    participants?.map((participants,index) => (
                        <span key={participants.id} className="w-full gap-2 flex justify-between items-center">
                            <div>
                                <h3 className="text-zinc-100 text-md">{participants.name ?? `Convidado ${index}` }</h3>
                                <span className="block text-zinc-400 text-xs truncate">
                                    {participants.email}
                                </span>
                            </div>

                            {
                                participants.is_confirmed ? 
                                (<CircleCheck className="size-5 text-lime-400 shrink-0" />):(<CircleDashed className="size-5 text-zinc-400 shrink-0" /> )
                            }
                        </span>
                    ))
                }
            </div>

            <Button type="submit" variant={"secondary"} size="full" >
                <UserCog className="size-5 text-zinc-400 " />
                Gerenciar convidados
            </Button>

        </div>
    )
}