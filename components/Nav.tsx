"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const navList = [
    {
      title: "博客",
      path: "/blog",
    },
    {
      title: "AI工具",
      path: "/ai-tools",
      target: "_blank",
    },
    {
      title: "关于我",
      path: "/about",
    },
  ];

  const pathName = usePathname();

  return (
    <div className="flex text-md gap-4 ">
      {navList.map((nav) => (
        <Link
          href={nav.path}
          key={nav.path}
          style={{ color: "var(--text-color)" }}
          className={`horizontal-underline w-fit font-extrabold  ${
            pathName === nav.path ? "horizontal-underline-active" : ""
          }`}
          target={nav.target || "_self"}
          aria-label={nav.title}
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
}
