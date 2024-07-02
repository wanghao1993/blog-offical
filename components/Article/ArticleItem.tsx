import { ArticleType } from "@/types/article";
import Link from "next/link";
import { LikeFilled, EyeFilled } from "@ant-design/icons";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tag } from "antd";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P4Ve019xTmD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function ArticleItem(data: {
  articleInfo: ArticleType.ArticleItem;
}) {
  return (
    <motion.div className="transition-all duration-300 hover:shadow-md flex flex-col sm:flex-row border-b">
      {data.articleInfo.coverUrl && (
        <Link href="22" className="block" prefetch={false}>
          <Image
            src={data.articleInfo.coverUrl}
            alt="Blog Post Image"
            width={120}
            height={90}
            className="w-full h-40 sm:h-full object-cover"
          />
        </Link>
      )}
      <div className="p-4 flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="py-1 rounded-full text-xs font-medium">
            {data.articleInfo.categories.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
          <div className="py-1 rounded-full text-xs font-medium">
            {data.articleInfo.tags.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
        <Link
          href={`/blog/${data.articleInfo._id}`}
          className="block"
          prefetch={false}
        >
          <h3 className="text-lg font-semibold mb-2 line-clamp-1 ">
            {data.articleInfo.title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-2 mb-4 text-sm opacity-60 ">
          {data.articleInfo.abstract}
        </p>
        <div className="flex items-center justify-between opacity-45">
          <div className="flex items-center gap-2">
            <LikeFilled className="w-5 h-5 fill-muted-foreground  " />
            <span className="text-muted-foreground">
              {data.articleInfo.likesCount}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <EyeFilled className="w-5 h-5 fill-muted-foreground" />
            <span className="text-muted-foreground">
              {data.articleInfo.viewsCount}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
