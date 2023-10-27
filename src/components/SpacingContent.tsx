import { ReactNode } from "react"

export const SpacingContent = ({children}: {children: ReactNode}) => {
  return (
    <div className='pl-10'>
      {children}
    </div>
  )
}
