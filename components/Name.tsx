"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogName() {
  const pathName = usePathname();
  return (
    <Link
      href="/"
      className={`horizontal-underline  text-3xl font-extrabold  ${
        pathName === "/" ? "horizontal-underline-active" : ""
      }`}
      aria-label="Isaac Wang."
    >
      I.W
    </Link>
  );
}
