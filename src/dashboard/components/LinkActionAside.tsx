import { ReactNode } from "react"
import { Link } from "react-router-dom"
interface Props {
  children: ReactNode
  link: string
}

export const LinkActionAside = ({children, link}: Props) => {
  return (
    <Link to={link} className="bg-white-100 p-2 rounded-md hover:bg-slate-500 transition-all">
      {children}
    </Link>
  )
}
