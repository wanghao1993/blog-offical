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
import { getPostBySlug } from "data/utils";

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
    title: detail.meta.title,
    description: detail.content,
    creator: "汪浩（isaac wang）",
    authors: [
      { url: "https://github.com/wanghao1993", name: "汪浩（isaac wang）" },
    ],
    publisher: "汪浩（isaac wang）",
  };
}

async function getBlogDetail(id: string) {
  const res = await getPostBySlug(id);

  return res;
}
export default async function ArticleDetail({
  params,
}: {
  params: { id: string };
}) {
  getBlogDetail(params.id);
  const detail = await getBlogDetail(params.id);
  return (
    <MainLayout>
      <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
      {detail ? (
        <div className="article-detail ">
          <h1 className="font-semibold ">{detail.meta.title}</h1>
          <article className="mt-4">
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
