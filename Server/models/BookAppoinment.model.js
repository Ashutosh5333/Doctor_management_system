const mongoose = require("mongoose")

const AppoinmentSchema = mongoose.Schema({
        pateintname:String,
        email:String,
        Doctor:String,
        Mobile:String,
        Date:String,
        userId:String,
        Status: {type:String ,default:"Registered" },
        bookedby:{type:mongoose.Types.ObjectId,ref:"user",required:true}
},{
        timestamps:true
}
)

const  AppointmentModel = mongoose.model(("bookappointment") ,AppoinmentSchema )

 module.exports={
    AppointmentModel
 }