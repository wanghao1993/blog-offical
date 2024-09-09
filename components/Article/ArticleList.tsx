import { Post } from "./../../.contentlayer/generated";
import React, { memo, useEffect } from "react";
import ArticleItem from "./ArticleItem";
interface Props {
  posts: Post[];
}
const ArticleList = ({ posts }: Props) => {
  return (
    <>
      {posts.map((item) => (
        <ArticleItem articleInfo={item} key={item.key} />
      ))}
    </>
  );
};

export default ArticleList;
