import * as matter from "gray-matter";
import path from "path";
import fs from "fs";
const rootDirectory = path.join(process.cwd(), "data", "posts");

export const getAllPostsMeta = async () => {
  // 获取到data/posts/下所有文件
  const dirs = fs
    .readdirSync(rootDirectory, { withFileTypes: true })
    .map((item) => {
      return item.name.split(".mdx")[0];
    });

  // 解析文章数据，拿到标题、日期、简介
  let allData = await Promise.all(
    dirs.map(async (dir) => {
      const { meta, content } = await getPostBySlug(dir);
      return { meta, content };
    })
  );

  // 文章日期排序，最新的在最前面
  allData.sort((a, b) => {
    return Date.parse(a.meta.date) < Date.parse(b.meta.date) ? 1 : -1;
  });
  return allData;
};
export const getPostBySlug = async (dir: string) => {
  const filePath = path.join(rootDirectory, `${decodeURI(dir)}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  // gray-matter库是一个解析markdown内容，可以拿到markdown文件的meta信息和content内容
  const { content, data } = matter(fileContent);

  // 如果文件名是中文，转成拼音
  const id = dir;

  return {
    meta: { ...data, slug: dir, id },
    content: content,
  };
};

export const getAllTags = async () => {
  const allData = await getAllPostsMeta();
  let allTagData: Record<string, number> = {};
  allData.forEach((item) => {
    const tags = item.meta.tags?.split(",") ?? [];
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

export const getAllCategory = async () => {
  const allData = await getAllPostsMeta();
  let allCateData: Record<string, number> = {};
  allData.forEach((item) => {
    const tags = item.meta.categories?.split(",") ?? [];
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
