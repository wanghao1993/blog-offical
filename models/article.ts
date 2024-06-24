import { Schema, model, models } from "mongoose";

const ArticleSchema = new Schema({
  title: String, // 名称
  categories: Array<String>, // 分类
  tags: Array<String>, // 标签
  description: String, // 描述
  coverImg: String, // 封面
  content: String, // 内容
  createdAt: Date, // 创建时间
  updatedAt: Date, // 更新时间
  authorId: String, // 作者Id
  isPublished: Boolean, // 是否已发布
  viewsCount: Number, // 查看数量
  likesCount: Number, // 喜欢数量
  commentsCount: Number, // 评论数量
  readTime: Number, // 阅读次数
  sharesCount: Number, // 分享次数
  status: String, // 状态
});

const Article = models.Article || model("Article", ArticleSchema);

export default Article;
