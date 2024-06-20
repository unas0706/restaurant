import mongoose, { Mongoose } from "mongoose";
import validator from "validator";

let ReservationSchema = new mongoose.Schema({
    firstName: {
        type: "string",   
        required: true     
    },
    lastName: {
        type: "string",
        required: true
    },
    Email: {
        type: "String",
        required: true,
        validate: [validator.isEmail, "Please enter proper mail"]
    },
    Date: {
        type: "Date",
        required: true
    },
    Time: {
        type: "String",
        required: true
    }
})

export const reservationModel = mongoose.model("Reservation", ReservationSchema)