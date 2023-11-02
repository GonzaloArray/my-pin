import { ReactNode } from "react"

export const SpacingContent = ({children}: {children: ReactNode}) => {
  return (
    <div className='pl-2 md:pl-10 relative'>
      {children}
    </div>
  )
}
