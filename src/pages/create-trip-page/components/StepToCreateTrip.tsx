import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus, X } from "lucide-react"
import { Button } from "../../../components/button";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useState } from "react";
import { format } from "date-fns";



interface StepToCreateTrip {
    isKeepOn: boolean;
    handleIsKeepOn: () => void;
    emailInvite: string[];
    handleIsDialogOpen: () => void;
    handleIsDialogConfirmOpen: () => void;
    evenStartandEnd: DateRange | undefined;
    setEvenStartandEnd: (value:DateRange | undefined)=>void;
    setDestination:(value:string)=>void;

}


export const StepToCreateTrip: React.FC<StepToCreateTrip> = ({ emailInvite, handleIsDialogConfirmOpen, handleIsDialogOpen, handleIsKeepOn, isKeepOn, evenStartandEnd, setEvenStartandEnd,setDestination }) => {

    const [isOpenDialogDate, setIsOpenDialogDate] = useState(false);

    const handleOpenDialogDate = () => {
        setIsOpenDialogDate(!isOpenDialogDate);
    }

    const displayed = evenStartandEnd && evenStartandEnd.from && evenStartandEnd.to ? format(evenStartandEnd.from, "d ' de ' LLL").concat(" até ").concat(format(evenStartandEnd.to, "d ' de ' LLL")) : null;


    return (
        <div className="flex flex-col space-y-4">

            <div className="w-full h-16 flex items-center rounded-lg bg-zinc-900 px-4 shadow-shape gap-5" >

                <div className="flex h-full gap-2 items-center flex-1">
                    <MapPin className="size-6 text-zinc-400" />
                    <input onChange={(value=>setDestination(value.target.value))} disabled={isKeepOn} type="text" placeholder="Para onde você vai?" className="bg-transparent text-zinc-400 text-lg outline-none" />
                </div>

                <button onClick={() => handleOpenDialogDate()} disabled={isKeepOn} className="flex h-full gap-2 items-center bg-transparent text-zinc-400 text-lg outline-none" >
                    <Calendar className="size-5 text-zinc-400" />
                    <span className="" >{displayed || 'Quando?'}</span>
                </button>

                {
                    isOpenDialogDate && (
                        <div className="bg-zinc-950/80 fixed inset-0 flex items-center justify-center"  >

                            <div className=" flex flex-col justify-center space-y-5 bg-zinc-900 rounded-xl px-5 py-6 " >

                                <div className="text-left " >
                                    <div className="flex justify-between items-center  " >
                                        <h1 className="text-xl font-medium text-white" >Selecione a data</h1>
                                        <button onClick={() => handleOpenDialogDate()} >
                                            <X className="size-5 text-zinc-500 hover:text-zinc-300" />
                                        </button>
                                    </div>
                                </div>

                                <DayPicker mode="range" selected={evenStartandEnd} onSelect={setEvenStartandEnd} />

                            </div>

                        </div>)
                }




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