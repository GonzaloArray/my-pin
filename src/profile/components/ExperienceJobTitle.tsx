import { ReactNode } from 'react'
import Style from './ExperienceJobTitle.module.css'

interface Props {
  children: ReactNode
}
export const ExperienceJobTitle = ({children}: Props) => {
  return (
    <h2 className={`md:text-5xl 2xl:text-7xl ${Style.experienceTitle}`}>{children}</h2>
  )
}
