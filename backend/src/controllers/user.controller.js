import { User } from "../models/user.model.js";
import {sendVerificationEmail} from "../utils/sendVerificationEmail.js";
import bcrypt from 'bcryptjs'

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  User.find({ email }).then((res) => {
    if (res.length) {
      res
        .status(409)
        .json({ status: "failed", message: "User already exists" });
    }
  });
  const hashedPassword = await bcrypt.hash(password,10);
  const newUser = new User({
    firstName,
    lastName,
    email,
    password : hashedPassword,
  });
  await newUser
    .save()
    .then((result) => {
      sendVerificationEmail(result, res);
      res.json({ message: "User created ", result });
    })
    .catch((err) => {
      console.log(err);
      res.json({ err, message: "Error while creating new User" });
    });
};

export { createUser };
