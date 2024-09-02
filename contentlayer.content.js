import { defineDocumentType, makeSource } from "contentlayer/source-files";

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
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
});
