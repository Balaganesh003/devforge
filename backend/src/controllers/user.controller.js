import { User } from "../models/user.model.js";
import { sendVerificationEmail } from "../utils/sendVerificationEmail.js";
import  {Verification}  from "../models/verification.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "dotenv";



config();

const signJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {});
};

// const verifyJWT = (token) => {
//   try {
//     return jwt.verify(token, process.env.JWT_SECRET,{});
//   } catch (err) {
//     console.error('JWT verification failed:', err);
//     return null; // Or handle the error as needed
//   }
// };

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "This email has already been registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    const result = await newUser.save();
    sendVerificationEmail(result, res);
    const token = signJWT({
      userId: result._id,
      firstName: result.firstName,
      lastName: result.lastName,
      userEmail: result.email,
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'none',
    });
    return res.json({ message: "User created ", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error while creating user" });
  }
};

const verifyUser = async (req, res) => {
  const { otp } = req.body;
  const user = req.user;
  if(!user){
    return res.status(403).json({message : "JWT token error"});
  }
  const verificationDoc = await Verification.findOne({userId : user.userId});
  const isOtpCorrect = bcrypt.compareSync(otp,verificationDoc.otp);
  if(!isOtpCorrect){
    return res.status(403).json({message : "Incorrect OTP"})
  }
  console.log(verificationDoc.expiryTime,Date.now())
  if(Date.now()>verificationDoc.expiryTime){
    return res.json({message : "OTP timed out"})
  }
  await Verification.deleteOne({_id : verificationDoc._id});
  const userDoc = await User.findById({_id : user.userId});
  userDoc.isVerified = 1;
  await userDoc.save();
  return res.json({message : "Verified"});
};

export { createUser, verifyUser };
