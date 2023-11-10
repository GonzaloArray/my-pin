import { ReactNode } from "react"

interface Props{
  children: ReactNode,
  click?: () => void,
  isActive?: boolean
}

export const ButtonGenericAction = ({children, click, isActive}: Props) => {
  return (
    <button disabled={isActive} onClick={click} type="button" className={`border border-white-100 py-3 px-10  w-[200px] ${isActive ? 'opacity-50 cursor-not-allowed': 'hover:bg-white-100'}`}>
      {children}
    </button>
  )
}

export const ButtonActionSubmit = ({children, isActive}: Props) => {
  return (
    <button disabled={isActive} type="submit" className={`border border-blue-500 py-3 px-10  w-[200px] ${isActive ? 'opacity-50 cursor-not-allowed': 'hover:bg-white-100'}`}>
      {children}
    </button>
  )
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
    <button type="button" className="border border-white-100 py-3 px-10 hover:bg-white-100 hover:border-blue-300 w-[200px]">
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