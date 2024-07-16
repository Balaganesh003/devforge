import mongoose from "mongoose";

const VerificationSchema = mongoose.Schema({
    userId : {type : mongoose.Schema.ObjectId,ref: 'users',required : true},
    otp : {type : String,required : true},
    expiryTime : {type : Date,default : Date.now()+ 3_600_000}
})

export const Verification = mongoose.model('verifications',VerificationSchema); 