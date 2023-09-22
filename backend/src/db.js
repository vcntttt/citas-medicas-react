import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
    try{
        const connectionString = process.env.MONGO_URI
        await mongoose.connect(connectionString);
        console.log("DB Connected");
    } catch(error){
        console.log(error);
    }
}
export default connectDB