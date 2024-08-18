import { ArticleType } from "@/types/article";
import { LikeFilled, EyeFilled } from "@ant-design/icons";
import Image from "next/image";
import { Tag, Divider } from "antd";

export default function ArticleItem(data: {
  articleInfo: ArticleType.ArticleItem;
}) {
  return (
    <div className="transition-all  flex items-center flex-col sm:flex-row border-b">
      <div className="p-4 flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="py-1 rounded-full text-xs font-medium">
            {data.articleInfo.categories &&
              data.articleInfo.categories.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
          </div>
          <div className="py-1 rounded-full text-xs font-medium">
            {data.articleInfo.tags &&
              data.articleInfo.tags.map((item) => <Tag key={item}>{item}</Tag>)}
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
        <div className="flex items-center justify-start opacity-45">
          <div className="flex items-start gap-2">
            <LikeFilled className="w-5 h-5 fill-muted-foreground  " />
            <span className="text-muted-foreground">
              {data.articleInfo.likesCount}
            </span>
          </div>
          <Divider type={"vertical"}></Divider>
          <div className="flex items-start gap-2">
            <EyeFilled className="w-5 h-5 fill-muted-foreground" />
            <span className="text-muted-foreground">
              {data.articleInfo.viewsCount}
            </span>
          </div>
        </div>
      </div>
      {data.articleInfo.coverImg && (
        <Image
          src={data.articleInfo.coverImg}
          alt="Blog Post Image"
          width={110}
          height={74}
          className=" sm:h-full object-cover"
        />
      )}
    </div>
  );
}
