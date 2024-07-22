import MainLayout from "@/components/Layouts/MainLayout";
import { get } from "@/lib/fetch";
import { ArticleType } from "@/types/article";
import { Empty, Divider } from "antd";
import { CalendarOutlined, EyeOutlined, LikeOutlined } from "@ant-design/icons";
import formatterDate from "@/lib/data_utils";
import { motion } from "framer-motion";
import { Viewer } from "@bytemd/react";
import "juejin-markdown-themes/dist/mk-cute.css";
import Link from "next/link";
async function getBlogDetail(id: string) {
  const res = await get<ArticleType.ArticleItem>("articles/detail", {
    id,
  });
  return res;
}
export default async function ArticleDetail({
  params,
}: {
  params: { id: string };
}) {
  getBlogDetail(params.id);
  const detail: ArticleType.ArticleItem = await getBlogDetail(params.id);
  return (
    <MainLayout>
      {detail ? (
        <div className="article-detail">
          <h1 className="font-semibold mb-4">{detail.title}</h1>
          <div className="text-sm text-slate-400 flex items-center justify-between  ">
            <div className="flex items-center ">
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
            <div className="text-primary">
              <span>{new Date(detail.updatedAt).toLocaleString()}</span>
              <Divider type="vertical" className="mx-2!"></Divider>
              <Link href={`/admin/write?id=${detail._id}`}>编辑</Link>
            </div>
          </div>
          <article className="mt-2">
            <Viewer value={detail.content}></Viewer>
          </article>
        </div>
      ) : (
        <Empty></Empty>
      )}
    </MainLayout>
  );
}
