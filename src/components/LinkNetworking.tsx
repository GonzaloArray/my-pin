import Style from "./LinkNetworking.module.css";
import { GithubPartial } from "../icons/GithubPartial";
import { Instagram } from "../icons/Instagram.icon";
import { Linkdnd } from "../icons/Linkdnd.icon";

import { LinkAction } from "./LinkAction";

interface Props{
  toggle: boolean
}

export const LinkNetworking = ({toggle}: Props) => {
  return (
    <div
      className={`absolute top-48 right-1 flex flex-col gap-2 h-[100px] items-end ${Style.table} `}
    >
      <div className={`bg-gray-400 rounded-lg z-100 ${toggle ? '': '-mr-8'}`}>
        <LinkAction href="link">
          <Linkdnd />
        </LinkAction>
        <LinkAction href="link">
          <GithubPartial />
        </LinkAction>
        <LinkAction href="link">
          <Instagram />
        </LinkAction>
      </div>
    </div>
  );
};
