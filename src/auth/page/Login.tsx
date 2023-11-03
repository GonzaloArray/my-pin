export const Login = () => {
  return (
    <div className="flex-1 container mx-auto flex justify-center mt-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-center mb-5 font-bold">Log In to <span className="text-lime-500">Melty.</span></h1>
        <button type="button" className="bg-gray-500 p-3 rounded-md w-full md:w-[300px] transition-all hover:bg-gray-400">Continue with Google</button>
        <button type="button" className="bg-gray-500 p-3 rounded-md w-full md:w-[300px] transition-all hover:bg-gray-400">Continue with Github</button>
      </div>
    </div>
  )
}
