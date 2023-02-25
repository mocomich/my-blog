import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"a"> & { disabled?: boolean };

export const AnchorButton: React.FC<Props> = ({ disabled, ...props }) => {
  return <a {...props} aria-disabled={disabled} className="mb-2 border  border-black py-1 px-2 font-semibold text-black transition-all delay-75 hover:border-transparent hover:text-asset-blue dark:border-white dark:text-white dark:hover:bg-gray-700 " role="button" />;
};
