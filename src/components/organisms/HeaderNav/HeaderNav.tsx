import Link from "next/link";

import { HamburgerButton } from "@/components/atoms/HamburgerButton";
import { Logo } from "@/components/atoms/Logo";
import { ThemeToggleButton } from "@/components/atoms/ThemeToggleButton";
import { useDarkMode } from "@/components/hooks/useDarkMode";
import { useToggle } from "@/components/hooks/useToggle";
import { NavMenu } from "@/components/molecules/NavMenu";

export const HeaderNav = () => {
  const { isOpen, toggle } = useToggle();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="mx-auto w-full bg-white px-4 dark:bg-gray-800  md:flex md:items-center md:justify-between md:px-8 lg:max-w-7xl">
      <div className="flex w-full items-center justify-between py-3 md:py-5">
        <Link href="/">
          <Logo />
        </Link>
        <div className="ml-auto mr-3 grid content-center">
          <ThemeToggleButton isDarkMode={isDarkMode} toggle={toggleDarkMode} />
        </div>
        <HamburgerButton isOpen={isOpen} onClick={toggle} />
      </div>
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};
