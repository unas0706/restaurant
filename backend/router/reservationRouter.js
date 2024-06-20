import express from "express";
import { reservationController } from '../controller/reservationController.js'

let reservationRouter = express.Router()

// reservationRouter.get('')

reservationRouter.post('/send', reservationController)

export default reservationRouter