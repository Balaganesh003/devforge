import mongoose from 'mongoose'

const CompanySchema = mongoose.Schema({
    companyName : {type : String,unique : true,required : true},
    email : {type : String,unique : true,required : true},
    password : {type : String,required : true},
    isVerified : {type : Boolean,default : 0}
})

export const Company = mongoose.model('company',CompanySchema)