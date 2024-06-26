"use client";

import MainLayout from "@/components/Layouts/MainLayout";
import { get } from "@/lib/fetch";
import { ArticleType } from "@/types/article";
import { useCallback, useEffect, useRef, useState } from "react";
import ArticleItem from "@/components/Article/ArticleItem";
import { produce } from "immer";
import useScroll from "@/lib/useScrollHooks";
export default function LoginPage() {
  const [list, setList] = useState<ArticleType.ArticleItem[]>([]);
  const loadingMoreRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
  });
  const getBlogList = useCallback(() => {
    setLoading(true);
    get<ArticleType.GetBlogList>("articles/list", {
      page: pageInfo.page,
      pageSize: pageInfo.pageSize,
    })
      .then((res) => {
        setList([...list, ...res.list]);
        setPageInfo(
          produce((draft) => {
            draft.total = res.totalCount;
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const { isBottom } = useScroll();
  let timerId = -1;
  useEffect(() => {
    if (isBottom) {
      clearTimeout(timerId);
      timerId = window.setTimeout(() => {
        setPageInfo(
          produce((draft) => {
            draft.page++;
          })
        );
        getBlogList();
      }, 300);
    }
  }, [isBottom]);

  useEffect(() => {
    getBlogList();
  }, [getBlogList]);
  return (
    <MainLayout>
      {list.map((item) => (
        <ArticleItem key={item._id} articelInfo={item} />
      ))}
      <div ref={loadingMoreRef}></div>
    </MainLayout>
  );
}
