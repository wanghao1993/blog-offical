import ArticleItem from "@/components/Article/ArticleItem";
import MainLayout from "@/components/Layouts/MainLayout";
import { GoogleTagManager } from "@next/third-parties/google";
import { getAllPostsMeta } from "data/utils";
import Link from "next/link";

const getData = async () => {
  return await getAllPostsMeta();
};

export default async function LoginPage() {
  const list = await getData();
  return (
    <MainLayout>
      <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
      <div className="min-h-48">
        {list.map((item) => (
          <Link
            key={item.meta.id}
            href={`/blog/${item.meta.title}`}
            className=" cursor-pointer"
            prefetch={false}
          >
            <ArticleItem articleInfo={item.meta} />
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}
