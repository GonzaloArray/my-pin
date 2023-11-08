import { ReactNode } from "react"

interface Props{
  children: ReactNode
}

export const AlertDanger = ({children}: Props) => {
  return (
    <div className="">
      {children}
    </div>
  )
}

export const AlertSuccess = ({children}: Props) => {
  return (
    <div className="">
      {children}
    </div>
  )
}

export const AlertInformation = ({children}: Props) => {
  return (
    <div className="text-blue-600 text-sm md:text-2xl">
      {children}
    </div>
  )
}
