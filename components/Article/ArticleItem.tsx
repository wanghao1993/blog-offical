import Link from "next/link";
import { Divider } from "antd";
import { Post } from "contentlayer/generated";
export default function ArticleItem(data: { articleInfo: Post }) {
  const { articleInfo } = data;
  return (
    <div className="border rounded-lg">
      <div className="p-4">
        <Link
          href={`/blog/${articleInfo.key}`}
          className="horizontal-underline horizontal-underline-active "
        >
          <h3 className="text-lg font-medium line-clamp-1 text-primary-500">
            {articleInfo.title}
          </h3>
        </Link>

        <div className="flex items-center ">
          <div className="mr-2 text-gray-400">
            {new Date(articleInfo.date).toLocaleDateString()}
          </div>
        </div>
      </div>

      <p className="text-muted-foreground line-clamp-2 px-4 text-sm opacity-80 ">
        {data.articleInfo.description}
      </p>
      <div className="py-1 rounded-full text-xs font-medium m-4 flex">
        <div className="flex flex-wrap items-center">
          {data.articleInfo.categories &&
            data.articleInfo.categories.split(",").map((item) => (
              <Link
                key={item}
                href={`blog/category/${item}`}
                className="px-2 mr-1 rounded-lg bg-primary-500 text-white min-w-10"
              >
                {item}
              </Link>
            ))}
        </div>

        <Divider type="vertical" />
        <div className="flex flex-wrap space-y-2 items-baseline">
          {data.articleInfo.tags &&
            data.articleInfo.tags.split(",").map((item) => (
              <Link
                key={item}
                href={`/blog/tag/${item}`}
                className="px-2 mr-1 rounded-lg bg-primary-500 text-white"
              >
                {item}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
