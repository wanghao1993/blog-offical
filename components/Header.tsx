"use client";

import SectionContainer from "./SectionContainer";
import BlogName from "./Name";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import ThemeSwitch from "@/components/ThemeToggle";
import LoginInOut from "./LoginOutBtn";
import { SessionProvider } from "next-auth/react";
export default function Header() {
  const path = usePathname();
  return (
    path !== "/login" && (
      <SectionContainer className="sticky top-0 z-10">
        <SessionProvider>
          <header className="flex justify-between py-4 items-center">
            <BlogName />
            <div className="flex items-center">
              <Nav />
              <ThemeSwitch />
              <LoginInOut />
            </div>
          </header>
        </SessionProvider>
      </SectionContainer>
    )
  );
}
