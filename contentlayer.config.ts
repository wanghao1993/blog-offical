import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHightLight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { extractTocHeadings } from "./lib/heading";
const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ""),
  },
  toc: { type: "string", resolve: (doc) => extractTocHeadings(doc.body.raw) },
};
const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "标题",
      required: true,
    },
    key: {
      type: "string",
      description: "唯一key",
      required: true,
    },
    date: {
      type: "date",
      description: "日期",
      required: true,
    },
    categories: {
      type: "string",
      description: "分类",
      required: true,
    },
    tags: {
      type: "string",
      description: "标签",
      required: true,
    },
    description: {
      type: "string",
      description: "描述",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
    ...computedFields,
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    cwd: process.cwd(),
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeHightLight as any,
    ],
  },
});
