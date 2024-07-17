import { CompanyProfile } from "../models/company_profile.model.js";

export const createCompanyProfile = async (req, res) => {
  const user = req.user;
  const {
    mobileNumber,
    alternateEmail,
    jobProfiles,
    tagline,
    aboutCompany,
    socialLinks,
  } = req.body;
  try {
    const existingProfile = await CompanyProfile.findOne({
      companyId: user.companyId,
    });
    if (existingProfile) {
      return res.json({ message: "company profile already exists for user" });
    }
    const newCompanyProfile = await CompanyProfile.create({
      companyId: user.companyId,
      mobileNumber,
      alternateEmail,
      jobProfiles,
      tagline,
      aboutCompany,
      socialLinks,
    });
    res.status(201).json({ message: "Company profile created", newCompanyProfile });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getCompanyProfile = async(req,res)=>{
    const {companyId} = req.user;
    try{
      const companyProfile = await CompanyProfile.findOne({companyId});
      if(!companyProfile){
        return res.status(404).json({message : "No profile created for the company"})
      }
      res.status(201).json({companyProfile});
    }catch(err){
        console.log(err);
        return res.status(500).json({message : "internal error"})
    }
}