"use client";

import MainLayout from "@/components/Layouts/MainLayout";
import { get } from "@/lib/fetch";
import { ArticleType } from "@/types/article";
import { useCallback, useEffect, useState } from "react";
import ArticleItem from "@/components/Article/ArticleItem";
export default function LoginPage() {
  const [list, setList] = useState<ArticleType.ArticleItem[]>([]);
  const getBlogList = useCallback(() => {
    get<ArticleType.GetBlogList>("articles/list", {
      page: 1,
      pageSize: 10,
    }).then((res) => {
      setList(res.list);
    });
  }, []);
  useEffect(() => {
    getBlogList();
  }, [getBlogList]);
  return (
    <MainLayout>
      {list.map((item) => (
        <ArticleItem key={item._id} articelInfo={item} />
      ))}
    </MainLayout>
  );
}
