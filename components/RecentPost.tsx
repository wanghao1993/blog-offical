import { get } from "@/lib/fetch";
import { ArticleType } from "@/types/article";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
export function RecentPosts() {
  const [list, setList] = useState<ArticleType.ArticleItem[]>([]);

  useEffect(() => {
    get<ArticleType.GetBlogList>("articles/list", {
      page: 0,
      pageSize: 3,
    }).then((res) => {
      setList(res.list);
    });
  }, []);
  return (
    <div>
      <h1>最近发布</h1>
      <section>
        {list.map((item) => (
          <div key={item._id}>
            <Link
              href={`/blog/${item._id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{item.title}</h2>
              <p className="text-muted-foreground line-clamp-2 mb-4 text-sm opacity-80 ">
                {item.abstract}
              </p>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
