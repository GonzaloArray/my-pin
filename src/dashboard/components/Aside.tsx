import { LinkAction } from "../data/LinkAction"
import { LinkActionAside } from "./LinkActionAside"

export const Aside = () => {
  return (
    <aside className="w-[300px] fixed top-[69px] bottom-0 border-r border-r-white-100 flex flex-col gap-3 p-5">
      {
        LinkAction.map((link) => (
          <LinkActionAside link={link.link}>
            <span>{link.name}</span>
          </LinkActionAside>
        ))
      }
    </aside>
  )
}
