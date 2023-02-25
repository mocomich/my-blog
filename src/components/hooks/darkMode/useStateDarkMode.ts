import { useCallback, useEffect, useState } from "react";

type Result = (isDark: boolean) => {
  isDarkMode: boolean;
  toggleDarkMode: (isDark?: boolean) => void;
};

export const useStateDarkMode: Result = (isInitialDark: boolean) => {
  const [isDarkMode, toggleTheme] = useState<boolean>(isInitialDark);
  const toggleDarkMode = useCallback((isDark?: boolean) => {
    if (typeof isDark === "undefined") {
      toggleTheme((state) => !state);
      return;
    }

    toggleTheme((state) => !state);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};
