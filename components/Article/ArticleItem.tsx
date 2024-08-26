import { ArticleType } from "@/types/article";
import { Tag } from "antd";

export default function ArticleItem(data: {
  articleInfo: ArticleType.ArticleItem;
}) {
  return (
    <div className="mb-4 flex-1 border-b">
      <div className="flex items-center justify-between mb-2">
        <div className="py-1 rounded-full text-xs font-medium">
          {data.articleInfo.categories &&
            data.articleInfo.categories
              .split(",")
              .map((item) => <Tag key={item}>{item}</Tag>)}
        </div>
        <div className="py-1 rounded-full text-xs font-medium">
          {data.articleInfo.tags &&
            data.articleInfo.tags
              .split(",")
              .map((item) => <Tag key={item}>{item}</Tag>)}
        </div>
      </div>
      <div className="block">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1 ">
          {data.articleInfo.title}
        </h3>
      </div>
      <p className="text-muted-foreground line-clamp-2 mb-4 text-sm opacity-80 ">
        {data.articleInfo.abstract}
      </p>
    </div>
  );
}
