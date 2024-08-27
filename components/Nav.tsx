import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const navList = [
    {
      title: "博客",
      path: "/blog",
    },
    {
      title: "关于我",
      path: "/about",
    },
  ];

  const pathName = usePathname();

  return (
    <div className="flex items-center text-lg ">
      {navList.map((nav) => (
        <Link
          href={nav.path}
          key={nav.path}
          className={`horizontal-underline mr-3 text-lg font-extrabold sm:block md:inline-block ${
            pathName === nav.path ? "horizontal-underline-active" : ""
          }`}
          aria-label={nav.title}
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
}
