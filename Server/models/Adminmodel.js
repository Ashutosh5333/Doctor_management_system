const mongoose = require("mongoose")



   const  AdminSchema =  mongoose.Schema({
             email:String,
             password:String

   })

    const AdminModel = mongoose.model("admin",AdminSchema)

     module.exports={AdminModel}