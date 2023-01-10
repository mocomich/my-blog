import Link from "next/link";

const HEADER_PATHS = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/posts",
    title: "Posts",
  },
  {
    href: "/profile",
    title: "Profile",
  },
] as const;

type Props = {
  isOpen: boolean;
};

export const NavMenu: React.FC<Props> = ({ isOpen }) => {
  return (
    <div className={`mt-4 pb-3 md:mt-0 md:block md:pb-0 ${isOpen ? "block justify-self-center" : "hidden"}`}>
      <ul className="items-center justify-center md:flex md:space-x-6 md:space-y-0">
        {HEADER_PATHS.map((path) => (
          <li className="text-gray-600" key={path.title}>
            <Link className="hover:text-asset-blue flex h-12 min-h-full w-full items-center rounded-md pl-2 font-semibold hover:bg-gray-200 dark:text-white dark:hover:bg-gray-300 md:px-2" href={path.href}>
              {path.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
