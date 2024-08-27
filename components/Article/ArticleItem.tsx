import { ArticleType } from "@/types/article";
import Link from "next/link";
import { Divider } from "antd";
export default function ArticleItem(data: {
  articleInfo: ArticleType.ArticleItem;
}) {
  return (
    <div className="border rounded-lg">
      <div className="p-4">
        {/* title */}
        <Link
          href={`/blog/${data.articleInfo.title}`}
          className="horizontal-underline horizontal-underline-active "
        >
          <h3 className="text-lg font-semibold  line-clamp-1 text-primary-500">
            {data.articleInfo.title}
          </h3>
        </Link>

        <div className="flex items-center ">
          <div className="mr-2 text-gray-400">
            {data.articleInfo.date.toLocaleDateString()}
          </div>
        </div>
      </div>

      <p className="text-muted-foreground line-clamp-2 px-4 text-sm opacity-80 ">
        {data.articleInfo.description}
      </p>
      <div className="py-1 rounded-full text-xs font-medium m-4 flex">
        <div>
          {data.articleInfo.categories &&
            data.articleInfo.categories.split(",").map((item) => (
              <Link
                key={item}
                href={`blog/category/${item}`}
                className="px-2 rounded-lg bg-primary-500 text-white"
              >
                {item}
              </Link>
            ))}
        </div>

        <Divider type="vertical" />
        <div>
          {data.articleInfo.tags &&
            data.articleInfo.tags.split(",").map((item) => (
              <Link
                key={item}
                href={`/blog/tag/${item}`}
                className="px-2 rounded-lg bg-primary-500 text-white"
              >
                {item}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
