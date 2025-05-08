import express from "express";
import {showAllActivites,postActivites,bookActivity,bookedActivity} from "../controllers/activitieController.js"
import { authenticateUser } from "../middleware/authMiddleware.js";

const activiteRoutes=express.Router();

activiteRoutes.get("/getactivities",showAllActivites);
activiteRoutes.post("/postactivities",postActivites);
activiteRoutes.post("/bookactivities/:userId/:activiteId",authenticateUser, bookActivity);
activiteRoutes.get("/bookedactivities/:userId/",bookedActivity);





export default activiteRoutes