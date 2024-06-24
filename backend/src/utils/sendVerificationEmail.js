import { Verification } from "../models/verification.model.js";
import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs'

export const sendVerificationEmail = async (result, res) => {
  const otp = Math.floor(Math.random() * 900000 + 100000);
  console.log(otp);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "destrobroxd@gmail.com",
      pass: "eidueterapxflbfe",
    },
  });

  const mailOptions = {
    from: "destrobroxd@gmail.com",
    to: result.email,
    subject: "Verification Code for DevForge",
    html: `<p>Your Verification code for DevForge is <b>${otp}</b>.It will expire in 60 mins</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  const hashedOtp = await bcrypt.hash(otp.toString(),10);

  const newVeri = Verification({
    userId: result._id,
    otp : hashedOtp,
  });
  await newVeri.save().catch((err) => {
    console.log(err);
  });
};
