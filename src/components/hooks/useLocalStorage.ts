import { useCallback, useState } from "react";

type Props<T> = {
  initialValue: T;
  key: string;
};

export const usePersistState = <T>({ key, initialValue }: Props<T>) => {
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
