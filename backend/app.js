import express from "express";
import cors from "cors"
import dotenv from "dotenv";

dotenv.config({
    path:'./config/config.env'
})

let app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());

export default app