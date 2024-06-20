const errorMiddleware = (err, req, res, next)=>{
    res.status(err.statusCode|| 500).json({
        sucess: false,
        message: err.message || "Internal Server Error"
    })
}

export default errorMiddleware