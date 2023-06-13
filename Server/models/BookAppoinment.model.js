const mongoose = require("mongoose")

const AppoinmentSchema = mongoose.Schema({
        name:String,
        email:String,
        Doctor:String,
        Mobile:String,
        Date:String,
        userId:String
})

const  AppointmentModel = mongoose.model(("bookappointment") ,AppoinmentSchema )

 module.exports={
    AppointmentModel
 }