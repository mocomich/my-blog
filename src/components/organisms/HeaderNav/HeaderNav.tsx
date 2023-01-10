import Link from "next/link";

import { HamburgerButton } from "@/components/atoms/HamburgerButton";
import { Logo } from "@/components/atoms/Logo";
import { useToggle } from "@/components/hooks/useToggle";
import { NavMenu } from "@/components/molecules/NavMenu";

export const HeaderNav = () => {
  const { isOpen, toggle } = useToggle();

  return (
    <nav className="mx-auto w-full justify-between bg-white px-4 dark:bg-gray-800 md:flex md:items-center md:px-8 lg:max-w-7xl">
      <div className="flex items-center justify-between py-3 md:block md:py-5">
        <Link href="/">
          <Logo />
        </Link>
        <HamburgerButton isOpen={isOpen} onClick={toggle} />
      </div>
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};
