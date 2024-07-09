import mongoose from "mongoose";

const UserProfileSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  username : {type : String,required : true} ,
  education: [
    {
      collegeName: { type: String, required: true },
      startYear: {
        month: Number,
        year: Number,
      },
      graduationYear: {
        month: Number,
        year: Number,
      },
      degreeName: { type: String, required: true },
      major: { type: String, required: true },
      minor: [{ type: String }],
    },
  ],
  mobileNumber : [{type : String}],
  alternateEmail : {type : String},
  pronouns : [{type : String}],
  tagline : {type: String},
  aboutMe : {type : String},
  socialLinks : [{type : String}],
  resumeLink : {type : String , required : true}
});

export const UserProfile = mongoose.model("user_profile", UserProfileSchema);
