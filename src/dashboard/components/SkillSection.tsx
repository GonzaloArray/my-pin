import React from "react"
import { Stack } from "../../common/icon/Stack.icon"
import { Stack as StackV, StackItem } from "../../type";
import Style from './SkillSection.module.css'



interface Props {
  selectStackIcon: (stack: StackItem) => void;
  icon: string;
}

export const SkillSection = ({ selectStackIcon, icon }: Props) => {

  const stackEntries = Object.entries(Stack) as [string, StackV][];

  return (
    <div className={`animate__animated transition-all animate__fadeIn`}>
      <h2 className="text-center mb-10 text-2xl">Selecciona tu Stack</h2>
      <div className="flex flex-wrap justify-center items-center gap-10 ">
        {stackEntries.map(([key, stack]) => (
          <button
            type="button"
            key={key}
            onClick={() => selectStackIcon({name: stack.name, id: stack.id})}
            className={`hover:scale-125 transition-all relative ${icon === stack.name ? `${Style.activeSkill}` : ''}`}
          >
            {stack?.icon && React.cloneElement(stack.icon, {
              width: "80",
              height: "80",
            })}
          </button>
        ))}
      </div>
    </div>
  )
}
