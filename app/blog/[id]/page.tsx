import MainLayout from "@/components/Layouts/MainLayout";
import { Empty, Divider } from "antd";
import "./index.scss";
import "highlight.js/styles/monokai.min.css";
import { Metadata } from "next";
import ToTop from "@/components/toTop";
import { GoogleTagManager } from "@next/third-parties/google";
import { allPosts } from "contentlayer/generated";
import PostLayout from "@/components/Layouts/PostLayOut";
import { MDXLayoutRenderer } from "@/components/Layouts/MdxLayout";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = allPosts.find((post) => post.key === params.id);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    creator: "汪浩（isaac wang）",
    authors: [
      { url: "https://github.com/wanghao1993", name: "汪浩（isaac wang）" },
    ],
    openGraph: {},
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.title}`,
    },
    keywords: post.tags,
    publisher: "汪浩（isaac wang）",
  };
}

export default async function ArticleDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = allPosts.find((post) => post.key === params.id);

  return (
    <MainLayout>
      <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
      {post ? (
        <PostLayout post={post}>
          <MDXLayoutRenderer content={post} toc={post.toc}></MDXLayoutRenderer>
          <ToTop></ToTop>
        </PostLayout>
      ) : (
        <Empty></Empty>
      )}
    </MainLayout>
  );
}
