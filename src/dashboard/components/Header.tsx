import { Melty } from "../../common/components/Melty"


export const Header = () => {
  return (
    <div className='fixed left-0 right-0 top-0 border-b border-b-white-100 z-40 bg-black'>
      <header className="container mx-auto flex items-center justify-between md:py-2 p-3">
        <Melty />

        <div className="flex gap-3">
          <h3>Home</h3>
          <h3>Contact</h3>
        </div>
      </header>
    </div>
  )
}
