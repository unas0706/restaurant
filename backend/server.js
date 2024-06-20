import app from './app.js';
import dotenv from "dotenv";
import connectDB from './database/dbConnection.js';

dotenv.config({
    path:'./config/config.env'
})

connectDB();

app.listen(process.env.PORT, ()=>{
    console.log("Server started");
})