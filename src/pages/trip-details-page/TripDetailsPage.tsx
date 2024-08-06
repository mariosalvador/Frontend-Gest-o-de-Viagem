import { FormEvent, useState } from "react"
import { DialogCreateActivity } from "./components/DialogCreateActivity"
import { CreatedAndListedComponents } from "./components/CreatedAndListedComponents"
import { ListedImportantLinks } from "./components/ListedImportantLinks"
import { ListedInviteMails } from "./components/ListedInviteMails"
import { DestinationAndDateHeader } from "./components/destinationAndDateHeader"
import { api } from "../../services/api"
import { useParams } from "react-router-dom"




export const TripDetailsPage = () => {
    const [isDialogCreateActivityOpen, setIsDialogCreateActivityOpen] = useState(false)
    const { tripId} = useParams();

    const openAndCloseDialogCreateActivity = () => {
        setIsDialogCreateActivityOpen(!isDialogCreateActivityOpen);

    }


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const occurs_at = data.get('date')?.toString();
        const title = data.get('tag')?.toString();

        const response = await api.post(`/trips/${tripId}/activities`,{
            occurs_at: occurs_at, 
            title: title
        })

        console.log(response.data.activityId)
        
        setIsDialogCreateActivityOpen(!isDialogCreateActivityOpen);
        window.document.location.reload();
        
    }

    return (
        <div className=" max-w-6xl px-6 py-10 m-auto space-y-8"  >
            <DestinationAndDateHeader />


            <main className="flex gap-16 h-full px-6 py-2 ">
                <CreatedAndListedComponents
                    openAndCloseDialogCreateActivity={openAndCloseDialogCreateActivity}
                />


                <aside className="flex flex-col w-80 h-full space-y-6 " >
                    <ListedImportantLinks />

                    <div className="w-full h-[0.5px] bg-zinc-800 " />

                    <ListedInviteMails />

                </aside>

                {
                    isDialogCreateActivityOpen && (
                        <DialogCreateActivity
                            handleSubmit={handleSubmit}
                            openAndCloseDialogCreateActivity={openAndCloseDialogCreateActivity}
                        />
                    )
                }

            </main>
        </div>
    )
} 