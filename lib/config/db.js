import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Oblog:Jayson931005@cluster0.9hram.mongodb.net/oblog"
  );
  console.log("DB connected");
};
