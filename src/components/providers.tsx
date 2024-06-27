"use client";

import { Provider } from "jotai";
import { FC, ReactNode } from "react";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider>{children}</Provider>;
};
