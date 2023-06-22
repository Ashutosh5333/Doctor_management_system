const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const DoctorSchema = Schema({
     pic:String,
     consultant:String,
     name:String,
     About:String,
     userId:String,
     bookedby:{type:Schema.Types.ObjectId,ref:"user",required:true},
     comments: [{ type: Schema.Types.ObjectId, ref: "comment", default: [],
     bookedby:{type:Schema.Types.ObjectId,ref:"user",required:true}
}],
commentby:{type:Schema.Types.ObjectId,ref:"user"},
})

const  DoctorModel = model(("doctor") ,DoctorSchema )

module.exports={
     DoctorModel
}