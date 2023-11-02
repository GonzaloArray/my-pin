import { ReactNode } from "react";

interface Props {
  children: ReactNode,
  href: string,
  className?: string
}

export const LinkAction = ({children, href, className}: Props) => {
  return (
    <a target="_blank" href={href} className={className}>
      {children}
    </a>
  );
};
