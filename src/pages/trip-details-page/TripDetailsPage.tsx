import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, Tag, UserCog, X } from "lucide-react"
import { FormEvent, useState } from "react"



export const TripDetailsPage = () => {
    const [isDialogCreateActivityOpen, setIsDialogCreateActivityOpen] = useState(false)

    const openAndCloseDialogCreateActivity = () => {
        setIsDialogCreateActivityOpen(!isDialogCreateActivityOpen);

    }

    const handleSubmit =(event: FormEvent<HTMLFormElement>)=>{
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

                    <button className="flex items-center rounded-lg text-zinc-200 font-medium bg-zinc-800 hover:bg-zinc-700x p-5 h-9 gap-3"  >
                        Alterar local/data
                        <Settings2 />
                    </button>

                </div>
            </header>


            <main className="flex gap-16 h-full px-6 py-2 ">
                <aside className="space-y-6 flex-1" >
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-semibold text-zinc-50">Atividades</h1>
                        <button onClick={() => openAndCloseDialogCreateActivity()} className="flex items-center rounded-lg text-lime-950 font-medium bg-lime-500 hover:bg-lime-400 p-5 h-7 gap-2" >
                            <Plus className="size-5" />
                            Cadastrar atividade
                        </button>
                    </div>

                    <div className="space-y-7">
                        <div className="space-y-2">
                            <span className="text-zinc-300 text-md flex gap-2 items-baseline">Dia 17
                                <span className="text-zinc-500 text-xs" >Sábado</span>
                            </span>
                            <p className="text-zinc-500 text-sm" >Nenhuma atividade cadastrada nessa data.</p>
                        </div>


                        <div className="space-y-2.5">
                            <span className="text-zinc-300 text-md flex gap-2 items-baseline">Dia 18
                                <span className="text-zinc-500 text-xs" >
                                    Domingo
                                </span>
                            </span>

                            <div className="w-full h-10 px-4 flex items-center bg-zinc-900 shadow-shape rounded-xl">
                                <span className="flex gap-2 text-zinc-100 text-md">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    Corrida de Kart
                                </span>
                                <span className="ml-auto">14:00h</span>
                            </div>

                            <div className="w-full h-10 px-4 flex items-center bg-zinc-900 shadow-shape rounded-xl">
                                <span className="flex gap-2 text-zinc-100 text-md">
                                    <CircleCheck className="size-5 text-lime-300" />
                                    Corrida de Kart
                                </span>
                                <span className="ml-auto">14:00h</span>
                            </div>

                            <div className="w-full h-10 px-4 flex items-center bg-zinc-900 shadow-shape rounded-xl">
                                <span className="flex gap-2 text-zinc-100 text-md">
                                    <CircleDashed className="size-5 text-zinc-400" />
                                    Corrida de Kart
                                </span>
                                <span className="ml-auto">14:00h</span>
                            </div>
                        </div>

                    </div>
                </aside>


                <aside className="flex flex-col w-80 h-full space-y-6 " >
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


                        <button type="submit" className="flex justify-center items-center rounded-lg text-zinc-200 font-medium bg-zinc-800 w-full p-5 h-9 gap-2" >
                            <Plus className="size-5 text-zinc-400 " />
                            Cadastrar novo link
                        </button>

                    </div>

                    <div className="w-full h-[0.5px] bg-zinc-800 " />

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


                        <button type="submit" className="flex justify-center items-center rounded-lg text-zinc-200 font-medium bg-zinc-800 w-full p-5 h-9 gap-2" >
                            <UserCog className="size-5 text-zinc-400 " />
                            Gerenciar convidados
                        </button>

                    </div>

                </aside>

                {
                    isDialogCreateActivityOpen && (<div className="bg-zinc-950/80 fixed inset-0 flex items-center justify-center"  >

                        <div className="flex flex-col space-y-5 w-[600px] bg-zinc-900 rounded-xl px-5 py-6 " >

                            <div className="text-left " >
                                <div className="flex justify-between items-center " >
                                    <h1 className="text-xl font-medium text-white" >Cadastrar atividade</h1>
                                    <button onClick={()=>openAndCloseDialogCreateActivity()} >
                                        <X className="size-5 text-zinc-500 hover:text-zinc-300" />
                                    </button>
                                </div>

                                <p className="text-sm text-zinc-500 text-start">Todos convidados podem visualizar as atividades.</p>

                            </div>

                            <form onSubmit={handleSubmit} className="space-y-3" >

                                <div className="flex h-[56px] px-2 gap-2 items-center bg-zinc-950 border border-zinc-800 rounded-md">
                                    <Tag className="size-5 text-zinc-400" />
                                    <input name="tag" placeholder="Qual a atividade?" className="bg-transparent text-md text-zinc-300 w-[70%]  outline-none" />
                                </div>

                                <div className="flex flex-1 h-[56px] px-2 gap-2 items-center bg-zinc-950 border border-zinc-800 rounded-md">
                                    <Calendar className="size-5 text-zinc-400" />
                                    <input name="date" type="datetime-local" placeholder="20 de agosto" className="bg-transparent text-md text-zinc-300 w-[100%]  outline-none [color-scheme:dark] " />
                                </div>


                                <button type="submit" className=" w-full flex items-center rounded-lg  justify-center text-lime-950 font-medium bg-lime-500 hover:bg-lime-400 p-5 h-11 gap-2" >
                                    Salvar atividade
                                </button>

                            </form>

                        </div>

                    </div>
                    )
                }

            </main>
        </div>
    )
} 