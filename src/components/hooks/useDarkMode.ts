import { useCallback, useEffect, useState } from "react";

import { useLocalStorage } from "./useLocalStorage";

const Theme = {
  Dark: "dark",
  Light: "light",
} as const;

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [state, setState] = useLocalStorage<(typeof Theme)[keyof typeof Theme]>({ initialValue: Theme.Dark, key: "theme" });
  useEffect(() => {
    if (state === "dark") {
      setIsDarkMode(true);
      document.querySelector("html")?.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [isDarkMode, state]);

  const toggleDarkMode = useCallback(() => {
    if (isDarkMode) {
      setState(Theme.Light);
      setIsDarkMode(false);
    } else {
      setState(Theme.Dark);
      setIsDarkMode(true);
    }
  }, [isDarkMode, setIsDarkMode, setState]);

  return { isDarkMode, toggleDarkMode };
};
