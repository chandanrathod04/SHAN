import mongoose from "mongoose";

const connectDB = ()=>{
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useUnifiedTopology:true,
    });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, 'connection error'));
    db.once("open", ()=>{
        console.log("connected to database");
    })
}

export default connectDB;