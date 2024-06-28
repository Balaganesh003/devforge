import { User } from "../models/user.model.js";
import {sendVerificationEmail} from "../utils/sendVerificationEmail.js";
import bcrypt from 'bcryptjs'

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try{
  const existingUser = await User.findOne({ email });
  if(existingUser){
    return res.status(409).json({message : "This email has already been registered"})
  }
  const hashedPassword = await bcrypt.hash(password,10);
  const newUser = new User({
    firstName,
    lastName,
    email,
    password : hashedPassword,
  });
  const result = await newUser.save()
  sendVerificationEmail(result,res);
  return res.json({ message: "User created ", result });
  }catch(err){
    console.log(err);
    return res.status(500).json({message : "Error while creating user"});
  }
};

export { createUser };
