import React from "react";
import { JSFigure } from "../../common/icon/Figure.icon"
import { BgCard } from "../../icons/BgCard.icon"
import { Github } from "../../icons/Github.icon"
import { Stack } from "../../common/icon/Stack.icon";

interface IconType {
  icon: React.ReactElement;
  name: string;
  id: string;
}

interface Props {
  title: string;
  description: string;
  id: string;
  className: string;
  icon: string;
  click: (id: string) => void;
}

export const CardProyect = ({ title, description, className, id, icon = "", click }: Props) => {
  const selectedIcon = (Stack as Record<string, IconType>)[icon];

  if (!selectedIcon) {
    return null;
  }

  const { icon: IconElement } = selectedIcon;

  return (
    <div
      onClick={() => click(id)}
      className={className}
    >
      <h2 className={`text-md md:text-2xl 2xl:text-3xl font-semibold text-lime-300 mt-4 line-clamp-1 md:line-clamp-2 text-center z-40`}>
        {title}
      </h2>

      <p className="z-50 text-white text-center text-sm md:text-lg mt-2 line-clamp-1 md:line-clamp-3">{description}</p>
      <div className="absolute top-0 right-0 md:p-2 z-40">
        <Github />
      </div>
      <div className="absolute z-0 h-full w-full [mask-image:linear-gradient(black_10%,transparent)]">
        <BgCard />
      </div>
      <div className="absolute z-10 overflow-y opacity-25 -right-8 -bottom-10 h-full flex items-end">
        <JSFigure>
          {icon && React.cloneElement(IconElement, {
            width: "190",
            height: "190",
          })}
        </JSFigure>
      </div>
    </div>
  )
}
