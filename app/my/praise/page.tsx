import MainLayout from "@/Layouts/MainLayout";
import ArticleList from "@/components/Article/ArticleList";
export default function MyPraise() {
  return (
    <MainLayout>
      <ArticleList posts={[]}></ArticleList>
    </MainLayout>
  );
}
