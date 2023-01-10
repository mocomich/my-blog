import { useCallback } from "react";

import { useRouter } from "next/router";

export const usePageTransition = () => {
  const router = useRouter();

  const backToPreviousPage = useCallback(() => {
    router.back();
  }, [router]);

  return { backToPreviousPage };
};
