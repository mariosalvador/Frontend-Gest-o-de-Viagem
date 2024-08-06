import { FormEvent, useState } from "react"
import { DialogConfirmTrip } from "./components/DialogConfirmTrip";
import { DialogConfirmMails } from "./components/DialogConfirmMails";
import { StepToCreateTrip } from "./components/StepToCreateTrip";
import { DateRange } from "react-day-picker";


export const CreateTripPage = () => {
  const [isKeepOn, setIsKeepOn] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [emailInvite, setEmailInvite] = useState(["mariopaulo@gmailcom"]);
  const [isDialogConfirmOpen, setIsDialogConfirmOpen] = useState(false);

  //
  const [destination, setDestination] = useState('');
  const [owner_name,setOwner_name] = useState('');
  const [owner_email,setOwner_email] = useState('')
  const [evenStartandEnd,setEvenStartandEnd] = useState<DateRange | undefined>(undefined);



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

  const confirmTrip = (event: FormEvent<HTMLElement>) => {
    event.preventDefault()

    console.log(destination)
    console.log(evenStartandEnd)
    console.log(emailInvite)
    console.log(owner_email)
    console.log(owner_name)



  }


  return (
    <main className="w-full h-screen flex items-center justify-center bg-mask bg-no-repeat bg-center" >
      <div className="max-w-3xl w-full  flex flex-col justify-center items-center text-center space-y-10 " >

        <div className="flex flex-col items-center gap-3">
          <img src="./logo.svg" alt="" />
          <p>Convide seus amigos e planeje sua próxima viagem!</p>

        </div>

        <StepToCreateTrip
          emailInvite={emailInvite}
          handleIsDialogConfirmOpen={handleIsDialogConfirmOpen}
          handleIsDialogOpen={handleIsDialogOpen}
          handleIsKeepOn={handleIsKeepOn}
          isKeepOn={isKeepOn}
          evenStartandEnd={evenStartandEnd}
          setDestination={setDestination}
          setEvenStartandEnd={setEvenStartandEnd}

        />



        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className=" text-zinc-300 underline " >termos de uso</a> e<a href="" className=" text-zinc-300 underline" > políticas de privacidade</a>.
        </p>

        {
          isDialogOpen && (
            <DialogConfirmMails
              addNewEmailToInvite={addNewEmailToInvite}
              emailInvite={emailInvite}
              handleIsDialogOpen={handleIsDialogOpen}
              removeEmailInvite={removeEmailInvite}
            />
          )
        }

        {
          isDialogConfirmOpen && (
            <DialogConfirmTrip
              confirmTrip={confirmTrip}
              handleIsDialogConfirmOpen={handleIsDialogConfirmOpen}
              setOwner_email={setOwner_email}
              setOwner_name={setOwner_name}
            />
          )
        }
      </div>
    </main>
  )
}