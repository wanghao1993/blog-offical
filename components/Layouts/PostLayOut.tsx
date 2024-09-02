import { Divider } from "antd";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import { ReactNode } from "react";

const postDateTemplate: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
export type CoreContent<T> = Omit<T, "body" | "_raw" | "_id">;
interface Props {
  post: Post;
  children: ReactNode;
  next?: { slug: string; title: string };
  prev?: { slug: string; title: string };
}

export default function PostLayout({ post, children, next, prev }: Props) {
  const { date, title, readingTime } = post;

  return (
    <article className="article-detail ">
      <div className="bg-primary space-y-1 rounded-lg  py-4 px-2 text-center sm:py-6 md:py-10">
        <h1 className="font-semibold ">{post.title}</h1>
        <div>{new Date(post.date).toLocaleDateString()}</div>
      </div>
      <div className="py-4 flex gap-4 items-center">
        {post.categories &&
          post.categories.split(",").map((item: string) => (
            <Link
              key={item}
              href={`/blog/category/${item}`}
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
        {post.tags &&
          post.tags.split(",").map((item: string) => (
            <Link
              key={item}
              href={`/blog/tag/${item}`}
              className="px-2 rounded-lg bg-primary-500 text-white"
            >
              {item}
            </Link>
          ))}
      </div>
      <article className="mt-4">
        {children}
        {/* <MDXRemote source={post.content} options={options}></MDXRemote> */}
      </article>
    </article>
  );
}
