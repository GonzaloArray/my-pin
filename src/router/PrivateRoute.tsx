import { Outlet, Navigate } from 'react-router-dom'
import { useProfileStore } from '../store/authProfileStore'

export const PrivateRoute = () => {
  const status = useProfileStore((state) => state.status)

  if (status === 'checking') {
    return <h2>cargando</h2>
  }

  if (status === 'not-authenticated') {
    return <Navigate to='/auth' />
  }

  return status === 'authenticated' && <Outlet />
}
