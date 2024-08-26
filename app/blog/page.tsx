import ArticleItem from "@/components/Article/ArticleItem";
import MainLayout from "@/components/Layouts/MainLayout";
import { GoogleTagManager } from "@next/third-parties/google";
import { getAllPostsMeta, getAllCategory, getAllTags } from "data/utils";
import { Card } from "antd";
import Link from "next/link";
import { generateColors } from "@/lib/utils";
const getPostsData = async () => {
  return await getAllPostsMeta();
};

const getTags = async () => {
  return await getAllTags();
};

const getCates = async () => {
  return await getAllCategory();
};

export default async function LoginPage() {
  const list = await getPostsData();
  const tags = await getTags();
  const categories = await getCates();
  return (
    <MainLayout>
      <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4 space-y-4">
          {list.map((item) => (
            <ArticleItem articleInfo={item.meta} key={item.meta.id} />
          ))}
        </div>
        <div className="lg:w-1/4 space-y-4">
          <div className="border rounded-lg">
            <h2 className="px-4 py-2 border-b">分类</h2>
            <div className="flex p-4">
              {Object.keys(categories).map((item) => (
                <Link
                  key={item}
                  className="mr-2 p-1 flex text-white item-center justify-center rounded-md text-xs"
                  href={`/blog/category/${item}`}
                  style={{ backgroundColor: generateColors() }}
                >
                  <span>{item}</span>
                  <span className="bg-white px-1 text-black ml-1 rounded-sm">
                    {categories[item]}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="border rounded-lg">
            <h2 className="px-4 py-2 border-b">标签</h2>
            <div className="flex p-4">
              {Object.keys(tags).map((item) => (
                <Link
                  key={item}
                  className="mr-2 p-1 flex text-white item-center justify-center rounded-md text-xs"
                  href={`/blog/tag/${item}`}
                  style={{ backgroundColor: generateColors() }}
                >
                  <span>{item}</span>
                  <span className="bg-white px-1 text-black ml-1 rounded-sm">
                    {tags[item]}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
