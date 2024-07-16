import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(process.env.MONGO_URI as string, {
    autoCreate: false,
  });

export default connectMongo;
