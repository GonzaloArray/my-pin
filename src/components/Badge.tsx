interface Props {
  children: React.ReactNode;
}

export const Badge = ({ children }: Props) => {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-50 px-4 py-4 text-2xl font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
      {children}
    </span>
  );
};
