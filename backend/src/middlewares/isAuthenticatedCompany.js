import { CompanyProfile } from "../models/company_profile.model.js";
import jwt from "jsonwebtoken";

export const isAuthenticatedCompany = async(req, res, next) => {
  const user = req.user;
  // const authHeader = req.headers['authorization'];
  // if(!authHeader){
  //   return res.status(403).json({message : "there is no auth header"});
  // }
  // const jwtToken = authHeader.split(' ')[1];
  // if(!jwtToken){
  //   return res.status(403).json({message : "there is no jwt token"});
  // }
  try {
    // const user = jwt.verify(jwtToken, process.env.JWT_SECRET,{})
    const companyId = user.companyId;
    if(!companyId){
        return res.status(403).json({message : "User is not allowed"})
    }
    const companyProfileDoc = await CompanyProfile.findOne({companyId});
    if(!companyProfileDoc){
        return res.status(403).json({message : "Create a profile"})
    }
    const parts = req.originalUrl.split("/");
    const jobId = parts[3];
    console.log({companyId,companyProfileDoc, jobId, parts})
    if(!companyProfileDoc.jobProfiles.includes(jobId)){
        return res.status(403).json({message : "Your company is not authenticated to access this"})
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server error" });
  }
};
