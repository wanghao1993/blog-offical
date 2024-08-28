import { getAllTags } from "data/utils";
import Link from "next/link";

const getTags = async () => {
  return await getAllTags();
};
export default async function Tags() {
  const tags = await getTags();

  return (
    <div className="border rounded-lg">
      <h2 className="px-4 py-2 border-b">标签</h2>
      <div className="flex p-4 space-x-2">
        {Object.keys(tags).map((item) => (
          <Link
            key={item}
            className=" p-1 text-white flex bg-primary-400 item-center justify-center rounded-sm text-xs"
            href={`/blog/category/${item}`}
          >
            <span>{item}</span>
            <span className="px-1  bg-white text-black ml-1 rounded-sm">
              {tags[item]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
