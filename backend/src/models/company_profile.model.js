import mongoose from "mongoose";

const CompanyProfileSchema = mongoose.Schema({
  companyId : {type : mongoose.Schema.ObjectId,ref : 'company'},
  mobileNumber : [{type : String}],
  alternateEmail : {type : String},
  jobProfiles : [{type: mongoose.Schema.ObjectId,ref : 'job_profiles'}],
  tagline : {type: String},
  aboutCompany : {type : String},
  socialLinks : [{type : String}]
});

export const CompanyProfile = mongoose.model("company_profiles", CompanyProfileSchema);
