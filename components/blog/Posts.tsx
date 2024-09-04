/*
 * @Author: wanghao1993 whao53333@gmail.com
 * @Date: 2024-09-04 13:57:31
 * @LastEditors: wanghao1993 whao53333@gmail.com
 * @LastEditTime: 2024-09-04 17:24:33
 * @FilePath: \blog-offical\components\blog\Posts.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import { ArticleType } from "@/types/article";
import ArticleItem from "@/components/Article/ArticleItem";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Post } from "contentlayer/generated";
export interface PostCardProps {
  posts: Post[];
}
/**
 * @description:
 * @param {PostCardProps} param1
 * @return {*}
 */
export default function PostsCard({ posts }: PostCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted &&
        posts.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index / 10 }}
          >
            <ArticleItem articleInfo={item} />
          </motion.div>
        ))}
    </>
  );
}
