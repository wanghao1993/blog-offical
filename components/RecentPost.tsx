"use sever";
import { get } from "@/lib/fetch";
import { ArticleType } from "@/types/article";
import Link from "next/link";
import SectionContainer from "./SectionContainer";

export const getData = async () => {
  const res = await get<ArticleType.GetBlogList>("articles/list", {
    page: 1,
    pageSize: 3,
  });
  return res.list || [];
};
export default async function RecentPosts() {
  const list = await getData();
  return (
    <SectionContainer>
      <h2 className="my-6 text-2xl text-bold ">最近发布</h2>
      <section className="grid gap-y-6">
        {list.map((item) => (
          <div key={item._id}>
            <Link href={`/blog/${item._id}`} rel="noopener noreferrer">
              <h2 className=" horizontal-underline-active text-bold text-xl my-3 !text-primary">
                {item.title}
              </h2>
            </Link>
            <p className="text-muted-foreground line-clamp-2 text-sm opacity-80 ">
              {item.abstract}
            </p>
          </div>
        ))}
      </section>

      <p className="text-right py-3">
        <Link
          href={"/blog"}
          className="horizontal-underline horizontal-underline-active p-1 text-xs rounded horizontal-underline-hover "
        >
          查看更多 →
        </Link>
      </p>
    </SectionContainer>
  );
}
