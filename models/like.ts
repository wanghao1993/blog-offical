import { Schema, model, models } from "mongoose";
const LikeSchema = new Schema({
  userId: {
    required: true,
    type: String,
  }, // 用户ID
  articleId: {
    required: true,
    type: String,
  }, // 文章id
  createdAt: {
    default: Date.now(),
    type: Number,
  },
});

const Like = models?.Like || model("Like", LikeSchema);

export default Like;
