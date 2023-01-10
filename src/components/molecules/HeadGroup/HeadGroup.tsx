import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string;
};

export const HeadGroup = ({ title, children }: Props) => {
  return (
    <header className="flex items-end justify-between">
      <h2 className="text-6xl font-semibold text-black dark:text-white">{title}</h2>
      {children}
    </header>
  );
};
