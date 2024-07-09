"use client";
import MainLayout from "@/components/Layouts/MainLayout";
import { get } from "@/lib/fetch";
import { ArticleType } from "@/types/article";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Spin, Empty, Divider, message } from "antd";
import { CalendarOutlined, EyeOutlined, LikeOutlined } from "@ant-design/icons";
import formatterDate from "@/lib/data_utils";
import { motion } from "framer-motion";
import { Viewer } from "@bytemd/react";
import "juejin-markdown-themes/dist/mk-cute.css";
export default function ArticleDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState<ArticleType.ArticleItem>();
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      get<ArticleType.ArticleItem>("/articles/detail", {
        id,
      })
        .then((res) => {
          setDetail(res);
        })
        .finally(() => {
          setLoaded(true);
          setLoading(false);
        });
    } else {
      message.warning("id不存在");
    }
    return () => {
      setLoaded(false);
      setLoading(false);
    };
  }, [id]);

  return (
    <MainLayout>
      <Spin spinning={loading}>
        {detail ? (
          <div className="article-detail">
            <h1 className="font-semibold mb-4">{detail.title}</h1>
            <div className="text-sm text-slate-400 flex items-center">
              <div>
                <CalendarOutlined />
                <span className="pl-1">{formatterDate(detail.createdAt)}</span>
              </div>
              <Divider type="vertical" className="mx-4!"></Divider>
              <div>
                <EyeOutlined />
                <span className="pl-1">{detail.viewsCount}</span>
              </div>
              <Divider type="vertical" className="mx-2!"></Divider>
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
              >
                <LikeOutlined />
                <span className="pl-1">{detail.likesCount}</span>
              </motion.div>
            </div>
            <article className="mt-2">
              <Viewer value={detail.content}></Viewer>
            </article>
          </div>
        ) : (
          loaded && <Empty></Empty>
        )}
      </Spin>
    </MainLayout>
  );
}
