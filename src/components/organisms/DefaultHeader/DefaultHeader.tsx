import React, { memo } from "react";

import { HeaderNav } from "../HeaderNav";

export const DefaultHeader = memo(function DefaultHeaderBase() {
  return (
    <header className="z-50 flex w-full flex-wrap border-b border-gray-200 bg-white  dark:bg-gray-800 sm:flex-nowrap sm:justify-start">
      <HeaderNav />
    </header>
  );
});
