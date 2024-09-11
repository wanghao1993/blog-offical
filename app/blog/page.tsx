"use client";
import ArticleList from "@/components/Article/ArticleList";
import MainLayout from "@/components/Layouts/MainLayout";
import { getAllPostsMeta } from "data/utils";
import Tags from "@/components/blog/Tags";
import Category from "@/components/blog/Categories";
import { memo, useEffect, useMemo, useState } from "react";
import { Post } from "contentlayer/generated";
import Pagination from "@/components/pagination";

const MemoCategory = memo(Category);
const MemoTags = memo(Tags);
const MemoPagination = memo(Pagination);
export default function BlogHomePage() {
  const list = getAllPostsMeta();

  const [searchValue, setSearchValue] = useState("");

  const [renderList, setRenderList] = useState<Post[]>([]);
  const pageSize = 5;
  const [curPage, setCurPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    setCurPage(1);
  }, [searchValue]);
  useEffect(() => {
    setRenderList(
      list.filter(
        (item) =>
          item.title.toLowerCase().includes(searchValue) ||
          item.tags.toLowerCase().includes(searchValue) ||
          item.categories.toLowerCase().includes(searchValue) ||
          item.description.toLowerCase().includes(searchValue)
      )
    );
  }, [searchValue, list, curPage]);

  const [posts, setPost] = useState<Post[]>([]);

  const memoPost = useMemo(() => posts, [posts]);

  useEffect(() => {
    setPost(renderList.slice((curPage - 1) * pageSize, curPage * pageSize));
  }, [curPage, renderList]);

  useEffect(() => {
    setTotalPage(Math.ceil(renderList.length / pageSize));
  }, [renderList]);
  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4 space-y-4">
          <div className="relative max-w-full">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="输入标题，标签，分类，描述查询"
              className="block w-full rounded-md border-0 bg-gray-200 bg-opacity-50 px-4 py-3 text-gray-900 focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-6 w-6 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <ArticleList posts={memoPost} />
          <MemoPagination
            currentPage={curPage}
            pageChange={setCurPage}
            totalPages={totalPage}
          />
        </div>
        <div className="lg:w-1/4 space-y-4">
          <MemoCategory />
          <MemoTags />
        </div>
      </div>
    </MainLayout>
  );
}
