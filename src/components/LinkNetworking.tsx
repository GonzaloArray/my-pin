import Style from "./LinkNetworking.module.css";
import { GithubPartial } from "../icons/GithubPartial";
import { Instagram } from "../icons/Instagram.icon";
import { Linkdnd } from "../icons/Linkdnd.icon";

import { LinkAction } from "./LinkAction";
import { KeyBoard } from "../icons/KeyBoard";

interface Props {
  toggle: boolean
}

export const LinkNetworking = ({ toggle }: Props) => {
  return (
    <div
      className={`absolute top-48 right-1 flex flex-col gap-2 h-[100px] items-end ${Style.table} `}
    >
      <div className={` bg-gray-400 rounded-lg z-100 ${toggle ? '' : '-mr-8'}`}>
        <LinkAction className={`relative hover:bg-black-100 p-2 flex justify-center items-center transition-all ${Style.link_active}`} href="link">
          <div className={Style.tooltip}>
            {KeyBoard.control1}
          </div>
          <Linkdnd />
        </LinkAction>
        <LinkAction className={`relative hover:bg-black-100 p-2 flex justify-center items-center transition-all ${Style.link_active}`} href="link">
          <div className={Style.tooltip}>
            {KeyBoard.control2}
          </div>
          <GithubPartial />
        </LinkAction>
        <LinkAction className={`relative hover:bg-black-100 p-2 flex justify-center items-center transition-all ${Style.link_active}`} href="link">
          <div className={Style.tooltip}>
            {KeyBoard.control3}
          </div>
          <Instagram />
        </LinkAction>
      </div>
    </div>
  );
};
