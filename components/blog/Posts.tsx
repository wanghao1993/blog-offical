"use client";
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
