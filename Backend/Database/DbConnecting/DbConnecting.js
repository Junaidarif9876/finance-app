import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const DbConnecting = async()=>{
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("db Connected successfully");
    } catch (error) {
        console.log("db not Connected");
    }
}

export default DbConnecting;