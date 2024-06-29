import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    firstName : {type : String,required : true},
    lastName : {type : String,required : true},
    email : {type : String,unique : true,required : true},
    password : {type : String,required : true},
    isVerified : {type : Boolean,default : 0}
})

export const User = mongoose.model('users',UserSchema)