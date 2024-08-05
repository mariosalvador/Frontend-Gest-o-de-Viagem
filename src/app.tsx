import { ArrowRight, AtSign, Calendar, Mail, MapPin, Plus, Settings2, User, UserRoundPlus, X } from "lucide-react"
import { FormEvent, useState } from "react"


export const App = () => {
  const [isKeepOn, setIsKeepOn] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [emailInvite, setEmailInvite] = useState(["mariopaulo@gmailcom"]);
  const [isDialogConfirmOpen, setIsDialogConfirmOpen] = useState(false);

  const handleIsKeepOn = () => {
    setIsKeepOn(!isKeepOn);
  }

  const handleIsDialogOpen = () => {
    setIsDialogOpen(!isDialogOpen);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget);

    const email = data.get('email')?.toString()

    if (!email) return;

    if (emailInvite.includes(email)) return alert(`${email} já foi adicionado!`);

    setEmailInvite([...emailInvite, email])
    event.currentTarget.reset();

  }

  const removeEmailInvite = (emailToDelete: string) => {
    const newListEmailInvite = emailInvite.filter((filterEmail) => {
      return filterEmail != emailToDelete;
    })

    setEmailInvite(newListEmailInvite);
  }

  const handleIsDialogConfirmOpen = () => {
    setIsDialogConfirmOpen(!isDialogConfirmOpen);
  }


  return (
    <main className="w-full h-screen flex items-center justify-center bg-mask bg-no-repeat bg-center" >
      <div className="max-w-3xl w-full  flex flex-col justify-center items-center text-center space-y-10 " >

        <div className="flex flex-col items-center gap-3">
          <img src="./logo.svg" alt="" />
          <p>Convide seus amigos e planeje sua próxima viagem!</p>

        </div>

        <div className="flex flex-col space-y-4">

          <div className="w-full h-16 flex items-center rounded-lg bg-zinc-900 px-4 shadow-shape gap-5" >

            <div className="flex h-full gap-2 items-center flex-1">
              <MapPin className="size-6 text-zinc-400" />
              <input disabled={isKeepOn} type="text" placeholder="Para onde você vai?" className="bg-transparent text-zinc-400 text-lg outline-none" />
            </div>

            <div className="flex h-full gap-2 items-center" >
              <Calendar className="size-5 text-zinc-400" />
              <input disabled={isKeepOn} type="text" placeholder="Quando?" className="bg-transparent text-zinc-400 text-lg outline-none" />
            </div>

            <div className="w-px h-7 bg-zinc-800" />

            {
              isKeepOn ? (
                <button className="flex items-center rounded-lg text-zinc-200 font-medium bg-zinc-800 hover:bg-zinc-700x p-5 h-9 gap-3" onClick={() => handleIsKeepOn()} >
                  Alterar local/data
                  <Settings2 />
                </button>) : (
                <button className="flex items-center rounded-lg text-lime-950 font-medium bg-lime-500 hover:bg-lime-400 p-5 h-9 gap-2" onClick={() => handleIsKeepOn()} >
                  Continuar
                  <ArrowRight />
                </button>
              )
            }



          </div>
          {
            isKeepOn && (
              <div className="w-full h-16 flex items-center rounded-lg bg-zinc-900 px-4 shadow-shape gap-5" >

                <button className="flex w-full h-full gap-2 items-center flex-1" onClick={() => handleIsDialogOpen()}>
                  <UserRoundPlus className="size-5 text-zinc-400" />
                  {
                    (emailInvite.length > 0) ? (
                      <span className="bg-transparent text-zinc-50 text-lg outline-none" >{emailInvite.length} pessoa(s) convidada(s)</span>
                    ) : (
                      <span className="bg-transparent text-zinc-400 text-lg outline-none" >Quem estará na viagem?</span>
                    )
                  }

                </button>

                <button onClick={() => handleIsDialogConfirmOpen()} className="flex items-center rounded-lg text-lime-950 font-medium bg-lime-500 hover:bg-lime-400 p-5 h-9 gap-2" >
                  Confirmar Viagem
                  <ArrowRight />
                </button>

              </div>
            )
          }
        </div>


        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className=" text-zinc-300 underline " >termos de uso</a> e<a href="" className=" text-zinc-300 underline" > políticas de privacidade</a>.
        </p>

        {
          isDialogOpen && (
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

                  <button type="submit" className="flex items-center rounded-lg text-lime-950 font-medium bg-lime-500 hover:bg-lime-400 p-5 h-9 gap-2" >
                    Convidar
                    <Plus />
                  </button>

                </form>

              </div>

            </div>
          )
        }

        {
          isDialogConfirmOpen && (
            <div className="bg-zinc-950/80 fixed inset-0 flex items-center justify-center"  >

              <div className="flex flex-col space-y-5 w-[600px] bg-zinc-900 rounded-xl px-5 py-6 " >

                <div className="text-left " >
                  <div className="flex justify-between items-center " >
                    <h1 className="text-xl font-medium text-white" >Confirmar criação da viagem</h1>
                    <button onClick={() => handleIsDialogConfirmOpen()} >
                      <X className="size-5 text-zinc-500 hover:text-zinc-300" />
                    </button>
                  </div>

                  <p className="text-sm text-zinc-500 text-start">Para concluir a criação da viagem para <span className="text-white font-semibold">Florianópolis, Brasil</span> nas datas de <span className="text-white font-semibold" >16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>

                </div>

                <form onSubmit={addNewEmailToInvite} className="space-y-3" >

                  <div className="flex h-[56px] px-2 gap-2 items-center bg-zinc-950 border border-zinc-800 rounded-md">
                    <User className="size-5 text-zinc-400" />
                    <input name="name" placeholder="Seu nome completo" className="bg-transparent text-md text-zinc-300 w-[70%]  outline-none" />
                  </div>

                  <div className="flex h-[56px] px-2 gap-2 items-center bg-zinc-950 border border-zinc-800 rounded-md">
                    <Mail className="size-5 text-zinc-400" />
                    <input name="email" type="email" placeholder="Seu e-mail pessoal" className="bg-transparent text-md text-zinc-300 w-[70%]  outline-none" />
                  </div>

                  <button type="submit" className=" w-full flex items-center rounded-lg  justify-center text-lime-950 font-medium bg-lime-500 hover:bg-lime-400 p-5 h-11 gap-2" >
                    Convidar
                  </button>

                </form>

              </div>

            </div>
          )
        }
      </div>
    </main>
  )
}