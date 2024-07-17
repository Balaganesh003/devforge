import mongoose from "mongoose";


const JobSchema = mongoose.Schema({
    companyId : {type : mongoose.Schema.ObjectId, ref : "company"},
    companyName : {type : String , required : true},
    companyProfileId : {type : mongoose.Schema.ObjectId, ref : "company_profiles"} ,
    jobName : {type : String,required : true},
    jobDesc : {type : String,required : true},
    jobType : {type : String,required : true},
    recommendedSkills : [{type : String}],
    appliedCandidates : [{type : mongoose.Schema.ObjectId,ref : 'user_profiles'}],
    salaryRange : {type: String,required:true}
});

export const Job = mongoose.model('job',JobSchema)