import { useCallback } from "react";

import { useLocalStorage } from "../useLocalStorage";

import { useStateDarkMode } from "./useStateDarkMode";

const Theme = {
  Dark: "dark",
  Light: "light",
} as const;

export const useDarkMode = () => {
  const [state, setState] = useLocalStorage<(typeof Theme)[keyof typeof Theme]>({ initialValue: Theme["Dark"], key: "darkMode" });
  const { isDarkMode, toggleDarkMode } = useStateDarkMode(Boolean(state !== Theme["Light"]));

  const persistToggle = useCallback(
    (isDark: boolean) => {
      toggleDarkMode(isDark);
      setState(isDarkMode ? Theme.Light : Theme.Dark);
    },
    [setState, toggleDarkMode, isDarkMode]
  );

  return { isDarkMode, toggle: persistToggle };
};
