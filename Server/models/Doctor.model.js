const mongoose = require("mongoose")

const DoctorSchema = mongoose.Schema({
    pic:String,
    consultant:String,
     name:String,
     About:String
})

const  DoctorModel = mongoose.model(("doctor") ,DoctorSchema )

module.exports={
     DoctorModel
}