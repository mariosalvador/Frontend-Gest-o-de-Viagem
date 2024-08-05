import { CircleDashed, CircleCheck, UserCog } from "lucide-react"
import { Button } from "../../../components/button"


export const ListedInviteMails = () => {
    return (

        <div className="space-y-6">
            <h2 className="text-zinc-50 font-semibold text-xl">Convidados</h2>

            <div className="flex flex-col gap-4" >
                <span className="w-full gap-2 flex justify-between items-center">
                    <div>
                        <h3 className="text-zinc-100 text-md">Jessica White</h3>
                        <span className="block text-zinc-400 text-xs truncate">
                            jessica.white44@yahoo.com
                        </span>
                    </div>
                    <CircleDashed className="size-5 text-zinc-400 shrink-0" />
                </span>

                <span className="w-full gap-2 flex justify-between items-center">
                    <div>
                        <h3 className="text-zinc-100 text-md">Jessica White</h3>
                        <span className="block text-zinc-400 text-xs truncate">
                            jessica.white44@yahoo.com
                        </span>
                    </div>
                    <CircleCheck className="size-5 text-lime-300" />
                </span>
                <span className="w-full gap-2 flex justify-between items-center">
                    <div>
                        <h3 className="text-zinc-100 text-md">Jessica White</h3>
                        <span className="block text-zinc-400 text-xs truncate">
                            jessica.white44@yahoo.com
                        </span>
                    </div>
                    <CircleDashed className="size-5 text-zinc-400 shrink-0" />
                </span>

                <span className="w-full gap-2 flex justify-between items-center">
                    <div>
                        <h3 className="text-zinc-100 text-md">Jessica White</h3>
                        <span className="block text-zinc-400 text-xs truncate">
                            jessica.white44@yahoo.com
                        </span>
                    </div>
                    <CircleCheck className="size-5 text-lime-300" />
                </span>

            </div>

            <Button type="submit" variant={"secondary"} size="full" >
                <UserCog className="size-5 text-zinc-400 " />
                Gerenciar convidados
            </Button>

        </div>
    )
}