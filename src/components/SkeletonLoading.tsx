import { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";

interface Props {
  loading: boolean;
  count: number;
  children: ReactNode;
  className?: string;
}

export const SkeletonLoading = ({ children, loading, count, className }: Props) => {
  return (
    <>
      {loading && <Skeleton className={className} count={count} />}
      {children}
    </>
  );
};
