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
    <div className="md:flex-row flex-col flex text-lg gap-4 ">
      {navList.map((nav) => (
        <Link
          href={nav.path}
          key={nav.path}
          style={{ color: "var(--text-color)" }}
          className={`horizontal-underline w-fit font-extrabold  ${
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
