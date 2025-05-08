import express from "express";
import DotENV from "dotenv";
import Routes from "./routes/authRoute.js"
import ActiviteRoutes from "./routes/activitieRoute.js";
import connectDB from "./db/configueDb.js";

const app=express();
DotENV.config();
connectDB();

const Port=process.env.Port
app.use(express.json())

app.use("/",Routes);
app.use("/",ActiviteRoutes);

app.listen(Port, ()=>{
    console.log(`server is running on ${Port}`)
})