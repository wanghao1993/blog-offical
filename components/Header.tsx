"use client";

import BlogName from "./Name";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import SectionContainer from "./SectionContainer";
import Menus from "./Menu/menu";
export default function Header() {
  const path = usePathname();
  return (
    path !== "/login" && (
      <SectionContainer className="sticky top-0 z-10 px-20">
        <SessionProvider>
          <header className="flex justify-between lg:py-4 py-2 items-center">
            <BlogName />
            <Menus />
          </header>
        </SessionProvider>
      </SectionContainer>
    )
  );
}
