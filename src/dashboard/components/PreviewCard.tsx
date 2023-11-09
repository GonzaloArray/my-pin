import React, { ReactNode, useEffect, useState } from "react";
import { JSFigure } from "../../common/icon/Figure.icon"
import { BgCard } from "../../icons/BgCard.icon"
import { Github } from "../../icons/Github.icon";
import { StackItem } from "../../type";
import { Stack } from "../../common/icon/Stack.icon";

interface Props {
  children: ReactNode;
  id?: string;
  className: string;
  icon: string
}

export const PreviewCard = ({ children, className, icon }: Props) => {
  const [transform, setTransform] = useState('none');

  useEffect(() => {
    const cardProyectElm = document.getElementById("cardProyect");
    if (!cardProyectElm) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { x, y, width, height } = cardProyectElm.getBoundingClientRect();
      const degreeX = (e.clientY - (y + height / 2)) * 0.1;
      const degreeY = (e.clientX - (x + width / 2)) * -0.1;

      setTransform(`
        perspective(1000px)
        rotateX(${degreeX}deg)
        rotateY(${degreeY}deg)
      `);
    };

    const handleMouseLeave = () => {
      setTransform('none');
    };

    cardProyectElm.addEventListener("mousemove", handleMouseMove);
    cardProyectElm.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardProyectElm.removeEventListener("mousemove", handleMouseMove);
      cardProyectElm.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const stackEntries = Object.entries(Stack) as [string, StackItem][];
  const iconStack = stackEntries.find(([, stack]) => stack.name === icon)

  return (
    <div
      /* Mejorar esta parte para que cuando edites o envies algo no aparezca el efecto 3d */
      // id="cardProyect"
      className={className}
      style={{ transform }}
    >
      <div className="p-20 z-40">
        {children}
      </div>
      <div className="absolute top-0 right-0 md:p-2 z-40">
        <Github />
      </div>
      <div className="absolute z-0 h-full w-full [mask-image:linear-gradient(black_10%,transparent)]">
        <BgCard />
      </div>
      <div className="absolute z-10 overflow-y opacity-40 -right-8 -bottom-10 h-full flex items-end">
        <JSFigure>
          {iconStack?.[1]?.icon && React.cloneElement(iconStack[1].icon, {
            width: "190",
            height: "190",
          })}
        </JSFigure>
      </div>
    </div>
  );
}
