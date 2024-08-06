import { Calendar, MapPin, Settings2 } from "lucide-react"
import { Button } from "../../../components/button"
import { useParams } from "react-router-dom"
import { api } from "../../../services/api";
import { useEffect, useState } from "react";
import { format } from "date-fns";


interface ITripData {
    id:string;
    destination:string;
    starts_at:string;
    ends_at:string;
    is_confirmed: boolean;
    
}

export const DestinationAndDateHeader = () => {

    const { tripId } = useParams();
    const [trip, setTrip] = useState<ITripData | undefined>()

    useEffect(() => {
        api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip))

    }, [tripId])

    const displayed = trip && trip.starts_at && trip.ends_at ? format(trip.starts_at, "d ' de ' LLL").concat(" até ").concat(format(trip.ends_at , "d ' de ' LLL")) : null;

    return (
        <header className="w-full h-16 px-6 bg-zinc-900 rounded-lg flex items-center justify-between shadow-shape " >
            <span className="flex items-center gap-2 text-zinc-100" >
                <MapPin className="size-5 text-zinc-400" />
                <input disabled type="text" value={trip?.destination} className="bg-transparent text-zinc-100 text-lg outline-none" />
            </span>

            <div className="flex items-center space-x-3">
                <div className="flex h-full gap-2 items-center" >
                    <Calendar className="size-5 text-zinc-400" />
                    <input disabled type="text" value={displayed?.toString()} className="bg-transparent text-zinc-100 text-lg outline-none" />
                </div>
                <div className="w-px h-7 bg-zinc-800" />

                <Button variant={"secondary"}>
                    Alterar local/data
                    <Settings2 />
                </Button>

            </div>
        </header>
    )
}