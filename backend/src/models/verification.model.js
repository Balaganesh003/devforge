import mongoose from "mongoose";

const VerificationSchema = mongoose.Schema({
    userId : {type : mongoose.Schema.ObjectId,ref: 'users',required : true},
    otp : {type : String,required : true},
    expiryTime : {type : Date,default : Date.now()+360000}
})

export const Verification = mongoose.model('Verification',VerificationSchema); 