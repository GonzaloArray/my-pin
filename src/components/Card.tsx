import { JSFigure } from "../common/icon/Figure.icon";
import { BgCard } from "../icons/BgCard.icon";
import { Github } from "../icons/Github.icon";

interface Props {
  title: string;
  description: string;
  link: string;
}

export const Card = ({ title, description, link }: Props) => {
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
        <JSFigure />
      </div>
    </a>
  );
};
