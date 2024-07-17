import { CompanyProfile } from "../models/company_profile.model.js";
import { Job } from "../models/job.model.js";

export const createJob = async (req, res) => {
  const user = req.user;
  const {
    jobName,
    jobDesc,
    jobType,
    recommendedSkills,
    appliedCandidates,
    salaryRange,
  } = req.body;
  try {
    const companyProfile = await CompanyProfile.findOne({
      companyId: user.companyId,
    });
    if (!companyProfile) {
      return res.status(403).json({message: "Please complete company profile to create a job posting",});
    }
    const newJob = await Job.create({
      companyId: user.companyId,
      companyName: user.companyName,
      companyProfileId: companyProfile._id,
      jobName,
      jobDesc,
      jobType,
      recommendedSkills,
      appliedCandidates,
      salaryRange,
    });
    return res.status(200).json({message : "Job created", newJob} )
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllJobs = async(req,res)=>{
    try{
        const allJobs = await Job.find();
        return res.status(200).json({allJobs, message : "Successfully recieved all the jobs"})
    }catch(err){
        console.log(err);
        return res.status(500).json({message : "Internal server error"});
    }
}

export const getJobById = async(req,res)=>{
    const {id} = req.params
    try{
        const jobDoc = await Job.findById(id);
        return res.status(200).json({jobDoc, message : "Successfully recieved the job"})
    }catch(err){
        console.log(err);
        return res.status(500).json({message : "Internal server error"});
    }
}