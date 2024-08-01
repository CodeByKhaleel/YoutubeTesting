import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:"./env"
})
 
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    })
    app.on("error",(error)=>{
        throw error
    })
})
.catch((e)=>{
    console.log(`MONGODB Connection Failed!! ${e}`)
})
/*
import express from "express"
const app = express()
;( async ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log("listening on 8000")
        })
    } catch (error) {
        console.error(error)
        throw error
    }
})()
    */