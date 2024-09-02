import { getAllCategory } from "data/utils";
import Link from "next/link";

const getCategory = () => {
  return getAllCategory();
};
export default async function Category() {
  const categories = getCategory();

  return (
    <div className="border rounded-lg">
      <h2 className="px-4 py-2 border-b">分类</h2>
      <div className="flex p-4 space-x-2">
        {Object.keys(categories).map((item) => (
          <Link
            key={item}
            className=" p-1 text-white flex bg-primary-400 item-center justify-center rounded-sm text-xs"
            href={`/blog/category/${item}`}
          >
            <span>{item}</span>
            <span className="px-1  bg-white text-black ml-1 rounded-sm">
              {categories[item]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
