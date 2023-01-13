import { ReactElement } from "react";

import { DefaultFooter } from "../../molecules/DefaultFooter";
import { DefaultHeader } from "../../organisms/DefaultHeader";

export const DefaultLayout = (page: ReactElement) => {
  return (
    <div className="flex min-h-screen flex-col">
      <DefaultHeader />
      <div className="flex-grow bg-white dark:bg-gray-800">{page}</div>
      <DefaultFooter />
    </div>
  );
};
