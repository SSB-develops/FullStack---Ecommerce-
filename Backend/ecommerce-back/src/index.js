import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cartRoutes from "./routes/cartRoutes.js"

 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/api/cart",cartRoutes);
app.use("/api/cart",cartRoutes);

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Mongo connected");
    app.listen(process.env.PORT, ()=> console.log(`server is running on port ${process.env.PORT}`));
}).catch((err)=> console.log(err));
