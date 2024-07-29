import { config } from "dotenv";
import jwt from 'jsonwebtoken'
config();

export const verifyJwtByBearer = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ message: "there is no auth header" });
  }
  const jwtToken = authHeader.split(" ")[1];
  if (!jwtToken) {
    return res.status(403).json({ message: "there is no jwt token" });
  }
  try {
    const user = jwt.verify(jwtToken, process.env.JWT_SECRET, {});
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({message : "internal error"})
  }
};
