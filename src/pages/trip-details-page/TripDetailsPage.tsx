import { Calendar, MapPin, Settings2 } from "lucide-react"


export const TripDetailsPage = () => {
    return (
        <div className=" px-6 py-10 m-auto space-y-8"  >
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

                    <button className="flex items-center rounded-lg text-zinc-200 font-medium bg-zinc-800 hover:bg-zinc-700x p-5 h-9 gap-3"  >
                        Alterar local/data
                        <Settings2 />
                    </button>

                </div>
            </header>


            <main className="flex gap-16 h-full ">
                <aside className="flex flex-1 " >Left</aside>
                <aside className="flex " >Right</aside>
            </main>
        </div>
    )
} 