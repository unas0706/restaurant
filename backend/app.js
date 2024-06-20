import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import errorMiddleware from "./error/errorMiddleware.js";
import reservationRouter from "./router/reservationRouter.js";

dotenv.config({
    path:'./config/config.env'
})

let app = express();

app.use(express.json());

app.use(reservationRouter)

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));    

app.use(errorMiddleware)

export default app