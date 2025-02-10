import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/todo.routes.js";


dotenv.config();
const app=express();
const port=process.env.PORT||4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/todo",router);

app.use("*",(req,res,next)=>{
    res.send("No route exits");
    next();
});

app.listen(port,()=>{
    console.log("Server is running");
});