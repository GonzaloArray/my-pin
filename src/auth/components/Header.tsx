import { Link } from 'react-router-dom'
import Melty from '../../assets/Melty.png'


export const Header = () => {
  return (
    <div className='border-b border-b-white'>
      <header className='container mx-auto flex items-center justify-between md:py-2 p-3'>
        <Link to='/'>
          <img src={Melty} className='w-20' alt="Melty" />
        </Link>

        <div className='flex gap-3 items-center'>
          <Link to='/auth' className='border-2 rounded-lg text-sm px-4 py-2 bg-white-100'>Log In</Link>
        </div>
      </header>
    </div>
  )
}
