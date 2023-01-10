import { useRouter } from "next/router";

export const useCheckPath = () => {
  const pathName = useRouter().pathname;
  const checkPath = (path: string): Boolean => {
    return path === pathName;
  };

  return { checkPath };
};
