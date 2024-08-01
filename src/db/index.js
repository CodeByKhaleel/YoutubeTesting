import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected DB Host:${connectionInstance.connection.host}`)
        console.log(`CONNECTION-INSTANCE ----------------${connectionInstance}`)
    } catch (error) {
        console.log("MONGODB connection error",error)
        process.exit(1)
    }
}

export default connectDB //common way
// export {connectDB} Both ways are correct