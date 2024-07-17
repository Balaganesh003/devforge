import { User } from "../models/user.model.js";
import { sendVerificationEmail } from "../utils/sendVerificationEmail.js";
import { Verification } from "../models/verification.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export const signJWT = (payload) => {
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
    const otp = Math.floor(Math.random() * 900000 + 100000);
    const emailBody = `<p>Your Verification code for DevForge is <b>${otp}</b>.It will expire in 60 mins</p>`;
    const emailSubject = "Verification Code for DevForge";
    sendVerificationEmail(result, res, emailBody, emailSubject);
    const hashedOtp = await bcrypt.hash(otp.toString(), 10);

    const existingDoc = await Verification.findOne({ userId: result._id });
    if (existingDoc) {
      await Verification.deleteOne({ userId: result._id });
    }

    const newVeri = Verification({
      userId: result._id,
      otp: hashedOtp,
    });
    await newVeri.save().catch((err) => {
      console.log(err);
    });
    const token = signJWT({
      userId: result._id,
      firstName: result.firstName,
      lastName: result.lastName,
      userEmail: result.email,
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
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
  if (!user) {
    return res.status(403).json({ message: "JWT token error" });
  }
  const verificationDoc = await Verification.findOne({ userId: user.userId });
  const isOtpCorrect = bcrypt.compareSync(otp, verificationDoc.otp);
  if (!isOtpCorrect) {
    return res.status(403).json({ message: "Incorrect OTP" });
  }
  if (Date.now() > verificationDoc.expiryTime) {
    return res.json({ message: "OTP timed out" });
  }
  await Verification.deleteOne({ _id: verificationDoc._id });
  const userDoc = await User.findById({ _id: user.userId });
  userDoc.isVerified = 1;
  await userDoc.save();
  return res.json({ message: "Verified" });
};

const resendVerificationMail = async (req, res) => {
  const user = req.user;
  const verificationDoc = await Verification.findOne({ userId: user.userId });
  if (!verificationDoc) {
    return res.json({ message: "User has already been verified" });
  }
  await Verification.deleteOne({ _id: verificationDoc._id });
  const userDoc = await User.findById({ _id: user.userId });
  if (!userDoc) {
    return res.json({ message: "user Document is not in DB" });
  }
  sendVerificationEmail(userDoc, res);
  return res.json({ message: "verification email has been resent" });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (!userDoc) {
    return res.status(404).json({ message: "No user by that email" });
  }
  const isAuthenticated = bcrypt.compareSync(password, userDoc.password);
  if (!isAuthenticated) {
    return res.status(403).json({ message: "User is not authenticated" });
  }
  const token = signJWT({
    userId: userDoc._id,
    firstName: userDoc.firstName,
    lastName: userDoc.lastName,
    userEmail: userDoc.email,
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
  });
  return res.json({ message: "User logged in", userDoc });
};

const logout = (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: false,
    sameSite: "none",
  });
  res.status(200).json({ message: "Logged out successfully" });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(409).json({ message: "The email is not registered" });
    }
    const token = signJWT({
      userId: existingUser._id,
    });
    const emailBody = `http://localhost:8081/api/user/resetPassword/${existingUser._id}/${token}`;
    const emailSubject = "Link to reset password";
    await sendVerificationEmail(existingUser, res, emailBody, emailSubject);
    return res.json({ message: "verification email has been sent" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error", err });
  }
};

const resetPassword = async (req, res) => {
  const { userId, token } = req.params;
  const { newPassword } = req.body;
  try {
    const userDoc = await User.findById(userId);
    if (!userDoc) {
      return res.status(403).json({ message: "No userId exists" });
    }
    let jwtBody;
    try {
      jwtBody = jwt.verify(token, process.env.JWT_SECRET, {});
    } catch (err) {
      console.log(err);
      return res.status(403).json({ message: "error verifying jwt" });
    }
    if (jwtBody.userId != userId) {
      return res.status(403).json({ message: "error with jwt" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    userDoc.password = hashedPassword;
    await userDoc.save();
    return res.status(200).json({ message: "User password changed" });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error", err });
  }
};

export {
  createUser,
  verifyUser,
  resendVerificationMail,
  login,
  logout,
  forgotPassword,
  resetPassword,
};
