import MainLayout from "@/components/Layouts/MainLayout";
import { GoogleTagManager } from "@next/third-parties/google";
import { getAllPostsMeta } from "data/utils";
import PostsCard from "@/components/blog/Posts";
import Tags from "@/components/blog/Tags";
import Category from "@/components/blog/Categories";
const getPostsData = async () => {
  return await getAllPostsMeta();
};

export default async function LoginPage() {
  const list = await getPostsData();
  return (
    <MainLayout>
      <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4 space-y-4">
          <PostsCard posts={list} />
        </div>
        <div className="lg:w-1/4 space-y-4">
          <Tags />
          <Category />
        </div>
      </div>
    </MainLayout>
  );
}
