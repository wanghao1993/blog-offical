import ArticleItem from "@/components/Article/ArticleItem";
import MainLayout from "@/components/Layouts/MainLayout";
import { GoogleTagManager } from "@next/third-parties/google";
import { allPosts } from "contentlayer/generated";

export default async function Page(data: { params: { category: string } }) {
  const list = allPosts;
  return (
    <MainLayout>
      <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
      <div>
        {list
          .filter(
            (item) =>
              item.categories?.indexOf(
                decodeURIComponent(data.params.category)
              ) > -1
          )
          .map((item) => (
            <div className="mb-4" key={item.title}>
              <ArticleItem articleInfo={item} />
            </div>
          ))}
      </div>
    </MainLayout>
  );
}
