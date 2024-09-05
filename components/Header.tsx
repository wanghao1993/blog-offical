"use client";

import BlogName from "./Name";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import SectionContainer from "./SectionContainer";
import Menus from "./Menu/menu";
export default function Header({ ...props }) {
  const path = usePathname();
  return (
    path !== "/login" && (
      <div className=" z-10 px-20" {...props}>
        <SessionProvider>
          <header className="flex justify-between md:py-4 py-2 items-center">
            <BlogName />
            <Menus />
          </header>
        </SessionProvider>
      </div>
    )
  );
}
