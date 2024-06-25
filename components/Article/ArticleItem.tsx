import { ArticleType } from "@/types/article";
import { LikeFilled, EyeOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import "./article.scss";
import { motion } from "framer-motion";
export default function ArticleItem(data: {
  articelInfo: ArticleType.ArticleItem;
}) {
  return (
    <motion.section className="articlelist" whileHover={{ scale: 1.05 }}>
      <h3 className="articletitle">{data.articelInfo.title}</h3>
      <p className="articleabstract">{data.articelInfo.abstract}</p>
      <div className="flex justify-between">
        <div className="like-view">
          <span className="mr-2">
            <LikeFilled />
            <span className="pl-1">{data.articelInfo.likesCount}</span>
          </span>
          <span>
            <EyeOutlined />
            <span className="pl-1">{data.articelInfo.viewsCount}</span>
          </span>
        </div>
        <div className="tags">
          {data.articelInfo.categories?.map((item) => {
            return <Tag key={item}> {item} </Tag>;
          })}
          {data.articelInfo.tags?.map((item) => {
            return <Tag key={item}> {item} </Tag>;
          })}
        </div>
      </div>
    </motion.section>
  );
}
