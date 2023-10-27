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
      className="cursor-pointer max-w-md bg-slate-700 p-6 rounded-lg shadow-lg relative hover:border hover:border-lime-50 transition-all"
    >
      <h2 className="text-2xl font-semibold text-lime-200 mt-4">{title}</h2>
      <p className="text-lime-50 mt-2">{description}</p>
      <div className="absolute top-0 right-0 p-4">
        <Github />
      </div>
    </a>
  );
};
