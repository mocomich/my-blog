import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"a">;

export const AnchorIcon: React.FC<Props> = ({ className, ...props }) => {
  return <a target="_blank" {...props} role="link" />;
};
