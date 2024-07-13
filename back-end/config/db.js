//connect with db
import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://mvsbhargavreddy:Speed4009018@hungerbites.mbfuqou.mongodb.net/?retryWrites=true&w=majority&appName=HungerBites"
    )
    .then(() => {
      console.log("DB connected");
    });
};
