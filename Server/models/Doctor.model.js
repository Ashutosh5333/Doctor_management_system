const mongoose = require("mongoose")

const DoctorSchema = mongoose.Schema({
     pic:String,
     consultant:String,
     name:String,
     About:String,
     userId:String,
     bookedby:{type:mongoose.Types.ObjectId,ref:"user",required:true},
     comments: [{ type: mongoose.Types.ObjectId, ref: "comment", default: [] }],
})

const  DoctorModel = mongoose.model(("doctor") ,DoctorSchema )

module.exports={
     DoctorModel
}