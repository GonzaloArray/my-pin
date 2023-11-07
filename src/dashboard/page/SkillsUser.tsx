import { SpacingContent } from "../../components/SpacingContent"
import { Stack } from "../../components/Stack"
import { Title } from "../../components/Title"
import { ButtonAddNewProyect, ButtonDeleteProyect } from "../components/ButtonActionCrud"

export const SkillsUser = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Title title="Skills." />
        <SpacingContent>
          <Stack />
          <div className="flex gap-5 items-center mt-10">
            <ButtonAddNewProyect>
              Add New Skills
            </ButtonAddNewProyect>
            <ButtonDeleteProyect>
              Delete Skills
            </ButtonDeleteProyect>
          </div>
        </SpacingContent>
      </div>

      <div className="flex flex-col gap-3">
        <Title title="Learning." />
        <SpacingContent>
          <Stack />
          <div className="flex gap-5 items-center mt-10">
            <ButtonAddNewProyect>
              Add New Skills
            </ButtonAddNewProyect>
            <ButtonDeleteProyect>
              Delete Skills
            </ButtonDeleteProyect>
          </div>
        </SpacingContent>
      </div>
    </div>
  )
}
