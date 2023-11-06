import { SpacingContent } from "../../components/SpacingContent"
import { Title } from "../../components/Title"
import { Input } from "../components/Input"

export const ProfileUser = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Title title="Name" />
        <SpacingContent>
          <Input name="name" placeholder="Ex: Melty Smile" type="text" />
        </SpacingContent>
      </div>
      <div className="flex flex-col gap-3">
        <Title title="Tittle" />
        <SpacingContent>
          <Input name="tittle" placeholder="Ex: Hello :), My name is Julian Melty." type="text" />
        </SpacingContent>
      </div>
      <div className="flex flex-col gap-3">
        <Title title="Description" />
        <SpacingContent>
          <textarea className="w-full p-5 bg-transparent border-b border-white-100 font-bold text-3xl outline-none" name="description" rows={5}>
            I’m from Buenos Aires, Argentina. I’m working with JS since 2022. My goal is to learn new technologies and become a FrontEnd Architect. I code in JavaScript, React, Sass
          </textarea>
        </SpacingContent>
      </div>
      <div>
        <button className="border border-white-100 py-3 px-10 hover:bg-white-100">
          Save Profile
        </button>

      </div>
    </div>
  )
}
