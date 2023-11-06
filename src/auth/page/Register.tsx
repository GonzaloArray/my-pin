import { Input } from "../components/Input"


export const Register = () => {
  return (
    <div className="flex-1 container mx-auto flex justify-center mt-20 animate__animated animate__fadeIn">
      <div className="flex flex-col gap-4 md:w-[400px]">
        <h1 className="text-center mb-5 font-bold">Log Out to <span className="text-lime-500">Melty.</span></h1>
        <form className="flex flex-col gap-8" action="">
          <Input name="Name" type="text" placeholder="Ex: Gonzalo Melty"/>
          <Input name="Last Name" type="text" placeholder="Ex: Arrayaran"/>
          <Input name="Email" type="email" placeholder="Ex: example@melty.com"/>
          <button type="submit" className="bg-white-100 p-2 rounded-md border border-white-100 hover:bg-gray-600 transition-colors font-light text-sm h-[43px]">Register</button>
        </form>
      </div>
    </div>
  )
}
