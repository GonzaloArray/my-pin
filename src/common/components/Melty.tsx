import { Link } from 'react-router-dom'
import MeltyPNG from '../../assets/Melty.png'

export const Melty = () => {
  return (
    <Link to='/'>
      <img src={MeltyPNG} className='w-20' alt="Melty" />
    </Link>
  )
}
