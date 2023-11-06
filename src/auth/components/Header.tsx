import { Link, useLocation } from 'react-router-dom'
import { Melty } from '../../common/components/Melty'


export const Header = () => {

  const location = useLocation()

  return (
    <div className='border-b border-b-white-100'>
      <header className='container mx-auto flex items-center justify-between md:py-2 p-3'>
        <Melty />

        <div className='flex gap-3 items-center'>
          <Link to={location.pathname === '/auth' ? '/auth/register' : '/auth'} className='border rounded-lg text-sm w-[80px] h-[42px] flex justify-center items-center bg-white-100'>
            {location.pathname === '/auth' ? 'Log Out' : 'Log In'}
          </Link>
        </div>
      </header>
    </div>
  )
}
