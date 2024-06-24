import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(process.env.MONGO_URI as string);

export default connectMongo;
