import { Outlet } from 'react-router-dom'
import { UserDescription } from '../components/UserDescription'

export const LayoutDashboard = () => {
  return (
    <div className='h-screen flex flex-col lg:flex-row'>
      <UserDescription />
      <Outlet />
    </div>
  )
}
