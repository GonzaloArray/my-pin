import React from "react";
import { JSFigure } from "../common/icon/Figure.icon";
import { Stack } from "../common/icon/Stack.icon";
import { BgCard } from "../common/icons/BgCard.icon";
import { Github } from "../common/icons/Github.icon";

interface Props {
  title: string;
  description: string;
  link: string;
  icon: string;
}

interface IconType {
  icon: React.ReactElement;
  name: string;
  id: string;
}


export const Card = ({ title, description, link, icon }: Props) => {
  const selectedIcon = (Stack as Record<string, IconType>)[icon];

  if (!selectedIcon) {
    return null;
  }

  const { icon: IconElement } = selectedIcon;

  return (
    <a
      target="__blank"
      href={link}
      className="cursor-pointer bg-slate-700 rounded-lg shadow-lg relative transition-all box-border md:hover:scale-105 md:hover:border h-[150px] md:h-[180px] 2xl:h-[230px] flex flex-col justify-center items-center overflow-hidden px-5 md:px-10"
    >
      <h2 className={`text-md md:text-2xl 2xl:text-3xl font-semibold text-lime-300 line-clamp-1 md:line-clamp-2 z-40`}>
        {title}
      </h2>

      <p className="z-40 text-white text-center text-sm md:text-lg mt-2 w-full line-clamp-2 md:line-clamp-3" style={{ wordBreak: 'break-all' }}>
        {description}
      </p>


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
    </a>
  );
};
