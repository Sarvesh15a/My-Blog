import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from '../api/routes/user.route.js'
import authRoute from '../api/routes/auth.routh.js'
import cookieParser from 'cookie-parser'

dotenv.config();

const app= express();
  app.use(express.json());
 
  
//Database Connection

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Mangodb Connect")
})
.catch((err)=>{
    console.log(err)
})


app.listen(3000,()=>{
    console.log("Server is runing on port : 3000")
})
app.use(cookieParser());



app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)


// add middelware for handlening error

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode ||500
    const message=err.message || "Internal Server Error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});