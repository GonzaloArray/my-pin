import { Navigate } from 'react-router-dom'
import { useProfileStore } from '../store/authProfileStore'
import { ReactNode } from 'react'

export const PrivateRoute = ({children}: {children: ReactNode}) => {
  const status = useProfileStore((state) => state.status)

  if (status === 'checking') {
    return <h2>cargando</h2>
  }

  if (status === 'not-authenticated') {
    return <Navigate to='/auth' />
  }

  return <>{children}</>
}
