import { Company } from "../models/company.model.js";
import { signJWT } from "./user.controller.js";
import bcrypt from "bcryptjs";


export const createCompany = async(req,res)=>{
    const {companyName,email,password} = req.body;
    try{
        const existingCompany = await Company.findOne({email});
        if(existingCompany){
            return res.status(409).json({message : "The email already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newCompany = new Company({
            companyName,
            email,
            password : hashedPassword
        });
        const result = await newCompany.save();
        // sendVerificationEmail(result, res);
        const token = signJWT({
            companyId: result._id,
            companyName : result.companyName,
            companyEmail: result.email,
        });
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'none',
        });
        return res.json({ message: "User created ", result });
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Error while creating user" });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const companyDoc = await Company.findOne({ email });
    if (!companyDoc) {
      return res.status(404).json({ message: "No company by that email" });
    }
    const isAuthenticated = bcrypt.compareSync(password, companyDoc.password);
    if (!isAuthenticated) {
      return res.status(403).json({ message: "company is not authenticated" });
    }
    const token = signJWT({
      companyId: companyDoc._id,
      companyName : companyDoc.companyName,
      companyEmail: companyDoc.email,
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
    });
    return res.json({ message: "company logged in", companyDoc });
  };
