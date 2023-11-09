import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

export const JSFigure = ({children}: Props) => {
  return (
    <figure className="-right-16 -bottom-16 w-[140px] h-[140px] md:w-[250px] md:h-[250px] -rotate-6 p-10 -z-10">
      {children}
    </figure>
  );
};
