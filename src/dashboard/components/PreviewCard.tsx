import { useEffect, useState } from "react";
import { JSFigure } from "../../common/icon/Figure.icon"
import { BgCard } from "../../icons/BgCard.icon"
import { Github } from "../../icons/Github.icon"

interface Props {
  title: string;
  description: string;
  id?: string;
  className: string
}

export const PreviewCard = ({ title, description, className }: Props) => {
  const [transform, setTransform] = useState('none');
  const [centerPoint, setCenterPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cardProyectElm = document.getElementById("cardProyect");
    if (!cardProyectElm) {
      return;
    }
    const { x, y, width, height } = cardProyectElm.getBoundingClientRect();

    setCenterPoint({ x: x + width / 2, y: y + height / 2 });

    const handleMouseMove = (e: MouseEvent) => {
      const degreeX = (e.clientY - centerPoint.y) * 0.1;
      const degreeY = (e.clientX - centerPoint.x) * -0.1;

      setTransform(`
        perspective(1000px)
        rotateX(${degreeX}deg)
        rotateY(${degreeY}deg)
      `);
    };

    const handleMouseLeave = () => {
      setTransform('none');
    }
  
    cardProyectElm.addEventListener("mousemove", handleMouseMove);
    cardProyectElm.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardProyectElm.removeEventListener("mousemove", handleMouseMove);
      cardProyectElm.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [centerPoint]);

  return (
    <div
      id="cardProyect"
      className={className}
      style={{ transform }}
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
        <JSFigure/>
      </div>
    </div>
  );
}
