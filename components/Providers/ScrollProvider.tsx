"use client";

import { useLenis } from "lenis/react";
import { createContext, ReactNode, useState } from "react";

interface ScrollValue {
  scrollY: number;
}

export const ScrollContext = createContext<ScrollValue>({
  scrollY: 0,
});

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [scrollY, setScrollY] = useState(0);

  const [mounted, setMounted] = useState(false);

  useLenis(({ scroll }: any) => {
    setMounted(true);
    setScrollY(scroll);
  });
  if (!mounted) return null;

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};
