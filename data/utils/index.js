import matter from "gray-matter";
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
  let datas = await Promise.all(
    dirs.map(async (dir) => {
      const { meta, content } = await getPostBySlug(dir);
      return { meta, content };
    })
  );

  // 文章日期排序，最新的在最前面
  datas.sort((a, b) => {
    return Date.parse(a.meta.date) < Date.parse(b.meta.date) ? 1 : -1;
  });
  return datas;
};
export const getPostBySlug = async (dir) => {
  const filePath = path.join(rootDirectory, `${dir}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  // gray-matter库是一个解析markdown内容，可以拿到markdown文件的meta信息和content内容
  const { data } = matter(fileContent);

  console.log(fileContent);
  // 如果文件名是中文，转成拼音
  const id = dir;

  return {
    meta: { ...data, slug: dir, id },
    content: fileContent,
  };
};
