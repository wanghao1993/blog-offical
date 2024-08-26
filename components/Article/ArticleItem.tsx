import { ArticleType } from "@/types/article";
import { Tag, Card } from "antd";
import Link from "next/link";

export default function ArticleItem(data: {
  articleInfo: ArticleType.ArticleItem;
}) {
  return (
    <div className="border rounded-lg">
      <div className="p-4">
        {/* title */}
        <h3 className="text-lg font-semibold  line-clamp-1">
          {data.articleInfo.title}
        </h3>
        {/* 分类，时间 */}
        <div className="flex items-center ">
          <div className="mr-2 text-gray-400">
            {data.articleInfo.date.toLocaleDateString()}
          </div>
          <div>
            {data.articleInfo.categories &&
              data.articleInfo.categories.split(",").map((item) => (
                <Link
                  key={item}
                  href={`blog/category/${item}`}
                  className="text-blue-300"
                >
                  {item}
                </Link>
              ))}
          </div>
        </div>
      </div>

      <p className="text-muted-foreground line-clamp-2 px-4 text-sm opacity-80 ">
        {data.articleInfo.description}
      </p>
      <div className="py-1 rounded-full text-xs font-medium m-4 flex  justify-between ">
        <div>
          {data.articleInfo.tags &&
            data.articleInfo.tags.split(",").map((item) => (
              <Link
                key={item}
                href={`/blog/tag/${item}`}
                className="px-2 rounded-lg bg-blue-400"
              >
                {item}
              </Link>
            ))}
        </div>

        <Link
          href={`/blog/${data.articleInfo.title}`}
          className="horizontal-underline"
        >
          阅读全文 →
        </Link>
      </div>
    </div>
  );
}
