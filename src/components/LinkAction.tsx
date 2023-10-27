import { ReactNode } from "react";

interface Props {
  children: ReactNode,
  href: string,
}

export const LinkAction = ({children, href}: Props) => {
  return (
    <a target="_blank" href={href} className="bg-blue-900 rounded-xl w-[60px] h-[60px] flex justify-center items-center transition-all hover:border border-spacing-2 border-lime-200">
      {children}
    </a>
  );
};
