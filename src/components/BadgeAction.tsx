import { ReactNode } from "react"
import { Badge } from "./Badge"
import Style from './BadgeAction.module.css'
import { Skill } from "../type";

interface Props {
  children: ReactNode,
  click: (skill: Skill) => void,
  skill: Skill,
  active?: boolean,
  icon?: string,
}

export const BadgeAction = ({ children, click, skill, active, icon = 'delete' }: Props) => {
  const action = {
    delete: { icon: '✖', color: 'text-red-500' },
    add: { icon: '⤴', color: 'text-red-500' },
  };

  const findAction = Object.entries(action)
    .filter((a): a is [string, { icon: string; color: string }] => a[0] === icon && typeof a[1] !== 'string');
  const activeNameAction = findAction[0][1].icon;

  return (
    <Badge className={`${active ? 'opacity-50 cursor-not-allowed': ''}`}>
      <button type="button" disabled={active} onClick={() => click(skill)} className={`absolute top-0 right-2  hover:scale-105 transition-all ${Style[icon]} ${active ? ' cursor-not-allowed': ''}`}>
        {
          activeNameAction
        }
      </button>
        {children}
    </Badge>
  )
}
