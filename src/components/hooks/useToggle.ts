import { useCallback, useState } from "react";

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen(() => !isOpen), [isOpen]);

  return { isOpen, toggle };
};
