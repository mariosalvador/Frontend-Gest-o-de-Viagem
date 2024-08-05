import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react";
import { Button } from "../../../components/button";

interface DialogConfirmMailsProps {
    handleIsDialogOpen: () => void;
    removeEmailInvite: (email: string) => void;
    emailInvite: string[];
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
}

export const DialogConfirmMails: React.FC<DialogConfirmMailsProps> = ({ addNewEmailToInvite,
    emailInvite,
    handleIsDialogOpen,
    removeEmailInvite }
) => {

    return (
        <div className="bg-zinc-950/80 fixed inset-0 flex items-center justify-center"  >

            <div className="flex flex-col space-y-5 w-[620px] bg-zinc-900 rounded-xl px-5 py-6 " >

                <div className="text-left " >
                    <div className="flex justify-between items-center " >
                        <h1 className="text-xl font-medium text-white" >Selecionar convidados</h1>
                        <button onClick={() => handleIsDialogOpen()} >
                            <X className="size-5 text-zinc-500 hover:text-zinc-300" />
                        </button>
                    </div>

                    <p className="text-sm text-zinc-500 text-start">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>

                </div>

                <div className="w-full flex flex-wrap gap-2 " >
                    {
                        emailInvite.map(email => {
                            return (
                                <section key={email} className="flex items-center gap-2 bg-zinc-800 rounded-md h-6 px-1 text-md text-zinc-300 font-light">
                                    {email}
                                    <X onClick={() => removeEmailInvite(email)} className="size-4" />
                                </section>
                            )
                        }

                        )
                    }
                </div>

                <div className="w-full h-[0.5px] bg-zinc-800 " />

                <form onSubmit={addNewEmailToInvite} className="flex h-[52px] px-2 gap-2 items-center border border-zinc-800 rounded-md">

                    <div className="flex items-center gap-2 flex-1 ">
                        <AtSign className="size-5 text-zinc-400" />
                        <input name="email" type="email" placeholder="Digite o e-mail do convidado" className="bg-transparent text-sm text-zinc-300  outline-none" />
                    </div>

                    <Button type="submit" variant={"primary"}>
                        Convidar
                        <Plus />
                    </Button>

                </form>

            </div>

        </div>
    )
}