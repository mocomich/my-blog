import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title: string;
};

export const HeadGroup = ({ title, children }: Props) => {
  return (
    <header className="flex items-end justify-between">
      <h2 className="text-4xl font-semibold text-black dark:text-white md:text-6xl">{title}</h2>
      {children}
    </header>
  );
};
