"use client";

import SectionContainer from "./SectionContainer";
import BlogName from "./Name";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import { SessionProvider, useSession } from "next-auth/react";

export default function Header() {
  const path = usePathname();
  return (
    path !== "/login" && (
      <SectionContainer>
        <header className="h-12 flex justify-between py-3 items-center">
          <BlogName />
          <Nav />
        </header>
      </SectionContainer>
    )
  );
}
