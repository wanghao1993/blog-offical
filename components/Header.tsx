"use client";

import SectionContainer from "./SectionContainer";
import BlogName from "./Name";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import ThemeSwitch from "@/components/ThemeToggle";
import LoginInOut from "./LoginOutBtn";
export default function Header() {
  const path = usePathname();
  return (
    path !== "/login" && (
      <SectionContainer className="sticky top-0 z-10">
        <header className="flex justify-between py-5 items-center">
          <BlogName />
          <div className="flex items-center">
            <Nav />
            <ThemeSwitch />
            <LoginInOut />
          </div>
        </header>
      </SectionContainer>
    )
  );
}
