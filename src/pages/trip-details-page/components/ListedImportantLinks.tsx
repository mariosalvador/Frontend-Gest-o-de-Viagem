import { Link2, Plus } from "lucide-react"
import { Button } from "../../../components/button"


export const ListedImportantLinks = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-zinc-50 font-medium text-xl">Links importantes</h2>

            <div className="flex flex-col gap-4" >
                <span className="w-full gap-2 flex justify-between items-center">
                    <div>
                        <h3 className="text-zinc-100 text-md">Reserva do AirBnB</h3>
                        <a className="block text-zinc-400 text-xs truncate">
                            https://www.airbnb.com.br/rooms/1047000111111111111111111111111111111111111111111111111111111111111111111111
                        </a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 shrink-0" />
                </span>

                <span className="w-full gap-2 flex justify-between items-center">
                    <div>
                        <h3 className="text-zinc-100 text-md">Reserva do AirBnB</h3>
                        <a className="block text-zinc-400 text-xs truncate">
                            https://www.airbnb.com.br/rooms/1047000111111111111111111111111111111111111111111111111111111111111111111111
                        </a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 shrink-0" />
                </span>
            </div>

            <Button type="submit" variant={"secondary"} size="full" >
                <Plus className="size-5 text-zinc-400 " />
                Cadastrar novo link
            </Button>

        </div>
    )
}