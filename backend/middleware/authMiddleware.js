import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
  console.log(req.headers)
  const authHeader = req.headers.token;
  
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
    console.log(decoded)
    req.user = { id: decoded.id }; 
    next();
  } catch (error) {
    console.error("JWT error:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};
