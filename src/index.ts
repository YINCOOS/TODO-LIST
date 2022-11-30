import express from "express"
import logger from "morgan"
import mongoose from "mongoose"; 
import todoRouter from "./routes/todoRoutes";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose.connect(process.env.DATABASE_URL!, ()=>{
    console.log("Database connected successfully");
})







app.use(express.json())
app.use(logger("dev"))
app.use('/', todoRouter)
// app.use('/',)

const Port = 4000;

app.listen(Port, ()=>{
    console.log(`server is running on port ${Port}`);
})
