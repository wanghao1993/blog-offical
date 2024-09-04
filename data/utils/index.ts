/*
 * @Author: wanghao1993 whao53333@gmail.com
 * @Date: 2024-09-04 13:57:31
 * @LastEditors: wanghao1993 whao53333@gmail.com
 * @LastEditTime: 2024-09-04 17:08:15
 * @FilePath: \blog-offical\data\utils\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { allPosts } from "contentlayer/generated";

export const getAllPostsMeta = () => {
  // 文章日期排序，最新的在最前面
  allPosts.sort((a, b) => {
    return +new Date(a.date) < +new Date(b.date) ? 1 : -1;
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
