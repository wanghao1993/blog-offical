"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const ProgressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="#ca27a7"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};
