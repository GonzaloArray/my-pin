import { ReactNode } from "react"

interface Props{
  children: ReactNode,
  click?: () => void
}


export const ButtonAddNewProyect = ({children, click}: Props) => {
  return (
    <button onClick={click} type="button" className="border border-white-100 py-3 px-10 hover:bg-white-100 w-[200px]">
      {children}
    </button>
  )
}

export const ButtonEditProyect = ({children}: Props) => {
  return (
    <button className="border border-white-100 py-3 px-10 hover:bg-white-100 hover:border-blue-300 w-[200px]">
      {children}
    </button>
  )
}

export const ButtonDeleteProyect = ({children}: Props) => {
  return (
    <button className="border border-white-100 bg-red-600 py-3 px-10 hover:bg-red-500 w-[200px]">
      {children}
    </button>
  )
}