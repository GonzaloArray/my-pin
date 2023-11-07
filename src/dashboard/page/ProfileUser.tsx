import { SpacingContent } from "../../components/SpacingContent"
import { Title } from "../../components/Title"
import { Input } from "../components/Input"
import Pixel from '../../assets/pixel_banner.webp'
import { Avatar } from "../../components/Avatar"
import { Edit } from "../../common/icon/Edit.icon"

export const ProfileUser = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Title title="Banner" />
        <SpacingContent>
          <div className="flex justify-start gap-20 items-center">
            <div className="flex flex-col gap-5">
              <div className="relative">
                <button className="absolute right-4 top-4 bg-gray-600 hover:bg-gray-500 p-2 rounded-2xl">
                  <Edit/>
                </button>
                <img className="w-[600px]" src={Pixel} alt="asdfasd" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <Avatar />
            </div>
          </div>
        </SpacingContent>
      </div>
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
