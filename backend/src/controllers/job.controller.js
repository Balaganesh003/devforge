import { CompanyProfile } from "../models/company_profile.model.js";
import { Job } from "../models/job.model.js";
import { User } from "../models/user.model.js";
import { UserProfile } from "../models/user_profile.model.js";
import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to a path and get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname,"../../")

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
      return res
        .status(403)
        .json({
          message: "Please complete company profile to create a job posting",
        });
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
    await CompanyProfile.findOneAndUpdate(
      { _id: companyProfile._id },
      {
        $push: {
          jobProfiles: newJob._id,
        },
      }
    );
    return res.status(200).json({ message: "Job created", newJob });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
    return res
      .status(200)
      .json({ allJobs, message: "Successfully recieved all the jobs" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getJobById = async (req, res) => {
  const { id } = req.params;
  try {
    const jobDoc = await Job.findById(id);
    return res
      .status(200)
      .json({ jobDoc, message: "Successfully recieved the job" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const applyForJob = async (req, res) => {
  const user = req.user;
  const { jobId } = req.body;
  if (!user.userId) {
    return res.status(403).json({ message: "You cannot apply" });
  }
  try {
    const userDoc = await User.findById(user.userId);
    if (!userDoc) {
      return res.status(403).json({ message: "You are not authenticated" });
    }
    const userProfileDoc = await UserProfile.findOne({ userId: user.userId });
    if (!userProfileDoc) {
      return res
        .status(403)
        .json({ message: "Create a profile to apply for jobs" });
    }
    if(userProfileDoc.appliedJobs.includes(jobId)){
      return res.status(403).json({message : "You have already applied for the job"});
    }
    await Job.findOneAndUpdate(
      { _id: jobId },
      {
        $push: {
          appliedCandidates: userProfileDoc._id,
        },
      }
    );
    await UserProfile.findOneAndUpdate(
      { _id: userProfileDoc._id },
      {
        $push: {
          appliedJobs: jobId,
        },
      }
    );
    return res.status(200).json({ message: "You have applied for the job" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// export const getUserProfilesByJobId = async(req,res)=>{
// 	const {jobId} = req.params;
// 	const user = req.user;
// 	try{
// 		const companyId = user.companyId;
// 		const companyDoc = await CompanyProfile.findOne({companyId});
//     if(!companyDoc){
//       return res.status(403).json({message : "Please create a profile"});
//     }
// 		if(companyDoc.jobProfiles.length==0 ||!companyDoc.jobProfiles.includes(jobId)){
// 			return res.status(403).json({message : "This is not your company's job profile"});
// 		}
// 		const jobDoc = await Job.findById(jobId);
// 		const userProfileIdArr = jobDoc.appliedCandidates
//     const userProfileDocs = await Promise.all(userProfileIdArr.map(id => UserProfile.findById(id)));
// 		return res.status(200).json({message : "success" , userProfileDocs});
// 	}catch(err){
// 		console.log(err);
// 		return res.status(500).json({message : "internal server error"});
// 	}
// }

export const getUserProfilesByJobId = async (req, res) => {
  const { jobId } = req.params;
  const user = req.user;
  try {
    const companyId = user.companyId;
    const companyDoc = await CompanyProfile.findOne({ companyId });
    if (!companyDoc) {
      return res.status(403).json({ message: "Please create a profile" });
    }
    if (
      companyDoc.jobProfiles.length == 0 ||
      !companyDoc.jobProfiles.includes(jobId)
    ) {
      return res
        .status(403)
        .json({ message: "This is not your company's job profile" });
    }
    const jobDoc = await Job.findById(jobId);
    const userProfileIdArr = jobDoc.appliedCandidates;
    const userProfileDocs = await Promise.all(
      userProfileIdArr.map((id) => UserProfile.findById(id))
    );
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("User Profiles");

    // Add columns to the worksheet
    worksheet.columns = [
      { header: "User ID", key: "userId", width: 30 },
      { header: "Username", key: "username", width: 30 },
      { header: "Mobile Number", key: "mobileNumber", width: 30 },
      { header: "Alternate Email", key: "alternateEmail", width: 30 },
      { header: "Pronouns", key: "pronouns", width: 30 },
      { header: "Tagline", key: "tagline", width: 30 },
      { header: "About Me", key: "aboutMe", width: 30 },
      { header: "Social Links", key: "socialLinks", width: 30 },
      { header: "Resume Link", key: "resumeLink", width: 30 },
      { header: "Education", key: "education", width: 50 },
      // Add other fields as necessary
    ];

    // Add rows to the worksheet
    userProfileDocs.forEach((profile) => {
      worksheet.addRow({
        userId: profile.userId,
        username: profile.username,
        mobileNumber: profile.mobileNumber.join(", "),
        alternateEmail: profile.alternateEmail,
        pronouns: profile.pronouns.join(", "),
        tagline: profile.tagline,
        aboutMe: profile.aboutMe,
        socialLinks: profile.socialLinks.join(", "),
        resumeLink: profile.resumeLink,
        education: profile.education
          .map(
            (edu) =>
              `College: ${edu.collegeName}, Degree: ${edu.degreeName}, Major: ${edu.major}, Start Year: ${edu.startYear.year}-${edu.startYear.month}, Graduation Year: ${edu.graduationYear.year}-${edu.graduationYear.month}`
          )
          .join("; "),
      });
    });

    // Create a folder named after the jobId
    const dirPath = path.join(rootDir, "exports", jobId);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Save the Excel file to the created folder
    const filePath = path.join(dirPath, "userProfiles.xlsx");
    await workbook.xlsx.writeFile(filePath);

    res.status(200).json({ message: `File saved successfully at ${filePath}` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "internal server error" });
  }
};
