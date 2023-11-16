import { Outlet, Navigate } from 'react-router-dom'
import { useProfileStore } from '../store/authProfileStore'

export const PrivateRoute = () => {
  const user = useProfileStore((state) => state.user)

  // if (user === 'checking') {
  //   return <h2>cargando</h2>
  // }

  if (user.name === '') {
    return <Navigate to='/auth' />
  }

  return user.name.length && <Outlet />
}
