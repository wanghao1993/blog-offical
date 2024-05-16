import Link from "next/link";
import ThemeSwitch from "./ThemeToggle";
import { usePathname } from "next/navigation";
export default function Nav() {
  const navList = [
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "About",
      path: "/about",
    },
  ];

  const pathName = usePathname();

  return (
    <div>
      {navList.map((nav) => (
        <Link
          href={nav.path}
          className={`horizontal-underline mr-3 hidden text-xl font-extrabold sm:block md:inline-block ${
            pathName === nav.path ? "horizontal-underline-active" : ""
          }`}
          aria-label={nav.title}
        >
          {nav.title}
        </Link>
      ))}
      <ThemeSwitch />
    </div>
  );
}
