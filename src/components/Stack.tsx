import { AlertInformation } from "../common/components/Alert"
import { Skill } from "../type"
import { Badge } from "./Badge"
interface Props {
  skills: Skill[]
}
export const Stack = ({ skills }: Props) => {
  return (
    <div>
      <div className="flex gap-4 mt-3 flex-wrap">
        {skills.length === 0 && <AlertInformation>No empty Skills</AlertInformation>}
        {
          skills.map((skill) => (
            <Badge key={skill.id}>
              {skill.name}
            </Badge>
          ))
        }
      </div>
    </div>
  )
}
