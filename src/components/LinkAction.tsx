import { ReactNode } from "react";

interface Props {
  children: ReactNode,
  href: string,
}

export const LinkAction = ({children, href}: Props) => {
  return (
    <a target="_blank" href={href} className="hover:bg-black-100 p-2 flex justify-center items-center transition-all">
      {children}
    </a>
  );
};
