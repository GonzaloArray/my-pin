export const Login = () => {
  return (
    <div className="flex-1 container mx-auto flex justify-center mt-20 animate__animated animate__fadeIn">
      <div className="flex flex-col ">
        <div className="flex flex-col border-b border-b-white-100 py-10 gap-4">
          <h1 className="text-center mb-5 font-bold">Log In to <span className="text-lime-500">Melty.</span></h1>
          <button type="button" className="bg-gray-500 p-3 rounded-md w-full md:w-[300px] transition-all hover:bg-gray-400">Continue with Google</button>
          <button type="button" className="bg-gray-500 p-3 rounded-md w-full md:w-[300px] transition-all hover:bg-gray-400">Continue with Github</button>
        </div>
        <h2 className="text-center py-3 text-blue-400 text-base font-light hover:underline hover:underline-offset-4 transition-all">Continue with email</h2>
      </div>
    </div>
  )
}
