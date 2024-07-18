import { CompanyProfile } from "../models/company_profile.model.js";

export const isAuthenticatedCompany = async(req, res, next) => {
  const user = req.user;
  try {
    const companyId = user.companyId;
    if(!companyId){
        return res.status(403).json({message : "User is not allowed"})
    }
    const companyProfileDoc = await CompanyProfile.findOne({companyId});
    if(!companyProfileDoc){
        return res.status(403).json({message : "Create a profile"})
    }
    const parts = req.originalUrl.split("/");
    const jobId = parts[2];
    if(!companyProfileDoc.jobProfiles.includes(jobId)){
        return res.status(403).json({message : "Your company is not authenticated to access this"})
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server error" });
  }
};
