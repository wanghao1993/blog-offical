import MainLayout from "@/components/Layouts/MainLayout";
import { Empty, Divider } from "antd";
import { MDXRemote } from "next-mdx-remote/rsc";
import "./index.scss";
import "highlight.js/styles/monokai.min.css";
import { SerializeOptions } from "node_modules/next-mdx-remote/dist/types";
import { Metadata } from "next";
import rehypeHighlight from "rehype-highlight";
import ToTop from "@/components/toTop";
import { GoogleTagManager } from "@next/third-parties/google";
import { getPostBySlug } from "data/utils";
import Link from "next/link";
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
    openGraph: {},
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${detail.meta.title}`,
    },
    keywords: detail.meta.tags,
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
  const detail = await getBlogDetail(params.id);
  return (
    <MainLayout>
      <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
      {detail ? (
        <div className="article-detail ">
          <div className="bg-primary space-y-1 rounded-lg  py-4 px-2 text-center sm:py-6 md:py-10">
            <h1 className="font-semibold ">{detail.meta.title}</h1>
            <div>{detail.meta.date.toLocaleDateString()}</div>
          </div>
          <div className="py-4 flex gap-4 items-center">
            {detail.meta.categories &&
              detail.meta.categories.split(",").map((item: string) => (
                <Link
                  key={item}
                  href={`blog/category/${item}`}
                  className="px-2 rounded-lg bg-primary-500 text-white"
                >
                  {item}
                </Link>
              ))}

            <Divider
              type="vertical"
              style={{
                marginInline: "0px",
                borderInlineStartColor: "var(--text-color)",
              }}
            />
            {detail.meta.tags &&
              detail.meta.tags.split(",").map((item: string) => (
                <Link
                  key={item}
                  href={`blog/tag/${item}`}
                  className="px-2 rounded-lg bg-primary-500 text-white"
                >
                  {item}
                </Link>
              ))}
          </div>
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
