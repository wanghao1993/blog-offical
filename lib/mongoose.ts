import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(
    `mongodb://wanghao:wanghao1993@42.192.249.225:27017/blog?authMechanism=DEFAULT`,
    {
      autoCreate: true,
    }
  );

export default connectMongo;
