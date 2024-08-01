import mongoose from "mongoose";

const connectMongo = async () =>
  await mongoose.connect(process.env.MONGO_URI as string, {
    autoCreate: true,
  });

  

export default connectMongo;
