import ArticleItem from "@/components/Article/ArticleItem";
import MainLayout from "@/components/Layouts/MainLayout";
import { getAllPostsMeta } from "data/utils";
import Tags from "@/components/blog/Tags";
import Category from "@/components/blog/Categories";

export default async function BlogHomePage() {
  const list = getAllPostsMeta();
  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4 space-y-4">
          {list.map((item) => (
            <ArticleItem articleInfo={item} key={item.key} />
          ))}
        </div>
        <div className="lg:w-1/4 space-y-4">
          <Category />
          <Tags />
        </div>
      </div>
    </MainLayout>
  );
}
