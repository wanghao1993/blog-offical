import { allPosts } from "contentlayer/generated";

export const getAllPostsMeta = () => {
  // 文章日期排序，最新的在最前面
  allPosts.sort((a, b) => {
    return +new Date(a.date) < +new Date(a.date) ? 1 : -1;
  });
  return allPosts;
};

export const getAllTags = () => {
  const allData = getAllPostsMeta();
  let allTagData: Record<string, number> = {};
  allData.forEach((item) => {
    const tags = item.tags?.split(",") ?? [];
    tags.forEach((item: string) => {
      if (allTagData[item]) {
        allTagData[item] = allTagData[item] + 1;
      } else {
        allTagData[item] = 1;
      }
    });
  });

  return allTagData;
};

export const getAllCategory = () => {
  const allData = getAllPostsMeta();
  let allCateData: Record<string, number> = {};
  allData.forEach((item) => {
    const tags = item.categories?.split(",") ?? [];
    tags.forEach((item: string | number) => {
      if (allCateData[item]) {
        allCateData[item] = allCateData[item] + 1;
      } else {
        allCateData[item] = 1;
      }
    });
  });

  return allCateData;
};
