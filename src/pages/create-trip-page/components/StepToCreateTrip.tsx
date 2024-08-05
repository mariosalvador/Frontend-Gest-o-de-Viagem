import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from "lucide-react"
import { Button } from "../../../components/button";


interface StepToCreateTrip {
    isKeepOn: boolean;
    handleIsKeepOn: () => void;
    emailInvite: string[];
    handleIsDialogOpen: () => void;
    handleIsDialogConfirmOpen: () => void;

}


export const StepToCreateTrip: React.FC<StepToCreateTrip> = ({ emailInvite, handleIsDialogConfirmOpen, handleIsDialogOpen, handleIsKeepOn, isKeepOn }) => {
    return (
        <div className="flex flex-col space-y-4">

            <div className="w-full h-16 flex items-center rounded-lg bg-zinc-900 px-4 shadow-shape gap-5" >

                <div className="flex h-full gap-2 items-center flex-1">
                    <MapPin className="size-6 text-zinc-400" />
                    <input disabled={isKeepOn} type="text" placeholder="Para onde você vai?" className="bg-transparent text-zinc-400 text-lg outline-none" />
                </div>

                <div className="flex h-full gap-2 items-center" >
                    <Calendar className="size-5 text-zinc-400" />
                    <input disabled={isKeepOn} type="text" placeholder="Quando?" className="bg-transparent text-zinc-400 text-lg outline-none" />
                </div>

                <div className="w-px h-7 bg-zinc-800" />

                {
                    isKeepOn ? (

                        <Button onClick={() => handleIsKeepOn()} variant={"secondary"} >
                            Alterar local/data
                            <Settings2 />
                        </Button>
                    ) : (
                        <Button onClick={() => handleIsKeepOn()} variant={"primary"} >
                            Continuar
                            <ArrowRight />
                        </Button>
                    )
                }

            </div>
            {
                isKeepOn && (
                    <div className="w-full h-16 flex items-center rounded-lg bg-zinc-900 px-4 shadow-shape gap-5" >

                        <button className="flex w-full h-full gap-2 items-center flex-1" onClick={() => handleIsDialogOpen()}>
                            <UserRoundPlus className="size-5 text-zinc-400" />
                            {
                                (emailInvite.length > 0) ? (
                                    <span className="bg-transparent text-zinc-50 text-lg outline-none" >{emailInvite.length} pessoa(s) convidada(s)</span>
                                ) : (
                                    <span className="bg-transparent text-zinc-400 text-lg outline-none" >Quem estará na viagem?</span>
                                )
                            }
                        </button>

                        <Button onClick={() => handleIsDialogConfirmOpen()} variant={"primary"} >
                            Confirmar Viagem
                            <ArrowRight />
                        </Button>
                    </div>
                )
            }
        </div>
    )
}