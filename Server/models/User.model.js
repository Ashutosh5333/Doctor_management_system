const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    image:{
        type:String,
    },
    role:{type:String,default:"user"},
   
})

const Usermodel = mongoose.model("user",UserSchema)

module.exports ={Usermodel}