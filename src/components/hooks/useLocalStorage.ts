import { useCallback, useState } from "react";

type Props<T> = {
  initialValue: T;
  key: string;
};

type Result<T> = readonly [T, (v: T) => void];

export const useLocalStorage = <T>({ key, initialValue }: Props<T>): Result<T> => {
  const getItemFromStorage = <T>(key: string, defaultValue?: T) => {
    try {
      const val = JSON.parse(localStorage.getItem(key) + "");
      if (val !== null) {
        return val;
      }
      return localStorage.setItem(key, JSON.stringify(defaultValue));
    } catch {
      return defaultValue;
    }
  };

  const [state, setState] = useState<T>(getItemFromStorage<T>(key, initialValue));

  const setValue = useCallback(
    (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    },
    [key]
  );

  return [state, setValue] as const;
};
