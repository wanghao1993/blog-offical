import MainLayout from "@/components/Layouts/MainLayout";
import { Empty } from "antd";
import "./index.scss";
import "highlight.js/styles/monokai.min.css";
import { Metadata } from "next";
import ToTop from "@/components/toTop";
import { GoogleTagManager } from "@next/third-parties/google";
import { allPosts } from "contentlayer/generated";
import PostLayout from "@/components/Layouts/PostLayOut";
import { MDXLayoutRenderer } from "@/components/Layouts/MdxLayout";
import Link from "next/link";
import { post } from "@/lib/fetch";

const setBlogToDb = (key: string, title: string) => {
  post(
    "/blog/create",
    {
      blog_key: key,
      blog_title: title,
    },
    1
  );
};

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const index = allPosts.findIndex((post) => post.key === params.id);
  const post = allPosts[index];
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
    openGraph: {
      title: post.title,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.key}`,
      description: post.description,
    },
    twitter: {
      card: "summary_large_image",
      site: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.key}`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.key}`,
    },
    keywords: post.keywords,
    publisher: "汪浩（isaac wang）",
  };
}

export default async function ArticleDetail({
  params,
}: {
  params: { id: string };
}) {
  const index = allPosts.findIndex((post) => post.key === params.id);
  const post = allPosts[index];

  const prePost = allPosts[index - 1];

  const nextPost = allPosts[index + 1];
  if (post) {
    setBlogToDb(params.id, post.title);
  }
  return (
    <MainLayout>
      <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
      {post ? (
        <PostLayout post={post}>
          <MDXLayoutRenderer content={post} toc={post.toc}></MDXLayoutRenderer>
          <div className="flex justify-between">
            {prePost && (
              <Link
                className="horizontal-underlin horizontal-underline-active"
                href={`/blog/${prePost.key}`}
              >
                上一篇：{prePost.title}
              </Link>
            )}

            {nextPost && (
              <Link
                href={`/blog/${nextPost.key}`}
                className="border-b-primary-300"
              >
                下一篇：{nextPost.title}
              </Link>
            )}
          </div>
          <ToTop></ToTop>
        </PostLayout>
      ) : (
        <Empty></Empty>
      )}
    </MainLayout>
  );
}
