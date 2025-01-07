import Link from "next/link";
export function Sidebar(props: {
  menuItems: { id: number; title: string; icon: any }[];
}) {
  return (
    <div className="lg:h-[calc(100vh-60px)] px-2 lg:w-[220px] lg:flex-col lg:fixed overflow-auto flex gap-2 xs:block text-center top-10">
      {props.menuItems.map((item) => (
        <Link
          href={"#category-" + item.id}
          key={item.id}
          className="light:hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-2 block xs:w-[120px] lg:w-auto text-center lg:text-left light:xs:bg-gray-300 light:lg:bg-white"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
