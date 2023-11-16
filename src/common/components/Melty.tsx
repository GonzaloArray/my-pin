import { Link } from 'react-router-dom'
import MeltyPNG from '../../assets/Melty.png'
import { useProfileStore } from '../../store/authProfileStore'

export const Melty = () => {
  const user = useProfileStore((state) => state.user)
  return (
    <Link to={`/${user.uid}`}>
      <img src={MeltyPNG} className='w-20' alt="Melty" />
    </Link>
  )
}
