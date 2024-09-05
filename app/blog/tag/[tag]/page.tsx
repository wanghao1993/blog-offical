import ArticleItem from "@/components/Article/ArticleItem";
import MainLayout from "@/components/Layouts/MainLayout";
import { getAllPostsMeta } from "data/utils";

export default async function Page(data: { params: { tag: string } }) {
  const list = getAllPostsMeta();
  return (
    <MainLayout>
      <div>
        {list
          .filter(
            (item) =>
              item.tags?.indexOf(decodeURIComponent(data.params.tag)) > -1
          )
          .map((item) => (
            <div className="mb-4" key={item.key}>
              <ArticleItem articleInfo={item} />
            </div>
          ))}
      </div>
    </MainLayout>
  );
}
