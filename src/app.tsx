import { ArrowRight, Calendar, MapPin } from "lucide-react"


export const App = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center" >
      <div className="max-w-3xl w-full  flex flex-col justify-center items-center text-center space-y-10" >

        <p>Convide seus amigos e planeje sua próxima viagem!</p>

        <div className="w-full h-16 flex items-center justify-between rounded-lg bg-zinc-900 px-4 shadow-shape" >
          <div className="flex h-full gap-2 items-center">
            <MapPin className="size-5 text-zinc-400" />
            <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-zinc-400 text-lg outline-none" />
          </div>

          <div className="flex h-full gap-2 items-center" >
            <Calendar className="size-5 text-zinc-400" />
            <input type="text" placeholder="Quando?" className="bg-transparent text-zinc-400 text-lg outline-none" />
          </div>

          <button className="flex items-center rounded-lg text-lime-950 font-medium bg-lime-500 hover:bg-lime-400 p-5 h-9 gap-2" >
            Continuar
            <ArrowRight />
          </button>

        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className=" text-zinc-300 underline " >termos de uso</a> e<a href="" className=" text-zinc-300 underline" > políticas de privacidade</a>.
        </p>

      </div>
    </main>
  )
}