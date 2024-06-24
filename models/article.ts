import { Schema, model, models } from "mongoose";

const ArticleSchema = new Schema({
  title: {
    required: true,
    type: String,
  }, // 名称
  categories: {
    required: true,
    type: [String],
  }, // 分类
  tags: {
    required: true,
    type: [String],
  }, // 标签
  abstract: {
    required: false,
    type: String,
  }, // 描述
  coverImg: {
    required: false,
    type: String,
  }, // 封面
  content: {
    required: true,
    type: String,
  }, // 内容
  createdAt: {
    required: true,
    type: Date,
    default: Date.now,
  }, // 创建时间
  updatedAt: {
    required: true,
    type: Date,
    default: Date.now,
  }, // 更新时间
  isPublished: {
    required: true,
    type: Boolean,
    default: false,
  }, // 是否已发布
  authorId: {
    required: false,
    type: String,
  }, // 作者Id

  viewsCount: {
    required: false,
    type: Number,
    default: 0,
  }, // 查看数量
  likesCount: {
    required: false,
    type: Number,
    default: 0,
  }, // 喜欢数量
  commentsCount: {
    required: false,
    type: Number,
    default: 0,
  }, // 评论数量
  readTime: {
    required: false,
    type: Number,
    default: 0,
  }, // 阅读次数
  sharesCount: {
    required: false,
    type: Number,
    default: 0,
  }, // 分享次数
  status: String, // 状态
});

const Article = models?.Article || model("Article", ArticleSchema);

export default Article;
