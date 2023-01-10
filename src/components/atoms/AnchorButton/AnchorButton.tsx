import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"a"> & { disabled?: boolean };

export const AnchorButton: React.FC<Props> = ({ disabled, ...props }) => {
  return <a {...props} aria-disabled={disabled} className="hover:text-asset-blue mb-2  border border-black py-1 px-2 font-semibold text-black transition-all delay-75 hover:border-transparent dark:border-white dark:text-white " role="button" />;
};
