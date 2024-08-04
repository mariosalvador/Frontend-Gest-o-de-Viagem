

export const App = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center" >
      <div className="max-w-3xl w-full  flex flex-col justify-center items-center text-center space-y-10" >

        <p>Convide seus amigos e planeje sua próxima viagem!</p>

        <div className="w-full h-16 flex items-center justify-between rounded-lg bg-zinc-900 px-4 shadow-shape" >

          <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-zinc-400 text-lg outline-none" />
          <input type="text" placeholder="Quando?" className="bg-transparent text-zinc-400 text-lg outline-none" />
          <button>Continuar</button>

        </div>

        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className=" text-zinc-300 underline " >termos de uso</a> e<a href="" className=" text-zinc-300 underline" > políticas de privacidade</a>.
        </p>

      </div>
    </main>
  )
}