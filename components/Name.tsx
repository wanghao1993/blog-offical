"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogName() {
  const pathName = usePathname();
  return (
    <div>
      <div>
        <Link
          href="/"
          className={`horizontal-underline hidden text-3xl font-extrabold sm:block ${
            pathName === "/" ? "horizontal-underline-active" : ""
          }`}
          aria-label="Isaac."
        >
          Isaac
        </Link>
      </div>
    </div>
  );
}
