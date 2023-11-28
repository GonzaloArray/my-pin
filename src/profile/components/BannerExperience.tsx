import { ExperienceJobTitle } from './ExperienceJobTitle'
import Style from './BannerExperience.module.css'

export const BannerExperience = () => {
  return (
    <div className={`flex justify-between ${Style.shawdonTitle}`}>
      <ExperienceJobTitle>
        React
      </ExperienceJobTitle>
      <ExperienceJobTitle>
        +4 Year Experience
      </ExperienceJobTitle>
    </div>
  )
}
