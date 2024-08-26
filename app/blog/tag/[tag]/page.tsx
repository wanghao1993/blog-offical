import ArticleItem from "@/components/Article/ArticleItem";
import MainLayout from "@/components/Layouts/MainLayout";
import { GoogleTagManager } from "@next/third-parties/google";
import { getAllPostsMeta } from "data/utils";

const getPostsData = async () => {
  return await getAllPostsMeta();
};

export default async function Page(data: { params: { tag: string } }) {
  const list = await getPostsData();
  return (
    <MainLayout>
      <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
      <div>
        {list
          .filter(
            (item) =>
              item.meta.tags?.indexOf(decodeURIComponent(data.params.tag)) > -1
          )
          .map((item) => (
            <div className="mb-4">
              <ArticleItem articleInfo={item.meta} key={item.meta.id} />
            </div>
          ))}
      </div>
    </MainLayout>
  );
}
