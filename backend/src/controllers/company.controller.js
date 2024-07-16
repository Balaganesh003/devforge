import { Company } from "../models/company.model";
import { signJWT } from "./user.controller";

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
            comapnyName : result.companyName,
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

