import Userdata from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const RegUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      console.log("User data is missing");
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await Userdata.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Userdata({ username, email, password:hashedPassword });
    await newUser.save();

    
    const token = jwt.sign(
      { id: existingUser._id, name:existingUser.name, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );
    console.log(token,"token");

    res.status(201).json({ message: "User created successfully", user: newUser,token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const Login=async(req,res)=>{
  try {
      const{email,password}=req.body;
      console.log(email,password);
      
      if(!email||!password){
          return res.status(400).json({ message: "All fields are required" });
      }

      const existingUser = await Userdata.findOne({ email });
      console.log(existingUser);
      
      if (!existingUser) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      const token = jwt.sign(
        { id: existingUser._id, name:existingUser.username, email: existingUser.email },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
      );
      console.log(token,"token");
  

      res.status(200).json({ message: "User logged in successfully",token});
      


  } catch (error) {
      
  }
  
} 




