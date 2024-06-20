import { reservationModel } from "../Model/ReservationModel.js";
import customError from "../error/customError.js";

export const reservationController = async(req, res, next)=>{
    try {
        let {firstName, LastName, Email, Date, Time} = req.body;
        if(!firstName&& !LastName && !Email && !Date && !Time) {
            return next(new customError("Please fill the form completly", 400))
        }
        await reservationModel.create(req.body)
        res.status(200).json({
            success: true,
            message: "Reservation sent sucessfull"
        })
    } catch (error) {
        if (error.message === "ValidationError") {
            error = new CustomError(error.message, 400)
        }
        return next(error)
    }
}