import { Calendar, MapPin, Settings2 } from "lucide-react"
import { FormEvent, useState } from "react"
import { DialogCreateActivity } from "./components/DialogCreateActivity"
import { CreatedAndListedComponents } from "./components/CreatedAndListedComponents"
import { ListedImportantLinks } from "./components/ListedImportantLinks"
import { ListedInviteMails } from "./components/ListedInviteMails"
import { Button } from "../../components/button"




export const TripDetailsPage = () => {
    const [isDialogCreateActivityOpen, setIsDialogCreateActivityOpen] = useState(false)

    const openAndCloseDialogCreateActivity = () => {
        setIsDialogCreateActivityOpen(!isDialogCreateActivityOpen);

    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div className=" max-w-6xl px-6 py-10 m-auto space-y-8"  >
            <header className="w-full h-16 px-6 bg-zinc-900 rounded-lg flex items-center justify-between shadow-shape " >
                <span className="flex items-center gap-2 text-zinc-100" >
                    <MapPin className="size-5 text-zinc-400" />
                    <input disabled type="text" value="Florianópolis, Brasil" className="bg-transparent text-zinc-100 text-lg outline-none" />
                </span>

                <div className="flex items-center space-x-3">
                    <div className="flex h-full gap-2 items-center" >
                        <Calendar className="size-5 text-zinc-400" />
                        <input disabled type="text" value="17 a 23 de Agosto" className="bg-transparent text-zinc-100 text-lg outline-none" />
                    </div>
                    <div className="w-px h-7 bg-zinc-800" />

                    <Button variant={"secondary"}>
                        Alterar local/data
                        <Settings2 />
                    </Button>

                </div>
            </header>


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