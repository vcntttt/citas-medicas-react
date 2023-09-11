import mongoose from "mongoose";

const connectDB = async () => {
    try{
await mongoose.connect("mongodb+srv://vicente:gI4Xk4jLuVb2zWWP@reservatudb.w4zrctu.mongodb.net/");
        console.log("DB Connected");
    } catch(error){
        console.log(error);
    }
}
export default connectDB