import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Lalithra:1234@cluster0.zttxarv.mongodb.net/food-del');
    console.log("DB Connected");
}