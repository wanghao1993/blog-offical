import { USER_DTO } from "@/types/user";
import { Schema, model, models } from "mongoose";

const userSchema = new Schema<USER_DTO>({
  name: {
    type: String,
    required: true,
    trim: true,
    max_length: 50,
  },
  image: {
    type: String,
    required: true,
    default: "https://blog-1302483222.cos.ap-shanghai.myqcloud.com/images.jpg",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2,})+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const User = models?.User || model<USER_DTO>("User", userSchema);
export default User;
