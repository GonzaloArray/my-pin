import { GithubPartial } from "../icons/GithubPartial"
import { Instagram } from "../icons/Instagram.icon"
import { Linkdnd } from "../icons/Linkdnd.icon"

import { LinkAction } from "./LinkAction"


export const LinkNetworking = () => {
  return (
    <div className="flex gap-4 h-[100px] items-end">
      <LinkAction href="link">
        <Linkdnd/>
      </LinkAction>
      <LinkAction href="link">
        <GithubPartial/>
      </LinkAction>
      <LinkAction href="link">
        <Instagram/>
      </LinkAction>
    </div>
  )
}
