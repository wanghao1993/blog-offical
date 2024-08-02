import MainLayout from "@/components/Layouts/MainLayout";
import { get } from "@/lib/fetch";
import { ArticleType } from "@/types/article";
import { Empty, Divider } from "antd";
import { CalendarOutlined, EyeOutlined, LikeOutlined } from "@ant-design/icons";
import formatterDate from "@/lib/data_utils";
import "juejin-markdown-themes/dist/mk-cute.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import "./index.scss";
import "highlight.js/styles/monokai.min.css";
import { SerializeOptions } from "node_modules/next-mdx-remote/dist/types";
import { Metadata } from "next";
import { EditIcon } from "@/components/blog/Edit";
import ToTop from "@/components/toTop";
import { GoogleTagManager } from "@next/third-parties/google";
import Image from "next/image";

const options: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const detail = await getBlogDetail(params.id);

  if (!detail) {
    return {};
  }

  return {
    title: detail.title,
    description: detail.content,
    keywords: detail.tags.join(","),
    category: detail.categories.join(", "),
    abstract: detail.abstract,
    creator: "汪浩（isaac wang）",
    authors: [
      { url: "https://github.com/wanghao1993", name: "汪浩（isaac wang）" },
    ],
    publisher: "汪浩（isaac wang）",
  };
}

async function getBlogDetail(id: string) {
  const res = await get<ArticleType.ArticleItem>(
    "articles/detail",
    {
      id,
    },
    1
  );
  return res;
}
export default async function ArticleDetail({
  params,
}: {
  params: { id: string };
}) {
  getBlogDetail(params.id);
  const detail: ArticleType.ArticleItem = await getBlogDetail(params.id);
  return (
    <MainLayout>
      <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
      {detail ? (
        <div className="article-detail ">
          <h1 className="font-semibold ">{detail.title}</h1>
          <div className="text-sm text-slate-400 flex items-center justify-between ">
            <div className="flex items-center ">
              <div>
                <CalendarOutlined />
                <span className="pl-1">{formatterDate(detail.createdAt)}</span>
              </div>
              <Divider type="vertical" className="mx-4!"></Divider>
              <div>
                <EyeOutlined />
                <span className="pl-1">{detail.viewsCount}</span>
              </div>
              <Divider type="vertical" className="mx-2!"></Divider>
              <div className="cursor-pointer hover:scale-110">
                <LikeOutlined />
                <span className="pl-1">{detail.likesCount}</span>
              </div>
            </div>
            <div className="text-primary">
              <span>{new Date(detail.updatedAt).toLocaleString()}</span>
              <EditIcon detail={detail} />
            </div>
          </div>
          <article className="mt-4">
            {detail.coverImg && (
              <Image
                src={detail.coverImg}
                width={2000}
                height={1000}
                style={{ width: "100%", height: "auto" }}
                priority={true}
                alt="cover_img"
              />
            )}
            <MDXRemote source={detail.content} options={options}></MDXRemote>
          </article>

          <ToTop />
        </div>
      ) : (
        <Empty></Empty>
      )}
    </MainLayout>
  );
}
