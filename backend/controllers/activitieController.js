import Activite from "../models/Activites.js"
import Booking from "../models/Booking.js";

export const showAllActivites = async (req, res) => {
    try {
      const activite = await Activite.find(); 
  
      if (!activite || activite.length === 0) {
        return res.status(404).json({ message: "No activities found" });
      }
  
      res.status(200).json(activite); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
};



export const postActivites= async(req,res)=>{
    try {
        const{ActiviteId,title, description,location, date,time}=req.body;

    if(!ActiviteId||!title||!description||!location||!date||!time){
        return res.status(400).json({ message: "All fields are required" });
    }

    const newActivite = new Activite ({ActiviteId,title, description,location, date,time });
        await newActivite.save();
     
    res.status(201).json({ message: "activite created successfully", activite: newActivite });    
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
    
}


export const bookActivity = async (req, res) => {
    try {
      const { userId, activiteId } = req.params;
  
      if (req.user.id !== userId) {
        return res.status(403).json({ message: "Unauthorized to book this activity" });
      }
  
      const booking = new Booking({
        user: userId,
        activite: activiteId,
      });
  
      await booking.save();
  
      res.status(201).json({ message: "Activity booked successfully", booking });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to book activity" });
    }
  };
  
  

  export const bookedActivity = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const activitebooked = await Booking.find({ user: userId }).populate('activite');
  
      if (!activitebooked || activitebooked.length === 0) {
        return res.status(404).json({ message: "No activities booked" });
      }
  
      res.status(200).json(activitebooked); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  