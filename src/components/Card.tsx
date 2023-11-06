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
      className="cursor-pointer bg-slate-700 py-6 px-2 md:p-6 rounded-lg shadow-lg relative transition-all box-border md:hover:scale-105 md:hover:border md:h-[180px] xl:h-[150px]"
    >
      <h2 className="text-md md:text-2xl font-semibold text-lime-300 mt-4 line-clamp-1 md:line-clamp-3">{title}</h2>
      <p className="text-white text-sm md:text-lg mt-2 line-clamp-1 md:line-clamp-3">{description}</p>
      <div className="absolute top-0 right-0 md:p-2">
        <Github />
      </div>
    </a>
  );
};
