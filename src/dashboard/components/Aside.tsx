import { Arrow } from "../../common/icons/Arrow.icon"
import { useProfileStore } from "../../store/authProfileStore";
import { LinkAction } from "../data/LinkAction"
import { LinkActionAside } from "./LinkActionAside"

interface Props {
  toggle: boolean;
  setToggle: () => void;
}

export const Aside = ({toggle, setToggle}: Props) => {

  const user = useProfileStore(state=> state.user)

  return (
    <aside className={`w-[96%] md:w-[300px] fixed top-[69px] bottom-0 border-r border-r-white-100 flex flex-col gap-3 p-5 ${toggle ? "" : "-left-[93%] md:-left-[274px] z-40"
  }`}>
      <button
        onClick={() => setToggle()}
        className={`absolute z-40 top-8 bg-black border-l-2 border-t-2 border-b-2 border-lime-50 py-3 rounded-l-xl transition-all ${
          toggle ? "end-0 hover:px-5 -mr-3" : "rotate-180 px-2 -end-7"
        }`}
      >
        <Arrow className="opacity-1" />
      </button>
      {
        LinkAction.map((link, i) => (
          <LinkActionAside key={i} link={`/dashboard/${user.uid}/${link.link}`}>
            <span>{link.name}</span>
          </LinkActionAside>
        ))
      }
    </aside>
  )
}
