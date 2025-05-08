import express from "express";
import{RegUser,Login} from "../controllers/authController.js"

const Routes=express.Router();

Routes.post("/registeruser",RegUser)
Routes.post("/loginuser",Login)





export default Routes;