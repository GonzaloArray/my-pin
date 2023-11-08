interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: Props) => {
  return (
    <span className={`relative inline-flex items-center rounded-md bg-gray-50 px-2 lg:px-6 py-4 text-2xl font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 text-center overflow-hidden ${className}`}>
      # {children}
    </span>
  );
};
