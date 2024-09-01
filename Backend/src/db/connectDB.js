import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

async function connectDB(){
    // console.log(process.env.MONGO_URI)

    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log("Connected to the DB")
    }catch(error){
        console.log(`Error while connecting to the Database , Error : ${error}`)
    }
}

export {connectDB}