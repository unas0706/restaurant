import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:'./config/config.env'
})

const connectDB = () => {
  mongoose
    .connect(process.env.MONGOURI, {
      dbName: "restaurant"
    })
    .then(() => {
      console.log("Connected to mongoose");
    })
    .catch((err) => {
      console.log("Error occured" + err);
    });
};

export default connectDB
