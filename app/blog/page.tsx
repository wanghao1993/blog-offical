"use client";

import MainLayout from "@/components/Layouts/MainLayout";
import { get } from "@/lib/fetch";
import { ArticleType } from "@/types/article";
import { useCallback, useEffect, useState } from "react";
export default function LoginPage() {
  const [list, setList] = useState<ArticleType.ArticleItem[]>([]);
  const getBlogList = useCallback(() => {
    get<ArticleType.ArticleItem[]>("articles/list", {
      page: 1,
      pageSize: 10,
    }).then((res) => {
      setList(res);
    });
  }, []);
  useEffect(() => {
    getBlogList();
  }, [getBlogList]);
  return <MainLayout>22</MainLayout>;
}
