import { UserProfile } from "../models/user_profile.model.js";

export const createUserProfile = async (req, res) => {
  const user = req.user;
  const {
    username,
    education,
    mobileNumber,
    alternateEmail,
    pronouns,
    tagline,
    aboutMe,
    socialLinks,
    resumeLink,
  } = req.body;
  try {
    const existingProfile = await UserProfile.findOne({userId : user.userId});
    if(existingProfile){
      return res.json({message : "User profile already exists for user"});
    }
    const newUserProfile = await UserProfile.create({
      userId: user.userId,
      username,
      education,
      mobileNumber,
      alternateEmail,
      pronouns,
      tagline,
      aboutMe,
      socialLinks,
      resumeLink,
    });
    res.status(201).json({ message: "User profile created", newUserProfile });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUserProfile = async(req,res)=>{
    const userId = req.user.userId;
    try{
      const userProfile = await UserProfile.findOne({userId});
      if(!userProfile){
        return res.status(404).json({message : "No profile created for the user"})
      }
      res.status(201).json({userProfile});
    }catch(err){
        console.log(err);
        return res.status(500).json({message : ""})
    }
}