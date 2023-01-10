import Link from "next/link";

import { LINKS } from "./const";
import { useCheckPath } from "./hooks/useCheckPath";

export const PostsLinks = () => {
  const { checkPath } = useCheckPath();

  return (
    <ul className="flex w-full gap-12">
      {LINKS.map((link) => (
        <Link className={`px-4 py-2 text-2xl  ${checkPath(link.path) ? "decoration-asset-deepBlue font-bold text-black underline decoration-2 underline-offset-8  dark:text-white" : "text-gray-400 dark:text-gray-400"}`} href={link.path} key={link.path} role="listitem">
          {link.title}
        </Link>
      ))}
    </ul>
  );
};
